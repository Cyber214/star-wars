// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


// services
import { getStarship } from "../../services/sw-api"

import './StarshipPage.css'

const StarshipPage = () => {

  return (
    <>
      <h1 id="header">STARSHIP DETAILS</h1>
      <main className="starship-details">
      <h2>{starshipPage.name}</h2>
      </main>
    </>
  )
}

export default StarshipPage
