/**
 * JOHNTECH VENDORS LTD - Interactive Core Application
 * Full-featured client controller connecting Products, Blogs, Settings, Modals, and WhatsApp.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSiteSettings();
  initProductCatalog();
  populateQuoteProductOptions();
  initBlogs();
  initBlogReaderModal();
  initTestimonials();
  initStatsCounter();
  initQuoteModal();
  initContactForm();
  initQuickViewModal();
  initMobileMenu();

  // Listen for live data updates from DataStore server synchronization or Admin modifications
  window.addEventListener('johntech:data-updated', () => {
    initSiteSettings();
    initProductCatalog();
    populateQuoteProductOptions();
    initBlogs();
  });
});

/* ---------------- TOAST NOTIFICATION ---------------- */
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* ---------------- SITE SETTINGS HYDRATION ---------------- */
function initSiteSettings() {
  const settings = (window.DataStore && window.DataStore.getSettings) 
    ? window.DataStore.getSettings() 
    : (window.SITE_SETTINGS || {});

  const phone = settings.phoneDisplay || settings.phone || '+254 790 825 018';
  const rawPhone = (settings.phone || '0790825018').replace(/\s+/g, '');
  const waNumber = settings.whatsapp || '254790825018';
  const email = settings.email || 'sales@johntechvendors.co.ke';
  const emailAlt = settings.emailAlt || 'Johntechsolutionsvendors@gmail.com';
  const address = settings.address || 'Ruiru, Kihunguro behind Shell Petro Station, Along Thika Rd';
  const hours = settings.workingHours || 'Mon - Sat: 8:00 AM – 6:00 PM';

  // 1. Topbar
  const topAddress = document.getElementById('topBarAddress');
  if (topAddress) topAddress.textContent = address;

  const topHours = document.getElementById('topBarHours');
  if (topHours) topHours.textContent = hours;

  const topPhone = document.getElementById('topBarPhone');
  const topPhoneLink = document.getElementById('topBarPhoneLink');
  if (topPhone) topPhone.textContent = phone;
  if (topPhoneLink) topPhoneLink.href = 'tel:' + rawPhone;

  const topEmail = document.getElementById('topBarEmail');
  const topEmailLink = document.getElementById('topBarEmailLink');
  if (topEmail) topEmail.textContent = email;
  if (topEmailLink) topEmailLink.href = 'mailto:' + email;

  // 2. Hero Section
  const heroTag = document.getElementById('heroTagText');
  if (heroTag && settings.heroTag) heroTag.textContent = settings.heroTag;

  const heroTitle = document.getElementById('heroTitleText');
  if (heroTitle && settings.heroTitle) heroTitle.textContent = settings.heroTitle;

  const heroSubtitle = document.getElementById('heroSubtitleText');
  if (heroSubtitle && settings.heroSubtitle) heroSubtitle.textContent = settings.heroSubtitle;

  const heroImg = document.getElementById('heroImageSrc');
  if (heroImg && settings.heroImage) heroImg.src = settings.heroImage;

  const heroWaBtn = document.getElementById('heroWhatsappBtn');
  if (heroWaBtn) {
    heroWaBtn.href = `https://wa.me/${waNumber}?text=Hello%20Johntech,%20I%20would%20like%20to%20talk%20to%20an%20expert%20about%20your%20vending%20and%20purification%20machines`;
  }

  // 3. Stats Strip Counter Targets
  const statInst = document.getElementById('statInstallationsNum');
  if (statInst && settings.statInstallations) {
    statInst.setAttribute('data-target', settings.statInstallations);
    statInst.textContent = settings.statInstallations.toLocaleString() + '+';
  }

  const statSat = document.getElementById('statSatisfactionNum');
  if (statSat && settings.statSatisfaction) {
    statSat.setAttribute('data-target', settings.statSatisfaction);
    statSat.textContent = settings.statSatisfaction + '%';
  }

  const statPart = document.getElementById('statPartnersNum');
  if (statPart && settings.statPartners) {
    statPart.setAttribute('data-target', settings.statPartners);
    statPart.textContent = settings.statPartners + '+';
  }

  // 4. Contact Section Cards
  const cAddress = document.getElementById('contactCardAddress');
  if (cAddress) cAddress.textContent = 'Ruiru, Kihunguro';

  const cAddressSub = document.getElementById('contactCardAddressSub');
  if (cAddressSub) cAddressSub.textContent = address;

  const cPhone = document.getElementById('contactCardPhone');
  const cPhoneLink = document.getElementById('contactCardPhoneLink');
  if (cPhone) cPhone.textContent = phone;
  if (cPhoneLink) cPhoneLink.href = 'tel:' + rawPhone;

  const cPhoneSub = document.getElementById('contactCardPhoneSub');
  if (cPhoneSub) cPhoneSub.textContent = `Local Dial: ${settings.phone || '0790 825018'} (Direct to Senior Technician)`;

  const cEmail = document.getElementById('contactCardEmail');
  const cEmailLink = document.getElementById('contactCardEmailLink');
  if (cEmail) cEmail.textContent = email;
  if (cEmailLink) cEmailLink.href = 'mailto:' + email;

  const cEmailSub = document.getElementById('contactCardEmailSub');
  if (cEmailSub) cEmailSub.textContent = `Alternative: ${emailAlt}`;

  const cHours = document.getElementById('contactCardHours');
  if (cHours) cHours.textContent = hours;

  const cWaDirect = document.getElementById('contactWhatsappDirectBtn');
  if (cWaDirect) {
    cWaDirect.href = `https://wa.me/${waNumber}?text=Hello%20Johntech%20Vendors,%20I%20would%20like%20to%20discuss%20machine%20prices%20and%20installation`;
  }

  // 5. Floating WhatsApp Button
  const floatWa = document.getElementById('floatingWhatsappBtn');
  if (floatWa) {
    floatWa.href = `https://wa.me/${waNumber}?text=Hello%20Johntech%20Vendors,%20I%20would%20like%20to%20inquire%20about%20your%20rectified%20machine%20prices`;
  }

  // 6. Footer Strip
  const fAddress = document.getElementById('footerAddress');
  if (fAddress) fAddress.textContent = address;

  const fPhone = document.getElementById('footerPhone');
  const fPhoneLink = document.getElementById('footerPhoneLink');
  if (fPhone) fPhone.textContent = phone;
  if (fPhoneLink) fPhoneLink.href = 'tel:' + rawPhone;

  const fEmail = document.getElementById('footerEmail');
  const fEmailLink = document.getElementById('footerEmailLink');
  if (fEmail) fEmail.textContent = email;
  if (fEmailLink) fEmailLink.href = 'mailto:' + email;
}

/* ---------------- NAVBAR & SCROLL ---------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Active section spy
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ---------------- PRODUCTS CATALOG & ADVANCED CHECKBOX FILTERING ---------------- */
function initProductCatalog() {
  const productsContainer = document.getElementById('productsGrid');
  const resultsCount = document.getElementById('resultsCount');
  const searchInput = document.getElementById('catalogSearchInput');
  const resetBtn = document.getElementById('resetFiltersBtn');
  const filterPills = document.querySelectorAll('.filter-pill');
  const checkboxes = document.querySelectorAll('.filter-checkbox');

  if (!productsContainer) return;

  const productsList = (window.DataStore && window.DataStore.getProducts) 
    ? window.DataStore.getProducts() 
    : (window.PRODUCTS_DATA || []);

  let activeCategory = 'all';

  function applyFilters() {
    const searchTerm = (searchInput ? searchInput.value : '').toLowerCase().trim();

    // Checked solution types
    const selectedSolutions = Array.from(document.querySelectorAll('.filter-checkbox[data-group="solution"]:checked'))
      .map(cb => cb.value);

    // Checked purification needs
    const selectedPurifications = Array.from(document.querySelectorAll('.filter-checkbox[data-group="purification"]:checked'))
      .map(cb => cb.value);

    const filtered = productsList.filter(p => {
      // 1. Category Pill Filter
      if (activeCategory !== 'all' && p.categorySlug !== activeCategory) {
        return false;
      }

      // 2. Keyword Search
      if (searchTerm) {
        const matchName = p.name.toLowerCase().includes(searchTerm);
        const matchCat = p.category.toLowerCase().includes(searchTerm);
        const matchDesc = (p.description || '').toLowerCase().includes(searchTerm);
        if (!matchName && !matchCat && !matchDesc) return false;
      }

      // 3. Solution Type Checkboxes
      if (selectedSolutions.length > 0) {
        if (!p.solutionType || !selectedSolutions.includes(p.solutionType)) {
          return false;
        }
      }

      // 4. Purification Needs Checkboxes
      if (selectedPurifications.length > 0) {
        if (!p.purificationTags || !Array.isArray(p.purificationTags)) {
          return false;
        }
        const hasMatchingTag = selectedPurifications.some(tag => p.purificationTags.includes(tag));
        if (!hasMatchingTag) return false;
      }

      return true;
    });

    renderProducts(filtered);

    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} of ${productsList.length} verified machines`;
    }
  }

  function renderProducts(items) {
    if (items.length === 0) {
      productsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 60px 20px; text-align: center; background: #FFFFFF; border-radius: 12px; border: 1px dashed #CBD5E1;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="1.5" style="margin: 0 auto 16px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <h3 style="color: #0A1C38; font-size: 1.125rem; font-weight: 700; margin-bottom: 8px;">No machines matched your current filter selection</h3>
          <p style="color: #64748B; font-size: 0.875rem; max-width: 420px; margin: 0 auto 20px;">Try unchecking some filter checkboxes or resetting the search query to view our complete inventory.</p>
          <button class="btn-primary" onclick="document.getElementById('resetFiltersBtn').click()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    productsContainer.innerHTML = items.map(p => {
      const badgeHtml = p.badge 
        ? `<span class="product-badge">${p.badge}</span>` 
        : '';

      const priceDisplay = p.priceFormatted || ('KSh ' + (p.price ? p.price.toLocaleString() : 'Negotiable'));

      return `
        <div class="product-card" data-category="${p.categorySlug}">
          <div class="product-image-box">
            ${badgeHtml}
            <img src="${p.imageUrl}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.onerror=null;this.src='${p.fallbackUrl || 'assets/hero-machine.jpg'}';">
          </div>
          <div class="product-body">
            <span class="product-category">${p.category}</span>
            <h3 class="product-title">${p.name}</h3>
            <p class="product-desc">${p.description}</p>
            <div class="product-footer">
              <div class="product-price-wrapper">
                <span class="price-label">Official Price</span>
                <span class="product-price">${priceDisplay}</span>
              </div>
              <div class="product-actions">
                <button class="btn-icon-quote" title="Quick View Specs" onclick="openQuickView('${p.id}')">
                  Specs
                </button>
                <button class="btn-icon-quote" style="background:#E51B24; color:#FFFFFF;" onclick="openQuoteModal('${p.name}')">
                  Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Filter Pills Event Listeners
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-filter');
      applyFilters();
    });
  });

  // Checkboxes Event Listeners
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      applyFilters();
    });
  });

  // Search Input Event Listener
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      applyFilters();
    });
  }

  // Reset Filters Button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      checkboxes.forEach(cb => cb.checked = false);
      filterPills.forEach(p => p.classList.remove('active'));
      const allPill = document.querySelector('.filter-pill[data-filter="all"]');
      if (allPill) allPill.classList.add('active');
      activeCategory = 'all';
      applyFilters();
    });
  }

  // Initial catalog render
  applyFilters();
}

/* ---------------- DYNAMIC QUOTE MODAL OPTIONS ---------------- */
function populateQuoteProductOptions() {
  const select = document.getElementById('quoteProduct');
  if (!select) return;

  const productsList = (window.DataStore && window.DataStore.getProducts) 
    ? window.DataStore.getProducts() 
    : (window.PRODUCTS_DATA || []);

  if (productsList.length === 0) return;

  // Group by category
  const groups = {};
  productsList.forEach(p => {
    const cat = p.category || 'Other Machines';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(p);
  });

  let html = '';
  for (const cat in groups) {
    html += `<optgroup label="${cat}">`;
    groups[cat].forEach(p => {
      const price = p.priceFormatted || ('KSh ' + p.price.toLocaleString());
      const selected = (p.id === 'prod_ro_500lph') ? 'selected' : '';
      html += `<option value="${p.name} (${price})" ${selected}>${p.name} - ${price}</option>`;
    });
    html += `</optgroup>`;
  }

  select.innerHTML = html;
}

/* ---------------- BLOG ARTICLES & TECHNICAL INSIGHTS ---------------- */
function initBlogs() {
  const grid = document.getElementById('blogsGrid');
  if (!grid) return;

  const blogsList = (window.DataStore && window.DataStore.getBlogs) 
    ? window.DataStore.getBlogs() 
    : (window.BLOGS_DATA || []);

  if (blogsList.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #64748B;">No articles published yet.</p>';
    return;
  }

  grid.innerHTML = blogsList.map(b => {
    return `
      <article class="blog-card">
        <div class="blog-card-media">
          <span class="blog-badge">${b.category}</span>
          <img src="${b.imageUrl}" alt="${b.title}" loading="lazy" onerror="this.onerror=null;this.src='assets/hero-machine.jpg';">
        </div>
        <div class="blog-card-body">
          <div class="blog-meta-date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${b.date}</span>
          </div>
          <h3 class="blog-card-title">${b.title}</h3>
          <p class="blog-card-excerpt">${b.excerpt}</p>
          <div class="blog-card-footer">
            <span class="blog-author-text">By ${b.author}</span>
            <button class="btn-read-blog" onclick="openBlogReader('${b.id}')">
              <span>Read Guide</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ---------------- BLOG READER MODAL ---------------- */
function initBlogReaderModal() {
  const modal = document.getElementById('blogReaderModal');
  const closeBtn = document.getElementById('closeBlogReaderModal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }
}

function parseMarkdownToHtml(markdown) {
  if (!markdown) return '';
  let html = markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>');

  // Convert double newlines to paragraphs
  const blocks = html.split(/\n\s*\n/).map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<h') || trimmed.startsWith('<li>') || trimmed.startsWith('<ul')) {
      return trimmed;
    }
    return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
  }).join('');

  return blocks;
}

window.openBlogReader = function(blogId) {
  const blogsList = (window.DataStore && window.DataStore.getBlogs) 
    ? window.DataStore.getBlogs() 
    : (window.BLOGS_DATA || []);

  const blog = blogsList.find(b => b.id === blogId);
  if (!blog) return;

  const modal = document.getElementById('blogReaderModal');
  const body = document.getElementById('blogReaderBody');
  const tag = document.getElementById('blogReaderTag');

  if (!modal || !body) return;

  if (tag) tag.textContent = blog.category;

  const contentHtml = parseMarkdownToHtml(blog.content);

  body.innerHTML = `
    <div class="blog-reader-content">
      <img src="${blog.imageUrl}" alt="${blog.title}" class="blog-reader-hero-img" onerror="this.onerror=null;this.src='assets/hero-machine.jpg';">
      <div class="blog-reader-header">
        <h1 class="blog-reader-title">${blog.title}</h1>
        <div class="blog-reader-meta">
          <span>📅 ${blog.date}</span>
          <span>✍️ Author: <strong>${blog.author}</strong></span>
          <span>🏷️ Category: <strong>${blog.category}</strong></span>
        </div>
      </div>
      
      <div class="blog-article-body">
        ${contentHtml}
      </div>

      <div class="blog-cta-box">
        <div>
          <h4 style="font-size:1.125rem; font-weight:800; margin-bottom:4px;">Interested in This Business Solution?</h4>
          <p style="font-size:0.8125rem; opacity:0.85; margin:0;">Our senior engineers can design a custom water plant or vending system tailored to your location.</p>
        </div>
        <button class="btn-primary" style="flex-shrink:0;" onclick="document.getElementById('blogReaderModal').classList.remove('open'); openQuoteModal('Consultation: ${blog.title}');">
          Request Quotation &rarr;
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
};

/* ---------------- DEDICATED CONTACT FORM & SEND BUTTON ---------------- */
function initContactForm() {
  const form = document.getElementById('contactMessageForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMsg').value.trim();

    // Gather checked requirement checkboxes
    const checkedReqs = Array.from(document.querySelectorAll('.contact-req-cb:checked'))
      .map(cb => cb.value);

    const reqsText = checkedReqs.length > 0 
      ? checkedReqs.join(', ') 
      : 'General Inquiry';

    const settings = (window.DataStore && window.DataStore.getSettings) 
      ? window.DataStore.getSettings() 
      : (window.SITE_SETTINGS || {});
    const waNumber = settings.whatsapp || '254790825018';

    // Format WhatsApp message
    let text = `*NEW INQUIRY - JOHNTECH VENDORS LTD*%0A`;
    text += `--------------------------------%0A`;
    text += `*Full Name:* ${encodeURIComponent(name)}%0A`;
    text += `*Phone / WhatsApp:* ${encodeURIComponent(phone)}%0A`;
    if (email) text += `*Email:* ${encodeURIComponent(email)}%0A`;
    text += `*Requirements:* ${encodeURIComponent(reqsText)}%0A`;
    text += `*Message:* ${encodeURIComponent(message)}%0A`;
    text += `--------------------------------%0A`;
    text += `_Sent from Johntech Vendors Website_`;

    const waUrl = `https://wa.me/${waNumber}?text=${text}`;

    window.open(waUrl, '_blank');
    showToast('Your message has been sent to our sales engineer via WhatsApp!');
    form.reset();
  });
}

/* ---------------- QUOTE MODAL WITH RECTIFIED PRICING & CHECKBOXES ---------------- */
function initQuoteModal() {
  const modal = document.getElementById('quoteModal');
  const closeBtn = document.getElementById('closeQuoteModal');
  const form = document.getElementById('quoteForm');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const product = document.getElementById('quoteProduct').value;
      const name = document.getElementById('quoteName').value.trim();
      const phone = document.getElementById('quotePhone').value.trim();
      const location = document.getElementById('quoteLocation').value.trim();
      const message = document.getElementById('quoteMessage').value.trim();

      // Gather checked add-on checkboxes
      const checkedAddons = Array.from(document.querySelectorAll('.quote-addon-cb:checked'))
        .map(cb => cb.value);

      const addonsText = checkedAddons.length > 0 ? checkedAddons.join(', ') : 'None';

      const settings = (window.DataStore && window.DataStore.getSettings) 
        ? window.DataStore.getSettings() 
        : (window.SITE_SETTINGS || {});
      const waNumber = settings.whatsapp || '254790825018';

      let text = `*OFFICIAL QUOTATION REQUEST*%0A`;
      text += `*Johntech Vendors LTD*%0A`;
      text += `----------------------------%0A`;
      text += `*Machine Inquired:* ${encodeURIComponent(product)}%0A`;
      text += `*Client Name:* ${encodeURIComponent(name)}%0A`;
      text += `*Phone Number:* ${encodeURIComponent(phone)}%0A`;
      text += `*Location / Town:* ${encodeURIComponent(location)}%0A`;
      text += `*Requested Add-ons:* ${encodeURIComponent(addonsText)}%0A`;
      if (message) text += `*Special Notes:* ${encodeURIComponent(message)}%0A`;
      text += `----------------------------%0A`;
      text += `_Please send me the formal proforma invoice & delivery schedule._`;

      const waUrl = `https://wa.me/${waNumber}?text=${text}`;
      
      window.open(waUrl, '_blank');
      modal.classList.remove('open');
      showToast(`Quotation request dispatched to Johntech on WhatsApp (+${waNumber})!`);
      form.reset();
    });
  }
}

window.openQuoteModal = function(productName = '') {
  const modal = document.getElementById('quoteModal');
  const select = document.getElementById('quoteProduct');
  if (modal && select) {
    if (productName) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.toLowerCase().includes(productName.toLowerCase()) || 
            select.options[i].value.toLowerCase().includes(productName.toLowerCase())) {
          select.selectedIndex = i;
          break;
        }
      }
    }
    modal.classList.add('open');
  }
};

/* ---------------- PRODUCT QUICK VIEW MODAL ---------------- */
function initQuickViewModal() {
  const modal = document.getElementById('quickViewModal');
  const closeBtn = document.getElementById('closeQuickViewModal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }
}

window.openQuickView = function(productId) {
  const productsList = (window.DataStore && window.DataStore.getProducts) 
    ? window.DataStore.getProducts() 
    : (window.PRODUCTS_DATA || []);

  const product = productsList.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const body = document.getElementById('quickViewBody');

  const specsList = Object.entries(product.specs || {}).map(([key, val]) => {
    return `<li style="display:flex; justify-content:space-between; padding: 7px 0; border-bottom: 1px solid #EEF2F6; font-size: 0.875rem;">
      <span style="font-weight:700; text-transform:capitalize; color:#0A1C38;">${key}</span>
      <span style="color:#526077; font-weight:500;">${val}</span>
    </li>`;
  }).join('');

  const settings = (window.DataStore && window.DataStore.getSettings) 
    ? window.DataStore.getSettings() 
    : (window.SITE_SETTINGS || {});
  const waNumber = settings.whatsapp || '254790825018';
  const priceDisplay = product.priceFormatted || ('KSh ' + product.price.toLocaleString());

  body.innerHTML = `
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: center;">
      <div style="background:#F8FAFC; padding:20px; border-radius:12px; text-align:center;">
        <img src="${product.imageUrl}" alt="${product.name}" style="max-height:260px; margin:0 auto; object-fit:contain;" onerror="this.onerror=null;this.src='${product.fallbackUrl || 'assets/hero-machine.jpg'}';">
      </div>
      <div>
        <span style="color:#E51B24; font-size:0.75rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em;">${product.category}</span>
        <h2 style="font-size:1.375rem; font-weight:800; color:#0A1C38; margin: 4px 0 8px;">${product.name}</h2>
        <p style="font-size:1.5rem; font-weight:800; color:#E51B24; margin-bottom:12px;">${priceDisplay}</p>
        <p style="font-size:0.875rem; color:#526077; line-height:1.6; margin-bottom:16px;">${product.description}</p>
        
        ${specsList ? `<ul style="list-style:none; margin-bottom: 20px;">${specsList}</ul>` : ''}

        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <button class="btn-primary" onclick="openQuoteModal('${product.name}'); document.getElementById('quickViewModal').classList.remove('open');">
            Get Official Quotation
          </button>
          <a href="https://wa.me/${waNumber}?text=Hello%20Johntech,%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(product.name)}%20priced%20at%20${encodeURIComponent(priceDisplay)}" target="_blank" class="btn-secondary" style="background:#25D366; color:#FFFFFF; border:none; display:inline-flex; align-items:center; gap:6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.697.072-2.123-.523-1.638-.682-2.704-2.348-2.787-2.459-.083-.111-.669-.893-.669-1.703 0-.81.423-1.208.573-1.371.15-.163.327-.204.436-.204.109 0 .218.001.313.006.101.005.236-.038.37.283.144.346.49 1.198.533 1.286.044.088.073.19.015.305-.058.115-.088.187-.175.289-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.102.175.454.748.974 1.212.671.597 1.237.782 1.412.87.175.087.277.073.38-.044.102-.116.438-.51.554-.685.117-.175.234-.146.394-.087.16.058 1.02.481 1.195.568.175.088.292.131.335.204.044.073.044.423-.1 1.028z"></path></svg>
            <span>WhatsApp Order</span>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
};

/* ---------------- TESTIMONIALS SLIDER ---------------- */
const TESTIMONIALS = [
  {
    quote: "Johntech's cooking oil ATM has been a game changer for our business in Ruiru. It's reliable, exceptionally easy to operate, and has increased our weekly grocery profit margins significantly without any oil leakage.",
    name: "Grace Wanjiku",
    role: "Retail Business Owner, Nairobi",
    initials: "GW"
  },
  {
    quote: "We commissioned a 1,000 LPH Commercial Reverse Osmosis plant for our bottled water business. The water purity TDS readings are immaculate and Johntech's team provided on-time KEBS testing support.",
    name: "Dennis Kiprono",
    role: "PureFlow Beverages, Eldoret",
    initials: "DK"
  },
  {
    quote: "The 100-liter smart Milk ATM from Johntech has been running uninterrupted for over a year. The automatic digital volume calibration and cooling mechanism keeps milk fresh throughout.",
    name: "Peter Mwangi",
    role: "Dairy Hub Supermarket, Thika",
    initials: "PM"
  }
];

let currentTestimonialIndex = 0;

function initTestimonials() {
  const quoteEl = document.getElementById('tQuote');
  const nameEl = document.getElementById('tName');
  const roleEl = document.getElementById('tRole');
  const avatarEl = document.getElementById('tAvatar');
  const prevBtn = document.getElementById('tPrev');
  const nextBtn = document.getElementById('tNext');

  if (!quoteEl || !nameEl) return;

  function update() {
    const t = TESTIMONIALS[currentTestimonialIndex];
    quoteEl.textContent = `"${t.quote}"`;
    nameEl.textContent = t.name;
    roleEl.textContent = t.role;
    avatarEl.textContent = t.initials;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
      update();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % TESTIMONIALS.length;
      update();
    });
  }
}

/* ---------------- STATS COUNTER ---------------- */
function initStatsCounter() {
  const statElements = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      statElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1600;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.textContent = target.toLocaleString() + suffix;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(start).toLocaleString() + suffix;
          }
        }, stepTime);
      });
    }
  }, { threshold: 0.3 });

  const statsStrip = document.querySelector('.stats-strip');
  if (statsStrip) observer.observe(statsStrip);
}

/* ---------------- MOBILE MENU DRAWER ---------------- */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const close = document.getElementById('closeDrawer');
  const links = document.querySelectorAll('.mobile-drawer-link');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => drawer.classList.add('open'));
  }
  if (close && drawer) {
    close.addEventListener('click', () => drawer.classList.remove('open'));
  }
  links.forEach(l => {
    l.addEventListener('click', () => drawer.classList.remove('open'));
  });
}
