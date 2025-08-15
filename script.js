// ======= Mahsulotlar Ma'lumotlari ======= 
const PRODUCTS = [
  {
    id: "snk-original",
    name: "Original SNICKERS",
    description: "Classic peanut, caramel, nougat, covered in milk chocolate.",
    price: 2.50,
    category: "classic",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-almond",
    name: "SNICKERS Almond",
    description: "Delicious almond version of the classic bar.",
    price: 2.75,
    category: "almond",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-10/SNK_EPIC_CROP_US_ALL.jpg"
  },
  {
    id: "snk-icecream",
    name: "SNICKERS Ice Cream",
    description: "Creamy ice cream with SNICKERS taste.",
    price: 4.00,
    category: "icecream",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNK_Home_Ice%20Cream.jpg"
  },
  {
    id: "snk-peanut",
    name: "SNICKERS Peanut Butter",
    description: "Smooth peanut butter filling with caramel and chocolate.",
    price: 3.00,
    category: "peanut",
    image: "https://www.snickers.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf616/files/migrate-product-files/vxhxlfkorucqtpyu5xgj.png"
  },
  {
    id: "snk-protein",
    name: "SNICKERS Protein Bar",
    description: "High‐protein bar for active lifestyle.",
    price: 3.50,
    category: "protein",
    image: "https://www.snickers.com/cdn-cgi/image/width=255,height=255,fit=contain,g=0.5x0.5,f=auto,quality=90/sites/g/files/fnmzdf616/files/migrate-product-files/wleoltnqzk9jfpty5t0f.png"
  },
  {
    id: "snk-mini",
    name: "SNICKERS Mini",
    description: "Perfect bite-sized SNICKERS for quick energy boost.",
    price: 1.50,
    category: "mini",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-cake",
    name: "SNICKERS Cake",
    description: "Delicious SNICKERS flavored cake with chocolate layers.",
    price: 25.00,
    category: "cake",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-dark",
    name: "SNICKERS Dark Chocolate",
    description: "Rich dark chocolate version with intense flavor.",
    price: 3.25,
    category: "dark",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-white",
    name: "SNICKERS White Chocolate",
    description: "Creamy white chocolate with classic SNICKERS filling.",
    price: 3.00,
    category: "white",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-crunchy",
    name: "SNICKERS Crunchy",
    description: "Extra crunchy peanuts for maximum texture.",
    price: 2.80,
    category: "crunchy",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-salted",
    name: "SNICKERS Salted Caramel",
    description: "Sweet and salty caramel with classic ingredients.",
    price: 3.10,
    category: "salted",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-hazelnut",
    name: "SNICKERS Hazelnut",
    description: "Rich hazelnut flavor with chocolate and caramel.",
    price: 3.30,
    category: "hazelnut",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-coconut",
    name: "SNICKERS Coconut",
    description: "Tropical coconut flavor with classic SNICKERS taste.",
    price: 3.20,
    category: "coconut",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-mint",
    name: "SNICKERS Mint",
    description: "Refreshing mint chocolate with classic filling.",
    price: 3.15,
    category: "mint",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-orange",
    name: "SNICKERS Orange",
    description: "Zesty orange flavor with chocolate and caramel.",
    price: 3.25,
    category: "orange",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-strawberry",
    name: "SNICKERS Strawberry",
    description: "Sweet strawberry flavor with classic ingredients.",
    price: 3.20,
    category: "strawberry",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-banana",
    name: "SNICKERS Banana",
    description: "Creamy banana flavor with chocolate and nuts.",
    price: 3.10,
    category: "banana",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-cherry",
    name: "SNICKERS Cherry",
    description: "Rich cherry flavor with dark chocolate.",
    price: 3.35,
    category: "cherry",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-raspberry",
    name: "SNICKERS Raspberry",
    description: "Tangy raspberry with white chocolate.",
    price: 3.30,
    category: "raspberry",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-blueberry",
    name: "SNICKERS Blueberry",
    description: "Sweet blueberry with milk chocolate.",
    price: 3.25,
    category: "blueberry",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-vanilla",
    name: "SNICKERS Vanilla",
    description: "Smooth vanilla with classic chocolate.",
    price: 2.90,
    category: "vanilla",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-caramel",
    name: "SNICKERS Extra Caramel",
    description: "Double caramel with extra sweetness.",
    price: 3.40,
    category: "caramel",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-nougat",
    name: "SNICKERS Extra Nougat",
    description: "Extra thick nougat with chocolate coating.",
    price: 3.20,
    category: "nougat",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-fudge",
    name: "SNICKERS Fudge",
    description: "Rich fudge with classic SNICKERS ingredients.",
    price: 3.50,
    category: "fudge",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-toffee",
    name: "SNICKERS Toffee",
    description: "Crunchy toffee with chocolate and nuts.",
    price: 3.45,
    category: "toffee",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-cookies",
    name: "SNICKERS Cookies & Cream",
    description: "Cookie pieces with white chocolate.",
    price: 3.60,
    category: "cookies",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-marshmallow",
    name: "SNICKERS Marshmallow",
    description: "Fluffy marshmallow with chocolate coating.",
    price: 3.30,
    category: "marshmallow",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  },
  {
    id: "snk-gift-box",
    name: "SNICKERS Gift Box",
    description: "Assorted SNICKERS bars in elegant gift box.",
    price: 15.00,
    category: "gift",
    image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
  }
];

// ======= Savatchani localStorage orqali boshqarish ======= 
function getCart() {
  const cartJSON = localStorage.getItem("snickersCart");
  return cartJSON ? JSON.parse(cartJSON) : {};
}

function saveCart(cart) {
  localStorage.setItem("snickersCart", JSON.stringify(cart));
}

// ======= Navbar-dagi savatcha sonini yangilash ======= 
function updateCartCount() {
  const cart = getCart();
  const totalCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  // Barcha sahifalardagi cart-count elementlariga o'rnatamiz:
  ["cart-count", "cart-count-products", "cart-count-cart", "cart-count-contact", "cart-count-promo", "cart-count-about"]
    .forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = totalCount;
    });
}

// ======= Mahsulotlarni Gridga chiqarish (Products sahifasi uchun) ======= 
function renderProducts(filterCategory = 'all') {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  
  // Grid tozalash
  grid.innerHTML = '';
  
  // Loading animatsiyasi
  grid.innerHTML = '<div class="loading">Mahsulotlar yuklanmoqda...</div>';
  
  // Kichik kechikish bilan loading ko'rsatish
  setTimeout(() => {
    grid.innerHTML = '';
    
    const filteredProducts = filterCategory === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter(prod => prod.category === filterCategory);
    
    if (filteredProducts.length === 0) {
      grid.innerHTML = '<div class="no-products">Bu kategoriyada mahsulot topilmadi</div>';
      return;
    }
    
    filteredProducts.forEach((prod, index) => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.style.animationDelay = `${index * 0.1}s`;
      div.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
        <h3>${prod.name}</h3>
        <p>${prod.description}</p>
        <p class="price">$${prod.price.toFixed(2)}</p>
        <button onclick="addToCart('${prod.id}')" class="add-to-cart-btn">
          <i class="fa-solid fa-cart-plus"></i> Savatga qo'shish
        </button>
      `;
      grid.appendChild(div);
    });
  }, 500);
}

// ======= Featured mahsulotlarni Bosh sahifaga chiqarish ======= 
function renderFeatured() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  
  // Misol uchun eng birinchi 3 ta mahsulotni chiqaramiz
  PRODUCTS.slice(0, 3).forEach((prod, index) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.style.animationDelay = `${index * 0.1}s`;
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
      <h3>${prod.name}</h3>
      <p>${prod.description}</p>
      <p class="price">$${prod.price.toFixed(2)}</p>
      <button onclick="addToCart('${prod.id}')" class="add-to-cart-btn">
        <i class="fa-solid fa-cart-plus"></i> Savatga qo'shish
      </button>
    `;
    grid.appendChild(div);
  });
}

// ======= Savatchaga Mahsulot Qo'shish ======= 
function addToCart(productId) {
  const cart = getCart();
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart(cart);
  updateCartCount();
  
  // Animatsiya bilan savatcha sonini yangilash
  const cartCount = document.getElementById('cart-count') || 
                   document.getElementById('cart-count-products') || 
                   document.getElementById('cart-count-cart') || 
                   document.getElementById('cart-count-contact');
  
  if (cartCount) {
    cartCount.style.transform = 'scale(1.3)';
    cartCount.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
      cartCount.style.transform = 'scale(1)';
    }, 300);
  }
  
  // Success xabarini ko'rsatish
  showNotification('Mahsulot savatchaga qo\'shildi!', 'success');
}

// ======= Cart sahifasida Mahsulotlarni Ko'rsatish ======= 
function renderCartItems() {
  const container = document.getElementById("cart-items");
  if (!container) return;
  
  const cart = getCart();
  container.innerHTML = ""; // tozalash
  
  if (Object.keys(cart).length === 0) {
    container.innerHTML = '<div class="empty-cart">Savatchangiz bo\'sh. <a href="products.html">Mahsulotlarni ko\'rish</a></div>';
    document.getElementById("cart-total").textContent = "0.00";
    return;
  }

  let total = 0;
  let index = 0;
  
  for (let id in cart) {
    const qty = cart[id];
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) continue;
    
    const subtotal = prod.price * qty;
    total += subtotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.style.animationDelay = `${index * 0.1}s`;
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
      <div class="cart-item-details">
        <h4>${prod.name}</h4>
        <p>Narxi: $${prod.price.toFixed(2)}</p>
        <p>
          Miqdori: 
          <input type="number" min="1" value="${qty}" 
                 class="quantity-input" 
                 onchange="updateQuantity('${id}', this.value)" />
          <button class="remove-btn" onclick="removeFromCart('${id}')">
            <i class="fa-solid fa-trash"></i> O'chirish
          </button>
        </p>
        <p>Jami: $<span id="subtotal-${id}">${subtotal.toFixed(2)}</span></p>
      </div>
    `;
    container.appendChild(div);
    index++;
  }

  document.getElementById("cart-total").textContent = total.toFixed(2);
}

// ======= Savatcha Mahsulot Miqdorini Yangilash ======= 
function updateQuantity(productId, newQty) {
  const cart = getCart();
  const qty = parseInt(newQty);
  
  if (qty <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = qty;
  }
  
  saveCart(cart);
  renderCartItems();    // sahifani yangilash
  updateCartCount();    // navbarni yangilash
}

// ======= Savatchadan Mahsulotni O'chirish ======= 
function removeFromCart(productId) {
  const cart = getCart();
  delete cart[productId];
  saveCart(cart);
  renderCartItems();
  updateCartCount();
  
  showNotification('Mahsulot savatchadan o\'chirildi', 'info');
}

// ======= Checkout Modalni ochish / yopish ======= 
function openCheckout() {
  const modal = document.getElementById("checkout-modal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; // Scroll to'xtatish
  }
}

function closeCheckout() {
  const modal = document.getElementById("checkout-modal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; // Scroll qayta yoqish
  }
}

// ======= Checkout Formani Qo'llash ======= 
function handleCheckout(event) {
  event.preventDefault();
  
  // Form holatini tekshirish
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();
  
  if (!name || !email || !address || !phone) {
    showNotification('Iltimos, barcha maydonlarni to\'ldiring.', 'error');
    return;
  }
  
  // Loading ko'rsatish
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Yuborilmoqda...';
  submitBtn.disabled = true;
  
  // Simulyatsiya qilish (real loyihada API ga yuboriladi)
  setTimeout(() => {
    showNotification('Buyurtmangiz qabul qilindi. Rahmat!', 'success');
    
    // localStorage dagi savatchani tozalash
    localStorage.removeItem("snickersCart");
    updateCartCount();
    renderCartItems();
    closeCheckout();
    
    // Button ni tiklash
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

// ======= Contact Formani Qo'llash ======= 
function handleContact(event) {
  event.preventDefault();
  
  const name = document.getElementById("c-name").value.trim();
  const email = document.getElementById("c-email").value.trim();
  const message = document.getElementById("c-message").value.trim();
  
  if (!name || !email || !message) {
    showNotification('Iltimos, barcha maydonlarni to\'ldiring.', 'error');
    return;
  }
  
  // Loading ko'rsatish
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Yuborilmoqda...';
  submitBtn.disabled = true;
  
  // Simulyatsiya qilish
  setTimeout(() => {
    showNotification('Xabaringiz uchun rahmat! Tez orada bog\'lanamiz.', 'success');
    document.getElementById("contact-form").reset();
    
    // Button ni tiklash
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
}

// ======= Notification ko'rsatish ======= 
function showNotification(message, type = 'info') {
  // Mavjud notification ni o'chirish
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fa-solid fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" class="notification-close">
        <i class="fa-solid fa-times"></i>
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // 5 soniyadan keyin avtomatik yashirish
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// ======= Kategoriya filter ======= 
function filterProducts(category) {
  renderProducts(category);
  
  // Filter tugmasini active qilish
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => btn.classList.remove('active'));
  
  const currentBtn = document.querySelector(`[data-category="${category}"]`);
  if (currentBtn) {
    currentBtn.classList.add('active');
  }
}

// ======= Window load / DOMContentLoaded ======= 
window.addEventListener("DOMContentLoaded", function() {
  updateCartCount();
  renderFeatured();    // index.html uchun
  renderProducts();     // products.html uchun
  renderCartItems();    // cart.html uchun

  // Checkout form handler
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckout);
    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", openCheckout);
    }
  }

  // Contact form handler
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContact);
  }

  // Kategoriya filter handler
  const categorySelect = document.getElementById("category-select");
  if (categorySelect) {
    categorySelect.addEventListener("change", function() {
      filterProducts(this.value);
    });
  }

  // Modal tashqariga bosilganda yopish
  window.addEventListener("click", function(event) {
    const checkoutModal = document.getElementById("checkout-modal");
    if (event.target === checkoutModal) {
      closeCheckout();
    }
  });
  
  // ESC tugmasi bilan modal yopish
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeCheckout();
    }
  });
  
  // Smooth scroll uchun
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
  