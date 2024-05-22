// Game 1 ve Game 2 butonlarını seç
const game1Btn = document.getElementById("game1Btn");
const game2Btn = document.getElementById("game2Btn");

// Game 1 ve Game 2 alanlarını seç
const game1Area = document.getElementById("game1");
const game2Area = document.getElementById("game2");

// Game 1 butonuna tıklandığında
game1Btn.addEventListener("click", function() {
    // Game 1 butonunu vurgula, Game 2 butonunun vurgusunu kaldır
    game1Btn.classList.add("active");
    game2Btn.classList.remove("active");

    // Game 1 alanını göster, Game 2 alanını gizle
    game1Area.style.display = "block";
    game2Area.style.display = "none";

    // Oyunu sıfırla
    resetGame(game1Area);
});

// Game 2 butonuna tıklandığında
game2Btn.addEventListener("click", function() {
    // Game 2 butonunu vurgula, Game 1 butonunun vurgusunu kaldır
    game2Btn.classList.add("active");
    game1Btn.classList.remove("active");

    // Game 2 alanını göster, Game 1 alanını gizle
    game2Area.style.display = "block";
    game1Area.style.display = "none";

    // Oyunu sıfırla
    resetGame(game2Area);
});

// Oyunu sıfırlama işlevi
function resetGame(gameArea) {
    // Tüm kartları seç ve sıfırla
    const kartlar = gameArea.querySelectorAll(".kart");
    kartlar.forEach(kart => {
        kart.className = "kart";
    });
}

// Kart dönme işlemi
function kartiDon(kart, oranlar) {
    kart.classList.add("donuyor");

    setTimeout(function() {
        const rastgeleSayi = Math.random() * 100;

        if (rastgeleSayi < oranlar.siyah) {
            kart.className = "kart siyah";
        } else if (rastgeleSayi < oranlar.siyah + oranlar.yesil) {
            kart.className = "kart yesil";
        } else if (rastgeleSayi < oranlar.siyah + oranlar.yesil + oranlar.mavi) {
            kart.className = "kart mavi";
        } else if (rastgeleSayi < oranlar.siyah + oranlar.yesil + oranlar.mavi + oranlar.mor) {
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
        // Game 1 veya Game 2'ye göre oranları al
        const oranlar = game1Btn.classList.contains("active") ? game1Ratios : game2Ratios;
        kartiDon(kart, oranlar);
    });
});

// Hepsini çevir butonunu seç
const hepsiniCevirBtn = document.getElementById("hepsiniCevirBtn");
hepsiniCevirBtn.addEventListener("click", function() {
    kartlar.forEach(kart => {
        // Game 1 veya Game 2'ye göre oranları al
        const oranlar = game1Btn.classList.contains("active") ? game1Ratios : game2Ratios;
        kartiDon(kart, oranlar);
    });
});

// Oranları güncelleme fonksiyonu
function updateRatios(oranlar) {
    // Oranları güncelle
    const toplam = oranlar.yesil + oranlar.mavi + oranlar.mor + oranlar.sari;
    oranlar.yesil = oranlar.yesil / toplam * 100;
    oranlar.mavi = oranlar.mavi / toplam * 100;
    oranlar.mor = oranlar.mor / toplam * 100;
    oranlar.sari = oranlar.sari / toplam * 100;
}

// Game 1 ve Game 2 için oranlar
const game1Ratios = {
    siyah: 70.9456990,
    yesil: 27.5624824,
    mavi: 1.3229786,
    mor: 0.1587599,
    sari: 0.0100800
};

const game2Ratios = {
    siyah: 0,
    yesil: 95.6998564,
    mavi: 3.9701040,
    mor: 0.3200395,
    sari: 0.0100000
};

// Tebrik mesajını gösterme işlevi
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
