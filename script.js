// ======= Mahsulotlar Ma'lumotlari ======= 
const PRODUCTS = [
    {
      id: "snk-original",
      name: "Original SNICKERS",
      description: "Classic peanut, caramel, nougat, covered in milk chocolate.",
      price: 2.50,
      image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNUK-home-flex-1.jpg"
    },
    {
      id: "snk-almond",
      name: "SNICKERS Almond",
      description: "Delicious almond version of the classic bar.",
      price: 2.75,
      image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-10/SNK_EPIC_CROP_US_ALL.jpg"
    },
    {
      id: "snk-icecream",
      name: "SNICKERS Ice Cream",
      description: "Creamy ice cream with SNICKERS taste.",
      price: 4.00,
      image: "https://www.snickers.com/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf616/files/2023-01/SNK_Home_Ice%20Cream.jpg"
    },
    {
      id: "snk-peanut",
      name: "SNICKERS Peanut Butter",
      description: "Smooth peanut butter filling with caramel and chocolate.",
      price: 3.00,
      image: "https://www.snickers.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf616/files/migrate-product-files/vxhxlfkorucqtpyu5xgj.png"
    },
    {
      id: "snk-protein",
      name: "SNICKERS ORIGINAL SINGLE EGG EASTER",
      description: "High‐protein bar for active lifestyle.",
      price: 3.50,
      image: "https://www.snickers.com/cdn-cgi/image/width=255,height=255,fit=contain,g=0.5x0.5,f=auto,quality=90/sites/g/files/fnmzdf616/files/migrate-product-files/wleoltnqzk9jfpty5t0f.png"
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
    // Barcha sahifalardagi cart-count elementlariga o‘rnatamiz:
    ["cart-count", "cart-count-products", "cart-count-cart", "cart-count-contact"]
      .forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = totalCount;
      });
  }
  
  // ======= Mahsulotlarni Gridga chiqarish (Products sahifasi uchun) ======= 
  function renderProducts() {
    const grid = document.getElementById("products-grid");
    if (!grid) return;
    PRODUCTS.forEach(prod => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}" />
        <h3>${prod.name}</h3>
        <p>${prod.description}</p>
        <p class="price">$${prod.price.toFixed(2)}</p>
        <button onclick="addToCart('${prod.id}')">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
      `;
      grid.appendChild(div);
    });
  }
  
  // ======= Featured mahsulotlarni Bosh sahifaga chiqarish ======= 
  function renderFeatured() {
    const grid = document.getElementById("featured-grid");
    if (!grid) return;
    // Misol uchun eng birinchi 3 ta mahsulotni chiqaramiz
    PRODUCTS.slice(0, 3).forEach(prod => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}" />
        <h3>${prod.name}</h3>
        <p>${prod.description}</p>
        <p class="price">$${prod.price.toFixed(2)}</p>
        <button onclick="addToCart('${prod.id}')">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
      `;
      grid.appendChild(div);
    });
  }
  
  // ======= Savatchaga Mahsulot Qo‘shish ======= 
  function addToCart(productId) {
    const cart = getCart();
    cart[productId] = (cart[productId] || 0) + 1;
    saveCart(cart);
    updateCartCount();
  }
  
  // ======= Cart sahifasida Mahsulotlarni Ko‘rsatish ======= 
  function renderCartItems() {
    const container = document.getElementById("cart-items");
    if (!container) return;
    const cart = getCart();
    container.innerHTML = ""; // tozalash
  
    let total = 0;
    for (let id in cart) {
      const qty = cart[id];
      const prod = PRODUCTS.find(p => p.id === id);
      if (!prod) continue;
      const subtotal = prod.price * qty;
      total += subtotal;
  
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}" />
        <div class="cart-item-details">
          <h4>${prod.name}</h4>
          <p>Price: $${prod.price.toFixed(2)}</p>
          <p>
            Qty: 
            <input type="number" min="1" value="${qty}" 
                   class="quantity-input" 
                   onchange="updateQuantity('${id}', this.value)" />
            <button class="remove-btn" onclick="removeFromCart('${id}')">
              <i class="fa-solid fa-trash"></i> Remove
            </button>
          </p>
          <p>Subtotal: $<span id="subtotal-${id}">${subtotal.toFixed(2)}</span></p>
        </div>
      `;
      container.appendChild(div);
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
  
  // ======= Savatchadan Mahsulotni O‘chirish ======= 
  function removeFromCart(productId) {
    const cart = getCart();
    delete cart[productId];
    saveCart(cart);
    renderCartItems();
    updateCartCount();
  }
  
  // ======= Checkout Modalni ochish / yopish ======= 
  function openCheckout() {
    const modal = document.getElementById("checkout-modal");
    if (modal) modal.style.display = "block";
  }
  
  function closeCheckout() {
    const modal = document.getElementById("checkout-modal");
    if (modal) modal.style.display = "none";
  }
  
  // ======= Checkout Formani Qo‘llash ======= 
  function handleCheckout(event) {
    event.preventDefault();
    // Oddiy misol uchun form holatini tekshiramiz, so‘ng saqlangan cartni tozalaymiz:
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    if (!name || !email || !address || !phone) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }
    // 1) Buyurtma “jo‘natildi” deb hisoblaymiz:
    alert("Buyurtmangiz qabul qilindi. Rahmat!");
    // 2) localStorage dagi savatchani tozalaymiz:
    localStorage.removeItem("snickersCart");
    updateCartCount();
    renderCartItems();
    closeCheckout();
  }
  
  // ======= Contact Formani Qo‘llash ======= 
  function handleContact(event) {
    event.preventDefault();
    const name = document.getElementById("c-name").value.trim();
    const email = document.getElementById("c-email").value.trim();
    const message = document.getElementById("c-message").value.trim();
    if (!name || !email || !message) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }
    // Oddiy misol: Sahifada success xabarini ko‘rsatamiz
    document.getElementById("contact-success").classList.remove("hidden");
    document.getElementById("contact-form").reset();
  }
  
  // ======= Window load / DOMContentLoaded ======= 
  window.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
    renderFeatured();    // index.html uchun
    renderProducts();    // products.html uchun
    renderCartItems();   // cart.html uchun
  
    // Checkout form handler
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", handleCheckout);
      document.getElementById("checkout-btn").addEventListener("click", openCheckout);
    }
  
    // Contact form handler
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", handleContact);
    }
  
    // Modal tashqariga bosilganda yopish
    window.addEventListener("click", function(event) {
      const checkoutModal = document.getElementById("checkout-modal");
      if (event.target === checkoutModal) {
        closeCheckout();
      }
    });
  });
  