// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


// services
import { getStarship } from "../../services/sw-api"

import './StarshipPage.css'

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { idx } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      // API CALL
      const starshipData = await getStarship(idx)
      console.log(starshipData)
      // SET STATE
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [idx])

  if (!starshipDetails.name) return <h1 id="header" >Loading Ship...</h1>

  return (
    <>
      <h1 id="header">STARSHIP DETAILS</h1>
      <main className="starship-details">
      <h2>{starshipDetails.name}</h2>
      </main>
    </>
  )
}

export default StarshipPage
