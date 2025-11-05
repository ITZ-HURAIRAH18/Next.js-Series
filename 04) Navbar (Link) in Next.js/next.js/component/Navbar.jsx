import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div className='grid grid-2 '>
      <div>Logo</div>
      <ul >
        <li>
          <Link href='/'>Home </Link>
          <Link href='/about'>About </Link>
          <Link href='/about/team'>Team </Link>
          <Link href='/contact'>Contact</Link>
          <Link href='/service'>Services</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
