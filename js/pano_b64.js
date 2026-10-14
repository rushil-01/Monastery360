// =============================================================================
// Panorama & Card Placeholder Generator for Monastery360
// =============================================================================
// Generates lightweight equirectangular 360° panorama image placeholders and
// card thumbnail images using HTML5 Canvas data URIs. Used by Pannellum viewer
// and UI components across the site.
// =============================================================================

(function() {
  'use strict';

  // Create a placeholder equirectangular panorama as a data URI
  function createPanoPlaceholder(label, color1, color2) {
    if (typeof document === 'undefined') return '';

    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    // Gradient background
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, color1);
    grad.addColorStop(0.5, color2);
    grad.addColorStop(1, color1);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Mountain silhouette
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.moveTo(0, 700);
    for (let x = 0; x <= 2048; x += 40) {
      ctx.lineTo(x, 600 + Math.sin(x / 150) * 80 + Math.sin(x / 80) * 40);
    }
    ctx.lineTo(2048, 1024);
    ctx.lineTo(0, 1024);
    ctx.fill();

    // Buddhist wheel symbol
    ctx.fillStyle = 'rgba(255,153,51,0.85)';
    ctx.font = '64px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('☸', 1024, 400);

    // Text
    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.font = 'bold 64px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(label, 1024, 480);

    ctx.font = '32px "Segoe UI", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.65)';
    ctx.fillText('360° Panorama Preview — Drag to Look Around', 1024, 540);

    return canvas.toDataURL('image/jpeg', 0.7);
  }

  // Create card thumbnail placeholder (600x400)
  function createCardPlaceholder(title, subtitle, color1, color2) {
    if (typeof document === 'undefined') return '';
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    const grad = ctx.createLinearGradient(0, 0, 600, 400);
    grad.addColorStop(0, color1);
    grad.addColorStop(1, color2);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 400);

    // Subtle mountain ridge
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.beginPath();
    ctx.moveTo(0, 290);
    ctx.lineTo(150, 220);
    ctx.lineTo(280, 260);
    ctx.lineTo(440, 200);
    ctx.lineTo(600, 280);
    ctx.lineTo(600, 400);
    ctx.lineTo(0, 400);
    ctx.fill();

    // Monastery Icon
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.font = '64px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🏯', 300, 130);

    // Main title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(title, 300, 195);

    // Subtitle
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '16px "Segoe UI", sans-serif';
    ctx.fillText(subtitle, 300, 235);

    // Badge
    ctx.fillStyle = 'rgba(255, 153, 51, 0.9)'; // Saffron badge
    ctx.fillRect(230, 270, 140, 28);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px "Segoe UI", sans-serif';
    ctx.fillText('MONASTERY360', 300, 288);

    return canvas.toDataURL('image/jpeg', 0.85);
  }

  // Create square icon
  function createSquareIcon(size, bgHex, symbol) {
    if (typeof document === 'undefined') return '';
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    ctx.fillStyle = bgHex;
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${Math.floor(size * 0.42)}px "Segoe UI", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol, size / 2, size / 2);

    return canvas.toDataURL('image/png');
  }

  // Equirectangular 360° panoramas
  window.M360_PANO_PLACEHOLDERS = {
    rumtek:      createPanoPlaceholder('Rumtek Monastery', '#1a0f00', '#2d1800'),
    pemayangtse: createPanoPlaceholder('Pemayangtse Monastery', '#0d2818', '#1a3d2b'),
    tashiding:   createPanoPlaceholder('Tashiding Monastery', '#1a1a00', '#2d2800'),
    dodrul:      createPanoPlaceholder('Do-Drul Chorten', '#0d0d2d', '#1a1a4d'),
    enchey:      createPanoPlaceholder('Enchey Monastery', '#2d0d1a', '#4d1a2d'),
    ralang:      createPanoPlaceholder('Ralang Monastery', '#0d1a2d', '#1a2d4d'),
    dubdi:       createPanoPlaceholder('Dubdi Monastery', '#1a2d0d', '#2d4d1a'),
    phensang:    createPanoPlaceholder('Phensang Monastery', '#2d1a0d', '#4d2d1a'),
  };

  // Card image placeholders
  window.M360_IMG_PLACEHOLDERS = {
    rumtek:      createCardPlaceholder('Rumtek Monastery', 'East Sikkim · Karma Kagyu', '#8B4513', '#D2691E'),
    pemayangtse: createCardPlaceholder('Pemayangtse', 'West Sikkim · Nyingma Lineage', '#2E8B57', '#3CB371'),
    tashiding:   createCardPlaceholder('Tashiding', 'West Sikkim · Holy Confluence', '#B8860B', '#DAA520'),
    dodrul:      createCardPlaceholder('Do-Drul Chorten', 'Gangtok · 108 Prayer Wheels', '#2F4F4F', '#5F9EA0'),
    enchey:      createCardPlaceholder('Enchey', 'Gangtok · Solitary Temple', '#800020', '#A0522D'),
    ralang:      createCardPlaceholder('Ralang', 'South Sikkim · Ravangla', '#4B0082', '#6A5ACD'),
    dubdi:       createCardPlaceholder('Dubdi', 'West Sikkim · Oldest Monastery (1701)', '#006400', '#228B22'),
    phensang:    createCardPlaceholder('Phensang', 'North Sikkim · Mangan Heritage', '#FF8C00', '#FFA500'),
    hero:        createCardPlaceholder('Monastery360', 'Discover Sikkim\'s Sacred Sanctuaries', '#0d0800', '#2d1800'),
    mural1:      createCardPlaceholder('Sacred Mural', 'Ancient Tantric Buddhist Art', '#8B0000', '#CD5C5C'),
    rumtek_pano: createCardPlaceholder('360° Panorama', 'Interactive Virtual Tour', '#1a0f00', '#2d1800'),
    mayfair:     createCardPlaceholder('Mayfair Resort', 'Gangtok · Luxury Wellness Retreat', '#008080', '#20B2AA'),
    'icon-192':  createSquareIcon(192, '#FF9933', '☸'),
    'icon-512':  createSquareIcon(512, '#FF9933', '☸')
  };

  // Global Image Error Interceptor:
  // Catches any image loading error and seamlessly substitutes the generated placeholder
  if (typeof window !== 'undefined') {
    window.addEventListener('error', function(event) {
      const target = event.target;
      if (target && target.tagName === 'IMG') {
        const src = target.getAttribute('src') || '';
        const match = src.match(/([a-zA-Z0-9_\-]+)\.(png|jpg|jpeg|svg)$/);
        if (match) {
          const key = match[1];
          if (window.M360_IMG_PLACEHOLDERS && window.M360_IMG_PLACEHOLDERS[key]) {
            target.src = window.M360_IMG_PLACEHOLDERS[key];
            return;
          }
        }
        if (window.M360_IMG_PLACEHOLDERS && window.M360_IMG_PLACEHOLDERS.rumtek) {
          target.src = window.M360_IMG_PLACEHOLDERS.rumtek;
        }
      }
    }, true);
  }

  // Auto-assign panorama placeholders to monasteries that don't have real panorama images
  function autoAssignPlaceholders() {
    if (window.M360Data && window.M360_PANO_PLACEHOLDERS) {
      if (Array.isArray(window.M360Data.monasteries)) {
        window.M360Data.monasteries.forEach(function(m) {
          if (!m.panoImg || m.panoImg === '') {
            m.panoImg = window.M360_PANO_PLACEHOLDERS[m.id] || window.M360_PANO_PLACEHOLDERS.rumtek;
          }
        });
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoAssignPlaceholders);
  } else {
    autoAssignPlaceholders();
  }
})();
