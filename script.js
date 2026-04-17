const menu = [
  {
    id: 1,
    title: "Muzlu-Çilekli Milkshake",
    category: "cold",
    price: 95.00,
    img: "./images/muzlu_cilekli_milkshake.jpg",
    desc: "Bol buzlu, taze sütlü ve yumuşak içimli muzlu-çilekli milkshake.",
  },
  {
    id: 2,
    title: "Mix Milkshake",
    category: "cold",
    price: 75.00,
    img: "./images/mix_milkshake.jpg",
    desc: "Bol buzlu, taze sütlü ve yumuşak içimli mix milkshake.",
  },
  {
    id: 3,
    title: "Ice Tea",
    category: "cold",
    price: 110.00,
    img: "./images/buzlu_cay.jpg",
    desc: "Buz gibi soğuk çay",
  },
   {
    id: 4,
    title: "Bubble Tea",
    category: "cold",
    price: 110.00,
    img: "./images/bubble_tea.jpg",
    desc: "Buz gibi Bubble Tea",
  },
   {
    id: 5,
    title: "Çay",
    category: "hot",
    price: 110.00,
    img: "./images/cay.jpg",
    desc: "sıcak Çay",
  },
   {
    id: 6,
    title: "Espresso",
    category: "hot",
    price: 110.00,
    img: "./images/espresso.jpg",
    desc: "sütün espresso ile mükemmel uyumu.",
  },
   {
    id: 7,
    title: "Filtre Kahve",
    category: "hot",
    price: 110.00,
    img: "./images/filtre_kahve.jpg",
    desc: "taptaze kahve ile yapılmış filtre kahve",
  },
   {
    id: 8,
    title: "Latte",
    category: "hot",
    price: 110.00,
    img: "./images/Latte.jpg",
    desc: "sütün kahve ile mükemmel uyumu.",
  },
  
];
const menuContainer = document.querySelector("#menu-container");

// Menü elemanlarını ekrana basan fonksiyon
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
      <div class="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition border border-stone-200">
        <img src="${item.img}" alt="${item.title}" class="w-full h-48 object-cover rounded-xl mb-4">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-xl font-bold text-amber-900">${item.title}</h2>
          <span class="text-amber-700 font-bold">${item.price} TL</span>
        </div>
        <p class="text-stone-500 text-sm italic">${item.desc}</p>
      </div>
    `;
  });

  menuContainer.innerHTML = displayMenu.join("");
}

// Sayfa ilk yüklendiğinde tüm menüyü göster
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});
const filterBtns = document.querySelectorAll(".px-6");

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // Tıklanan butonun yazısını al ve küçük harfe çevir
    const category = e.currentTarget.innerText.toLowerCase();

    if (category === "all" || category === "hepsi") {
      // Eğer 'All' seçildiyse hiçbir şeyi filtrelemeden tüm listeyi göster
      displayMenuItems(menu);
    } else {
      // Değilse, kategoriye göre filtrele (Sıcak -> hot, Soğuk -> cold eşleşmesi)
      const targetCategory = category === "sıcak" || category === "hot" ? "hot" : "cold";
      
      const menuCategory = menu.filter(function (menuItem) {
        return menuItem.category === targetCategory;
      });
      
      displayMenuItems(menuCategory);
    }
  });
});