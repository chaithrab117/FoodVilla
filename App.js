import React from 'react'
import './App.css'
import { Header } from './src/component/Header'
import { Footer } from './src/component/Footer'
import { Body } from './src/component/Body'

export const App = () => {
  return (
    <div>
        <Header/>
        <Body/>
        <Footer/>
    </div>
  )
}
