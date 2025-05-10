# 🕌 Zikra - Namaz Vakitleri Uygulaması

Zikra, konuma göre dinamik namaz vakitlerini gösteren minimalist bir web uygulaması. Şık arayüzü ve kullanıcı dostu yapısıyla günlük ibadet planlamanızı kolaylaştırır ve Kur'an-ı Kerim'den günlük hatırlatmalarla manevi bir deneyim sunar.

<div align = center >
  <img src = 'https://github.com/user-attachments/assets/7bce345d-5e96-4753-9897-15e3a846e698' width=50% >
</div>

## 🚀 Başlangıç
Zikra, GitHub üzerinden erişime açık, aşağıdaki bağlantıdan uygulamayı canlı olarak görebilirsiniz

👉 [Zikra Namaz Vakitleri Uygulaması](https://yasir237.github.io/Zikra-NamazVakitleri/)

  veya

👉 [https://yasir237.github.io/Zikra-NamazVakitleri/](https://yasir237.github.io/Zikra-NamazVakitleri/)

---


## 🚀 Özellikler

- 📍 Şehre göre dinamik namaz vakitleri
- ⏰ Bir sonraki vakti ve süresini gösteren sayaç
- 🕋 Kur’ân’dan anlamlı ayetlerin rastgele gösterimi
- 🌙 Hem Arapça hem Türkçe uyumlu fontlar ve responsive tasarım
- 📸 Özgün logo ve favicon kullanımı
- 🎨 Minimal ve sade kullanıcı arayüzü

---

## 🧱 Kullanılan Teknolojiler

| Teknoloji        | Açıklama                          |
|------------------|-----------------------------------|
| **React**        | Ana kullanıcı arayüzü            |
| **Tailwind CSS** | Modern ve duyarlı stil tasarımı  |
| **Vite**         | Hızlı geliştirme ortamı          |
| **Prayer Times API** | Namaz vakitlerini çekmek için |
| **React Router** | Sayfa geçişleri için             |
| **API**          | Prayer Times API (aladhan.com)   |

---

## 🛠️ Kurulum

```bash
git clone https://github.com/yasir237/NamazVakitleri
npm install
npm run dev
```


---

## 🧠 Öne Çıkan Detaylar

* 🌐 `<title>` etiketi seçilen şehre göre dinamik olarak güncellenir.
* 🌙 Namaz vakitleri saat ve dakika formatıyla sunulur (`HH:mm`).
* 📿 Arapça ayetler için özel fontlar (`Scheherazade`, `Amiri`) kullanılmıştır.
* ⚠️ Türkçe karakterler doğru görüntülenmesi için font fallback yapısı optimize edilmiştir.
* 🧭 Kullanıcı şehri seçiminde varsayılan olarak "İstanbul" kullanılmakta, ancak dinamik olarak değiştirilebilir.

---


## 🕋 Örnek Ayet Gösterimi

```js
const ayetler = [
  {
    arapca: "فَذَكِّرْ إِنَّمَا أَنْتَ مُذَكِّرٌ",
    turkce: "Öğüt ver, çünkü sen ancak öğüt verensin",
    reference: "Gâşiye Suresi - 21"
  },
  ...
];
```

---

## 📷 Ekran Görüntüsü

![Siteden Ekran Görüntüsü](https://github.com/user-attachments/assets/4330f2e4-e951-427b-bbb3-3c1e5587c3b0)

---

## 🧠 Geliştirilen Algoritmalar

### 📍En Yakın Şehir Tespiti (Konum Algoritması)

* **Haversine formülü** kullanılarak, kullanıcının enlem ve boylam bilgisi ile 81 il merkezi arasındaki mesafe hesaplanır.
* Bu hesaplama sonucunda kullanıcıya en yakın şehir tespit edilir.
* Haversine formülü küresel mesafe hesaplamaları için optimize edilmiştir ve yüksek doğruluk sağlar.

```js
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Dünya yarıçapı (km)
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
```

Kullanıcının konumu (latitude, longitude) verildiğinde Türkiye'deki 81 şehirle kıyaslanır. İki koordinat arasındaki mesafe, şu formülle bulunur:

$$
a = \sin^2\left(\frac{Δφ}{2}\right) + \cos(φ_1) \cdot \cos(φ_2) \cdot \sin^2\left(\frac{Δλ}{2}\right)
$$

$$
c = 2 \cdot \arctan2\left(\sqrt{a}, \sqrt{1-a}\right)
$$

$$
d = R \cdot c
$$

* $φ$: enlem (radyan cinsinden)
* $λ$: boylam (radyan)
* $R$: Dünya yarıçapı (\~6371 km)

Bu mesafe tüm şehirler için hesaplanır, minimum olan seçilir.

### ⏳Bir Sonraki Namaza Kalan Süre Hesaplama

Namaz vakitlerini dakikaya çevirerek, şu anki zamanla karşılaştırılır ve bir sonraki namaz saati bulunur.

1. **Namaz Saatlerini Dakikaya Çevirme**
   Her bir namaz saati, `"hh:mm"` formatından dakikaya dönüştürülür:

  $$
  \text{Dakika} = h \times 60 + m
  $$

2. **Şu Anki Zamanı Dakikaya Çevirme**
   Kullanıcının mevcut saati ve dakikası, şu şekilde dakikaya dönüştürülür:

  $$
  \text{Current Minutes} = \text{saat} \times 60 + \text{dakika}
  $$

3. **Geçmemiş Namazları Filtreleme**
   Tüm namaz saatleri, şu anki zamanla karşılaştırılır. Geçmiş vakitler filtrelenir:

  $$
  \text{Eğer Namaz Saati} > \text{Şu Anki Zaman} \Rightarrow \text{Gelecekteki Namazlar}
  $$

4. **En Yakın Namazı Bulma**
   `reduce()` fonksiyonu ile en yakın namaz saati (dakikada) seçilir.

5. **Kalan Süreyi Hesaplama**
   Bir sonraki namaza kalan süre, şu formüle göre hesaplanır:

  $$
  \text{Kalan Süre} = \text{Next Prayer Time} - \text{Current Time}
  $$

Saat ve dakikaya çevirmek için:

  $$
  \text{Saat} = \left\lfloor \frac{\text{Kalan Süre}}{60} \right\rfloor, \quad \text{Dakika} = \text{Kalan Süre} \bmod 60
  $$
  

**Örnek Kod:**

```javascript
const prayerTimesWithNames = Object.entries(prayerTimesObj).map(([name, timeStr]) => {
  if (!timeStr) return { name, minutes: Infinity };
  const [hour, minute] = timeStr.split(':').map(Number);
  return { name, minutes: hour * 60 + minute };
});

const currentMinutes = currentTime.hour * 60 + currentTime.minute;
const upcomingPrayers = prayerTimesWithNames.filter(p => p.minutes > currentMinutes);
const nextPrayer = upcomingPrayers.reduce((prev, curr) => (prev.minutes < curr.minutes ? prev : curr));

const remainingTime = nextPrayer.minutes - currentMinutes;
const hours = Math.floor(remainingTime / 60);
const minutes = remainingTime % 60;
```

Bu algoritma, kullanıcının mevcut zamanına göre bir sonraki namaz vakti ve kalan süreyi bulur.
