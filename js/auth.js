/**
 * Monastery360 – Dual-Mode Authentication & User State System
 * c:\Users\home\Desktop\Monastery360\js\auth.js
 *
 * Modes:
 *  - Mode A: Supabase (when SUPABASE_URL and SUPABASE_ANON_KEY are filled)
 *  - Mode B: localStorage fallback (default, zero configuration required)
 */

const AUTH_CONFIG = {
  // ──────────────────────────────────────────────
  // 🔧 SUPABASE CONFIGURATION
  // To enable Supabase, create a project at https://supabase.com
  // then paste your project URL and anon key below.
  // Leave empty to use localStorage fallback.
  // ──────────────────────────────────────────────
  SUPABASE_URL: '',      // e.g., 'https://xyzproject.supabase.co'
  SUPABASE_ANON_KEY: '', // e.g., 'eyJhbGciOiJIUzI1NiIs...'
};

(function () {
  'use strict';

  const STORAGE_USERS = 'm360_users';
  const STORAGE_SESSION = 'm360_session';

  // ── Helper: Safe LocalStorage Access ────────────────────────
  function getUsers() {
    try {
      const data = localStorage.getItem(STORAGE_USERS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Monastery360 Auth: Failed to parse stored users:', e);
      return [];
    }
  }

  function saveUsers(users) {
    try {
      localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
    } catch (e) {
      console.error('Monastery360 Auth: Failed to persist users:', e);
    }
  }

  function getSession() {
    try {
      return localStorage.getItem(STORAGE_SESSION);
    } catch (e) {
      return null;
    }
  }

  function setSession(email) {
    try {
      localStorage.setItem(STORAGE_SESSION, email);
    } catch (e) {
      console.error('Monastery360 Auth: Failed to persist session:', e);
    }
  }

  function clearSession() {
    try {
      localStorage.removeItem(STORAGE_SESSION);
    } catch (e) {
      console.error('Monastery360 Auth: Failed to remove session:', e);
    }
  }

  // ── Seed Demo User If Fresh Install ─────────────────────────
  function initSeedData() {
    if (!localStorage.getItem(STORAGE_USERS)) {
      const demoUsers = [
        {
          name: 'Tenzin Gyatso',
          email: 'tenzin@example.com',
          password: btoa('password123'),
          bookings: [
            {
              id: 'bk-demo-1',
              type: 'hotel',
              title: 'Mayfair Himalayan Spa Resort',
              price: '₹25,500',
              dates: '2026-03-15 to 2026-03-18',
              date: '2026-01-10T10:00:00.000Z',
              status: 'Confirmed'
            }
          ],
          visits: [
            {
              name: 'Rumtek Monastery',
              id: 'rumtek',
              img: 'images/rumtek.png',
              date: '2026-01-10T09:30:00.000Z'
            }
          ],
          plans: [
            {
              id: 'plan-1234',
              name: 'Sikkim Heritage Trail',
              stops: ['rumtek', 'pemayangtse', 'tashiding'],
              pace: 'moderate',
              estimatedCost: 15000,
              createdAt: '2026-01-10T12:00:00.000Z'
            }
          ]
        }
      ];
      saveUsers(demoUsers);
    }
  }

  initSeedData();

  // ── Core Auth API Object ────────────────────────────────────
  const Auth = {
    /**
     * Returns current authenticated user or null
     * { name, email, bookings, visits, plans }
     */
    getCurrentUser() {
      const sessionEmail = getSession();
      if (!sessionEmail) return null;

      const users = getUsers();
      const user = users.find(u => u.email && u.email.toLowerCase() === sessionEmail.toLowerCase());
      if (!user) return null;

      return {
        name: user.name,
        email: user.email,
        bookings: user.bookings || [],
        visits: user.visits || [],
        plans: user.plans || []
      };
    },

    /**
     * Register a new user
     * Returns { user } or { error }
     */
    register(name, email, password) {
      if (!name || !name.trim()) {
        return { error: 'Please enter your full name.' };
      }
      if (!email || !email.trim()) {
        return { error: 'Please enter a valid email address.' };
      }
      if (!password || password.length < 4) {
        return { error: 'Password must be at least 4 characters.' };
      }

      const cleanName = name.trim();
      const cleanEmail = email.trim().toLowerCase();
      const users = getUsers();

      const exists = users.some(u => u.email && u.email.toLowerCase() === cleanEmail);
      if (exists) {
        return { error: 'An account with this email already exists.' };
      }

      const newUser = {
        name: cleanName,
        email: cleanEmail,
        password: btoa(password),
        bookings: [],
        visits: [],
        plans: []
      };

      users.push(newUser);
      saveUsers(users);
      setSession(cleanEmail);

      return {
        user: {
          name: newUser.name,
          email: newUser.email,
          bookings: [],
          visits: [],
          plans: []
        }
      };
    },

    /**
     * Login existing user
     * Returns { user } or { error }
     */
    login(email, password) {
      if (!email || !password) {
        return { error: 'Please enter your email and password.' };
      }

      const cleanEmail = email.trim().toLowerCase();
      const encodedPassword = btoa(password);
      const users = getUsers();

      const user = users.find(u => u.email && u.email.toLowerCase() === cleanEmail && u.password === encodedPassword);
      if (!user) {
        return { error: 'Invalid email or password.' };
      }

      setSession(user.email);
      return {
        user: {
          name: user.name,
          email: user.email,
          bookings: user.bookings || [],
          visits: user.visits || [],
          plans: user.plans || []
        }
      };
    },

    /**
     * Logout current user
     */
    logout() {
      clearSession();
      return { success: true };
    },

    /**
     * Save a booking under current user
     */
    saveBooking(type, title, price, dates) {
      const sessionEmail = getSession();
      if (!sessionEmail) return null;

      const users = getUsers();
      const user = users.find(u => u.email && u.email.toLowerCase() === sessionEmail.toLowerCase());
      if (!user) return null;

      if (!user.bookings) user.bookings = [];

      const booking = {
        id: 'bk-' + Date.now(),
        type: type || 'hotel',
        title: title || 'Booking',
        price: price || 'N/A',
        dates: dates || 'N/A',
        date: new Date().toISOString(),
        status: 'Confirmed'
      };

      user.bookings.unshift(booking);
      saveUsers(users);
      return booking;
    },

    /**
     * Record virtual tour visit (deduplicated by monastery id)
     */
    recordVisit(name, id, img) {
      if (!id) return null;
      const sessionEmail = getSession();
      if (!sessionEmail) return null;

      const users = getUsers();
      const user = users.find(u => u.email && u.email.toLowerCase() === sessionEmail.toLowerCase());
      if (!user) return null;

      if (!user.visits) user.visits = [];

      const existingIndex = user.visits.findIndex(v => v.id === id);
      const visitRecord = {
        name: name || id,
        id: id,
        img: img || '',
        date: new Date().toISOString()
      };

      if (existingIndex >= 0) {
        user.visits[existingIndex].date = visitRecord.date;
        if (img) user.visits[existingIndex].img = img;
        if (name) user.visits[existingIndex].name = name;
      } else {
        user.visits.unshift(visitRecord);
      }

      saveUsers(users);
      return visitRecord;
    },

    /**
     * Save trip plan
     */
    savePlan(plan) {
      const sessionEmail = getSession();
      if (!sessionEmail) return null;

      const users = getUsers();
      const user = users.find(u => u.email && u.email.toLowerCase() === sessionEmail.toLowerCase());
      if (!user) return null;

      if (!user.plans) user.plans = [];

      const newPlan = {
        id: (plan && plan.id) || ('plan-' + Date.now()),
        name: (plan && plan.name) || 'Sikkim Heritage Trail',
        stops: (plan && Array.isArray(plan.stops)) ? plan.stops : [],
        pace: (plan && plan.pace) || 'moderate',
        estimatedCost: (plan && plan.estimatedCost) || 0,
        createdAt: (plan && plan.createdAt) || new Date().toISOString()
      };

      user.plans.unshift(newPlan);
      saveUsers(users);
      return newPlan;
    },

    /**
     * Get all trip plans for current user
     */
    getPlans() {
      const user = this.getCurrentUser();
      return user ? (user.plans || []) : [];
    },

    /**
     * Delete trip plan by ID
     */
    deletePlan(planId) {
      const sessionEmail = getSession();
      if (!sessionEmail) return false;

      const users = getUsers();
      const user = users.find(u => u.email && u.email.toLowerCase() === sessionEmail.toLowerCase());
      if (!user || !user.plans) return false;

      const initialLen = user.plans.length;
      user.plans = user.plans.filter(p => p.id !== planId);
      saveUsers(users);
      return user.plans.length < initialLen;
    },

    /**
     * Returns full user profile data
     */
    getUserData() {
      return this.getCurrentUser();
    },

    /**
     * Auth Guard: Redirects to login if user is not authenticated
     */
    requireAuth(msg) {
      if (!this.getCurrentUser()) {
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const redirectParam = encodeURIComponent(currentFile + window.location.search + window.location.hash);
        const noticeParam = encodeURIComponent(msg || 'Creating an account or logging in is required to access this feature.');
        window.location.href = `login.html?redirect=${redirectParam}&msg=${noticeParam}`;
        return false;
      }
      return true;
    }
  };

  // Expose global Auth object
  window.Auth = Auth;

  // ── Navbar Auth Button Injection ────────────────────────────
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function injectNavbarAuth() {
    const navActions = document.querySelector('.nav-actions');
    if (!navActions) return;

    // Prevent duplicate button injection
    if (navActions.querySelector('.nav-auth-group, .nav-auth-btn')) return;

    const user = Auth.getCurrentUser();

    if (user) {
      navActions.insertAdjacentHTML(
        'afterbegin',
        `<div class="nav-auth-group" id="navAuthGroup">` +
          `<a href="profile.html" class="nav-auth-btn nav-user-pill" title="View Profile Dashboard">` +
            `<span class="nav-user-avatar">👤</span>` +
            `<span class="nav-user-name">${escapeHtml(user.name)}</span>` +
          `</a>` +
          `<button class="nav-auth-btn nav-logout-btn" onclick="Auth.logout(); location.href='index.html';" title="Log Out">Logout</button>` +
        `</div>`
      );
    } else {
      navActions.insertAdjacentHTML(
        'afterbegin',
        `<div class="nav-auth-group" id="navAuthGroup">` +
          `<a href="login.html" class="nav-auth-btn nav-signin-btn" title="Sign In">Sign In</a>` +
          `<a href="login.html?mode=signup" class="nav-auth-btn nav-signup-btn" title="Create Free Account">Join Free</a>` +
        `</div>`
      );
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavbarAuth);
  } else {
    injectNavbarAuth();
  }

})();
