//
// import './App.css';
// import Search from './components/Search'
// import Result from './components/Result'
// import {useState} from 'react'
//
//
// function App() {
//   const [city,setCity] = useState('Paris');
//   const [weather,setWeather] = useState({})
//
//   const api = ""// your id 
//   const base = "http://api.openweathermap.org/data/2.5/weather?q="
//   const base2 = "&appid="
//
//   const searchCity = (c) => {
//     fetch(`${base}${c}${base2}${api}`)
//     .then(res => res.json())
//     .then((result)=>{
//       console.log(result)
//       setWeather(result)
//     })
//
//   setCity(c)
//   }
//
//   return (
//     <div className="App container mt-5 border p-2">
//       <Search searchCity={searchCity}/>
//       { weather.name ?
//         <Result
//         city={weather.name}
//         temperature={weather.main.temp}
//         description={weather.weather[0].description}
//         image={weather.weather[0].icon}
//         />
//         : <div> --- </div>
//       }
//     </div>
//   );
// }
//
// export default App;


// 5Day API

import './App.css';
import Search from './components/Search'
import Result2 from './components/Result2'
import {useState} from 'react'


function App() {
  const [weather,setWeather] = useState({})

  const api = ""// your id 
  const base = "http://api.openweathermap.org/data/2.5/forecast?q="
  const base2 = "&appid="

  const searchCity = (c) => {
    fetch(`${base}${c}${base2}${api}`)
    .then(res => res.json())
    .then((result)=>{
      console.log(result)
      setWeather(result)
    })
  }

  return (
    <div className="App container mt-5 border p-2">
      <Search searchCity={searchCity}/>
      { weather.cod ?
        <Result2
        city={weather.city.name}
        temperature={weather.list}
        />
        : <div> --- </div>
      }
    </div>
  );
}

export default App;
