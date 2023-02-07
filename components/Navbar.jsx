import * as React from 'react'
import styles from '../styles/Navbar.module.css'
import { Image } from 'semantic-ui-react'

function Navbar(){
  return (
    <div className={styles.nav_container}>
      <Image src="income-tax-logo.png" size="medium" />
      <a className={styles.a} href="#">Home</a>
    </div>
  )
}

export default Navbar;
