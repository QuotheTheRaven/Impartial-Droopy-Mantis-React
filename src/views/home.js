import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Impartial Droopy Mantis</title>
        <meta property="og:title" content="Impartial Droopy Mantis" />
      </Helmet>
      <h1>Test Website </h1>
    </div>
  )
}

export default Home
