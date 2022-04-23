const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/v1/explorers', (req, res) => {
  console.log(`Api explorers GET all requests ${new Date()}`)
  const explorer1 = {id: 1, name: "Eduardo1"}
  const explorer2 = {id: 2, name: "Eduardo2"}
  const explorer3 = {id: 3, name: "Eduardo3"}
  const explorer4 = {id: 4, name: "Eduardo4"}
  const explorers = [explorer1, explorer2, explorer3, explorer4]
  res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
  console.log(`GET1: API explorers GET request ${new Date()}`)
  console.log(`GET2: Getting explorer with id ${req.params.id}`)
  const explorer = {id: 1, name: "Eduardo"}
  res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
  console.log(`POST1: API explorers POST request ${new Date()}`)
  const requestBody = req.body
  res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id', (req, res) => {
  console.log(`PUT1: API explorers PUT request ${new Date()}`)
  console.log(`PUT2: Update explorer with id ${req.params.id}`)
  const requestBody = req.body
  res.status(200).json({message: "Updated"})
})

app.delete('/v1/explorers/:id', (req, res) => {
  console.log(`DELETE1: API explorers DELETE request ${new Date()}`)
  console.log(`DELETE2: Delete explorer with id ${req.params.id}`)
  const requestBody = req.body
  res.status(200).json({message: "Deleted"})
})