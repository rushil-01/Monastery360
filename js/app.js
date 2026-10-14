/**
 * Monastery360 – Global Application Logic
 * c:\Users\home\Desktop\Monastery360\js\app.js
 *
 * Handles:
 *  1. Navbar scroll effect
 *  2. Mobile hamburger toggle
 *  3. Search Modal toggle & keyboard shortcuts
 *  4. Universal search across monasteries, festivals, and stays
 *  5. Scroll Reveal animations via IntersectionObserver
 *  6. Number counter animations
 *  7. Global toast notifications (showToast)
 */

(function () {
  'use strict';

  // ── Helper: HTML Escaping ───────────────────────────────────
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ── Helper: Month Name ──────────────────────────────────────
  const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  function getMonthName(m) {
    if (typeof m === 'number' && m >= 1 && m <= 12) {
      return MONTH_NAMES[m - 1];
    }
    if (typeof m === 'string') return m;
    return '';
  }

  // ── Global Image Error Recovery & Custom Image Fallback ─────
  window.handleImgError = function (imgEl, baseId) {
    if (!imgEl) return;
    const tries = parseInt(imgEl.getAttribute('data-img-tries') || '0', 10);

    if (tries === 0 && baseId) {
      imgEl.setAttribute('data-img-tries', '1');
      imgEl.src = `images/custom/${baseId}.jpg`;
      return;
    }
    if (tries === 1 && baseId) {
      imgEl.setAttribute('data-img-tries', '2');
      imgEl.src = `images/custom/${baseId}.png`;
      return;
    }
    if (tries === 2 && baseId) {
      imgEl.setAttribute('data-img-tries', '3');
      imgEl.src = `images/${baseId}.jpg`;
      return;
    }
    if (tries < 4) {
      imgEl.setAttribute('data-img-tries', '4');
      imgEl.src = 'images/rumtek.png';
      return;
    }

    // Ultimate fallback: clean inline SVG with Buddhist icon so image never appears broken
    imgEl.onerror = null;
    imgEl.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231a0f00'/%3E%3Ctext x='50%25' y='45%25' font-size='64' text-anchor='middle' fill='%23FF9933'%3E☸️%3C/text%3E%3Ctext x='50%25' y='65%25' font-family='sans-serif' font-size='22' font-weight='bold' text-anchor='middle' fill='%23ffffff'%3EMonastery360%3C/text%3E%3C/svg%3E";
  };

  // Global capture-phase listener to catch any broken image anywhere on the page
  window.addEventListener('error', function (e) {
    if (e.target && e.target.tagName === 'IMG') {
      const img = e.target;
      if (!img.getAttribute('data-handled')) {
        img.setAttribute('data-handled', '1');
        const fileName = (img.src || '').split('/').pop().split('?')[0];
        const baseName = fileName.split('.')[0];
        window.handleImgError(img, baseName);
      }
    }
  }, true);

  // ── 1. Navbar Scroll Effect ────────────────────────────────
  function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    // Only apply dynamic scrolled class toggle on home page;
    // other pages already have .scrolled baked into their markup.
    if (!document.body.classList.contains('home-page')) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on initialization
  }

  // ── 2. Mobile Hamburger Toggle ──────────────────────────────
  function initMobileNav() {
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });

    // Close when any nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });

    // Close when clicking outside of navbar menu
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open')) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
          navLinks.classList.remove('open');
        }
      }
    });
  }

  // ── 3 & 4. Search Modal & Logic ─────────────────────────────
  function initSearch() {
    const searchModal = document.getElementById('searchModal');
    const searchBtn = document.getElementById('searchBtn');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchModal) return;

    function openModal() {
      searchModal.classList.add('open');
      if (searchInput) {
        setTimeout(() => {
          searchInput.focus();
          searchInput.select();
        }, 50);
      }
    }

    function closeModal() {
      searchModal.classList.remove('open');
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    }

    if (searchClose) {
      searchClose.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
      });
    }

    // Close on overlay backdrop click
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        closeModal();
      }
    });

    // Keyboard Shortcuts: Ctrl+K / Cmd+K to open, Escape to close
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        if (searchModal.classList.contains('open')) {
          closeModal();
        } else {
          openModal();
        }
      } else if (e.key === 'Escape' && searchModal.classList.contains('open')) {
        closeModal();
      }
    });

    // Substring field matching helper
    function itemMatches(item, q) {
      if (!item || !q) return false;
      const checkVal = (v) => {
        if (v === null || v === undefined) return false;
        if (typeof v === 'string') return v.toLowerCase().includes(q);
        if (typeof v === 'number') return v.toString().includes(q);
        if (Array.isArray(v)) {
          return v.some(val => typeof val === 'string' && val.toLowerCase().includes(q));
        }
        return false;
      };

      return checkVal(item.name) ||
             checkVal(item.location) ||
             checkVal(item.description) ||
             checkVal(item.tags) ||
             checkVal(item.category) ||
             checkVal(item.amenities) ||
             checkVal(item.sect) ||
             checkVal(item.monasteryName);
    }

    // Search query processor
    function performSearch(rawQuery) {
      if (!searchResults) return;
      const query = rawQuery.trim().toLowerCase();

      if (!query) {
        searchResults.innerHTML = '';
        return;
      }

      const data = window.M360Data || {};
      const monasteries = Array.isArray(data.monasteries) ? data.monasteries : [];
      const events = Array.isArray(data.events) ? data.events : [];
      const hotels = Array.isArray(data.hotels) ? data.hotels : [];

      const results = [];

      // Search Monasteries
      monasteries.forEach(m => {
        if (itemMatches(m, query)) {
          results.push({
            emoji: '🏯',
            color: 'rgba(255,153,51,0.15)',
            link: `tours.html?id=${encodeURIComponent(m.id || '')}`,
            name: m.name || 'Monastery',
            subtitle: m.location || 'Sikkim'
          });
        }
      });

      // Search Events
      events.forEach(ev => {
        if (itemMatches(ev, query)) {
          const mName = getMonthName(ev.month);
          const parts = [ev.monasteryName, mName].filter(Boolean);
          results.push({
            emoji: ev.emoji || '🎭',
            color: 'rgba(212,160,23,0.15)',
            link: 'calendar.html',
            name: ev.name || 'Festival',
            subtitle: parts.join(' · ')
          });
        }
      });

      // Search Hotels
      hotels.forEach(h => {
        if (itemMatches(h, query)) {
          const pricePart = (h.priceMin !== undefined && h.priceMin !== null) ? `₹${h.priceMin}` : '';
          const parts = [h.location, pricePart].filter(Boolean);
          results.push({
            emoji: '🏨',
            color: 'rgba(66,133,244,0.15)',
            link: 'stay.html',
            name: h.name || 'Stay',
            subtitle: parts.join(' · ')
          });
        }
      });

      if (results.length === 0) {
        searchResults.innerHTML = `<div class="search-empty">No results for "${escapeHtml(rawQuery.trim())}"</div>`;
      } else {
        searchResults.innerHTML = results.map(r => `
          <a href="${r.link}" class="search-result-item">
            <div class="search-result-icon" style="background:${r.color}">${r.emoji}</div>
            <div>
              <div class="search-result-title">${escapeHtml(r.name)}</div>
              <div class="search-result-sub">${escapeHtml(r.subtitle)}</div>
            </div>
          </a>
        `).join('');
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        performSearch(searchInput.value);
      });
    }
  }

  // ── 5. Scroll Reveal (IntersectionObserver) ─────────────────
  function initScrollReveal() {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });
  }

  // ── 6. Counter Animation ────────────────────────────────────
  function animateCounter(el) {
    const rawVal = el.getAttribute('data-counter');
    const target = parseInt(rawVal, 10);
    if (isNaN(target)) return;

    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for realistic deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * target);

      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(c => animateCounter(c));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    counters.forEach(c => observer.observe(c));
  }

  // ── Initialize Components on DOM Ready ──────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initMobileNav();
    initSearch();
    initScrollReveal();
    initCounters();
  });

})();

// ── 7. Global showToast function ──────────────────────────────
function showToast(message, duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  container.appendChild(toast);

  // Trigger enter transition
  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  setTimeout(() => {
    toast.classList.remove('visible');
    toast.classList.add('hiding');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

// Ensure showToast is available on window
window.showToast = showToast;
