document.addEventListener('DOMContentLoaded', function() {
    const langEnButton = document.getElementById('lang-en');
    const langDeButton = document.getElementById('lang-de');

    langEnButton.addEventListener('click', () => loadMenu('en'));
    langDeButton.addEventListener('click', () => loadMenu('de'));

    function loadMenu(language) {
        const menuFile = language === 'de' ? 'menu_de.json' : 'menu_en.json';

        fetch(menuFile)
            .then(response => response.json())
            .then(data => {
                const menuContainer = document.getElementById('menu-items');
                menuContainer.innerHTML = ''; // Clear existing items

                Object.keys(data).forEach(category => {
                    data[category].forEach(item => {
                        const menuItem = document.createElement('div');
                        menuItem.className = `col-lg-6 menu-item isotope-item filter-${category}`;
                        menuItem.innerHTML = `
                            <div class="menu-content">
                                <a href="#">${item.name}</a><span>${item.price}</span>
                            </div>
                            <div class="menu-ingredients">
                                ${item.description}
                            </div>
                        `;
                        menuContainer.appendChild(menuItem);
                    });
                });
            });
    }

    // Load default language menu (English)
    loadMenu('en');
});