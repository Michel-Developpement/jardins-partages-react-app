import React from 'react'
import Logo from '../assets/Logo.jpg'
import '../input.css'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className="bg-grey-800">
      <img src={Logo} alt="logo" className='w-100 h-100' />
      <h1 className='text-3xl'>Bienvenue sur les Jardins D'Yvonne</h1>
    </div>
  )
}
