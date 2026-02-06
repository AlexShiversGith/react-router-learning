import { useParams } from "react-router-dom"
import { products } from "../data/data"
import { NavLink, Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Category() {

  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get('cost') || ''
  const currentCategory = useParams()

  const filterHandler = (e) => {setSearchParams({cost: e.target.value})}
  console.log(currentCategory);

  const currentCategoryItems = products.filter(item => item.categoryId.toLowerCase() === currentCategory.id.toLowerCase())

  const filteredCategoryItems = currentCategoryItems.filter(item => item.price <= filter)

  return (
   <>
   <h1>{currentCategory.id}</h1>
   <div>
    <input type="number" placeholder="Enter cost" onChange={filterHandler}/>
    <label htmlFor="">Max cost: {filter}</label>
   </div>
   <ul style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
      { filter == "" ? (
          currentCategoryItems.map(item => <li key={item.id} style={{textDecoration: 'none'}}>
          <Link to={`/product/${item.name.toLowerCase()}`}>
            <p>{item.name}</p>
            <img src={item.img} alt={item.name} style={{width: '150px'}}/>
            <p>Price: {item.price}</p>
          </Link>
        </li>)
      ) : (
        filteredCategoryItems.map(item => <li key={item.id} style={{textDecoration: 'none'}}>
          <Link to={`/product/${item.name.toLowerCase()}`}>
            <p>{item.name}</p>
            <img src={item.img} alt={item.name} style={{width: '150px'}}/>
            <p>Price: {item.price}</p>
          </Link>
        </li>)
      )
        
      }
   </ul>
   <NavLink to={'/'}>Back</NavLink>
   </>
  )
}

export default Category
