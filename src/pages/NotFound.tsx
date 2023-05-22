import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <p>Not Found.</p>
      <Link to="/">
      <p>"Back to Login"</p>
      </Link>
    </div>
  )
}

export default NotFound