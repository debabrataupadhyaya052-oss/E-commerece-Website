// ================= SEARCH BUTTON =================

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");

searchBtn.addEventListener("click", function () {

    searchBox.classList.toggle("show");

});


// ================= CART =================

let cartCount = 0;

function addToCart() {

    cartCount++;
    const cart = doucument.getElementById("cartCount");

    if (cart) {
        cart.innerText = cartCount;
    }

    alert("Product added to cart!");
}
  
}

// ================= SEARCH =================

function searchProduct() {

    let searchValue =
        document.getElementById("searchInput").value;

    if (searchValue.trim() === "") {

        alert("Please enter a product name.");

    } else {

        alert("Searching for: " + searchValue);

    }

}

// ================= WISHLIST =================

let wishlistCount = 0;

function addWishlist(button) {

    const icon = button.querySelector("i");

    if (icon.classList.contains("fa-regular")) {

        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");

        wishlistCount++;

    } else {

        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");

        wishlistCount--;

    }

}

// ================= CATEGORY FILTER =================

function filterProducts(category, button) {

    let products =
        document.querySelectorAll(".product-item");

    let buttons =
        document.querySelectorAll(".category-btn");


    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");


    products.forEach(function (product) {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/*================ CATEGORY + PRICE FILTER====================== */


const categoryFilters =
    document.querySelectorAll(".category-filter");

const priceRange =
    document.getElementById("priceRange");

const priceValue =
    document.getElementById("priceValue");


function filterMenProducts() {

    const products =
        document.querySelectorAll(".product-item");


    // Selected categories

    let selectedCategories = [];

    categoryFilters.forEach(function (check) {

        if (check.checked) {
            selectedCategories.push(check.value);
        }

    });


    // Maximum price

    let maxPrice =
        priceRange
            ? parseInt(priceRange.value)
            : 30000;


    // Search

    const searchInput =
        document.getElementById("menSearch");

    let searchText =
        searchInput
            ? searchInput.value.toLowerCase()
            : "";


    // Filter products

    products.forEach(function (product) {

        const category =
            product.dataset.category;

        const price =
            parseInt(product.dataset.price);

        const name =
            product.dataset.name.toLowerCase();


        let categoryMatch =
            selectedCategories.length === 0 ||
            selectedCategories.includes(category);


        let priceMatch =
            price <= maxPrice;


        let searchMatch =
            name.includes(searchText);


        if (
            categoryMatch &&
            priceMatch &&
            searchMatch
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


/* CATEGORY CHANGE */

categoryFilters.forEach(function (check) {

    check.addEventListener(
        "change",
        filterMenProducts
    );

});


/* PRICE CHANGE */

if (priceRange) {

    priceRange.addEventListener(
        "input",
        function () {

            priceValue.innerText =
                this.value;

            filterMenProducts();

        }
    );

}


/* SEARCH */

const menSearch =
    document.getElementById("menSearch");

if (menSearch) {

    menSearch.addEventListener(
        "keyup",
        filterMenProducts
    );

}

/* =====================SORT PRODUCTS========================== */
const sortProducts =
    document.getElementById("sortProducts");

if (sortProducts) {

    sortProducts.addEventListener(
        "change",
        function () {

            const container =
                document.getElementById("menProducts");

            const products =
                Array.from(
                    container.querySelectorAll(".product-item")
                );


            if (this.value === "low") {

                products.sort(function (a, b) {

                    return (
                        parseInt(a.dataset.price) -
                        parseInt(b.dataset.price)
                    );

                });

            }


            if (this.value === "high") {

                products.sort(function (a, b) {

                    return (
                        parseInt(b.dataset.price) -
                        parseInt(a.dataset.price)
                    );

                });

            }


            products.forEach(function (product) {

                container.appendChild(product);

            });

        }
    );

}

// ================= PRODUCT SEARCH =================//

const searchInput =
    document.getElementById("productSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let search =
            this.value.toLowerCase();

        let products =
            document.querySelectorAll(".product-item");


        products.forEach(function (product) {

            let name =
                product.dataset.name.toLowerCase();

            if (name.includes(search)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

}

/* =========================================
   WOMEN CATEGORY FILTER
========================================= */

const womenCategories =
    document.querySelectorAll(".women-category");

const womenPrice =
    document.getElementById("womenPrice");

const womenPriceValue =
    document.getElementById("womenPriceValue");

const womenSearch =
    document.getElementById("womenSearch");


function filterWomenProducts() {

    const products =
        document.querySelectorAll(".product-item");

    let selectedCategories = [];

    womenCategories.forEach(function (category) {

        if (category.checked) {

            selectedCategories.push(category.value);

        }

    });


    let maxPrice = womenPrice
        ? parseInt(womenPrice.value)
        : 10000;


    let searchText = womenSearch
        ? womenSearch.value.toLowerCase()
        : "";


    products.forEach(function (product) {

        const category =
            product.dataset.category;

        const price =
            parseInt(product.dataset.price);

        const name =
            product.dataset.name.toLowerCase();


        let categoryMatch =
            selectedCategories.length === 0 ||
            selectedCategories.includes(category);


        let priceMatch =
            price <= maxPrice;


        let searchMatch =
            name.includes(searchText);


        if (
            categoryMatch &&
            priceMatch &&
            searchMatch
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}

/* CATEGORY CHANGE */

womenCategories.forEach(function (category) {

    category.addEventListener(
        "change",
        filterWomenProducts
    );

});


/* PRICE CHANGE */

if (womenPrice) {

    womenPrice.addEventListener(
        "input",
        function () {

            womenPriceValue.innerText =
                this.value;

            filterWomenProducts();

        }
    );

}


/* SEARCH */

if (womenSearch) {

    womenSearch.addEventListener(
        "keyup",
        filterWomenProducts
    );

}


/* =========================================
   SORT PRODUCTS
========================================= */

const womenSort =
    document.getElementById("womenSort");


if (womenSort) {

    womenSort.addEventListener(
        "change",
        function () {

            const container =
                document.getElementById("womenProducts");

            const products =
                Array.from(
                    container.querySelectorAll(
                        ".product-item"
                    )
                );


            if (this.value === "low") {

                products.sort(function (a, b) {

                    return (
                        parseInt(a.dataset.price) -
                        parseInt(b.dataset.price)
                    );

                });

            }


            if (this.value === "high") {

                products.sort(function (a, b) {

                    return (
                        parseInt(b.dataset.price) -
                        parseInt(a.dataset.price)
                    );

                });

            }


            products.forEach(function (product) {

                container.appendChild(product);

            });

        }
    );

}


/* =========================================
   CLEAR FILTERS
========================================= */

function clearWomenFilters() {

    womenCategories.forEach(function (category) {

        category.checked = false;

    });


    if (womenPrice) {

        womenPrice.value = 10000;

        womenPriceValue.innerText = "10000";

    }


    if (womenSearch) {

        womenSearch.value = "";

    }


    filterWomenProducts();

}

/* ==================================================
   ELECTRONICS FILTER
================================================== */

const electronicsCategories =
    document.querySelectorAll(".electronics-category");

const electronicsPrice =
    document.getElementById("electronicsPrice");

const electronicsPriceValue =
    document.getElementById("electronicsPriceValue");

const electronicsSearch =
    document.getElementById("electronicsSearch");


function filterElectronicsProducts() {

    const products =
        document.querySelectorAll(
            ".electronics-product-item"
        );


    let selectedCategories = [];


    electronicsCategories.forEach(function(category) {

        if (category.checked) {

            selectedCategories.push(
                category.value
            );

        }

    });


    let maxPrice = electronicsPrice
        ? parseInt(electronicsPrice.value)
        : 150000;


    let searchText = electronicsSearch
        ? electronicsSearch.value.toLowerCase()
        : "";


    products.forEach(function(product) {

        const category =
            product.dataset.category;


        const price =
            parseInt(product.dataset.price);


        const name =
            product.dataset.name.toLowerCase();


        let categoryMatch =
            selectedCategories.length === 0 ||
            selectedCategories.includes(category);


        let priceMatch =
            price <= maxPrice;


        let searchMatch =
            name.includes(searchText);


        if (
            categoryMatch &&
            priceMatch &&
            searchMatch
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}



/* ==================================================
   CATEGORY FILTER
================================================== */

electronicsCategories.forEach(function(category) {

    category.addEventListener(
        "change",
        filterElectronicsProducts
    );

});



/* ==================================================
   PRICE FILTER
================================================== */

if (electronicsPrice) {

    electronicsPrice.addEventListener(
        "input",
        function() {

            electronicsPriceValue.innerText =
                Number(this.value).toLocaleString("en-IN");

            filterElectronicsProducts();

        }
    );

}



/* ==================================================
   SEARCH
================================================== */

if (electronicsSearch) {

    electronicsSearch.addEventListener(
        "keyup",
        filterElectronicsProducts
    );

}



/* ==================================================
   SORT PRODUCTS
================================================== */

const electronicsSort =
    document.getElementById("electronicsSort");


if (electronicsSort) {

    electronicsSort.addEventListener(
        "change",
        function() {

            const container =
                document.getElementById(
                    "electronicsProducts"
                );


            const products =
                Array.from(
                    container.querySelectorAll(
                        ".electronics-product-item"
                    )
                );


            if (this.value === "low") {

                products.sort(function(a, b) {

                    return (
                        parseInt(a.dataset.price) -
                        parseInt(b.dataset.price)
                    );

                });

            }


            if (this.value === "high") {

                products.sort(function(a, b) {

                    return (
                        parseInt(b.dataset.price) -
                        parseInt(a.dataset.price)
                    );

                });

            }


            products.forEach(function(product) {

                container.appendChild(product);

            });

        }
    );

}



/* ==================================================
   CLEAR ELECTRONICS FILTERS
================================================== */

function clearElectronicsFilters() {

    electronicsCategories.forEach(
        function(category) {

            category.checked = false;

        }
    );


    if (electronicsPrice) {

        electronicsPrice.value = 150000;

        electronicsPriceValue.innerText =
            "150,000";

    }

    if (electronicsSearch) {

        electronicsSearch.value = "";

    }
    filterElectronicsProducts();

}

/* ==================================================
   CONTACT FORM
================================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("contactName").value.trim();

            const email =
                document.getElementById("contactEmail").value.trim();

            const phone =
                document.getElementById("contactPhone").value.trim();

            const subject =
                document.getElementById("contactSubject").value;

            const message =
                document.getElementById("contactMessage").value.trim();


            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                subject === "" ||
                message === ""
            ) {

                alert(
                    "Please fill all the fields."
                );

                return;

            }


            if (!email.includes("@")) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }


            if (phone.length < 10) {

                alert(
                    "Please enter a valid phone number."
                );

                return;

            }


            const success =
                document.getElementById(
                    "contactSuccess"
                );


            success.style.display = "block";


            contactForm.reset();


            setTimeout(function() {

                success.style.display = "none";

            }, 5000);

        }
    );

}

/* ================= NEWSLETTER ================= */

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document
            .getElementById("newsletterEmail")
            .value
            .trim();

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for subscribing to ShopEase!");

        newsletterForm.reset();
    });

}