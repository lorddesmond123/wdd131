/* =========================================
   MANGU TOWN GUIDE
   WDD 131 FINAL PROJECT
   JavaScript
   ========================================= */


/* ---------- Shared Footer ---------- */

function updateFooter() {
    const yearElement = document.querySelector("#current-year");
    const modifiedElement = document.querySelector("#last-modified");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (modifiedElement) {
        modifiedElement.textContent =
            `Last modified: ${document.lastModified}`;
    }
}


/* ---------- Mobile Navigation ---------- */

function setupNavigation() {
    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".site-nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("open");

            const menuIsOpen =
                navigation.classList.contains("open");

            menuButton.textContent =
                menuIsOpen ? "✕ Close" : "☰ Menu";
        });
    }
}


/* =========================================
   BUSINESS DATA
   ========================================= */

const businesses = [
    {
        name: "Feel At Home Hotel",
        category: "Hospitality",
        description:
            "A hospitality business providing accommodation and services for residents and visitors in Mangu.",
        hours: "Contact the business for current opening hours.",
        location: "Mangu Town, Plateau State",
        image: "images/hotel.jpg"
    },

    {
        name: "Village Resort",
        category: "Hospitality and Recreation",
        description:
            "A local recreational and hospitality destination where visitors can relax and enjoy the community environment.",
        hours: "Contact the business for current opening hours.",
        location: "Mangu Town, Plateau State",
        image: "images/resort.jpg"
    },

    {
        name: "Hariz Petroleum",
        category: "Petroleum Services",
        description:
            "A local petroleum business serving motorists and members of the Mangu community.",
        hours: "Contact the business for current operating hours.",
        location: "Mangu Town, Plateau State",
        image: "images/petrol-station.jpg"
    },

    {
        name: "Ba'amshim Internet Cafe",
        category: "Technology",
        description:
            "A local technology service where community members can access internet and related services.",
        hours: "Contact the business for current opening hours.",
        location: "Mangu Town, Plateau State",
        image: "images/internet-cafe.jpg"
    },

    {
        name: "Dogzy Sky Computer Business Centre",
        category: "Technology and Business Services",
        description:
            "A local computer business centre providing technology and business-related services to the community.",
        hours: "Contact the business for current opening hours.",
        location: "Mangu Town, Plateau State",
        image: "images/computer-centre.jpg"
    },

    {
        name: "Mangu Friday Market",
        category: "Market and Trade",
        description:
            "A local market where community members can buy and sell goods and agricultural products.",
        hours: "Friday market day. Confirm current hours locally.",
        location: "Mangu Town, Plateau State",
        image: "images/market.jpg"
    }
];


/* =========================================
   BUSINESS DISPLAY
   ========================================= */

function displayBusinesses(list) {
    const businessContainer =
        document.querySelector("#business-list");

    const noResults =
        document.querySelector("#no-results");

    const businessCount =
        document.querySelector("#business-count");

    if (!businessContainer) {
        return;
    }

    businessContainer.innerHTML = "";

    if (list.length === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

    list.forEach((business) => {

        const article = document.createElement("article");

        article.classList.add("business-card");

        article.innerHTML = `
            <img
                src="${business.image}"
                alt="${business.name} community image"
                loading="lazy"
            >

            <div class="business-card-content">

                <h2>${business.name}</h2>

                <p class="business-category">
                    ${business.category}
                </p>

                <p>
                    ${business.description}
                </p>

                <ul class="business-details">
                    <li>
                        <strong>Location:</strong>
                        ${business.location}
                    </li>

                    <li>
                        <strong>Hours:</strong>
                        ${business.hours}
                    </li>
                </ul>

            </div>
        `;

        businessContainer.appendChild(article);
    });

    if (businessCount) {
        businessCount.textContent =
            `${list.length} business${list.length === 1 ? "" : "es"} found`;
    }
}


/* =========================================
   BUSINESS SEARCH
   ========================================= */

function setupBusinessSearch() {
    const searchInput =
        document.querySelector("#business-search");

    if (!searchInput) {
        return;
    }

    displayBusinesses(businesses);

    searchInput.addEventListener("input", () => {

        const searchTerm =
            searchInput.value.toLowerCase().trim();

        const filteredBusinesses =
            businesses.filter((business) => {

                const searchableText =
                    `${business.name} ${business.category} ${business.description}`;

                return searchableText
                    .toLowerCase()
                    .includes(searchTerm);
            });

        displayBusinesses(filteredBusinesses);
    });
}


/* =========================================
   HISTORY TIMELINE
   ========================================= */

function setupHistoryTimeline() {
    const buttons =
        document.querySelectorAll(".timeline-button");

    if (buttons.length === 0) {
        return;
    }

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const content =
                button.nextElementSibling;

            const isOpen =
                content.classList.contains("open");

            document
                .querySelectorAll(".timeline-content")
                .forEach((item) => {
                    item.classList.remove("open");
                });

            document
                .querySelectorAll(".timeline-button span:last-child")
                .forEach((symbol) => {
                    symbol.textContent = "+";
                });

            if (!isOpen) {
                content.classList.add("open");

                const symbol =
                    button.querySelector("span:last-child");

                symbol.textContent = "−";
            }
        });
    });
}


/* =========================================
   CONTACT FORM
   ========================================= */

function setupContactForm() {
    const form =
        document.querySelector("#contact-form");

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const nameInput =
            document.querySelector("#name");

        const emailInput =
            document.querySelector("#email");

        const topicInput =
            document.querySelector("#topic");

        const messageInput =
            document.querySelector("#message");

        const formMessage =
            document.querySelector("#form-message");

        if (
            nameInput.value.trim().length < 2 ||
            !emailInput.checkValidity() ||
            topicInput.value === "" ||
            messageInput.value.trim().length < 10
        ) {
            formMessage.textContent =
                "Please complete all fields correctly before submitting.";

            formMessage.className =
                "form-message error";

            return;
        }

        const feedback = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            topic: topicInput.value,
            message: messageInput.value.trim(),
            date: new Date().toLocaleString()
        };

        localStorage.setItem(
            "manguFeedback",
            JSON.stringify(feedback)
        );

        formMessage.textContent =
            `Thank you, ${feedback.name}. Your feedback has been received.`;

        formMessage.className =
            "form-message success";

        form.reset();
    });
}


/* =========================================
   INITIALIZE WEBSITE
   ========================================= */

function initializeWebsite() {
    updateFooter();
    setupNavigation();
    setupBusinessSearch();
    setupHistoryTimeline();
    setupContactForm();
}

initializeWebsite();