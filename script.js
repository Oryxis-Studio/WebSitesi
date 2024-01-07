document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("home-link");
    const productsLink = document.getElementById("products-link");
    const aboutLink = document.getElementById("about-link");
    const contactLink = document.getElementById("contact-link");
    const learnMoreLink = document.getElementById("learn-more-link");

    const introSection = document.querySelector(".intro-section");
    const productsSection = document.getElementById("products-section");
    const aboutSection = document.getElementById("about-section");
    const contactSection = document.getElementById("contact-section");

    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        introSection.style.display = "block";
    });

    productsLink.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        productsSection.style.display = "block";
        productsSection.scrollIntoView({ behavior: "smooth" });
    });

    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        aboutSection.style.display = "block";
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        contactSection.style.display = "block";
        contactSection.scrollIntoView({ behavior: "smooth" });
    });

    learnMoreLink.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        productsSection.style.display = "block";
        productsSection.scrollIntoView({ behavior: "smooth" });
    });

    function hideAllSections() {
        introSection.style.display = "none";
        productsSection.style.display = "none";
        aboutSection.style.display = "none";
        contactSection.style.display = "none";
    }

    const productContainer = document.getElementById("product-container");

    // Örnek ürün verileri
    const sampleProducts = [
        { title: "Ürün 1", description: "Açıklama 1", image: "path/to/image1.jpg" },
        { title: "Ürün 2", description: "Açıklama 2", image: "path/to/image2.jpg" },
        { title: "Ürün 3", description: "Açıklama 3", image: "path/to/image3.jpg" },
        { title: "Ürün 4", description: "Açıklama 4", image: "path/to/image4.jpg" },
        { title: "Ürün 5", description: "Açıklama 5", image: "path/to/image5.jpg" },
        { title: "Ürün 6", description: "Açıklama 6", image: "path/to/image6.jpg" },
        { title: "Ürün 7", description: "Açıklama 7", image: "path/to/image7.jpg" },
        { title: "Ürün 8", description: "Açıklama 8", image: "path/to/image8.jpg" },
        { title: "Ürün 9", description: "Açıklama 9", image: "path/to/image9.jpg" },
        { title: "Ürün 10", description: "Açıklama 10", image: "path/to/image10.jpg" },
        { title: "Ürün 11", description: "Açıklama 11", image: "path/to/image11.jpg" },
        { title: "Ürün 12", description: "Açıklama 12", image: "path/to/image12.jpg" },
        { title: "Ürün 13", description: "Açıklama 13", image: "path/to/image13.jpg" },
        { title: "Ürün 14", description: "Açıklama 14", image: "path/to/image14.jpg" },
        { title: "Ürün 15", description: "Açıklama 15", image: "path/to/image15.jpg" },
        { title: "Ürün 16", description: "Açıklama 16", image: "path/to/image16.jpg" },
        { title: "Ürün 17", description: "Açıklama 17", image: "path/to/image17.jpg" },
        { title: "Ürün 18", description: "Açıklama 18", image: "path/to/image18.jpg" },
        { title: "Ürün 19", description: "Açıklama 19", image: "path/to/image19.jpg" },
        { title: "Ürün 20", description: "Açıklama 20", image: "path/to/image20.jpg" },
        { title: "Ürün 21", description: "Açıklama 21", image: "path/to/image21.jpg" },
        { title: "Ürün 22", description: "Açıklama 22", image: "path/to/image22.jpg" },
        { title: "Ürün 23", description: "Açıklama 23", image: "path/to/image23.jpg" },
        { title: "Ürün 24", description: "Açıklama 24", image: "path/to/image24.jpg" },
        { title: "Ürün 25", description: "Açıklama 25", image: "path/to/image25.jpg" },
        { title: "Ürün 26", description: "Açıklama 26", image: "path/to/image26.jpg" },
        { title: "Ürün 27", description: "Açıklama 27", image: "path/to/image27.jpg" },
        { title: "Ürün 28", description: "Açıklama 28", image: "path/to/image28.jpg" },
        { title: "Ürün 29", description: "Açıklama 29", image: "path/to/image29.jpg" },
        { title: "Ürün 30", description: "Açıklama 30", image: "path/to/image30.jpg" }
    ];

    // Her bir ürün için HTML oluştur
    sampleProducts.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.title;

        const productTitle = document.createElement("h3");
        productTitle.textContent = product.title;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        // Oluşturulan elemanları ürün div içine ekle
        productDiv.appendChild(productImage);
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productDescription);

        // Ürün div'ini container'a ekle
        productContainer.appendChild(productDiv);

    });
    const productContainers = document.querySelectorAll(".product");

productContainers.forEach(product => {
    product.addEventListener("click", function () {
        // Rastgele renk oluştur
        const randomColor = getRandomColor();

        // Renk değişikliği
        this.style.backgroundColor = randomColor;
    });
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

});
