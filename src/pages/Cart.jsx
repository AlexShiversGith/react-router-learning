import { useNavigate } from "react-router-dom"

function Cart() {
  const navigate = useNavigate()

  return (
    <div>
      <p>Cart Page</p>
      <button onClick={() => navigate('/thanks')}>Click me</button>
    </div>
  )
}

export default Cart
