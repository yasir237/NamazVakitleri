import Prayer from './components/prayer';

function App() {

  const cities = [
    { id: 20, name: "Ankara" },
    { id: 34, name: "İstanbul" },
    { id: 35, name: "İzmir" },
    { id: 6, name: "Bursa" },
    { id: 41, name: "Kocaeli" },
    { id: 7, name: "Konya" },
    { id: 16, name: "Bursa" },
  ]
  

  return (
    <section>
      <div className="container">
        <div className="top_sec">
          <div className="city">
            <h3>Şehir</h3>

            <select name="" id="">
              {cities.map((city) => (
                <option key={city.id} value={city.id}>{city.name}</option>
              ))}
            </select>
          </div>

          <div className="date">
            <h3>Tarih </h3>
            <h4>03-09-2024</h4>
          </div>

        </div >

          <Prayer name="İmsak" time="03:52" />
          <Prayer name="Güneş" time="05:31" />
          <Prayer name="Öğle" time="12:49" />
          <Prayer name="İkindi" time="16:40" />
          <Prayer name="Akşam" time="19:54" />
          <Prayer name="Yatsı" time="21:27" />

      </div>
    </section>
  )
}

export default App
