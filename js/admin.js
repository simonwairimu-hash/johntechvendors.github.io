/**
 * JOHNTECH VENDORS LTD - Admin Portal Core Script
 * Full CRUD for Products, Prices, Blogs, Images, and Website Settings.
 */

document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initSidebar();
  initDashboard();
  initProductsAdmin();
  initBlogsAdmin();
  initSettingsAdmin();
  initMediaAdmin();
  initBackupAdmin();
});

/* ---------------- TOAST NOTIFICATION ---------------- */
function showAdminToast(message) {
  const toast = document.getElementById('adminToast');
  const msgEl = document.getElementById('adminToastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ---------------- AUTHENTICATION ---------------- */
function initAuth() {
  const loginScreen = document.getElementById('loginScreen');
  const adminLayout = document.getElementById('adminLayout');
  const loginForm = document.getElementById('loginForm');
  const btnLogout = document.getElementById('btnLogout');

  // Check existing session
  const isLoggedIn = sessionStorage.getItem('johntech_admin_logged');
  if (isLoggedIn === 'true') {
    loginScreen.style.display = 'none';
    adminLayout.classList.add('active');
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const u = document.getElementById('loginUser').value.trim().toLowerCase();
      const p = document.getElementById('loginPass').value.trim();

      const validUser = (u === 'johntechvendorssolutions@gmal.com' || u === 'johntechvendorssolutions@gmail.com');
      const validPass = (p === 'johntech@1244');

      if (validUser && validPass) {
        sessionStorage.setItem('johntech_admin_logged', 'true');
        loginScreen.style.display = 'none';
        adminLayout.classList.add('active');
        showAdminToast('Welcome back, Administrator!');
      } else {
        alert('Access Denied: Invalid email or password. Please verify your credentials.');
      }
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      sessionStorage.removeItem('johntech_admin_logged');
      window.location.reload();
    });
  }
}

/* ---------------- SIDEBAR & VIEW SWITCHING ---------------- */
function initSidebar() {
  const navBtns = document.querySelectorAll('.nav-item-btn');
  const views = document.querySelectorAll('.admin-view');
  const topbarTitle = document.getElementById('topbarTitle');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-view');
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      views.forEach(v => {
        if (v.id === targetView) {
          v.classList.add('active');
        } else {
          v.classList.remove('active');
        }
      });

      if (topbarTitle) {
        topbarTitle.textContent = btn.querySelector('span').textContent;
      }
    });
  });
}

/* ---------------- DASHBOARD OVERVIEW ---------------- */
function initDashboard() {
  updateDashboardKPIs();
}

function updateDashboardKPIs() {
  const products = DataStore.getProducts();
  const blogs = DataStore.getBlogs();
  const settings = DataStore.getSettings();

  const totalProdsEl = document.getElementById('kpiTotalProducts');
  const totalBlogsEl = document.getElementById('kpiTotalBlogs');
  const featuredProdsEl = document.getElementById('kpiFeaturedProducts');
  const phoneEl = document.getElementById('kpiContactPhone');

  if (totalProdsEl) totalProdsEl.textContent = products.length;
  if (totalBlogsEl) totalBlogsEl.textContent = blogs.length;
  if (featuredProdsEl) featuredProdsEl.textContent = products.filter(p => p.featured).length;
  if (phoneEl) phoneEl.textContent = settings.phoneDisplay || settings.phone;
}

/* ---------------- PRODUCTS & PRICE MANAGER ---------------- */
let currentEditingProductId = null;

function initProductsAdmin() {
  renderProductsTable();

  // Search in table
  const searchInput = document.getElementById('adminProductSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderProductsTable(searchInput.value.toLowerCase().trim());
    });
  }

  // Open "Add Product" modal
  const btnNewProduct = document.getElementById('btnNewProduct');
  const productModal = document.getElementById('productModal');
  const closeProductModal = document.getElementById('closeProductModal');

  if (btnNewProduct) {
    btnNewProduct.addEventListener('click', () => {
      currentEditingProductId = null;
      document.getElementById('productModalTitle').textContent = 'Add New Machine';
      document.getElementById('productForm').reset();
      document.getElementById('prodImgPreview').src = 'assets/hero-machine.jpg';
      productModal.classList.add('open');
    });
  }

  if (closeProductModal) {
    closeProductModal.addEventListener('click', () => {
      productModal.classList.remove('open');
    });
  }

  // Handle Image File Upload for Product
  const prodImgFileInput = document.getElementById('prodImgFile');
  if (prodImgFileInput) {
    prodImgFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          const base64 = evt.target.result;
          document.getElementById('prodImgPreview').src = base64;
          document.getElementById('prodImageUrl').value = base64;

          // Attempt server upload
          fetch('/api/upload-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: file.name, base64: base64 })
          })
          .then(res => res.json())
          .then(data => {
            if (data.success && data.url) {
              document.getElementById('prodImageUrl').value = data.url;
            }
          })
          .catch(() => {});
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Image URL input live preview
  const prodImgUrlInput = document.getElementById('prodImageUrl');
  if (prodImgUrlInput) {
    prodImgUrlInput.addEventListener('input', () => {
      document.getElementById('prodImgPreview').src = prodImgUrlInput.value || 'assets/hero-machine.jpg';
    });
  }

  // Product Form Save
  const productForm = document.getElementById('productForm');
  if (productForm) {
    productForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveProductFormData();
    });
  }
}

function renderProductsTable(query = '') {
  const tableBody = document.getElementById('adminProductsTableBody');
  if (!tableBody) return;

  const products = DataStore.getProducts();
  const filtered = query 
    ? products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query))
    : products;

  tableBody.innerHTML = '';

  filtered.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <img src="${p.imageUrl}" class="table-thumb" alt="${p.name}" onerror="this.onerror=null;this.src='${p.fallbackUrl || 'assets/hero-machine.jpg'}';">
      </td>
      <td>
        <strong style="color: #0A1C38;">${p.name}</strong>
        <div style="font-size: 0.75rem; color: #64748B;">ID: ${p.id}</div>
      </td>
      <td><span class="tag-badge">${p.category}</span></td>
      <td>
        <div style="display: flex; align-items: center; gap: 6px;">
          <input type="number" value="${p.price}" class="form-input-admin" style="width: 120px; padding: 6px 10px; font-weight: 800;" id="price_input_${p.id}">
          <button class="btn-table-action" title="Save price immediately" onclick="quickSavePrice('${p.id}')">✓</button>
        </div>
      </td>
      <td>
        ${p.badge ? `<span class="tag-badge" style="background:#FEE2E2; color:#B91C1C;">${p.badge}</span>` : '—'}
      </td>
      <td>
        <input type="checkbox" ${p.featured ? 'checked' : ''} onchange="toggleProductFeatured('${p.id}', this.checked)">
      </td>
      <td>
        <div class="action-btns-group">
          <button class="btn-table-action" onclick="openEditProductModal('${p.id}')">Edit</button>
          <button class="btn-table-action delete" onclick="deleteProduct('${p.id}')">Delete</button>
        </div>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  updateDashboardKPIs();
}

window.quickSavePrice = function(productId) {
  const input = document.getElementById(`price_input_${productId}`);
  if (!input) return;

  const newPrice = parseInt(input.value, 10);
  if (isNaN(newPrice) || newPrice <= 0) {
    alert('Please enter a valid price amount');
    return;
  }

  const products = DataStore.getProducts();
  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    products[index].price = newPrice;
    products[index].priceFormatted = 'KSh ' + newPrice.toLocaleString();
    DataStore.saveProducts(products);
    showAdminToast(`Updated price for "${products[index].name}" to ${products[index].priceFormatted}!`);
  }
};

window.toggleProductFeatured = function(productId, isFeatured) {
  const products = DataStore.getProducts();
  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    products[index].featured = isFeatured;
    DataStore.saveProducts(products);
    showAdminToast(`Updated featured status for "${products[index].name}"!`);
  }
};

window.openEditProductModal = function(productId) {
  const products = DataStore.getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentEditingProductId = productId;
  document.getElementById('productModalTitle').textContent = `Edit Machine: ${product.name}`;

  document.getElementById('prodName').value = product.name;
  document.getElementById('prodCategory').value = product.category;
  document.getElementById('prodSolutionType').value = product.solutionType || 'Vending & Dispensing';
  document.getElementById('prodPrice').value = product.price;
  document.getElementById('prodBadge').value = product.badge || '';
  document.getElementById('prodFeatured').checked = !!product.featured;
  document.getElementById('prodImageUrl').value = product.imageUrl;
  document.getElementById('prodImgPreview').src = product.imageUrl;
  document.getElementById('prodDescription').value = product.description;

  document.getElementById('productModal').classList.add('open');
};

function saveProductFormData() {
  const name = document.getElementById('prodName').value.trim();
  const category = document.getElementById('prodCategory').value.trim();
  const solutionType = document.getElementById('prodSolutionType').value;
  const price = parseInt(document.getElementById('prodPrice').value, 10) || 0;
  const badge = document.getElementById('prodBadge').value.trim();
  const featured = document.getElementById('prodFeatured').checked;
  const imageUrl = document.getElementById('prodImageUrl').value.trim() || 'assets/hero-machine.jpg';
  const description = document.getElementById('prodDescription').value.trim();

  let categorySlug = 'other';
  if (category.includes('Oil')) categorySlug = 'oil-atm';
  else if (category.includes('Reverse Osmosis')) categorySlug = 'reverse-osmosis';
  else if (category.includes('Ultra Filtration')) categorySlug = 'ultra-filtration';
  else if (category.includes('Water Vending')) categorySlug = 'water-vending';
  else if (category.includes('Milk ATM')) categorySlug = 'milk-atm';
  else if (category.includes('Pasteurizer')) categorySlug = 'milk-pasteurizer';
  else if (category.includes('Packaging')) categorySlug = 'accessories';

  const products = DataStore.getProducts();

  if (currentEditingProductId) {
    // Update existing
    const idx = products.findIndex(p => p.id === currentEditingProductId);
    if (idx !== -1) {
      products[idx] = {
        ...products[idx],
        name,
        category,
        categorySlug,
        solutionType,
        price,
        priceFormatted: 'KSh ' + price.toLocaleString(),
        badge,
        featured,
        imageUrl,
        description
      };
      showAdminToast(`Product "${name}" updated successfully!`);
    }
  } else {
    // Add new
    const newId = 'prod_' + Date.now();
    products.unshift({
      id: newId,
      name,
      category,
      categorySlug,
      solutionType,
      price,
      priceFormatted: 'KSh ' + price.toLocaleString(),
      badge,
      featured,
      imageUrl,
      description,
      specs: { "Fabrication": "Food Grade Stainless Steel", "Warranty": "1 Year Official" }
    });
    showAdminToast(`New product "${name}" added to catalog!`);
  }

  DataStore.saveProducts(products);
  document.getElementById('productModal').classList.remove('open');
  renderProductsTable();
}

window.deleteProduct = function(productId) {
  const products = DataStore.getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (confirm(`Are you sure you want to delete "${product.name}"? This action cannot be undone.`)) {
    const updated = products.filter(p => p.id !== productId);
    DataStore.saveProducts(updated);
    renderProductsTable();
    showAdminToast(`Product "${product.name}" deleted.`);
  }
};

/* ---------------- BLOG MANAGER ---------------- */
let currentEditingBlogId = null;

function initBlogsAdmin() {
  renderBlogsAdminGrid();

  const btnNewBlog = document.getElementById('btnNewBlog');
  const blogModal = document.getElementById('blogModal');
  const closeBlogModal = document.getElementById('closeBlogModal');

  if (btnNewBlog) {
    btnNewBlog.addEventListener('click', () => {
      currentEditingBlogId = null;
      document.getElementById('blogModalTitle').textContent = 'Write New Blog Article';
      document.getElementById('blogForm').reset();
      document.getElementById('blogImgPreview').src = 'assets/industries/commercial.jpg';
      blogModal.classList.add('open');
    });
  }

  if (closeBlogModal) {
    closeBlogModal.addEventListener('click', () => {
      blogModal.classList.remove('open');
    });
  }

  // Blog Image Upload
  const blogImgFile = document.getElementById('blogImgFile');
  if (blogImgFile) {
    blogImgFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          const base64 = evt.target.result;
          document.getElementById('blogImgPreview').src = base64;
          document.getElementById('blogImageUrl').value = base64;

          fetch('/api/upload-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: file.name, base64: base64 })
          })
          .then(res => res.json())
          .then(data => {
            if (data.success && data.url) {
              document.getElementById('blogImageUrl').value = data.url;
            }
          })
          .catch(() => {});
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Blog Form Submit
  const blogForm = document.getElementById('blogForm');
  if (blogForm) {
    blogForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveBlogFormData();
    });
  }
}

function renderBlogsAdminGrid() {
  const container = document.getElementById('adminBlogsGrid');
  if (!container) return;

  const blogs = DataStore.getBlogs();
  container.innerHTML = '';

  blogs.forEach(b => {
    const card = document.createElement('div');
    card.className = 'blog-admin-card';
    card.innerHTML = `
      <img src="${b.imageUrl}" class="blog-admin-thumb" alt="${b.title}" onerror="this.onerror=null;this.src='assets/industries/commercial.jpg';">
      <div class="blog-admin-body">
        <span class="blog-admin-meta">${b.category} &bull; ${b.date}</span>
        <h4 class="blog-admin-title">${b.title}</h4>
        <p class="blog-admin-excerpt">${b.excerpt}</p>
        <div class="blog-admin-footer">
          <span style="font-size:0.75rem; color:#64748B;">By ${b.author}</span>
          <div class="action-btns-group">
            <button class="btn-table-action" onclick="openEditBlogModal('${b.id}')">Edit</button>
            <button class="btn-table-action delete" onclick="deleteBlog('${b.id}')">Delete</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  updateDashboardKPIs();
}

window.openEditBlogModal = function(blogId) {
  const blogs = DataStore.getBlogs();
  const blog = blogs.find(b => b.id === blogId);
  if (!blog) return;

  currentEditingBlogId = blogId;
  document.getElementById('blogModalTitle').textContent = `Edit Article: ${blog.title}`;

  document.getElementById('blogTitle').value = blog.title;
  document.getElementById('blogCategory').value = blog.category;
  document.getElementById('blogAuthor').value = blog.author;
  document.getElementById('blogImageUrl').value = blog.imageUrl;
  document.getElementById('blogImgPreview').src = blog.imageUrl;
  document.getElementById('blogExcerpt').value = blog.excerpt;
  document.getElementById('blogContent').value = blog.content;

  document.getElementById('blogModal').classList.add('open');
};

function saveBlogFormData() {
  const title = document.getElementById('blogTitle').value.trim();
  const category = document.getElementById('blogCategory').value.trim();
  const author = document.getElementById('blogAuthor').value.trim();
  const imageUrl = document.getElementById('blogImageUrl').value.trim() || 'assets/industries/commercial.jpg';
  const excerpt = document.getElementById('blogExcerpt').value.trim();
  const content = document.getElementById('blogContent').value.trim();

  const blogs = DataStore.getBlogs();
  const now = new Date();
  const dateStr = now.toLocaleString('default', { month: 'long', year: 'numeric' });

  if (currentEditingBlogId) {
    const idx = blogs.findIndex(b => b.id === currentEditingBlogId);
    if (idx !== -1) {
      blogs[idx] = {
        ...blogs[idx],
        title,
        category,
        author,
        imageUrl,
        excerpt,
        content
      };
      showAdminToast(`Blog article "${title}" updated!`);
    }
  } else {
    const newId = 'blog_' + Date.now();
    blogs.unshift({
      id: newId,
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category,
      date: dateStr,
      author,
      imageUrl,
      excerpt,
      content
    });
    showAdminToast(`New blog article published!`);
  }

  DataStore.saveBlogs(blogs);
  document.getElementById('blogModal').classList.remove('open');
  renderBlogsAdminGrid();
}

window.deleteBlog = function(blogId) {
  const blogs = DataStore.getBlogs();
  const blog = blogs.find(b => b.id === blogId);
  if (!blog) return;

  if (confirm(`Are you sure you want to delete article "${blog.title}"?`)) {
    const updated = blogs.filter(b => b.id !== blogId);
    DataStore.saveBlogs(updated);
    renderBlogsAdminGrid();
    showAdminToast(`Blog article deleted.`);
  }
};

/* ---------------- WEBSITE SETTINGS MANAGER ---------------- */
function initSettingsAdmin() {
  const settings = DataStore.getSettings();

  // Populate form fields
  document.getElementById('setCompanyName').value = settings.companyName || '';
  document.getElementById('setTagline').value = settings.tagline || '';
  document.getElementById('setPhone').value = settings.phone || '';
  document.getElementById('setPhoneDisplay').value = settings.phoneDisplay || '';
  document.getElementById('setWhatsapp').value = settings.whatsapp || '';
  document.getElementById('setEmail').value = settings.email || '';
  document.getElementById('setEmailAlt').value = settings.emailAlt || '';
  document.getElementById('setAddress').value = settings.address || '';
  document.getElementById('setWorkingHours').value = settings.workingHours || '';

  document.getElementById('setHeroTitle').value = settings.heroTitle || '';
  document.getElementById('setHeroSubtitle').value = settings.heroSubtitle || '';
  document.getElementById('setHeroTag').value = settings.heroTag || '';
  document.getElementById('setHeroImage').value = settings.heroImage || '';

  document.getElementById('setStatInstallations').value = settings.statInstallations || 1248;
  document.getElementById('setStatSatisfaction').value = settings.statSatisfaction || 98;
  document.getElementById('setStatPartners').value = settings.statPartners || 12;

  // Handle Settings Save
  const form = document.getElementById('settingsForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const updated = {
        companyName: document.getElementById('setCompanyName').value.trim(),
        tagline: document.getElementById('setTagline').value.trim(),
        phone: document.getElementById('setPhone').value.trim(),
        phoneDisplay: document.getElementById('setPhoneDisplay').value.trim(),
        whatsapp: document.getElementById('setWhatsapp').value.trim(),
        email: document.getElementById('setEmail').value.trim(),
        emailAlt: document.getElementById('setEmailAlt').value.trim(),
        address: document.getElementById('setAddress').value.trim(),
        workingHours: document.getElementById('setWorkingHours').value.trim(),
        heroTitle: document.getElementById('setHeroTitle').value.trim(),
        heroSubtitle: document.getElementById('setHeroSubtitle').value.trim(),
        heroTag: document.getElementById('setHeroTag').value.trim(),
        heroImage: document.getElementById('setHeroImage').value.trim(),
        statInstallations: parseInt(document.getElementById('setStatInstallations').value, 10) || 1248,
        statSatisfaction: parseInt(document.getElementById('setStatSatisfaction').value, 10) || 98,
        statPartners: parseInt(document.getElementById('setStatPartners').value, 10) || 12
      };

      DataStore.saveSettings(updated);
      showAdminToast('Website settings & contact details saved successfully!');
      updateDashboardKPIs();
    });
  }
}

/* ---------------- MEDIA GALLERY & DIRECT FILE UPLOAD ---------------- */
function initMediaAdmin() {
  const uploadInput = document.getElementById('mediaFileInput');
  const mediaGrid = document.getElementById('mediaGalleryGrid');

  const defaultAssets = [
    { name: "Hero Showcase Machine", url: "assets/hero-machine.jpg" },
    { name: "Cooking Oil ATM 20L", url: "assets/products/oil-atm-20l.jpg" },
    { name: "Commercial RO 500 LPH", url: "assets/products/ro-500lph.jpg" },
    { name: "Ultra Filtration System", url: "assets/products/ultra-filtration.jpg" },
    { name: "Water ATM Cabinet", url: "assets/products/water-atm-cabinet.jpg" },
    { name: "Milk ATM 100 Liters", url: "assets/products/milk-atm-100l.jpg" },
    { name: "Milk Pasteurizer 100L", url: "assets/products/milk-pasteurizer-100l.jpg" },
    { name: "Commercial Property", url: "assets/industries/commercial.jpg" },
    { name: "Hospitality Industry", url: "assets/industries/hospitality.jpg" },
    { name: "Healthcare Industry", url: "assets/industries/healthcare.jpg" },
    { name: "Education Industry", url: "assets/industries/education.jpg" }
  ];

  function renderGallery() {
    if (!mediaGrid) return;
    mediaGrid.innerHTML = '';

    // Load any user uploaded images from storage
    const custom = JSON.parse(localStorage.getItem('johntech_custom_media') || '[]');
    const allMedia = [...custom, ...defaultAssets];

    allMedia.forEach(m => {
      const card = document.createElement('div');
      card.style.cssText = 'background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.04);';
      card.innerHTML = `
        <img src="${m.url}" style="height:140px; width:100%; object-fit:cover;" onerror="this.onerror=null;this.src='assets/hero-machine.jpg';">
        <div style="padding:12px;">
          <strong style="font-size:0.8125rem; color:#0A1C38; display:block; margin-bottom:4px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${m.name}</strong>
          <input type="text" value="${m.url}" readonly style="width:100%; font-size:0.75rem; padding:4px 6px; border:1px solid #E2E8F0; border-radius:4px; margin-bottom:8px;">
          <button class="btn-admin-secondary" style="width:100%; padding:6px; font-size:0.75rem;" onclick="copyMediaUrl('${m.url}')">
            Copy Image URL
          </button>
        </div>
      `;
      mediaGrid.appendChild(card);
    });
  }

  if (uploadInput) {
    uploadInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          const base64 = evt.target.result;
          fetch('/api/upload-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: file.name, base64: base64 })
          })
          .then(res => res.json())
          .then(data => {
            const url = data.success && data.url ? data.url : base64;
            const custom = JSON.parse(localStorage.getItem('johntech_custom_media') || '[]');
            custom.unshift({ name: file.name, url: url });
            localStorage.setItem('johntech_custom_media', JSON.stringify(custom));
            renderGallery();
            showAdminToast(`Uploaded image "${file.name}"!`);
          })
          .catch(() => {
            const custom = JSON.parse(localStorage.getItem('johntech_custom_media') || '[]');
            custom.unshift({ name: file.name, url: base64 });
            localStorage.setItem('johntech_custom_media', JSON.stringify(custom));
            renderGallery();
            showAdminToast(`Uploaded image "${file.name}" locally!`);
          });
        };
        reader.readAsDataURL(file);
      }
    });
  }

  window.copyMediaUrl = function(url) {
    navigator.clipboard.writeText(url).then(() => {
      showAdminToast('Copied image URL to clipboard!');
    });
  };

  renderGallery();
}

/* ---------------- BACKUP & FACTORY RESET ---------------- */
function initBackupAdmin() {
  const btnExport = document.getElementById('btnExportData');
  const importInput = document.getElementById('importDataFile');
  const btnReset = document.getElementById('btnResetDefaults');

  if (btnExport) {
    btnExport.addEventListener('click', () => {
      const backup = {
        products: DataStore.getProducts(),
        blogs: DataStore.getBlogs(),
        settings: DataStore.getSettings(),
        exportedAt: new Date().toISOString()
      };
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `johntech_backup_${Date.now()}.json`;
      a.click();
      showAdminToast('Exported complete website database backup!');
    });
  }

  if (importInput) {
    importInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          try {
            const data = JSON.parse(evt.target.result);
            if (data.products) DataStore.saveProducts(data.products);
            if (data.blogs) DataStore.saveBlogs(data.blogs);
            if (data.settings) DataStore.saveSettings(data.settings);
            alert('Website database imported successfully! Reloading...');
            window.location.reload();
          } catch(err) {
            alert('Invalid JSON file format!');
          }
        };
        reader.readAsText(file);
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all products, prices, blogs, and settings back to factory defaults? All manual changes will be cleared.')) {
        DataStore.resetAll();
        alert('Website reset to default factory specifications! Reloading...');
        window.location.reload();
      }
    });
  }
}
