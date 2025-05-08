
function App() {

  return (
    <section>
      <div className="container">
        <div className="top_sec">
          <div className="city">
            <h3>Şehir</h3>

            <select name="" id="">
              <option value={20}> Ankara </option>
              <option value={20}> İstanbul </option>
            </select>
          </div>

          <div className="date">
            <h3>Tarih </h3>
            <h4>03-09-2024</h4>
          </div>

        </div >

        <div>
          <div className='prayer'>
            <p className='name_prayer'>İmsak</p>
            <p className='time_prayer'>03:52</p>
          </div>

          <div className='prayer'>
            <p className='name_prayer'>Güneş</p>
            <p className='time_prayer'>05:31</p>
          </div>

          <div className='prayer'>
            <p className='name_prayer'>Öğle</p>
            <p className='time_prayer'>12:49</p>
          </div>

          <div className='prayer'>
            <p className='name_prayer'>İkindi</p>
            <p className='time_prayer'>16:40</p>
          </div>

          <div className='prayer'>
            <p className='name_prayer'>Akşam</p>
            <p className='time_prayer'>19:54</p>
          </div>

          <div className='prayer'>
            <p className='name_prayer'>Yatsı</p>
            <p className='time_prayer'>21:27</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
