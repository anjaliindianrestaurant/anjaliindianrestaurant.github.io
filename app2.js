let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    // Vegetarian
    {
        id: 173,
        name: 'Dal Makhani',
        description: 'indischer Linseneintopf in Buttersoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 174,
        name: 'Palak Paneer',
        description: 'mit Spinat und indischem Käse mit Currysoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 175,
        name: 'Vegetarisches Korma',
        description: 'mit gebratenem Gemüse, Käse und Mandeln in einer Joghurt-Kokos-Soße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 177,
        name: 'Paneer Curry',
        description: 'indischer Käse in Tomaten-Curry-Soße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 178,
        name: 'Chana Masala',
        description: 'Tomaten und Ingwer in Kichererbsensoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 179,
        name: 'Aloo Gobi',
        description: 'Kartoffeln und Blumenkohl in fein gewürzter Currysoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 180,
        name: 'Shahi Paneer',
        description: 'indischer Rahmkäse mit Mandeln und Rosinen in Currysoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 181,
        name: 'Mattar Paneer',
        description: 'Erbsen und Rahmkäse in Currysoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 182,
        name: 'Paneer Masala',
        description: 'indischer Käse mit Paprika, Chili und indischen Gewürzen',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 183,
        name: 'Mixed Sabji',
        description: 'angebratenes Gemüse in Currysoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 184,
        name: 'Aloo Matar',
        description: 'Kartoffeln, Erbsen, Ingwer und Zwiebeln in Currysoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 186,
        name: 'Cheese Chili',
        description: 'indischer Käse in Tomaten-Curry-Soße (scharf)',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 187,
        name: 'Anjali Mallai Korma',
        description: 'gebratenes Gemüse in Pistazien-Sahnesoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 188,
        name: 'Paneer Tikka',
        description: 'indischer Rahmkäse, verschiedene Gewürze in Currysoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 189,
        name: 'Anjali Mallai Koffta',
        description: 'mit Kartoffeln, Käse und Gemüse in einer milder Curry-Cremesoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 191,
        name: 'Mushroom Chana Paneer',
        description: 'Champignons, Käse und Kichererbsen in Curry-Tomatensoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 192,
        name: 'Krahi Paneer',
        description: 'gebratener Rahmkäse, Paprika, Zwiebeln in Tomaten-Cremesoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 193,
        name: 'Kofta Kandari Minze',
        description: 'Koriander, Sesamöl und Gemüsebällchen in Cremesoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 194,
        name: 'Curry Kofta',
        description: 'Gemüse und Käsebällchen in Curry-Cremesoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 195,
        name: 'Vegetarisches Mango Curry',
        description: 'frisches Gemüse in Mangosoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 196,
        name: 'Chana Palak',
        description: 'Kichererbsen und Spinat in Currysoße',
        price: 1200,
        category: 'Vegetarian'
    },
    {
        id: 197,
        name: 'Shahi Paneer (extra scharf)',
        description: 'ind. Rahmkäse, Mandeln, Rosinen in Currysoße (extra scharf)',
        price: 1200,
        category: 'Vegetarian'
    },

    // Vegan
    {
        id: 201,
        name: 'Vegan Curry',
        description: 'Seitan und gebratenes Gemüse in Tomaten-Currysoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 202,
        name: 'Vegan Korma',
        description: 'Gemüse, Mandeln und Rosinen in Kokoscremesoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 203,
        name: 'Palak Paneer (Vegan)',
        description: 'Tofu und Spinat in Currysoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 204,
        name: 'Aloo Baignan',
        description: 'Kartoffeln und Aubergine in fein gewürzter Currysoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 205,
        name: 'Aloo Mattar',
        description: 'Kartoffeln, Erbsen, Ingwer und Zwiebeln in Currysoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 206,
        name: 'Mix Vegan',
        description: 'frisch gebratenes Gemüse in Currysoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 207,
        name: 'Shahi Paneer (Vegan)',
        description: 'Tofu, Mandeln und Rosinen in Kokoscremesoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 208,
        name: 'Vegan Krahi',
        description: 'Seitan, Paprika und Zwiebeln in Tomatensoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 209,
        name: 'Vegan Tikka',
        description: 'Seitan, Paprika und Zwiebeln in Kokoscremesoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 210,
        name: 'Vegan Masala',
        description: 'Seitan, Paprika Chili und indische Gewürze',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 211,
        name: 'Vegan Mandelin',
        description: 'Seitan, Mandeln und Rosinen in Kokoscremesoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 212,
        name: 'Vegan Sabji',
        description: 'mit frisch angebratenem Gemüse, Kartoffel und Kokoscremesoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 213,
        name: 'Vegan Allu Paneer',
        description: 'mit Kartoffel und veganem Käse mit Curry und Kokoscremesoße',
        price: 1300,
        category: 'Vegan'
    },
    {
        id: 214,
        name: 'Vegan Champignons Chana',
        description: 'mit weißen Champignons, Erbsen, Kartoffel und Kokos in scharfer Tomatensoße',
        price: 1300,
        category: 'Vegan'
    },

    // Starters
    {
        id: 114,
        name: 'Kartoffel Samosas',
        description: '(2 Stück)',
        price: 800,
        category: 'Starters'
    },
    {
        id: 115,
        name: 'Chicken Samosas',
        description: '(2 Stück)',
        price: 800,
        category: 'Starters'
    },
    {
        id: 319,
        name: 'Chutney Samosas',
        description: '(2 Stück)',
        price: 800,
        category: 'Starters'
    },
    {
        id: 116,
        name: 'Chicken Pakora',
        description: 'mit Hähnchen',
        price: 650,
        category: 'Starters'
    },
    {
        id: 117,
        name: 'Paneer Pakora',
        description: 'mit indischem Käse',
        price: 750,
        category: 'Starters'
    },
    {
        id: 118,
        name: 'Gemüse Pakora',
        description: 'mit Kartoffeln und Blumenkohl',
        price: 650,
        category: 'Starters'
    },
    {
        id: 119,
        name: 'Mix Pakora',
        description: 'mit Fleisch, Gemüse und Käse',
        price: 800,
        category: 'Starters'
    },
    {
        id: 120,
        name: 'Aloo Paratha',
        description: 'mit Kartoffeln',
        price: 1100,
        category: 'Starters'
    },
    {
        id: 122,
        name: 'Cheese Paratha',
        description: 'mit indischem Käse',
        price: 1100,
        category: 'Starters'
    },
    {
        id: 36,
        name: 'Anjali Teller',
        description: 'mit Halloumi, Kartoffelflecken, Falafel und Reis',
        price: 900,
        category: 'Starters'
    },
    {
        id: 37,
        name: 'Vegetarischer Teller',
        description: 'mit Halloumi, Falafel, gebratenem Gemüse, Mozzarella und Brot oder Reis',
        price: 1000,
        category: 'Starters'
    },
    {
        id: 38,
        name: 'Veganer Teller',
        description: 'mit veganem Fleisch, gebratenem Gemüse, Salat und Reis',
        price: 1100,
        category: 'Starters'
    },
    {
        id: 39,
        name: 'Gemischter Salat',
        description: 'mit Eisbergsalat, Tomaten und Gurke',
        price: 600,
        category: 'Starters'
    },
    {
        id: 40,
        name: 'Tandoori Salat',
        description: 'mit mariniertem Hähnchen',
        price: 900,
        category: 'Starters'
    },
    {
        id: 41,
        name: 'Salat Tonno',
        description: 'gemischter Salat mit Thunfisch und Zwiebeln',
        price: 800,
        category: 'Starters'
    },
    {
        id: 42,
        name: 'Salat Hawaii',
        description: 'gemischter Salat mit Kochschinken und Ananas',
        price: 650,
        category: 'Starters'
    },
    {
        id: 43,
        name: 'Halloumi Salat',
        description: 'gemischter Salat mit Halloumikäse',
        price: 900,
        category: 'Starters'
    },
    {
        id: 44,
        name: 'Anjali Spezial',
        description: 'gemischter Salat mit gebrat. Gemüse & paniertem Schafskäse',
        price: 900,
        category: 'Starters'
    },
    {
        id: 51,
        name: 'Pide mit Spinat und Käse',
        description: 'mit Spinat und Käse',
        price: 1100,
        category: 'Starters'
    },
    {
        id: 52,
        name: 'Pide mit Brokkoli und Käse',
        description: 'mit Brokkoli und Käse',
        price: 1100,
        category: 'Starters'
    },
    {
        id: 53,
        name: 'Pide mit Spinat Knoblauch und Ei',
        description: 'mit Spinat Knoblauch und Ei',
        price: 1100,
        category: 'Starters'
    },
    {
        id: 54,
        name: 'Pide mit Thunfisch',
        description: 'mit Thunfisch',
        price: 1100,
        category: 'Starters'
    },

    // Chicken
    {
        id: 128,
        name: 'Butter Chicken Masala',
        description: 'mit Hähnchen in Curry-Sahnesoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 129,
        name: 'Krahi Chicken',
        description: 'mit Hähnchenfleisch, Paprika, Zwiebeln in Tomatensoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 130,
        name: 'Chicken Chili',
        description: 'mit Hähnchenfleisch, Zwiebeln, Paprika, Chees-Chili-Soße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 131,
        name: 'Chicken Curry',
        description: 'mit zartem Hähnchen in Currysoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 132,
        name: 'Chicken Korma',
        description: 'Hähnchen, Mandeln und Rosinen in Sahnesoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 133,
        name: 'Butter Chicken',
        description: 'Hähnchen in milder Curry-Sahnesoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 134,
        name: 'Fruity Chicken',
        description: 'Hähnchen, in fruchtiger Ananas-Currysoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 135,
        name: 'Chicken Vindaloo',
        description: 'Hähnchen mit Kartoffeln (sehr scharf)',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 136,
        name: 'Anjali Tandoori Tikka',
        description: 'mariniertes Hähnchen in Pickles-Soße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 137,
        name: 'Chicken Saag',
        description: 'Hähnchen mit Spinat in Currysoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 138,
        name: 'Chicken Spezial',
        description: 'Hähnchen mit gebratenem Gemüse in Currysoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 139,
        name: 'Hot Mango',
        description: 'Hähnchen in fruchtig-pikanter Mango-Currysoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 140,
        name: 'Chicken Jalfrezi',
        description: 'Hähnchen, Paprika, Ingwer, Zwiebeln, Chili und scharfe Tomatensoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 141,
        name: 'Tandoori Chicken',
        description: 'mariniertes Hähnchen (geschmort) mit indischen Gewürzen',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 142,
        name: 'Rahm Curry',
        description: 'mit Hähnchen und gebratenem Käse in Currysoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 143,
        name: 'Badam Passanda',
        description: 'Hähnchen in einer Nuss-Soße mit Kokosflocken und gemahlenen Mandeln',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 144,
        name: 'Chicken Pasawer',
        description: 'mit Hähnchen und gemahlenen Mandeln in Nuss-Soße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 145,
        name: 'Chicken Korma Spezial',
        description: 'mit Hähnchen und gebratenem Gemüse in Korma-Soße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 146,
        name: 'Madras Curry',
        description: 'mit Hähnchen in Currysoße (scharf)',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 147,
        name: 'Chick Chicken',
        description: 'mit Hähnchen und Kichererbsen in Currysoße (scharf)',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 148,
        name: 'Chicken Tikka',
        description: 'mit Hähnchen, Zwiebeln und Paprika in Currysoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 149,
        name: 'Chicken Tandoori',
        description: 'mariniertes Hähnchen mit indischen Gewürzen und fruchtiger Mangosoße',
        price: 1300,
        category: 'Chicken'
    },
    {
        id: 153,
        name: 'Tandoori Korma',
        description: 'mariniertes Hähnchen in milder Curry-Cashew-Creme-Soße',
        price: 1300,
        category: 'Chicken'
    },

    // Miscelleneous
    {
        id: 70,
        name: 'Calzone Classic',
        description: 'mit Tomatensoße, Kochschinken, Käse, Salami und Champignons',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 71,
        name: 'Calzone Ei',
        description: 'mit Salami, Schinken, Hackfleisch, Zwiebeln, Knoblauch',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 75,
        name: 'Pomodore',
        description: 'mit Tomatensoße "Napoli Art"',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 76,
        name: 'Carbonara',
        description: 'mit Kochschinken, Sahnesoße, Ei und Parmesankäse',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 78,
        name: 'Gorgonzola',
        description: 'mit Gorgonzola Sahnesoße',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 79,
        name: 'Quattro Formaggi',
        description: 'mit Sahnesoße und 4 Käse',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 80,
        name: 'Serafino',
        description: 'mit Kochschinken, Champignons, Sahnesoße und Käse überbacken',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 81,
        name: 'Luigi',
        description: 'mit Kochschinken, Brokkoli, Sahnesoße und Käse überbacken',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 82,
        name: 'Spinaci-Chicken',
        description: 'mit Hähnchenbrustfilet, Spinat, Sahnesoße & Käse überbacken',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 84,
        name: 'Pasta Anjali',
        description: 'mit Thunfisch, Knoblauch, Chili und Tomatensoße',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 85,
        name: 'Pasta Salmone',
        description: 'mit Lachsfilet, Spinat und Sahne-Tomatensoße',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 100,
        name: 'Wiener Art',
        description: 'mit paniertem Hähnchenschnitzel',
        price: 1050,
        category: 'Miscelleneous'
    },
    {
        id: 101,
        name: 'Zigeuner Schnitzel',
        description: 'mit scharfer Zigeunersoße',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 102,
        name: 'Rahmschnitzel',
        description: 'mit Kochschinken, Champignons in Sahnesoße',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 103,
        name: 'Hawaii',
        description: 'mit Kochschinken und Ananas in Sahnesoße',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 104,
        name: 'Apollo',
        description: 'mit gebratenen Champignons, Zwiebeln und Sahnesoße',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 105,
        name: 'Gorgonzola',
        description: 'mit Gorgonzola und Sahnesoße',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 106,
        name: 'Brokkoli',
        description: 'mit Brokkoli in Sahnesoße',
        price: 1100,
        category: 'Miscelleneous'
    },
    {
        id: 107,
        name: 'Indisches Schnitzel',
        description: 'mit Kichererbsensoße',
        price: 1150,
        category: 'Miscelleneous'
    },
    {
        id: 112,
        name: 'Portion Pommes Klein',
        description: 'Klein',
        price: 400,
        category: 'Miscelleneous'
    },
    {
        id: 112,
        name: 'Portion Pommes groß',
        description: 'groß',
        price: 500,
        category: 'Miscelleneous'
    },

    // Fish, Meat and Rice
    {
        id: 152,
        name: 'Fisch Curry',
        description: 'Fischfilet in Currysoße',
        price: 1400,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 154,
        name: 'Fisch Masala',
        description: 'Fischfilet mit Paprika, Chili und indischen Gewürze',
        price: 1400,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 168,
        name: 'Ente Curry',
        description: 'Entenfleisch in Tomaten-Curry-Cashew-Soße in Currysoße',
        price: 1600,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 169,
        name: 'Ente Korma',
        description: 'Entenfleisch mit Mandeln und Rosinen in Cashew-Sahnesoße',
        price: 1600,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 170,
        name: 'Ente Mango',
        description: 'Entenfleisch mit Mandeln in Mango-Currysoße',
        price: 1600,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 171,
        name: 'Ente Gemüse',
        description: 'Entenfleisch mit frisch gebratenem Gemüse in Curry-Cashew-Soße',
        price: 1600,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 172,
        name: 'Ente Paneer',
        description: 'Entenfleisch mit indischem Käse in Tomaten-Currysoße',
        price: 1600,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 156,
        name: 'Lamm Curry',
        description: 'Lamm in Currysoße',
        price: 1500,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 157,
        name: 'Lamm Saag',
        description: 'Lamm mit Spinat in Currysoße',
        price: 1500,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 158,
        name: 'Lamm Sabji',
        description: 'Lamm mit frisch gebratenem Gemüse in Currysoße',
        price: 1500,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 159,
        name: 'Lamm Masala',
        description: 'Lamm mit Paprika, Chili und indischen Gewürzen',
        price: 1500,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 160,
        name: 'Lamm Korma',
        description: 'Lamm mit Mandeln und Rosinen in indischer Sahnesoße',
        price: 1500,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 161,
        name: 'Lamm Pistazie',
        description: 'Lamm mit Pistazie in hausgemachter Cremesoße (mild)',
        price: 1500,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 162,
        name: 'Lamm Tikka',
        description: 'gegrilltes Lamm mit Paprika, Zwiebeln in einer Curry-Cashew-Cremesoße',
        price: 1500,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 165,
        name: 'Mugli Lamm Paneer',
        description: 'gegrilltes Lamm mit gewürztem indischen Käse in Tomaten-Currysoße',
        price: 1500,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 166,
        name: 'Lamm Kandari',
        description: 'Lammfleisch in einer Curry-Minz-Soße',
        price: 1500,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 167,
        name: 'Lamm Vindaloo',
        description: 'Lammfleisch und Kartoffeln in scharfer Tomatensoße',
        price: 1500,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 197,
        name: 'Vegetarisches Biryani',
        description: 'Basmatireis, Gemüse, Nüsse, Rosinen und indischen Gewürzen',
        price: 1200,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 198,
        name: 'Veggi Korma Biryani',
        description: 'Basmatireis mit milder Korma-Cashew-Cremesoße',
        price: 1200,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 199,
        name: 'Mutton Biryani',
        description: 'mit Basmatireis, Lammfleisch, Nüssen, Rosinen und indischen Gewürzen',
        price: 1500,
        category: 'Fish, Meat and Rice'
    },
    {
        id: 200,
        name: 'Chicken Biryani',
        description: 'mit Basmatireis, Hähnchen und Joghurtsöße',
        price: 1300,
        category: 'Fish, Meat and Rice'
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="title">${value.name}</div>
            <div>${value.description}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}