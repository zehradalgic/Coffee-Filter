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

// 1. Filtre butonlarını seçiyoruz
const filterBtns = document.querySelectorAll(".px-6"); // Butonların ortak class'ını kullandık

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // Tıklanan butonun içindeki yazıyı (Hepsi, Sıcak, Soğuk) alıyoruz
    const category = e.currentTarget.innerText.toLowerCase();
    
    // Filtreleme mantığı
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });

    if (category === "hepsi") {
      displayMenuItems(menu);
    } else {
      // Eğer kategori "Sıcak" ise JS'de 'hot', "Soğuk" ise 'cold' diye eşleşmesi lazım
      // Senin menünde category'ler "hot" ve "cold". Buton yazılarını buna göre kontrol edelim:
      
      const turkishCategory = category === "sıcak" ? "hot" : category === "soğuk" ? "cold" : category;
      
      const filteredMenu = menu.filter(item => item.category === turkishCategory);
      displayMenuItems(filteredMenu);
    }
  });
});