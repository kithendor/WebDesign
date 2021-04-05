import Days from './Days'

const Result2 = ({city,temperature}) => {

const toCelsius = (k) =>{
  return  Math.round(k-273.15)
}

const returnImage = (img) =>{
  return  "http://openweathermap.org/img/wn/"+img+".png"
}

const days = []

for (const [i,value] of temperature.entries()){
  days.push(
    <Days
      date={value.dt_txt}
      temperature={toCelsius(value.main.temp)}
      description={value.weather[0].description}
      image={returnImage(value.weather[0].icon)}
    />
  )
}


  return(
    <div className="row">
      <h2 className="display-1">{city}</h2>
      {days}
    </div>
  )
}

export default Result2
