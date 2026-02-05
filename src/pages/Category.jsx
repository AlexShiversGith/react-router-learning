import { useParams } from "react-router-dom"
import { products } from "../data/data"
import { NavLink, Link } from "react-router-dom";

function Category() {
  const currentCategory = useParams()
  console.log(currentCategory);

  const currentCategoryItems = products.filter(item => item.categoryId.toLowerCase() === currentCategory.id.toLowerCase())

  return (
   <>
   <h1>{currentCategory.id}</h1>
   <ul style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
      {
        currentCategoryItems.map(item => <li key={item.id} style={{textDecoration: 'none'}}>
          <Link to={`/product/${item.name.toLowerCase()}`}>
            <p>{item.name}</p>
            <img src={item.img} alt={item.name} style={{width: '150px'}}/>
            <p>Price: {item.price}</p>
          </Link>
        </li>)
      }
   </ul>
   <NavLink to={'/'}>Back</NavLink>
   </>
  )
}

export default Category
