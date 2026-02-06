import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Thanks() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 5000)    
    return () => clearTimeout(timer)}, [navigate]
)

  return (
    <div>
      You will be redirected to the home page after 5 seconds...
    </div>
  )
}

export default Thanks
