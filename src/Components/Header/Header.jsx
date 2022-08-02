import React from 'react'
import Logo from '../logo.svg'

const menu = [
    {
        title: 'Products',
        link: '/',
    }
]


const Header = () => {
  return (
    <>
    <div className='logo'>
        <img src={Logo} alt="" />
        
    </div>
    <div className='menu-wrapper'>
        <ul>
            {menu.map((item, idx) => (
                <li key={`menu item ${idx}`}>
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
        
    </div>

    </>
  )
}

export default Header