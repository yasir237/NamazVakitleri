export default function Ayet() {

    const ayetler = [{
        arapca: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ ۚ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ",
        turkce: "Müminler ancak kardeştirler. O halde kardeşlerinizin arasını düzeltin ve Allah'tan korkun ki, merhamet olunasınız",
        reference: "Hucurat Suresi - 10"
    },
    {
        arapca: "فَذَكِّرْ إِنَّمَا أَنتَ مُذَكِّرٌ",
        turkce: "Öğüt ver, çünkü sen ancak öğüt verensin",
        reference: "Gâşiye Suresi - 21"
    },
    {
        arapca: "وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",
        turkce: "Sen yine de öğüt ver. Çünkü öğüt müminlere fayda verir",
        reference: "Zâriyât - 55"
    },
    {
        arapca: "قُلْ يَا عِبَادِيَ الَّذ۪ينَ اَسْرَفُوا عَلٰٓى اَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللّٰهِۜ اِنَّ اللّٰهَ يَغْفِرُ الذُّنُوبَ جَم۪يعاًۜ اِنَّهُ هُوَ الْغَفُورُ الرَّح۪يمُ",
        turkce: "De ki: Ey kendi nefisleri aleyhine haddi aşan kullarım! Allah'ın rahmetinden ümit kesmeyin! Çünkü Allah bütün günahları bağışlar. Şüphesiz ki O, çok bağışlayan, çok esirgeyendir",
        reference: "Zümer - 53"
    },
    {
        arapca: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا * إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        turkce: "Hiç şüphesiz, zorlukla beraber kolaylık vardır * Kesinlikle, zorlukla beraber kolaylık vardır",
        reference: "İnşirâh - 5-6"
    },
    {
        arapca: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",
        turkce: "Rahmetim her şeyi kuşatmıştır",
        reference: "A’râf Suresi - 156"
    },
    {
        arapca: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ",
        turkce: "Ey iman edenler! Allah’tan korkun ve doğrularla beraber olun",
        reference: "Tevbe Suresi - 119"
    },
    {
        arapca: "إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ",
        turkce: "Şüphesiz Rabbim, duayı işitendir",
        reference: "İbrahim Suresi - 39"
    },
    {
        arapca: "وَاَعِدُّوا لَهُمْ مَا اسْتَطَعْتُمْ مِنْ قُوَّةٍ وَمِنْ رِبَاطِ الْخَيْلِ تُرْهِبُونَ بِه۪ عَدُوَّ اللّٰهِ وَعَدُوَّكُمْ وَاٰخَر۪ينَ مِنْ دُونِهِمْۚ لَا تَعْلَمُونَهُمْۚ اَللّٰهُ يَعْلَمُهُمْۜ وَمَا تُنْفِقُوا مِنْ شَيْءٍ ف۪ي سَب۪يلِ اللّٰهِ يُوَفَّ اِلَيْكُمْ وَاَنْتُمْ لَا تُظْلَمُونَ",
        turkce: "Onlara (düşmanlara) karşı gücünüz yettiği kadar kuvvet ve cihad için bağlanıp beslenen atlar hazırlayın, onunla Allah'ın düşmanını, sizin düşmanınızı ve onlardan başka sizin bilmediğiniz, Allah'ın bildiği (düşman) kimseleri korkutursunuz. Allah yolunda ne harcarsanız size eksiksiz ödenir, siz asla haksızlığa uğratılmazsınız",
        reference: "Enfâl - 60"
    },
    {
        arapca: "وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلَا تَعْتَدُوا ۚ إِنَّ اللَّهَ لَا يُحِبُّ الْمُعْتَدِينَ",
        turkce: "Allah yolunda sizinle savaşanlarla siz de savaşın; fakat haddi aşmayın. Çünkü Allah, haddi aşanları sevmez",
        reference: "Bakara Suresi - 190"
    },
    {
        arapca: "وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ وَمِن رِّبَاطِ الْخَيْلِ تُرْهِبُونَ بِهِ عَدُوَّ اللَّهِ وَعَدُوَّكُمْ",
        turkce: "Onlara karşı gücünüz yettiği kadar kuvvet ve savaş atları hazırlayın ki, Allah’ın ve sizin düşmanınızı korkutasınız",
        reference: "Enfal Suresi - 60"
    },
    {
        arapca: "انفِرُوا خِفَافًا وَثِقَالًا وَجَاهِدُوا بِأَمْوَالِكُمْ وَأَنفُسِكُمْ فِي سَبِيلِ اللَّهِ ۚ ذَٰلِكُمْ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ",
        turkce: "Hafif de olsanız, ağır da olsanız savaşa çıkın ve mallarınızla, canlarınızla Allah yolunda cihad edin. Eğer bilirseniz bu sizin için daha hayırlıdır",
        reference: "Tevbe Suresi - 41"
    },
    {
        arapca: "إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يُقَاتِلُونَ فِي سَبِيلِهِ صَفًّا كَأَنَّهُم بُنْيَانٌ مَّرْصُوصٌ",
        turkce: "Şüphesiz Allah, kendi yolunda saf saf dizilerek savaşanları, sanki birbirine kenetlenmiş bir bina gibi olanları sever",
        reference: "Saff Suresi - 4"
    },
    {
        arapca: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ",
        turkce: "Ey iman edenler! Eğer siz Allah’a (davasına) yardım ederseniz, O da size yardım eder ve ayaklarınızı sabit kılar",
        reference: "Muhammed Suresi - 7"
    },
    {
        arapca: "اِنَّ اللّٰهَ اشْتَرٰى مِنَ الْمُؤْمِن۪ينَ اَنْفُسَهُمْ وَاَمْوَالَهُمْ بِاَنَّ لَهُمُ الْجَنَّةَۜ يُقَاتِلُونَ ف۪ي سَب۪يلِ اللّٰهِ فَيَقْتُلُونَ وَيُقْتَلُونَ وَعْداً عَلَيْهِ حَقاًّ فِي التَّوْرٰيةِ وَالْاِنْج۪يلِ وَالْقُرْاٰنِۜ وَمَنْ اَوْفٰى بِعَهْدِه۪ مِنَ اللّٰهِ فَاسْتَبْشِرُوا بِبَيْعِكُمُ الَّذ۪ي بَايَعْتُمْ بِه۪ۜ وَذٰلِكَ هُوَ الْفَوْزُ الْعَظ۪يمُ",
        turkce: "Allah müminlerden, mallarını ve canlarını, kendilerine (verilecek) cennet karşılığında satın almıştır. Çünkü onlar Allah yolunda savaşırlar, öldürürler, ölürler. (Bu), Tevrat'ta, İncil'de ve Kur'an'da Allah üzerine hak bir vaaddir. Allah'tan daha çok sözünü yerine getiren kim vardır! O halde O'nunla yapmış olduğunuz bu alış verişinizden dolayı sevinin. İşte bu, (gerçekten) büyük kazançtır",
        reference: "Tevbe Suresi - 111"
    },
    {
        arapca: "مِنَ الْمُؤْمِنِينَ رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ ۖ فَمِنْهُم مَّن قَضَىٰ نَحْبَهُ وَمِنْهُم مَّن يَنتَظِرُ ۖ وَمَا بَدَّلُوا تَبْدِيلًا",
        turkce: "Müminler arasında öyle erler vardır ki, Allah’a verdikleri sözde durdular. Onlardan kimi bu uğurda canını verdi, kimi de beklemektedir. Onlar verdikleri sözü asla değiştirmediler.",
        reference: "Ahzâb Suresi - 23"
    }]


    const randomIndex = Math.floor(Math.random() * ayetler.length);
    const { arapca, turkce, reference } = ayetler[randomIndex];

    return (
        <div className="ayet-container">
            <p className="ayet-text">﴿ {arapca} ﴾</p>
            <p className="ayet-turksh">﴿ {turkce} ﴾</p>
            <p className="ayet-reference">{reference}</p>
        </div>
    )
}
