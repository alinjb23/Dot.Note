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
  'animation-1': { id: 'animation-1', name: "Disney Pixar Style", category: 'animation', styleVal: 'Disney Pixar (Romantik)', desc: "Film posteri tarzında romantik çiftler", price: "500 ₺", images: ['cinematic-romance-1.png', 'cinematic-romance-2.jpg', 'cinematic-romance-3.png'] },
  'animation-2': { id: 'animation-2', name: "Anime Cinema Style", category: 'animation', styleVal: 'Anime (Makoto Shinkai)', desc: "Sevimli anime tarzı karakterler", price: "500 ₺", images: ['anime-cinema-style.jpg', 'anime-cinema-style-2.jpg', 'anime-cinema-style-3.jpg'] },
  'animation-3': { id: 'animation-3', name: "Studio Ghibli Çizim Stili", category: 'animation', styleVal: 'Studio Ghibli', desc: "Suluboya tarzı romantik sahneler", price: "500 ₺", images: ['ghibli-style-1.jpg', 'ghibli-style-2.jpg', 'ghibli-style-3.jpg'] },
  
  'magazin-1': { id: 'magazin-1', name: "Dot Editorial Magazine", category: 'magazin', styleVal: 'Best Friends Illustrated', desc: "16 sayfalık kişiselleştirilmiş magazin dergisi", price: "450 ₺", images: ['📸', '🎞️', '📮'] },
  
  'kisisel-1': { id: 'kisisel-1', name: "Minimal Moon", category: 'kisisel', styleVal: 'Minimalist İllüstrasyon', desc: "Temiz minimal tasarım", images: ['🌙', '⭐', '🌌'] },
  'kisisel-2': { id: 'kisisel-2', name: "Nature Serenity", category: 'kisisel', styleVal: 'Yüksek Kalite Editoryal', desc: "Botanik minimalizm", images: ['🌿', '🍃', '🌱'] },
  'kisisel-3': { id: 'kisisel-3', name: "Cosmic Dreams", category: 'kisisel', styleVal: 'Masalsı İllüstrasyon', desc: "Uzay ve galaksi teması", images: ['⭐', '🚀', '🔭'] },
  'kisisel-4': { id: 'kisisel-4', name: "Goal Getter", category: 'kisisel', styleVal: 'Minimalist İllüstrasyon', desc: "Verimlilik odaklı", images: ['🎯', '📝', '⌛'] },
  'kisisel-5': { id: 'kisisel-5', name: "Luxury Life", category: 'kisisel', styleVal: 'Yüksek Kalite Editoryal', desc: "Premium ve zarif estetik", images: ['💎', '✨', '⚜️'] }
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

  // Show/setup order button for regular products
  const orderBtn = document.getElementById('orderButton');
  if (orderBtn) {
    orderBtn.style.display = 'block';
    orderBtn.onclick = () => {
      window.open(`https://wa.me/905359287488?text=Merhaba! '${product.name}' ürünü hakkında bilgi almak istiyorum.`, '_blank');
    };
  }

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
      ${view}
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
    document.getElementById("detailPrice").textContent = design.price || "Özel Tasarım Defter";

    // Show special design button

    // Update order button for example
    const orderBtn = document.getElementById('orderButton');
    console.log('Setting up order button for example design:', design.name);
    console.log('Order button element:', orderBtn);
    
    if (orderBtn) {
        orderBtn.style.display = 'block';
        orderBtn.onclick = (e) => {
            console.log('===== ORDER BUTTON CLICKED ===');
            console.log('Design data:', design);
            if (design.category === 'magazin') {
                openMagazineDesigner();
                return;
            }
            console.log('About to call openCustomizationModal');
            try {
                openCustomizationModal(design);
                console.log('openCustomizationModal called successfully');
            } catch (error) {
                console.error('Error calling openCustomizationModal:', error);
            }
        };
        console.log('Order button onclick handler set');
    } else {
        console.error('Order button not found');
    }

    const mainImage = document.getElementById("mainImage");
    const firstImg = design.images[0];
    
    if (firstImg.endsWith('.png') || firstImg.endsWith('.jpg') || firstImg.endsWith('.jpeg') || firstImg.endsWith('.webp')) {
      mainImage.innerHTML = `<img src="${firstImg}" alt="${design.name}" style="width: 100%; height: 100%; object-fit: contain;">`;
      mainImage.style.fontSize = "initial";
    } else {
      mainImage.textContent = firstImg;
      mainImage.style.fontSize = "5rem";
    }

    // Setup thumbnails for example designs
    const thumbGrid = document.getElementById('thumbnailGrid');
    thumbGrid.innerHTML = design.images.map((img, idx) => {
      let thumbContent = img;
      if (img.endsWith('.png') || img.endsWith('.jpg') || img.endsWith('.jpeg') || img.endsWith('.webp')) {
        thumbContent = `<img src="${img}" style="width: 100%; height: 100%; object-fit: cover;">`;
      }
      return `
        <div class="thumbnail ${idx === 0 ? 'active' : ''}" onclick="changeGalleryView(${idx}, 'example', '${id}')">
          ${thumbContent}
        </div>
      `;
    }).join('');

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
        const selectedImg = design.images[index];
        if (selectedImg.endsWith('.png') || selectedImg.endsWith('.jpg') || selectedImg.endsWith('.jpeg') || selectedImg.endsWith('.webp')) {
            mainImage.innerHTML = `<img src="${selectedImg}" alt="${design.name}" style="width: 100%; height: 100%; object-fit: contain;">`;
            mainImage.style.fontSize = "initial";
        } else {
            mainImage.textContent = selectedImg;
            mainImage.style.fontSize = "5rem";
        }
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
let bgColor = "#1a1a1a";
let selectedLayout = "Cizgili";
let selectedPageCount = "200 Sayfa";
let selectedStyle = "Disney Pixar (Romantik)";
let selectedCategory = ""; // New Variable
let preselectedStyle = null;
let userTitle = ""; // New Variable for title
let userNames = ""; // New Variable for names


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
  const titleInput = document.getElementById('titleInput');
  const namesInput = document.getElementById('namesInput');
  userTitle = titleInput ? titleInput.value : "";
  userNames = namesInput ? namesInput.value : "";
  updateSummary();
}


function updateSummary() {
  if (document.getElementById('summaryLayout')) document.getElementById('summaryLayout').textContent = selectedLayout;
  if (document.getElementById('summaryPages')) document.getElementById('summaryPages').textContent = selectedPageCount;
  if (document.getElementById('summaryStyle')) document.getElementById('summaryStyle').textContent = selectedStyle;
  if (document.getElementById('summaryTitle')) document.getElementById('summaryTitle').textContent = userTitle || "-";
  if (document.getElementById('summaryNames')) document.getElementById('summaryNames').textContent = userNames || "-";
  
  // Color Translate
  const colorMap = {
    "#1a1a1a": "Antrasit",
    "#000000": "Siyah",
    "#f4f1ea": "Krem",
    "#4a1010": "Bordo",
    "#2d342d": "Haki"
  };
  if (document.getElementById('summaryColor')) {
    document.getElementById('summaryColor').textContent = colorMap[bgColor] || "Antrasit";
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
  const pageCountSelector = document.getElementById('pageCountSelector');
  if (pageCountSelector) {
    pageCountSelector.style.display = 'block'; // Default to show
  }

  if (category === 'animation') {
    romanticStyles.style.display = 'block';
    cinematicStyles.style.display = 'block';
    // Set default style for this category
    setDefaultStyle('Disney Pixar (Romantik)');
  } else if (category === 'magazin') {
    friendsStyles.style.display = 'block';
    setDefaultStyle('Best Friends Illustrated');
    
    // Fix page count to 16 for Magazin
    selectedPageCount = "16 Sayfa";
    if (pageCountSelector) {
      pageCountSelector.style.display = 'none'; // Hide selector for Magazin
    }
  } else if (category === 'kisisel') {
    modernStyles.style.display = 'block';
    fantasyStyles.style.display = 'block';
    setDefaultStyle('Arcane Stili');
  }

  // Handle pre-selected style (hide selection group)
  if (preselectedStyle) {
    setDefaultStyle(preselectedStyle);
    const styleGroup = document.getElementById('styleSelectionGroup');
    const backBtn = document.getElementById('backToCategoryBtn');
    
    if (styleGroup) styleGroup.style.display = 'none';
    if (backBtn) backBtn.style.display = 'none';
    
    preselectedStyle = null; // IMPORTANT: Reset after applying
  } else {
    const styleGroup = document.getElementById('styleSelectionGroup');
    const backBtn = document.getElementById('backToCategoryBtn');
    
    if (styleGroup) styleGroup.style.display = 'block';
    if (backBtn) backBtn.style.display = 'block';
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

// Helper to collect address details
function getAddressDetails(prefix = "") {
    const title = document.getElementById(`${prefix}addrTitleInput`)?.value || "Belirtilmedi";
    const firstName = document.getElementById(`${prefix}addrFirstNameInput`)?.value || "Belirtilmedi";
    const lastName = document.getElementById(`${prefix}addrLastNameInput`)?.value || "Belirtilmedi";
    const phone = document.getElementById(`${prefix}addrPhoneInput`)?.value || "Belirtilmedi";
    const full = document.getElementById(`${prefix}addrFullInput`)?.value || "Belirtilmedi";
    const province = document.getElementById(`${prefix}addrProvinceInput`)?.value || "Belirtilmedi";
    const district = document.getElementById(`${prefix}addrDistrictInput`)?.value || "Belirtilmedi";
    const mahalle = document.getElementById(`${prefix}addrMahalleInput`)?.value || "Belirtilmedi";
    const street = document.getElementById(`${prefix}addrStreetInput`)?.value || "Belirtilmedi";
    const binaNo = document.getElementById(`${prefix}addrBinaNoInput`)?.value || "Belirtilmedi";
    const daireNo = document.getElementById(`${prefix}addrDaireNoInput`)?.value || "Belirtilmedi";

    return `*TESLİMAT BİLGİLERİ*\n` +
           `• Adres Başlığı: ${title}\n` +
           `• Ad Soyad: ${firstName} ${lastName}\n` +
           `• Telefon: ${phone}\n` +
           `• Açık Adres: ${full}\n` +
           `• Mahalle: ${mahalle}\n` +
           `• Sokak/Cadde: ${street}\n` +
           `• Bina No: ${binaNo} / Daire: ${daireNo}\n` +
           `• İlçe/İl: ${district} / ${province}`;
}

function validateAddress(prefix = "") {
    const fields = [
        'addrTitleInput', 'addrFirstNameInput', 'addrLastNameInput', 'addrPhoneInput', 
        'addrFullInput', 'addrProvinceInput', 'addrDistrictInput', 'addrMahalleInput', 
        'addrStreetInput', 'addrBinaNoInput', 'addrDaireNoInput'
    ];
    
    let isValid = true;
    let firstMissingField = null;

    fields.forEach(fieldId => {
        const fullId = `${prefix}${fieldId}`;
        const input = document.getElementById(fullId);
        if (input) {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
                if (!firstMissingField) firstMissingField = input;
            } else {
                input.classList.remove('error');
            }
        }
    });

    if (!isValid) {
        if (firstMissingField) firstMissingField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        alert("Lütfen tüm teslimat bilgilerini eksiksiz doldurun.");
    }

    return isValid;
}

// Updated Finish Design - DIRECT WhatsApp Link
function finishDesign() {
    if (!validateAddress("")) return;
    
    const colorName = document.getElementById('summaryColor').textContent;
    
    let categoryLabel = "Belirtilmedi";
    if (selectedCategory === 'animation') categoryLabel = "Animation Style";
    if (selectedCategory === 'magazin') categoryLabel = "Magazin Style";
    if (selectedCategory === 'kisisel') categoryLabel = "Kişisel Style";

    const addressInfo = getAddressDetails("");

    const messageText = `*YENİ DEFTER SİPARİŞİ (ÖZEL TASARIM)*\n\n` +
                        `• Kategori: ${categoryLabel}\n` +
                        `• Boyut: A5 (Standard)\n` +
                        `• Sayfa Düzeni: ${selectedLayout}\n` +
                        `• Sayfa Sayısı: ${selectedPageCount}\n` +
                        `• Tasarım Stili: ${selectedStyle}\n` +
                        `• Fiyat: ${currentDesignData && currentDesignData.price ? currentDesignData.price : 'Teklif Alın'}\n` +
                        `• Kapak Rengi: ${colorName}\n` +
                        `• Kapak Başlığı: ${userTitle || 'Yok'}\n` +
                        `• İsimler: ${userNames || 'Yok'}\n\n` +
                        `${addressInfo}\n\n` +
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
    if (category === 'magazin') {
        openMagazineDesigner();
        return;
    }
    preselectedCategory = category;
    preselectedStyle = null;
    openDesigner();
}

function openDesignerWithStyle(category, styleName) {
    console.log('Opening designer for specific style:', styleName, 'in category:', category);
    preselectedCategory = category;
    preselectedStyle = styleName;
    openDesigner();
}

function openDesigner() {
    document.getElementById('designerModal').style.display = 'block';
    initDesignerSelectors();
    
    // If category is pre-selected, skip category selection and go to style selection
    if (preselectedCategory) {
        selectCategory(preselectedCategory);
        preselectedCategory = null; // Reset category
        // Note: preselectedStyle is checked inside selectCategory and reset there if needed
    } else {
        preselectedStyle = null; // Reset style if opening normally
        resetCategorySelection(); // Ensure we start at category selection
    }
    
    document.body.style.overflow = 'hidden'; 
}

function closeDesigner() {
    document.getElementById('designerModal').style.display = 'none';
    document.body.style.overflow = 'auto';
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

// --- Customization Modal Logic ---
let currentDesignData = null;
let customLayout = "Cizgili";
let customPageCount = "200 Sayfa";
let customBgColor = "#1a1a1a";
let customTitle = "";
let customNames = "";

function openCustomizationModal(designData) {
  console.log('===== openCustomizationModal CALLED =====');
  console.log('Design data received:', designData);
  
  currentDesignData = designData;
  
  // Reset to defaults
  customLayout = "Cizgili";
  customPageCount = "100 Sayfa";
  customBgColor = "#1a1a1a";
  customTitle = "";
  customNames = "";
  
  console.log('Defaults reset');
  
  // Update design info display
  const iconElement = document.getElementById('customSelectedDesignIcon');
  const nameElement = document.getElementById('customSelectedDesignName');
  const descElement = document.getElementById('customSelectedDesignDesc');
  
  console.log('Icon element:', iconElement);
  console.log('Name element:', nameElement);
  console.log('Desc element:', descElement);
  
  if (iconElement && nameElement && descElement) {
    // Check if first image is an actual image file or emoji
    const firstImg = designData.images[0];
    if (firstImg.endsWith('.png') || firstImg.endsWith('.jpg') || firstImg.endsWith('.jpeg') || firstImg.endsWith('.webp')) {
      iconElement.innerHTML = `<img src="${firstImg}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">`;
    } else {
      iconElement.textContent = firstImg;
    }
    
    nameElement.textContent = designData.name;
    descElement.textContent = designData.desc;
    console.log('Design info updated');
  }
  
  // Reset form inputs
  const titleInput = document.getElementById('customTitleInput');
  const namesInput = document.getElementById('customNamesInput');
  if (titleInput) titleInput.value = "";
  if (namesInput) namesInput.value = "";
  
  console.log('Form inputs reset');
  
  // Reset selections to defaults
  document.querySelectorAll('#customLayoutSelector .selection-card').forEach(card => {
    card.classList.toggle('active', card.dataset.value === 'Cizgili');
  });
  
  document.querySelectorAll('#customPageCountSelector .selection-card').forEach(card => {
    card.classList.toggle('active', card.dataset.value === '100 Sayfa');
  });
  
  document.querySelectorAll('#customColorPicker .color-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.color === '#1a1a1a');
  });
  
  console.log('Selections reset');
  
  // Initialize selectors
  initCustomizationSelectors();
  console.log('Selectors initialized');
  
  // Update summary
  updateCustomizationSummary();
  console.log('Summary updated');
  
  // Show modal
  const modal = document.getElementById('customizationModal');
  console.log('Modal element:', modal);
  console.log('Modal current display:', modal ? modal.style.display : 'N/A');
  
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    console.log('Modal display set to block');
    console.log('Modal display after setting:', modal.style.display);
    console.log('Modal computed style:', window.getComputedStyle(modal).display);
  } else {
    console.error('Customization modal element not found!');
  }
  
  console.log('===== openCustomizationModal COMPLETE =====');
}

function closeCustomizationModal() {
  document.getElementById('customizationModal').style.display = 'none';
  document.body.style.overflow = 'auto';
  currentDesignData = null;
}

function initCustomizationSelectors() {
  // Layout Selector
  const layoutSelector = document.getElementById('customLayoutSelector');
  if (layoutSelector) {
    layoutSelector.querySelectorAll('.selection-card').forEach(card => {
      card.addEventListener('click', () => {
        layoutSelector.querySelectorAll('.selection-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        customLayout = card.dataset.value;
        updateCustomizationSummary();
      });
    });
  }

  // Page Count Selector
  const pageCountSelector = document.getElementById('customPageCountSelector');
  if (pageCountSelector) {
    pageCountSelector.querySelectorAll('.selection-card').forEach(card => {
      card.addEventListener('click', () => {
        pageCountSelector.querySelectorAll('.selection-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        customPageCount = card.dataset.value;
        updateCustomizationSummary();
      });
    });
  }

  // Color Picker
  const colorPicker = document.getElementById('customColorPicker');
  if (colorPicker) {
    colorPicker.querySelectorAll('.color-option').forEach(opt => {
      opt.addEventListener('click', () => {
        colorPicker.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        customBgColor = opt.dataset.color;
        updateCustomizationSummary();
      });
    });
  }
}

function updateCustomizationSummary() {
  const titleInput = document.getElementById('customTitleInput');
  const namesInput = document.getElementById('customNamesInput');
  
  customTitle = titleInput ? titleInput.value : "";
  customNames = namesInput ? namesInput.value : "";
  
  // Update summary fields
  if (currentDesignData) {
    const summaryDesign = document.getElementById('customSummaryDesign');
    if (summaryDesign) summaryDesign.textContent = currentDesignData.name;
  }
  
  const summaryLayout = document.getElementById('customSummaryLayout');
  if (summaryLayout) summaryLayout.textContent = customLayout;
  
  const summaryPages = document.getElementById('customSummaryPages');
  if (summaryPages) summaryPages.textContent = customPageCount;
  
  const summaryTitle = document.getElementById('customSummaryTitle');
  if (summaryTitle) summaryTitle.textContent = customTitle || "-";
  
  const summaryNames = document.getElementById('customSummaryNames');
  if (summaryNames) summaryNames.textContent = customNames || "-";
  
  // Color name mapping
  const colorMap = {
    "#1a1a1a": "Antrasit",
    "#000000": "Siyah",
    "#f4f1ea": "Krem",
    "#4a1010": "Bordo",
    "#2d342d": "Haki"
  };
  
  const summaryColor = document.getElementById('customSummaryColor');
  if (summaryColor) summaryColor.textContent = colorMap[customBgColor] || "Antrasit";
}

function submitCustomOrder() {
  if (!currentDesignData) return;
  if (!validateAddress("custom")) return;
  
  const colorMap = {
    "#1a1a1a": "Antrasit",
    "#000000": "Siyah",
    "#f4f1ea": "Krem",
    "#4a1010": "Bordo",
    "#2d342d": "Haki"
  };
  
  const colorName = colorMap[customBgColor] || "Antrasit";
  const addressInfo = getAddressDetails("custom");
  
  const messageText = `*Yeni Defter Siparişi*

Tasarım: ${currentDesignData.name}
Stil: ${currentDesignData.styleVal}
Boyut: A5
Sayfa Düzeni: ${customLayout}
Sayfa Sayısı: ${customPageCount}
Kapak Rengi: ${colorName}
Başlık: ${customTitle || '-'}
İsimler: ${customNames || '-'}

${addressInfo}

Merhaba! Sipariş etmek istiyorum. Fotoğrafı da gönderiyorum.`;

  const waUrl = `https://wa.me/905359287488?text=${encodeURIComponent(messageText)}`;
  window.open(waUrl, '_blank');
  
  // Close modal after sending
  closeCustomizationModal();
}

// Update window click handler to include customization and magazine modals
window.onclick = function(event) {
  const designerModal = document.getElementById('designerModal');
  const customModal = document.getElementById('customizationModal');
  const magazineModal = document.getElementById('magazineDesignerModal');
  
  if (event.target == designerModal) {
    closeDesigner();
  }
  
  if (event.target == customModal) {
    closeCustomizationModal();
  }

  if (event.target == magazineModal) {
    closeMagazineDesigner();
  }
}

// Magazine Designer Logic
let magCurrentIdx = 0;
const magPagesData = Array.from({ length: 16 }, () => ({
  image: null,
  firstName: "",
  secondName: "",
  title: "",
  message1: "",
  message2: ""
}));

function openMagazineDesigner() {
  magCurrentIdx = 0;
  // Clear data if needed or keep for current session
  document.getElementById('magazineDesignerModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
  renderMagPage();
}

function closeMagazineDesigner() {
  document.getElementById('magazineDesignerModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function renderMagPage() {
  const container = document.getElementById('magPageContent');
  const isFirstPage = magCurrentIdx === 0;
  const isAddressPage = magCurrentIdx === 16;
  const pageData = isAddressPage ? null : magPagesData[magCurrentIdx];
  
  // Update Progress
  document.getElementById('magCurrentPage').textContent = isAddressPage ? "Sipariş Tamamlanıyor" : `Sayfa ${magCurrentIdx + 1} / 16`;
  document.getElementById('magPageType').textContent = isAddressPage ? "Teslimat Bilgileri" : (isFirstPage ? "Kapak & Giriş" : `İç Sayfa ${magCurrentIdx + 1}`);
  document.getElementById('magProgressBar').style.width = `${((magCurrentIdx + 1) / 17) * 100}%`;
  
  // Update Nav Buttons
  document.getElementById('magPrevBtn').style.display = magCurrentIdx > 0 ? 'block' : 'none';
  document.getElementById('magNextBtn').textContent = magCurrentIdx === 16 ? 'TASARIMI TAMAMLA' : 'Sonraki Sayfa →';

  if (isAddressPage) {
    container.innerHTML = `
      <div class="mag-page-header">
        <h3>Teslimat Bilgileri</h3>
        <p>Defterinizin size ulaşması için lütfen kargo bilgilerini doldurun.</p>
      </div>

      <div class="mag-input-group address-section">
        <div style="margin-bottom: 1rem;">
          <label style="font-size: 0.8rem; margin-bottom: 0.3rem;">Adres Başlığı* (Ev, İş vb.)</label>
          <input type="text" id="magaddrTitleInput" placeholder="Adres Başlığı" class="text-input">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <label style="font-size: 0.8rem; margin-bottom: 0.3rem;">Ad</label>
            <input type="text" id="magaddrFirstNameInput" placeholder="Ad" class="text-input">
          </div>
          <div>
            <label style="font-size: 0.8rem; margin-bottom: 0.3rem;">Soyad</label>
            <input type="text" id="magaddrLastNameInput" placeholder="Soyad" class="text-input">
          </div>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="font-size: 0.8rem; margin-bottom: 0.3rem;">Telefon Numarası</label>
          <input type="tel" id="magaddrPhoneInput" placeholder="05xx xxx xx xx" class="text-input" maxlength="11">
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="font-size: 0.8rem; margin-bottom: 0.3rem;">Açık Adres (Detaylı)</label>
          <textarea id="magaddrFullInput" placeholder="Mahalle, Cadde, Sokak, No..." class="text-input" style="height: 80px; resize: none;"></textarea>
          <p class="address-note">Kargonuzun size sorunsuz bir şekilde ulaşabilmesi için mahalle, cadde, sokak, bina gibi detay bilgileri eksiksiz girdiğinizden emin olun.</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.8rem; margin-bottom: 1rem;">
          <div>
            <label style="font-size: 0.8rem; margin-bottom: 0.3rem;">İl</label>
            <input type="text" id="magaddrProvinceInput" placeholder="İl" class="text-input" list="provinceList">
          </div>
          <div>
            <label style="font-size: 0.8rem; margin-bottom: 0.3rem;">İlçe</label>
            <input type="text" id="magaddrDistrictInput" placeholder="İlçe" class="text-input" list="districtList">
          </div>
          <div>
            <label style="font-size: 0.8rem; margin-bottom: 0.3rem;">Mahalle</label>
            <input type="text" id="magaddrMahalleInput" placeholder="Mahalle" class="text-input" list="mahalleList">
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 0.8rem; margin-bottom: 1rem;">
          <div>
            <label style="font-size: 0.8rem; margin-bottom: 0.3rem;">Sokak / Cadde</label>
            <input type="text" id="magaddrStreetInput" placeholder="Sokak / Cadde" class="text-input">
          </div>
          <div>
            <label style="font-size: 0.8rem; margin-bottom: 0.3rem;">Bina No</label>
            <input type="text" id="magaddrBinaNoInput" placeholder="Bina No" class="text-input">
          </div>
          <div>
            <label style="font-size: 0.8rem; margin-bottom: 0.3rem;">Daire No</label>
            <input type="text" id="magaddrDaireNoInput" placeholder="Daire" class="text-input">
          </div>
        </div>
      </div>
    `;
    return;
  }

  let html = `
    <div class="mag-page-header">
      <h3>${isFirstPage ? 'Magazin Kapağı' : `Sayfa ${magCurrentIdx + 1}`}</h3>
      <p>${isFirstPage ? 'Kapak başlığını, isimleri ve kapak fotoğrafını belirleyin.' : 'Bu sayfa için bir fotoğraf ve iki kısa mesaj ekleyin.'}</p>
    </div>

    <div class="mag-input-group">
      <label>FOTOĞRAF</label>
      <div id="magImageUpload" class="mag-image-upload-area ${pageData.image ? 'has-image' : ''}" onclick="document.getElementById('magFileInput').click()">
        <div class="upload-placeholder">
          <i>📸</i>
          <p>Fotoğraf Seçmek İçin Tıklayın</p>
        </div>
        <img id="magPreviewImg" class="mag-image-preview" src="${pageData.image || ''}" style="${pageData.image ? 'display:block' : 'display:none'}">
        <input type="file" id="magFileInput" style="display:none" accept="image/*" onchange="handleMagImageChange(event)">
      </div>
    </div>
  `;

  if (isFirstPage) {
    html += `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="mag-input-group">
          <label>SENİN İSMİN</label>
          <input type="text" id="magFirstName" class="text-input" value="${pageData.firstName}" placeholder="Örn: Ali">
        </div>
        <div class="mag-input-group">
          <label>O'NUN İSMİ</label>
          <input type="text" id="magSecondName" class="text-input" value="${pageData.secondName}" placeholder="Örn: Ayşe">
        </div>
      </div>
      <div class="mag-input-group">
        <label>MAGAZİN BAŞLIĞI</label>
        <input type="text" id="magTitle" class="text-input" value="${pageData.title}" placeholder="Örn: Our Love Story">
      </div>
    `;
  }

  html += `
    <div class="mag-input-group">
      <label>MESAJ 1</label>
      <textarea id="magMessage1" class="text-input" style="height: 80px; resize: none;" placeholder="Kısa bir mesaj yazın...">${pageData.message1}</textarea>
    </div>
    <div class="mag-input-group">
      <label>MESAJ 2</label>
      <textarea id="magMessage2" class="text-input" style="height: 80px; resize: none;" placeholder="İkinci bir mesaj yazın...">${pageData.message2}</textarea>
    </div>
  `;

  container.innerHTML = html;
  
  // Scrol to top of container
  container.scrollTop = 0;
}

function handleMagImageChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const result = e.target.result;
      magPagesData[magCurrentIdx].image = result;
      const previewImg = document.getElementById('magPreviewImg');
      const uploadArea = document.getElementById('magImageUpload');
      if (previewImg) {
        previewImg.src = result;
        previewImg.style.display = 'block';
      }
      if (uploadArea) {
        uploadArea.classList.add('has-image');
      }
    };
    reader.readAsDataURL(file);
  }
}

function saveMagCurrentPageData() {
  if (magCurrentIdx >= 16) return; // Don't save for address page
  const pageData = magPagesData[magCurrentIdx];
  pageData.message1 = document.getElementById('magMessage1').value;
  pageData.message2 = document.getElementById('magMessage2').value;
  
  if (magCurrentIdx === 0) {
    pageData.firstName = document.getElementById('magFirstName').value;
    pageData.secondName = document.getElementById('magSecondName').value;
    pageData.title = document.getElementById('magTitle').value;
  }
}

function magNextPage() {
  if (magCurrentIdx < 16) {
    saveMagCurrentPageData();
    magCurrentIdx++;
    renderMagPage();
  } else {
    if (!validateAddress("mag")) return;
    finishMagDesign();
  }
}

function magPrevPage() {
  saveMagCurrentPageData();
  if (magCurrentIdx > 0) {
    magCurrentIdx--;
    renderMagPage();
  }
}

function finishMagDesign() {
  const addressInfo = getAddressDetails("mag");
  let messageText = `*DOT EDITORIAL MAGAZINE SİPARİŞİ*\n\n`;
  messageText += `• Ürün: Dot Editorial Edition (16 Sayfa)\n`;
  messageText += `• Başlık: ${magPagesData[0].title || 'Yok'}\n`;
  messageText += `• İsimler: ${magPagesData[0].firstName} & ${magPagesData[0].secondName}\n\n`;
  
  messageText += `${addressInfo}\n\n`;
  messageText += `*SAYFA DETAYLARI:*\n`;
  
  magPagesData.forEach((page, idx) => {
    messageText += `\n[SAYFA ${idx + 1}]\n`;
    if (idx === 0) {
      messageText += `• Başlık: ${page.title}\n`;
      messageText += `• İsimler: ${page.firstName} & ${page.secondName}\n`;
    }
    messageText += `• Mesaj 1: ${page.message1 || '-'}\n`;
    messageText += `• Mesaj 2: ${page.message2 || '-'}\n`;
    messageText += `• Fotoğraf: ${page.image ? 'Eklendi ✅' : 'Eklenmedi ❌'}\n`;
  });

  messageText += `\nMerhaba! 16 sayfalık özel magazinimi tasarladım. Detayları yukarıdaki gibidir. Fotoğrafları şimdi WeTransfer üzerinden dot.note.2026@gmail.com adresine seçip gönderiyorum.`;

  const waUrl = `https://wa.me/905359287488?text=${encodeURIComponent(messageText)}`;
  
  // Open WhatsApp
  window.open(waUrl, '_blank');
  
  // Open WeTransfer in a separate tab after a small delay to avoid popup blockers
  setTimeout(() => {
    const wtUrl = `https://wetransfer.com/?to=dot.note.2026@gmail.com`;
    window.open(wtUrl, '_blank');
  }, 1000);

  closeMagazineDesigner();
}

/**
 * Address Selection Service
 * Handles Provinces, Districts, and Neighborhoods cascading autocompletes
 */
const AddressService = {
    provinces: [],
    currentProvince: null,
    currentDistrict: null,
    
    async init() {
        try {
            const response = await fetch('https://turkiyeapi.dev/api/v1/provinces');
            const result = await response.json();
            if (result.status === "OK") {
                this.provinces = result.data;
                this.updateDatalist('provinceList', this.provinces.map(p => p.name));
            }
        } catch (error) {
            console.error('Failed to load provinces:', error);
        }

        // Global listeners to handle all address inputs (even those in dynamic modals)
        document.body.addEventListener('input', (e) => {
            const id = e.target.id;
            if (id.endsWith('addrProvinceInput')) {
                this.handleProvinceChange(e.target);
            } else if (id.endsWith('addrDistrictInput')) {
                this.handleDistrictChange(e.target);
            }
        });
    },

    updateDatalist(listId, items) {
        const list = document.getElementById(listId);
        if (list) {
            list.innerHTML = items.map(item => `<option value="${item}">`).join('');
        }
    },

    handleProvinceChange(input) {
        const val = input.value.trim();
        const province = this.provinces.find(p => p.name.toLowerCase() === val.toLowerCase());
        
        if (province) {
            this.currentProvince = province;
            this.updateDatalist('districtList', province.districts.map(d => d.name));
            
            // Clear subsequent fields in the same modal/group
            const prefix = input.id.replace('addrProvinceInput', '');
            const districtInput = document.getElementById(`${prefix}addrDistrictInput`);
            const mahalleInput = document.getElementById(`${prefix}addrMahalleInput`);
            if (districtInput) districtInput.value = "";
            if (mahalleInput) mahalleInput.value = "";
        }
    },

    async handleDistrictChange(input) {
        if (!this.currentProvince) return;
        
        const val = input.value.trim();
        const district = this.currentProvince.districts.find(d => d.name.toLowerCase() === val.toLowerCase());
        
        if (district) {
            this.currentDistrict = district;
            try {
                const response = await fetch(`https://turkiyeapi.dev/api/v1/districts/${district.id}`);
                const result = await response.json();
                if (result.status === "OK" && result.data.neighborhoods) {
                    this.updateDatalist('mahalleList', result.data.neighborhoods.map(n => n.name));
                }
            } catch (error) {
                console.error('Failed to load neighborhoods:', error);
            }
            
            // Clear subsequent fields
            const prefix = input.id.replace('addrDistrictInput', '');
            const mahalleInput = document.getElementById(`${prefix}addrMahalleInput`);
            if (mahalleInput) mahalleInput.value = "";
        }
    }
};

// Initialize address service when script loads
AddressService.init();


