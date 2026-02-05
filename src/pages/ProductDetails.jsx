import { NavLink, useParams } from "react-router-dom"
import { products } from "../data/data";

function ProductDetails() {
  const product = useParams()
  const target = products.find(item => item.name.toLowerCase() === product.name)

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>
        {target.name}
      </h2>
      <img src={target.img} alt={target.name} />
      <p>
        Price: {target.price}
      </p>
      <NavLink to={'/'}>Back</NavLink>
    </div>
  )
}

export default ProductDetails
