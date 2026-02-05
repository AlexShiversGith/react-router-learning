import { Link } from 'react-router-dom'
import { categories } from '../data/data'

function Home() {
  return (
    <div>
      home
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
