import { NavLink } from "react-router-dom"

function Header() {
  return (
    <div>
      Header
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/cart'}>Cart</NavLink>
    </div>
  )
}

export default Header