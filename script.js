// script.js
const kartlar = document.querySelectorAll(".kart");

kartlar.forEach((kart, index) => {
  kart.addEventListener("click", function() {
    kart.classList.add("donuyor");

    setTimeout(function() {
      const rastgeleSayi = Math.random() * 100;

      if (rastgeleSayi < 70.9456990) {
        kart.className = "kart siyah";
      } else if (rastgeleSayi < 98.5081814) {
        kart.className = "kart yesil";
      } else if (rastgeleSayi < 99.8311599) {
        kart.className = "kart mavi";
      } else if (rastgeleSayi < 99.9899198) {
        kart.className = "kart mor";
      } else {
        kart.className = "kart sari"; 
        tebrikMesajiGoster(); // Sarıyı denk getiren kullanıcı için tebrik mesajını göster
      }

      kart.classList.remove("donuyor");
    }, 1000);
  }); 
});

const hepsiniCevirBtn = document.getElementById("hepsiniCevirBtn");
hepsiniCevirBtn.addEventListener("click", function() {
  kartlar.forEach(kart => {
    kart.classList.add("donuyor");

    setTimeout(function() {
      const rastgeleSayi = Math.random() * 100;

      if (rastgeleSayi < 70.9456990) {
        kart.className = "kart siyah";
      } else if (rastgeleSayi < 98.5081814) {
        kart.className = "kart yesil";
      } else if (rastgeleSayi < 99.8311599) {
        kart.className = "kart mavi";
      } else if (rastgeleSayi < 99.9899198) {
        kart.className = "kart mor";
      } else {
        kart.className = "kart sari"; 
        tebrikMesajiGoster(); // Sarıyı denk getiren kullanıcı için tebrik mesajını göster
      }

      kart.classList.remove("donuyor");
    }, 1000);
  });
});

function tebrikMesajiGoster() {
  // Tebrik mesajını oluştur
  const tebrikMesaji = document.createElement("div");
  tebrikMesaji.className = "tebrik-mesaji";
  tebrikMesaji.textContent = "Congratzzz +100k GR Ahahaha";

  // Mesajı ekranın sonuna ekle
  document.body.appendChild(tebrikMesaji);

  // Belirli bir süre sonra mesajı kaldır
  setTimeout(function() {
    tebrikMesaji.remove();
  }, 3000); // 3 saniye sonra kaldır
}
