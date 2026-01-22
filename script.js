/* JS extracted from index.html */
// Loading Screen Management
function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader && !loader.classList.contains('fade-out')) {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
}

// Hide loader after load or 5s max
window.addEventListener('load', hideLoader);
setTimeout(hideLoader, 5000); 

// Example Designs Data
const exampleDesigns = {
  'animation-1': { id: 'animation-1', name: "Cinematic Romance", category: 'animation', desc: "Film posteri tarzında romantik çiftler", images: ['🎬', '🎥', '✨'] },
  'animation-2': { id: 'animation-2', name: "Kawaii Love", category: 'animation', desc: "Sevimli anime tarzı karakterler", images: ['💕', '🧸', '🍭'] },
  'animation-3': { id: 'animation-3', name: "Watercolor Dreams", category: 'animation', desc: "Suluboya tarzı romantik sahneler", images: ['🌸', '🎨', '🖌️'] },
  'animation-4': { id: 'animation-4', name: "Disney Magic", category: 'animation', desc: "Peri masalı tarzı çift illüstrasyonları", images: ['✨', '🏰', '👑'] },
  'animation-5': { id: 'animation-5', name: "Comic Book Love", category: 'animation', desc: "Çizgi roman sanat tarzı", images: ['🎨', '💥', '🗯️'] },
  
  'album-1': { id: 'album-1', name: "Polaroid Memories", category: 'album', desc: "Vintage fotoğraf kolajı", images: ['📸', '🎞️', '📮'] },
  'album-2': { id: 'album-2', name: "Music Festival", category: 'album', desc: "Konser ve etkinlik anıları", images: ['🎵', '🎸', '🎟️'] },
  'album-3': { id: 'album-3', name: "Travel Journal", category: 'album', desc: "Macera fotoğrafları albümü", images: ['🌍', '✈️', '🗺️'] },
  'album-4': { id: 'album-4', name: "Party Time", category: 'album', desc: "Kutlama anları", images: ['🎉', '🎈', '🍰'] },
  'album-5': { id: 'album-5', name: "Summer Vibes", category: 'album', desc: "Plaj ve tatil fotoğrafları", images: ['🏖️', '☀️', '🍹'] },
  
  'kisisel-1': { id: 'kisisel-1', name: "Minimal Moon", category: 'kisisel', desc: "Temiz minimal tasarım", images: ['🌙', '⭐', '🌌'] },
  'kisisel-2': { id: 'kisisel-2', name: "Nature Serenity", category: 'kisisel', desc: "Botanik minimalizm", images: ['🌿', '🍃', '🌱'] },
  'kisisel-3': { id: 'kisisel-3', name: "Cosmic Dreams", category: 'kisisel', desc: "Uzay ve galaksi teması", images: ['⭐', '🚀', '🔭'] },
  'kisisel-4': { id: 'kisisel-4', name: "Goal Getter", category: 'kisisel', desc: "Verimlilik odaklı", images: ['🎯', '📝', '⌛'] },
  'kisisel-5': { id: 'kisisel-5', name: "Luxury Life", category: 'kisisel', desc: "Premium ve zarif estetik", images: ['💎', '✨', '⚜️'] }
};

// Products Data
const products = [
  {
    id: 1,
    name: "Romantik Animasyon",
    style: "Disney Pixar style",
    price: "₺450",
    badge: "POPÜLER",
    emoji: "🎨",
    category: "couple"
  },
  {
    id: 2,
    name: "Romantik Anime",
    style: "Makoto Shinkai style",
    price: "₺480",
    badge: "",
    emoji: "🌸",
    category: "couple"
  },
  {
    id: 3,
    name: "Ghibli İllüstrasyonu",
    style: "Studio Ghibli",
    price: "₺470",
    badge: "YENİ",
    emoji: "🍃",
    category: "couple"
  },
  {
    id: 4,
    name: "En İyi Arkadaş",
    style: "Best Friends Illustrated",
    price: "₺520",
    badge: "",
    emoji: "👯‍♀️",
    category: "friends"
  },
  {
    id: 5,
    name: "Sinematik Aşk",
    style: "Arcane style",
    price: "₺590",
    badge: "POPÜLER",
    emoji: "⚡",
    category: "alone"
  },
  {
    id: 6,
    name: "Ofis Şıklığı",
    style: "Minimal Business",
    price: "₺550",
    badge: "",
    emoji: "💼",
    category: "alone"
  },
  {
    id: 7,
    name: "Profesyonel Notlar",
    style: "Professional Leather Look",
    price: "₺580",
    badge: "",
    emoji: "📓",
    category: "alone"
  },
  {
    id: 8,
    name: "Minimalist Beyaz",
    style: "Clean & Simple",
    price: "₺440",
    badge: "",
    emoji: "⚪",
    category: "alone"
  },
  {
    id: 9,
    name: "Sonsuz Dostluk",
    style: "Friends Forever",
    price: "₺490",
    badge: "YENİ",
    emoji: "🤝",
    category: "friends"
  },
  {
    id: 10,
    name: "Suluboya Anılar",
    style: "Watercolor Memories",
    price: "₺460",
    badge: "",
    emoji: "🎨",
    category: "friends"
  },
  {
    id: 11,
    name: "Girişimci Ruhu",
    style: "Entrepreneur Style",
    price: "₺470",
    badge: "",
    emoji: "🚀",
    category: "alone"
  },
  {
    id: 12,
    name: "Masalsı Aşk",
    style: "Fairytale Romance",
    price: "₺510",
    badge: "POPÜLER",
    emoji: "🧚",
    category: "alone"
  },
];

const views = ["📕", "📔", "📖", "📓"];
let currentProduct = null;

// Filter Products Logic
function filterProducts(category) {
  // Update Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
     if(btn.dataset.filter === category) {
       btn.classList.add('active');
     } else {
       btn.classList.remove('active');
     }
  });

  // Filter Data
  const filtered = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);
  
  // Re-render
  renderProducts(filtered);
}

function renderProducts(items) {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = ""; // Clear existing

    // Observer needs to be re-attached to new elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    items.forEach((product, index) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.style.animationDelay = `${index * 0.1}s`;
      card.onclick = () => showProductDetail(product);

      card.innerHTML = `
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ""}
                <div class="product-image">
                  ${product.image ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">` : product.emoji}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.style}</p>
                    <div class="product-price">${product.price}</div>
                </div>
            `;

      grid.appendChild(card);
      observer.observe(card);
    });
}

// Show Product Detail
function showProductDetail(product) {
  currentProduct = product;
  document.getElementById("detailTitle").textContent = product.name;
  document.getElementById("detailPrice").textContent = product.price;

  // Hide special design button for regular products
  document.getElementById('designThisButton').style.display = 'none';
  document.getElementById('orderButton').style.display = 'block';

  const mainImage = document.getElementById("mainImage");
  if (product.image) {
    mainImage.innerHTML = `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain;">`;
  } else {
    mainImage.textContent = views[0];
  }

  // Setup generic thumbnails for regular products
  const thumbGrid = document.getElementById('thumbnailGrid');
  thumbGrid.innerHTML = views.map((view, idx) => `
    <div class="thumbnail ${idx === 0 ? 'active' : ''}" onclick="changeGalleryView(${idx}, 'product')">
      ${idx === 0 ? 'Ön' : idx === 1 ? 'Arka' : idx === 2 ? 'Açık' : 'Yan'} Görünüm<br />${view}
    </div>
  `).join('');

  // Switch pages
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("detailPage").classList.add("active");
  window.scrollTo(0, 0);
}

// Show Example Design Detail
function showExampleDetail(id) {
    const design = exampleDesigns[id];
    if (!design) return;

    lastView = 'category';
    lastCategory = design.category;

    document.getElementById("detailTitle").textContent = design.name;
    document.getElementById("detailPrice").textContent = "Özel Tasarım Defter";

    // Show special design button
    const designBtn = document.getElementById('designThisButton');
    designBtn.style.display = 'block';
    designBtn.onclick = () => openDesignerWithCategory(design.category);
    
    // Update order button for example
    const orderBtn = document.getElementById('orderButton');
    orderBtn.style.display = 'block';
    orderBtn.href = `https://wa.me/905359287488?text=Merhaba! '${design.name}' tasarım örneği hakkında bilgi almak istiyorum.`;

    const mainImage = document.getElementById("mainImage");
    mainImage.textContent = design.images[0];
    mainImage.style.fontSize = "5rem";

    // Setup thumbnails for example designs
    const thumbGrid = document.getElementById('thumbnailGrid');
    thumbGrid.innerHTML = design.images.map((img, idx) => `
      <div class="thumbnail ${idx === 0 ? 'active' : ''}" onclick="changeGalleryView(${idx}, 'example', '${id}')">
        Görünüm ${idx + 1}<br />${img}
      </div>
    `).join('');

    // Hide categories and show detail
    document.querySelectorAll('.category-page').forEach(page => page.classList.add('hidden'));
    document.getElementById("detailPage").classList.add("active");
    window.scrollTo(0, 0);
}

// Unified Gallery View Changer
function changeGalleryView(index, type, id) {
    const mainImage = document.getElementById("mainImage");
    if (type === 'example') {
        const design = exampleDesigns[id];
        mainImage.textContent = design.images[index];
    } else {
        if (currentProduct && currentProduct.image && index === 0) {
            mainImage.innerHTML = `<img src="${currentProduct.image}" alt="${currentProduct.name}" style="width: 100%; height: 100%; object-fit: contain;">`;
        } else {
            mainImage.textContent = views[index];
        }
    }
    
    // Update active thumbnail
    document.querySelectorAll("#thumbnailGrid .thumbnail").forEach((thumb, idx) => {
        thumb.classList.toggle("active", idx === index);
    });
}

// Updated Back Button Handler
function showHome() {
    document.getElementById("detailPage").classList.remove("active");
    
    if (lastView === 'category' && lastCategory) {
        const categoryPage = document.getElementById(`${lastCategory}-page`);
        if (categoryPage) {
            categoryPage.classList.remove('hidden');
        }
    } else {
        document.getElementById("homePage").classList.remove("hidden");
        document.getElementById("homePage").style.display = 'block';
    }
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
document
  .getElementById("menuToggle")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("mainNav").classList.toggle("active");
  });

// Close mobile menu when clicking on a link
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menuToggle").classList.remove("active");
    document.getElementById("mainNav").classList.remove("active");
  });
});

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe product cards when they're added
setTimeout(() => {
  document.querySelectorAll(".product-card").forEach((card) => {
    observer.observe(card);
  });
}, 100);

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  // Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if(menuToggle && mainNav) {
      menuToggle.addEventListener('click', () => {
          menuToggle.classList.toggle('active');
          mainNav.classList.toggle('active');
          document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
      });

      // Close menu when clicking links
      mainNav.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
              menuToggle.classList.remove('active');
              mainNav.classList.remove('active');
              document.body.style.overflow = '';
          });
      });
  }

   // Initialize Products Grid
   // Replaced custom loop with filterProducts('all') to init the grid
   filterProducts('all');
});

// --- Custom Designer Logic ---
let userText = "";
let bgColor = "#ffffff";
let selectedLayout = "Cizgili";
let selectedPageCount = "80 Sayfa";
let selectedStyle = "Disney Pixar (Romantik)";
let selectedCategory = ""; // New Variable

// Initialize Selection Logic
function initDesignerSelectors() {
  // Layout Selector
  const layoutSelector = document.getElementById('layoutSelector');
  if (layoutSelector) {
    layoutSelector.querySelectorAll('.selection-card').forEach(card => {
      card.addEventListener('click', () => {
        layoutSelector.querySelectorAll('.selection-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        selectedLayout = card.dataset.value;
        updateSummary();
      });
    });
  }

  // Page Count Selector
  const pageCountSelector = document.getElementById('pageCountSelector');
  if (pageCountSelector) {
    pageCountSelector.querySelectorAll('.selection-card').forEach(card => {
      card.addEventListener('click', () => {
        pageCountSelector.querySelectorAll('.selection-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        selectedPageCount = card.dataset.value;
        updateSummary();
      });
    });
  }

  // Style Selector (Across all categories)
  document.querySelectorAll('.style-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.style-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedStyle = card.dataset.value;
      updateSummary();
    });
  });

  // Color Picker
  const colorPicker = document.getElementById('colorPicker');
  if (colorPicker) {
    colorPicker.querySelectorAll('.color-option').forEach(opt => {
      opt.addEventListener('click', () => {
        colorPicker.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        bgColor = opt.dataset.color;
        updateSummary();
      });
    });
  }
}

function updateTextFromInput() {
  const textInput = document.getElementById('textInput');
  userText = textInput.value;
  updateSummary();
}

function updateSummary() {
  if (document.getElementById('summaryLayout')) document.getElementById('summaryLayout').textContent = selectedLayout;
  if (document.getElementById('summaryPages')) document.getElementById('summaryPages').textContent = selectedPageCount;
  if (document.getElementById('summaryStyle')) document.getElementById('summaryStyle').textContent = selectedStyle;
  if (document.getElementById('summaryText')) document.getElementById('summaryText').textContent = userText || "-";
  
  // Color Translate
  const colorMap = {
    "#ffffff": "Beyaz",
    "#000000": "Siyah",
    "#1a1a1a": "Antrasit",
    "#f4f1ea": "Krem",
    "#e2e8f0": "Gri",
    "#ffb7b2": "Pembe"
  };
  if (document.getElementById('summaryColor')) {
    document.getElementById('summaryColor').textContent = colorMap[bgColor] || bgColor;
  }
}

// New: Select Category Logic
function selectCategory(category) {
  selectedCategory = category;
  
  // Hide Category Selector, Show Tools
  document.getElementById('designCategorySelector').style.display = 'none';
  document.getElementById('designToolsWrapper').style.display = 'block';

  // Filter Styles
  const romanticStyles = document.getElementById('romanticStyles');
  const friendsStyles = document.getElementById('friendsStyles');
  const cinematicStyles = document.getElementById('cinematicStyles');
  const modernStyles = document.getElementById('modernStyles');
  const fantasyStyles = document.getElementById('fantasyStyles');

  // Hide all first
  romanticStyles.style.display = 'none';
  friendsStyles.style.display = 'none';
  cinematicStyles.style.display = 'none';
  modernStyles.style.display = 'none';
  fantasyStyles.style.display = 'none';

  // Show relevant ones based on new categories
  if (category === 'animation') {
    romanticStyles.style.display = 'block';
    cinematicStyles.style.display = 'block';
    // Set default style for this category
    setDefaultStyle('Disney Pixar (Romantik)');
  } else if (category === 'album') {
    friendsStyles.style.display = 'block';
    setDefaultStyle('Best Friends Illustrated');
  } else if (category === 'kisisel') {
    modernStyles.style.display = 'block';
    fantasyStyles.style.display = 'block';
    setDefaultStyle('Arcane Stili');
  }
}

function setDefaultStyle(styleName) {
  selectedStyle = styleName;
  // Visual update for active class
  document.querySelectorAll('.style-card').forEach(c => c.classList.remove('active'));
  const targetCard = document.querySelector(`.style-card[data-value="${styleName}"]`);
  if(targetCard) targetCard.classList.add('active');
  updateSummary();
}

function resetCategorySelection() {
  document.getElementById('designCategorySelector').style.display = 'block';
  document.getElementById('designToolsWrapper').style.display = 'none';
}

// Updated Finish Design - DIRECT WhatsApp Link
function finishDesign() {
    const colorName = document.getElementById('summaryColor').textContent;
    
    let categoryLabel = "Belirtilmedi";
    if (selectedCategory === 'animation') categoryLabel = "Animation Style";
    if (selectedCategory === 'album') categoryLabel = "Album Style";
    if (selectedCategory === 'kisisel') categoryLabel = "Kişisel Style";

    const messageText = `*YENİ DEFTER SİPARİŞİ (ÖZEL TASARIM)*\n\n` +
                        `• Kategori: ${categoryLabel}\n` +
                        `• Boyut: A5 (Standard)\n` +
                        `• Sayfa Düzeni: ${selectedLayout}\n` +
                        `• Sayfa Sayısı: ${selectedPageCount}\n` +
                        `• Tasarım Stili: ${selectedStyle}\n` +
                        `• Kapak Rengi: ${colorName}\n` +
                        `• Kapak Metni: ${userText || 'Yok'}\n\n` +
                        `Merhaba! Özel tasarım defterimi sipariş etmek istiyorum. Kapakta kullanılacak fotoğrafı da şimdi gönderiyorum.`;

    const waUrl = `https://wa.me/905359287488?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');
}

// Category Navigation Functions
let preselectedCategory = null;

let lastView = 'home';
let lastCategory = null;

function navigateToCategory(category) {
    console.log('Navigating to category:', category);
    lastView = 'category';
    lastCategory = category;
    
    // Hide the entire home page
    const homePage = document.getElementById('homePage');
    if (homePage) {
        homePage.style.display = 'none';
    }
    
    // Hide all category pages first
    document.querySelectorAll('.category-page').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show selected category page
    const pageId = `${category}-page`;
    const categoryPage = document.getElementById(pageId);
    console.log('Looking for page:', pageId, 'Found:', categoryPage);
    
    if (categoryPage) {
        categoryPage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Update URL hash
        window.location.hash = category;
    } else {
        console.error('Category page not found:', pageId);
    }
}

function backToCategories() {
    // Hide all category pages
    document.querySelectorAll('.category-page').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show the entire home page
    const homePage = document.getElementById('homePage');
    if (homePage) {
        homePage.style.display = 'block';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Clear URL hash
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function openDesignerWithCategory(category) {
    preselectedCategory = category;
    openDesigner();
}

function openDesigner() {
    document.getElementById('designerModal').style.display = 'block';
    initDesignerSelectors();
    
    // If category is pre-selected, skip category selection and go to style selection
    if (preselectedCategory) {
        selectCategory(preselectedCategory);
        preselectedCategory = null; // Reset for next time
    } else {
        resetCategorySelection(); // Ensure we start at category selection
    }
    
    document.body.style.overflow = 'hidden'; 
}

function closeDesigner() {
    document.getElementById('designerModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on click outside
window.onclick = function(event) {
    const modal = document.getElementById('designerModal');
    if (event.target == modal) {
        closeDesigner();
    }
}

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const header = document.querySelector('header');
  
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
