import IngredientList from "../components/recipeComponents/IngredientList"

function Recipe() {
  return (
    <main className='container'>
      <div className="recipeSection">
        <h1>Pannepizza er bedre for kokkeri i hjemmet!</h1>
        <p className="recipeIntro">
          Pizza er en klassiker som nytes av mange. Likevel er det vanlig å strebe etter den perfekte pizzaen. Deilig tynn sprø bunn, bruna ost og smakfull topping
          Dette er vanskelig å få til uten pizzastål. Pizzastål er uheldigvis tungt, vanskelig å bruke og dyrt. Det du derimot kan bruke er en ovnssikker stekepanna som 
          støpejern, karbonstål eller rustfritt stål. Da får du lett perfekt varme, både overnfra og nedenfra. Dette er også en metode der det er lettere å jobbe med 
          våte pizzadeiger. Prøv den ut da!
        </p>
        </div>

      <div className='infoContainer recipeSection'>
        <ul>
          <h2>Ingredienser</h2>
          <li>200g mel</li>
          <li>400ml vann</li>
          <li>1pk gjær</li>
          <li>100g ost</li>
          <li>400g hakkede tomater</li>
        </ul>
        <img src='https://www.killingthyme.net/wp-content/uploads/2022/08/cast-iron-pizza-01.jpg' alt='oida, bildet er borte!'></img>
      </div>
      


    
    </main>
  )
}

export default Recipe