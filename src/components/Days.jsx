const Days = ({temperature,description,image,date}) => {

return(
  <div className="col-3 border-bottom p-1 pt-3">
    <p>{date}</p>
    <p className="display-4">{temperature} <sup>o</sup>C</p>
    <p>{description}</p>
    <img src={image} alt="icon"/>
  </div>
)

}

export default Days
