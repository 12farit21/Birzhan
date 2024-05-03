import "./navbar.css"
import logo from "./logo.png";




const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
{/*       <span className="logo">Alakol</span> */}
          <a href = "/"><img  src={logo} alt="Alakol" className = "logo" /></a>
        <div className="navItems">
          <button className="navButton">Регистрация</button>
          <button className="navButton">Вход</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar