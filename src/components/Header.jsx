import Par from './Par'

const myStyle ={
  color:'red',
  backgroundColor:'black',
  fontSize:'50px'
}

const Header = ({title, subtitle}) => {
  return(
    <header>
      <h1>{title}</h1>
      <Par/>
      <Par/>
      <Par/>
      </header>
  )
}

Header.defaultProps = {
  title: "My default title",
  subtitle:"My def subtitle"
}

export default Header
