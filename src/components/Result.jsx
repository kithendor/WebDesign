import Days from './Days'

const Result = ({city,temperature,description,image}) => {

const toCelsius = (k) =>{
  return  Math.round(k-273.15)
}

const returnImage = (img) =>{
  return  "http://openweathermap.org/img/wn/"+img+".png"
}

  return(
    <div className="row">
      <h2 className="display-1">{city}</h2>
      <Days
        temperature={toCelsius(temperature)}
        description={description}
        image={returnImage(image)}
      />
      <Days
        temperature={toCelsius(temperature)}
        description={description}
        image={returnImage(image)}
      />
      <Days
        temperature={toCelsius(temperature)}
        description={description}
        image={returnImage(image)}
      />
      <Days
        temperature={toCelsius(temperature)}
        description={description}
        image={returnImage(image)}
      />
    </div>
  )
}

export default Result
