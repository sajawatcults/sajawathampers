/* =========================================================
   SAJAWAT HAMPERS JAVASCRIPT
   ========================================================= */


/* =========================================================
   WHATSAPP NUMBER
   ========================================================= */

const WHATSAPP_NUMBER = "918799719644";


/* =========================================================
   PRODUCTS
   ========================================================= */

const productsByFestival = {

    "Diwali": [

        {
            name: "Diwali Celebration Hamper",
            description: "A beautiful festive hamper for your loved ones.",
            price: 1499,
            oldPrice: 1799,
            emoji: "🪔"
        },

        {
            name: "Diwali Premium Hamper",
            description: "Premium festive treats packed beautifully.",
            price: 2499,
            oldPrice: 2999,
            emoji: "🎁"
        },

        {
            name: "Diwali Luxury Hamper",
            description: "An elegant luxury gifting experience.",
            price: 3999,
            oldPrice: 4499,
            emoji: "✨"
        },

        {
            name: "Diwali Sweet Box",
            description: "Festive sweets and treats in premium packaging.",
            price: 999,
            oldPrice: 1199,
            emoji: "🍬"
        }

    ],


    "Holi": [

        {
            name: "Holi Celebration Box",
            description: "Colourful treats for a joyful Holi.",
            price: 1299,
            oldPrice: 1599,
            emoji: "🎨"
        },

        {
            name: "Holi Premium Hamper",
            description: "Premium Holi gifting collection.",
            price: 1999,
            oldPrice: 2299,
            emoji: "🌈"
        },

        {
            name: "Holi Sweet Hamper",
            description: "Traditional festive sweets and goodies.",
            price: 1099,
            oldPrice: 1299,
            emoji: "🍭"
        },

        {
            name: "Holi Family Hamper",
            description: "A colourful gifting box for the whole family.",
            price: 2499,
            oldPrice: 2799,
            emoji: "🎁"
        }

    ],


    "Dussehra": [

        {
            name: "Dussehra Festive Hamper",
            description: "Celebrate the festival with thoughtful gifting.",
            price: 1499,
            oldPrice: 1799,
            emoji: "🏹"
        },

        {
            name: "Dussehra Premium Box",
            description: "Premium festive products in elegant packaging.",
            price: 2299,
            oldPrice: 2599,
            emoji: "✨"
        },

        {
            name: "Festive Sweet Hamper",
            description: "Traditional festive sweets and treats.",
            price: 1199,
            oldPrice: 1399,
            emoji: "🍬"
        },

        {
            name: "Royal Dussehra Hamper",
            description: "A premium gift for special occasions.",
            price: 3499,
            oldPrice: 3999,
            emoji: "🎁"
        }

    ],


    "Navratri": [

        {
            name: "Navratri Grace Hamper",
            description: "Elegant gifting inspired by Navratri.",
            price: 1499,
            oldPrice: 1799,
            emoji: "🌸"
        },

        {
            name: "Navratri Premium Box",
            description: "Thoughtful festive gifts for loved ones.",
            price: 2199,
            oldPrice: 2499,
            emoji: "✨"
        },

        {
            name: "Navratri Celebration Hamper",
            description: "A beautiful festive gifting collection.",
            price: 1699,
            oldPrice: 1999,
            emoji: "🎁"
        },

        {
            name: "Navratri Family Hamper",
            description: "Perfect for festive family gifting.",
            price: 2799,
            oldPrice: 3199,
            emoji: "🌺"
        }

    ],


    "Raksha Bandhan": [

        {
            name: "Raksha Bandhan Gift Box",
            description: "A special gift for your favourite sibling.",
            price: 1299,
            oldPrice: 1499,
            emoji: "🎀"
        },

        {
            name: "Brother's Hamper",
            description: "A thoughtful collection for your brother.",
            price: 1599,
            oldPrice: 1899,
            emoji: "🎁"
        },

        {
            name: "Sister's Hamper",
            description: "A beautiful celebration gift for your sister.",
            price: 1799,
            oldPrice: 2099,
            emoji: "💝"
        },

        {
            name: "Premium Rakhi Hamper",
            description: "Premium sibling gifting experience.",
            price: 2999,
            oldPrice: 3499,
            emoji: "✨"
        }

    ],


    "Christmas": [

        {
            name: "Christmas Celebration Hamper",
            description: "Festive Christmas goodies beautifully packed.",
            price: 1599,
            oldPrice: 1899,
            emoji: "🎄"
        },

        {
            name: "Christmas Premium Hamper",
            description: "A premium Christmas gifting experience.",
            price: 2499,
            oldPrice: 2999,
            emoji: "🎅"
        },

        {
            name: "Christmas Treat Box",
            description: "Sweet festive treats for everyone.",
            price: 999,
            oldPrice: 1199,
            emoji: "🍪"
        },

        {
            name: "Christmas Luxury Box",
            description: "Luxury gifting for a memorable Christmas.",
            price: 3999,
            oldPrice: 4499,
            emoji: "🎁"
        }

    ]

};


/* =========================================================
   CURRENT FESTIVAL
   ========================================================= */

let currentFestival = "Diwali";


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeProducts();

    initializeFestivalTabs();

    initializeSort();

    initializeMobileMenu();

    initializeSearch();

    initializeOrderForm();

    initializeYear();

    initializeOrderProduct();

});


/* =========================================================
   PRODUCT RENDERING
   ========================================================= */

function renderProducts(products = productsByFestival[currentFestival]) {

    const grid = document.getElementById("productsGrid");

    const title = document.getElementById("collectionTitle");

    if (!grid) {
        return;
    }

    if (title) {
        title.textContent = `${currentFestival} Collection`;
    }

    grid.innerHTML = "";

    if (!products || products.length === 0) {

        grid.innerHTML = `
            <p>
                No products available right now.
            </p>
        `;

        return;
    }


    products.forEach(function (product) {

        const card = document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">
                ${product.emoji}
            </div>

            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="price-row">

                    <span class="price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </span>

                    <span class="old-price">
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </span>

                </div>

                <div class="product-actions">

                    <a
                        class="btn btn-primary"
                        href="order.html?product=${encodeURIComponent(product.name)}"
                    >
                        Order Now
                    </a>

                </div>

            </div>

        `;


        grid.appendChild(card);

    });

}


/* =========================================================
   INITIALIZE PRODUCTS
   ========================================================= */

function initializeProducts() {

    renderProducts();

}


/* =========================================================
   FESTIVAL TABS
   ========================================================= */

function initializeFestivalTabs() {

    const tabs = document.querySelectorAll(".festival-tab");

    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            tabs.forEach(function (item) {
                item.classList.remove("active");
            });

            tab.classList.add("active");

            currentFestival = tab.dataset.festival;

            renderProducts();

        });

    });

}


/* =========================================================
   SORTING
   ========================================================= */

function initializeSort() {

    const sortSelect = document.getElementById("sortProducts");

    if (!sortSelect) {
        return;
    }


    sortSelect.addEventListener("change", function () {

        let products = [
            ...productsByFestival[currentFestival]
        ];


        if (sortSelect.value === "low") {

            products.sort(function (a, b) {
                return a.price - b.price;
            });

        }


        if (sortSelect.value === "high") {

            products.sort(function (a, b) {
                return b.price - a.price;
            });

        }


        renderProducts(products);

    });

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initializeMobileMenu() {

    const button = document.getElementById("mobileMenuButton");

    const menu = document.getElementById("mobileMenu");

    if (!button || !menu) {
        return;
    }


    button.addEventListener("click", function () {

        menu.classList.toggle("active");

    });


    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("active");

        });

    });

}


/* =========================================================
   SEARCH
   ========================================================= */

function initializeSearch() {

    const searchButton = document.getElementById("searchButton");

    const searchModal = document.getElementById("searchModal");

    const closeSearch = document.getElementById("closeSearch");

    const searchInput = document.getElementById("searchInput");

    const searchResults = document.getElementById("searchResults");


    if (
        !searchButton ||
        !searchModal ||
        !closeSearch ||
        !searchInput ||
        !searchResults
    ) {
        return;
    }


    searchButton.addEventListener("click", function () {

        searchModal.classList.add("active");

        setTimeout(function () {
            searchInput.focus();
        }, 100);

    });


    closeSearch.addEventListener("click", function () {

        searchModal.classList.remove("active");

    });


    searchModal.addEventListener("click", function (event) {

        if (event.target === searchModal) {

            searchModal.classList.remove("active");

        }

    });


    searchInput.addEventListener("input", function () {

        const searchTerm =
            searchInput.value
                .toLowerCase()
                .trim();


        searchResults.innerHTML = "";


        if (!searchTerm) {
            return;
        }


        const allProducts = [];


        Object.keys(productsByFestival).forEach(function (festival) {

            productsByFestival[festival].forEach(function (product) {

                allProducts.push({
                    ...product,
                    festival: festival
                });

            });

        });


        const results = allProducts.filter(function (product) {

            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.festival.toLowerCase().includes(searchTerm)
            );

        });


        if (results.length === 0) {

            searchResults.innerHTML = `
                <p style="margin-top:20px;">
                    No hampers found.
                </p>
            `;

            return;

        }


        results.forEach(function (product) {

            const result = document.createElement("div");

            result.className = "search-result";


            result.innerHTML = `

                <strong>
                    ${product.name}
                </strong>

                <small>
                    ${product.festival}
                    · ₹${product.price.toLocaleString("en-IN")}
                </small>

                <br>

                <a
                    href="order.html?product=${encodeURIComponent(product.name)}"
                    style="color:#65172c;font-weight:700;"
                >
                    Order Now →
                </a>

            `;


            searchResults.appendChild(result);

        });

    });

}


/* =========================================================
   ORDER FORM
   ========================================================= */

function initializeOrderForm() {

    const form = document.getElementById("orderForm");

    if (!form) {
        return;
    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("customerName").value.trim();


        const phone =
            document.getElementById("customerPhone").value.trim();


        const email =
            document.getElementById("customerEmail").value.trim();


        const product =
            document.getElementById("productName").value;


        const quantity =
            document.getElementById("quantity").value;


        const occasion =
            document.getElementById("occasion").value;


        const budget =
            document.getElementById("budget").value;


        const address =
            document.getElementById("address").value.trim();


        const deliveryDate =
            document.getElementById("deliveryDate").value;


        const city =
            document.getElementById("deliveryCity").value.trim();


        const notes =
            document.getElementById("notes").value.trim();


        /* ---------------------------------------------
           VALIDATION
        --------------------------------------------- */

        if (!name) {

            alert("Please enter your name.");

            return;

        }


        if (!/^[0-9]{10}$/.test(phone)) {

            alert("Please enter a valid 10-digit mobile number.");

            return;

        }


        if (!product) {

            alert("Please select a hamper.");

            return;

        }


        if (!quantity || Number(quantity) < 1) {

            alert("Please enter a valid quantity.");

            return;

        }


        if (!address) {

            alert("Please enter your delivery address.");

            return;

        }


        if (!city) {

            alert("Please enter your city.");

            return;

        }


        /* ---------------------------------------------
           WHATSAPP MESSAGE
        --------------------------------------------- */

        let message = `Hello Sajawat Hampers! 👋

I would like to place an order.

━━━━━━━━━━━━━━━━━━
🎁 ORDER DETAILS
━━━━━━━━━━━━━━━━━━

Hamper: ${product}
Quantity: ${quantity}
Occasion: ${occasion || "Not specified"}
Budget: ${budget || "Not specified"}

━━━━━━━━━━━━━━━━━━
👤 CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${name}
Mobile: ${phone}
Email: ${email || "Not provided"}

━━━━━━━━━━━━━━━━━━
🚚 DELIVERY DETAILS
━━━━━━━━━━━━━━━━━━

Address:
${address}

City: ${city}
Preferred Delivery Date: ${deliveryDate || "Not specified"}

━━━━━━━━━━━━━━━━━━
📝 SPECIAL REQUIREMENTS
━━━━━━━━━━━━━━━━━━

${notes || "No special requirements"}

━━━━━━━━━━━━━━━━━━

Please confirm the availability, final price and delivery charges.

Thank you!
Sajawat Hampers Customer`;


        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


        /*
         * DIRECT WHATSAPP REDIRECT
         */

        window.location.href = whatsappURL;

    });

}


/* =========================================================
   ORDER PRODUCT FROM URL
   ========================================================= */

function initializeOrderProduct() {

    const productSelect =
        document.getElementById("productName");


    if (!productSelect) {
        return;
    }


    const params =
        new URLSearchParams(window.location.search);


    const product =
        params.get("product");


    if (!product) {
        return;
    }


    const matchingOption =
        Array.from(productSelect.options).find(function (option) {

            return option.value === product;

        });


    if (matchingOption) {

        productSelect.value = product;

    }

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

function initializeYear() {

    const year =
        document.getElementById("currentYear");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}
