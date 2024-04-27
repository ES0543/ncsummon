// Kart dönme işlemi
function kartiDon(kart) {
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
}

// Tüm kartları seç
const kartlar = document.querySelectorAll(".kart");

// Her kart için dönme işlemini dinle
kartlar.forEach(function(kart) {
    kart.addEventListener("click", function() {
        kartiDon(kart);
    });
});

// Hepsini çevir butonunu seç
const hepsiniCevirBtn = document.getElementById("hepsiniCevirBtn");
hepsiniCevirBtn.addEventListener("click", function() {
    kartlar.forEach(kart => {
        kartiDon(kart);
    });
});

function tebrikMesajiGoster() {
    // Tebrik mesajını oluştur
    const tebrikMesaji = document.createElement("div");
    tebrikMesaji.className = "tebrik-mesaji";
    tebrikMesaji.textContent = "Congratzzz +100k GR Ahahaha";
    
    // Tebrik mesajını ekranın ortasına yerleştir
    tebrikMesaji.style.position = "fixed";
    tebrikMesaji.style.top = "50%";
    tebrikMesaji.style.left = "50%";
    tebrikMesaji.style.transform = "translate(-50%, -50%)";
    tebrikMesaji.style.fontSize = "2em";
    tebrikMesaji.style.color = "red";

    // Mesajı ekranın sonuna ekle
    document.body.appendChild(tebrikMesaji);

    // Belirli bir süre sonra mesajı kaldır
    setTimeout(function() {
        tebrikMesaji.remove();
    }, 3000); // 3 saniye sonra kaldır
}
