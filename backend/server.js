const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/api/type/:idOrName', async (request, response) => {
  const { idOrName } = request.params

  try {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/type/${encodeURIComponent(idOrName)}/`)
    const data = await apiResponse.json()

    if (!apiResponse.ok) {
      response.status(apiResponse.status).json(data)
      return
    }

    const damageRelations = data.damage_relations
    response.json({
      half_damage_to: damageRelations.half_damage_to.map((type) => type.name),
      double_damage_from: damageRelations.double_damage_from.map((type) => type.name),
    })
  } catch (error) {
    console.error('Failed to fetch Pokemon type:', error)
    response.status(502).json({ error: 'Could not reach PokeAPI.' })
  }
})

app.listen(PORT, () => {
  console.log(`Backend server listening at http://localhost:${PORT}`)
})
