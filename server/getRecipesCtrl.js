

module.exports = {
  getRecipes : (req, res) => {
    const dbInstance = req.app.get('db')
    
    let fullRecipe = null
    let recipe = null
    let ingredient = null
    
    dbInstance.getRecipes().then((recipes)=>{
       recipe = recipes
       console.log("recipe", recipe)
       
    })
    dbInstance.getIngredients().then((ingredients)=>{
      ingredient = ingredients
      fullRecipe = {recipe, ingredient}
      
      
    })
    setTimeout(()=>{
      
    }, 1000)
  }
}