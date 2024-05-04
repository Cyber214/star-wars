const baseUrl = 'https://swapi.dev/api'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarship(idx) {
  // Extract the starship ID from the URL
  const starshipId = idx.match(/\d+/g)[0]

  // Make API request to get starship details
  const res = await fetch(`${baseUrl}/starships/${starshipId}`)

  return res.json()
}