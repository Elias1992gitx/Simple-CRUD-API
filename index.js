// implementing simple CRUD API using in-memory database.
// written by ELIAS CHANE.

const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

// In-memory database
const persons = []

// Get all persons or person with corresponding personId
app.get('/person', (req, res) => {
  res.json(persons)
})

app.get('/person/:personId', (req, res) => {
  const personId = req.params.personId
  const person = persons.find((p) => p.id === personId)

  if (person) {
    res.json(person)
  } else {
    res.status(404).json({ error: 'Person not found' })
  }
})

// Create a new person and store it in the database
app.post('/person', (req, res) => {
  const { name, age, hobbies } = req.body

  if (!name || !age) {
    res.status(400).json({ error: 'Name and age are required fields' })
    return
  }

  const person = {
    id: uuidv4(),
    name,
    age,
    hobbies: hobbies || [],
  }

  persons.push(person)

  res.status(201).json(person)
})

// Update an existing person
app.put('/person/:personId', (req, res) => {
  const personId = req.params.personId
  const person = persons.find((p) => p.id === personId)

  if (!person) {
    res.status(404).json({ error: 'Person not found' })
    return
  }

  const { name, age, hobbies } = req.body

  person.name = name || person.name
  person.age = age || person.age
  person.hobbies = hobbies || person.hobbies

  res.json(person)
})

// Delete an existing person
app.delete('/person/:personId', (req, res) => {
  const personId = req.params.personId
  const personIndex = persons.findIndex((p) => p.id === personId)

  if (personIndex === -1) {
    res.status(404).json({ error: 'Person not found' })
    return
  }

  const deletedPerson = persons.splice(personIndex, 1)[0]

  res.json(deletedPerson)
})

// Handle requests to non-existing endpoints
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' })
})

// Handle internal server errors
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
