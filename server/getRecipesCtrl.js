

module.exports = {
  getRecipes : (req, res) => {
    const dbInstance = req.app.get('db')

    dbInstance.getRecipes().then((recipes)=>res.status(200).send(recipes))
    .catch((err)=>{res.status(500).send(console.log(err))})
  }
}