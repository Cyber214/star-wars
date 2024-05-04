// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// services
import { getAllStarships } from "../../services/sw-api"

import './StarshipList.css'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      // API CALL
      const starshipData = await getAllStarships()
      console.log(starshipData.results)
      // Put the data in state
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h1>Loading Starships...</h1>

  return (
    <>
      <h1 id="header" >Starships</h1>
      <main className="starship-list">
        {starshipList.map((starship, idx) => 
          <div className="starship-card" key={idx}>
            <Link to={`/starships/${starship[idx]}`}>{starship.name}</Link>
          </div>
        )}
      </main>
    </>
  )
}

export default StarshipList
