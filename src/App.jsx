import React, { useEffect, useState } from 'react';
import Prayer from './components/prayer';

function App() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);
  const [time, setTime] = useState("");
  const [nextPrayerInfo, setNextPrayerInfo] = useState("");


  const turkishCities = [
    { id: 1, name: "Adana", latitude: 37.0, longitude: 35.3213 },
    { id: 2, name: "Adıyaman", latitude: 37.7648, longitude: 38.2786 },
    { id: 3, name: "Afyonkarahisar", latitude: 38.7638, longitude: 30.5403 },
    { id: 4, name: "Ağrı", latitude: 39.7191, longitude: 43.0503 },
    { id: 5, name: "Amasya", latitude: 40.6539, longitude: 35.8333 },
    { id: 6, name: "Ankara", latitude: 39.9334, longitude: 32.8597 },
    { id: 7, name: "Antalya", latitude: 36.8841, longitude: 30.7056 },
    { id: 8, name: "Artvin", latitude: 41.1828, longitude: 41.8183 },
    { id: 9, name: "Aydın", latitude: 37.8444, longitude: 27.8458 },
    { id: 10, name: "Balıkesir", latitude: 39.6484, longitude: 27.8826 },
    { id: 11, name: "Bilecik", latitude: 40.1428, longitude: 29.9793 },
    { id: 12, name: "Bingöl", latitude: 38.8854, longitude: 40.4983 },
    { id: 13, name: "Bitlis", latitude: 38.4000, longitude: 42.1167 },
    { id: 14, name: "Bolu", latitude: 40.5760, longitude: 31.5788 },
    { id: 15, name: "Burdur", latitude: 37.7203, longitude: 30.2908 },
    { id: 16, name: "Bursa", latitude: 40.1956, longitude: 29.0601 },
    { id: 17, name: "Çanakkale", latitude: 40.1467, longitude: 26.4086 },
    { id: 18, name: "Çankırı", latitude: 40.6013, longitude: 33.6134 },
    { id: 19, name: "Çorum", latitude: 40.5506, longitude: 34.9556 },
    { id: 20, name: "Denizli", latitude: 37.7765, longitude: 29.0864 },
    { id: 21, name: "Diyarbakır", latitude: 37.9144, longitude: 40.2306 },
    { id: 22, name: "Edirne", latitude: 41.6818, longitude: 26.5623 },
    { id: 23, name: "Elazığ", latitude: 38.6743, longitude: 39.2232 },
    { id: 24, name: "Erzincan", latitude: 39.7500, longitude: 39.5000 },
    { id: 25, name: "Erzurum", latitude: 39.9086, longitude: 41.2769 },
    { id: 26, name: "Eskişehir", latitude: 39.7667, longitude: 30.5256 },
    { id: 27, name: "Gaziantep", latitude: 37.0662, longitude: 37.3833 },
    { id: 28, name: "Giresun", latitude: 40.9128, longitude: 38.3895 },
    { id: 29, name: "Gümüşhane", latitude: 40.4603, longitude: 39.4814 },
    { id: 30, name: "Hakkari", latitude: 37.5833, longitude: 43.7333 },
    { id: 31, name: "Hatay", latitude: 36.2304, longitude: 36.1200 },
    { id: 32, name: "Isparta", latitude: 37.7648, longitude: 30.5566 },
    { id: 33, name: "Mersin", latitude: 36.8000, longitude: 34.6333 },
    { id: 34, name: "İstanbul", latitude: 41.0082, longitude: 28.9784 },
    { id: 35, name: "İzmir", latitude: 38.4192, longitude: 27.1287 },
    { id: 36, name: "Kars", latitude: 40.6167, longitude: 43.1000 },
    { id: 37, name: "Kastamonu", latitude: 41.3897, longitude: 33.7827 },
    { id: 38, name: "Kayseri", latitude: 38.7312, longitude: 35.4787 },
    { id: 39, name: "Kırklareli", latitude: 41.7351, longitude: 27.2246 },
    { id: 40, name: "Kırşehir", latitude: 39.1458, longitude: 34.1603 },
    { id: 41, name: "Kocaeli", latitude: 40.7654, longitude: 29.9408 },
    { id: 42, name: "Konya", latitude: 37.8746, longitude: 32.4932 },
    { id: 43, name: "Kütahya", latitude: 39.4242, longitude: 29.9833 },
    { id: 44, name: "Malatya", latitude: 38.3552, longitude: 38.3095 },
    { id: 45, name: "Manisa", latitude: 38.6191, longitude: 27.4289 },
    { id: 46, name: "Kahramanmaraş", latitude: 37.5734, longitude: 36.9371 },
    { id: 47, name: "Mardin", latitude: 37.3212, longitude: 40.7245 },
    { id: 48, name: "Muğla", latitude: 37.2153, longitude: 28.3636 },
    { id: 49, name: "Muş", latitude: 38.9462, longitude: 41.7539 },
    { id: 50, name: "Nevşehir", latitude: 38.6244, longitude: 34.7140 },
    { id: 51, name: "Niğde", latitude: 37.9667, longitude: 34.6833 },
    { id: 52, name: "Ordu", latitude: 40.9839, longitude: 37.8780 },
    { id: 53, name: "Rize", latitude: 41.0201, longitude: 40.5234 },
    { id: 54, name: "Sakarya", latitude: 40.7569, longitude: 30.4033 },
    { id: 55, name: "Samsun", latitude: 41.2867, longitude: 36.33 },
    { id: 56, name: "Siirt", latitude: 37.9333, longitude: 41.95 },
    { id: 57, name: "Sinop", latitude: 42.0262, longitude: 35.1510 },
    { id: 58, name: "Sivas", latitude: 39.7477, longitude: 37.0179 },
    { id: 59, name: "Tekirdağ", latitude: 40.9833, longitude: 27.5167 },
    { id: 60, name: "Tokat", latitude: 40.3139, longitude: 36.5544 },
    { id: 61, name: "Trabzon", latitude: 41.0050, longitude: 39.7220 },
    { id: 62, name: "Tunceli", latitude: 39.1086, longitude: 39.5483 },
    { id: 63, name: "Şanlıurfa", latitude: 37.1674, longitude: 38.7955 },
    { id: 64, name: "Uşak", latitude: 38.6823, longitude: 29.4082 },
    { id: 65, name: "Van", latitude: 38.5012, longitude: 43.4194 },
    { id: 66, name: "Yozgat", latitude: 39.8181, longitude: 34.8147 },
    { id: 67, name: "Zonguldak", latitude: 41.4564, longitude: 31.7987 },
    { id: 68, name: "Aksaray", latitude: 38.3687, longitude: 34.0360 },
    { id: 69, name: "Bayburt", latitude: 40.2588, longitude: 40.2270 },
    { id: 70, name: "Karaman", latitude: 37.1811, longitude: 33.2150 },
    { id: 71, name: "Kırıkkale", latitude: 39.8453, longitude: 33.5064 },
    { id: 72, name: "Batman", latitude: 37.8812, longitude: 41.1351 },
    { id: 73, name: "Şırnak", latitude: 37.4187, longitude: 42.4918 },
    { id: 74, name: "Bartın", latitude: 41.6344, longitude: 32.3375 },
    { id: 75, name: "Ardahan", latitude: 41.1105, longitude: 42.7022 },
    { id: 76, name: "Iğdır", latitude: 39.9237, longitude: 44.0450 },
    { id: 77, name: "Yalova", latitude: 40.6500, longitude: 29.2667 },
    { id: 78, name: "Karabük", latitude: 41.2061, longitude: 32.6204 },
    { id: 79, name: "Kilis", latitude: 36.7167, longitude: 37.1167 },
    { id: 80, name: "Osmaniye", latitude: 37.0742, longitude: 36.2464 },
    { id: 81, name: "Düzce", latitude: 40.8438, longitude: 31.1565 }
  ];

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      if (!selectedCity) return;

      const today = new Date();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const day = today.getDate();
      const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

      try {
        const response = await fetch(`https://api.aladhan.com/v1/calendar?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&method=13&month=${month}&year=${year}`);
        const data_prayer = await response.json();
        const todayData = data_prayer.data[day - 1].timings;
        setPrayerTimes(todayData);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    fetchPrayerTimes();
  }, [selectedCity]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hour = now.getHours().toString().padStart(2, '0');
      const min = now.getMinutes().toString().padStart(2, '0');
      const formattedTime = `${hour}:${min}`;
      setTime(formattedTime);

      if (Object.keys(prayerTimes).length > 0) {
        setNextPrayerInfo(getTimeUntilNextPrayer());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [prayerTimes]);

  
  const getTimeUntilNextPrayer = () => {
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

   
    const prayerTimesObj = {
      "İmsak": prayerTimes?.Fajr?.split(" ")[0],
      "Güneş": prayerTimes?.Sunrise?.split(" ")[0],
      "Öğle": prayerTimes?.Dhuhr?.split(" ")[0],
      "İkindi": prayerTimes?.Asr?.split(" ")[0],
      "Akşam": prayerTimes?.Maghrib?.split(" ")[0],
      "Yatsı": prayerTimes?.Isha?.split(" ")[0]
    };

    
    const prayerTimesWithNames = Object.entries(prayerTimesObj).map(([name, timeStr]) => {
      if (!timeStr) return { name, minutes: Infinity };

      const [hour, minute] = timeStr.split(':').map(Number);
      return {
        name,
        minutes: hour * 60 + minute
      };
    });

    
    const nextPrayer = prayerTimesWithNames
      .filter(prayer => prayer.minutes > nowMinutes)
      .sort((a, b) => a.minutes - b.minutes)[0];

    if (nextPrayer && nextPrayer.minutes !== Infinity) {
      const remainingMinutes = nextPrayer.minutes - nowMinutes;
      const hoursLeft = Math.floor(remainingMinutes / 60);
      const minutesLeft = remainingMinutes % 60;
      return `${nextPrayer.name} namazına ${hoursLeft} saat ${minutesLeft} dakika kaldı`;
    } else {
      return "Bugünkü tüm namaz vakitleri geçti";
    }
  };

  return (
    <section>
      <div className="container">
        <div className="top_sec">
          <div className="col">
            <div className="city">
              <h3>Şehir</h3>
              <select onChange={(e) => {
                const selectedCity = turkishCities.find(c => c.id === parseInt(e.target.value));
                setSelectedCity(selectedCity);
              }}>
                <option value="">Şehir Seçin</option>
                {turkishCities.map((city) => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </select>
            </div>
            <div className="date">
              <h3>Tarih</h3>
              <h4>{new Date().toLocaleDateString('tr-TR')}</h4>
            </div>
          </div>
          <div className="info">
            <h4>{nextPrayerInfo}</h4>
          </div>
        </div>





        <Prayer name="İmsak" time={prayerTimes?.Fajr} />
        <Prayer name="Güneş" time={prayerTimes?.Sunrise} />
        <Prayer name="Öğle" time={prayerTimes?.Dhuhr} />
        <Prayer name="İkindi" time={prayerTimes?.Asr} />
        <Prayer name="Akşam" time={prayerTimes?.Maghrib} />
        <Prayer name="Yatsı" time={prayerTimes?.Isha} />
      </div>
    </section>
  );
}

export default App;