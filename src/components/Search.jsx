import {useState} from 'react'

const Search = ({searchCity}) => {

const [text,setText] = useState('')

const onSubmit = () =>{
  if(!text){
    alert("Fill city")
    return
  }

  searchCity(text)


}

const handleKeyDown = (e) =>{
  if(e.key === "Enter"){
    onSubmit();
    setText('')
  }
}

  return(
    <div>
      <input type="text" className="form-control w-50 m-auto" value={text}
        onChange={(e)=>setText(e.target.value)}
        onKeyDown={handleKeyDown}
         />
      <input type="submit" className="btn btn-outline-success mt-2" value="Search" onClick={onSubmit}/>
    </div>
  )
}

export default Search
