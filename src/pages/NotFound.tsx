import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <p>Not Found.</p>
      <Link to="/">
      <p>Back to Login</p>
      </Link>
    </div>
  )
}

export default NotFound