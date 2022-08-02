import React from 'react'
import Logo from '../logo.svg'
import { menu } from './menu.js'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
    <div className={styles.logo}>
        <img src={Logo} alt='' height='35' />
        
    </div>
    <div className={styles.wrapper}>
        <ul>
            {menu.map((item, idx) => (
                <li key={`menu item ${idx}`}>
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
        
    </div>

    </div>
  )
}

export default Header