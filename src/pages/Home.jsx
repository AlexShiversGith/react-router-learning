import { Link } from 'react-router-dom'
import { categories } from '../data/data'
import { useSearchParams } from 'react-router-dom'

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const inputValue = searchParams.get('item') || ""
  const inputChangeHandler = (e) => setSearchParams({item: e.target.value})

  return (
    <div>
      <p>
        home
      </p>
      <input type="text" placeholder='Search...' onChange={inputChangeHandler}/>
      <p>We searching: {inputValue}</p>
      <div>
        <h1>Categories</h1>
        <ul style={{display: 'flex', gap: '20px'}}>
          {categories.map(item => (
            <li key={item.id}>
              <Link to={`/category/${item.id.toLowerCase()}`}>
                {item.name}
                <img src={item.img} alt={item.name} style={{width: '150px'}}/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
