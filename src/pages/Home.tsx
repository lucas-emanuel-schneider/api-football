import CountryAndSeasonForm from "../components/CountryAndSeasonForm"
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.homeContainer}>
      <CountryAndSeasonForm />
    </div>
  )
}

export default Home