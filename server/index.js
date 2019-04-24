require('dotenv').config()
const express = require('express')
const getRecipesCtrl = require('./getRecipesCtrl')
const massive = require('massive')

const app = express()
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    app.listen(SERVER_PORT, () => {
      console.log(`Server listening on port ${SERVER_PORT}`)
    })
  })
  .catch(err => console.log(err));

app.get('/api/recipes', getRecipesCtrl.getRecipes)