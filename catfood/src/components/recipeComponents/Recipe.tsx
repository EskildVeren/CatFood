import IngredientList from "./IngredientList"

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
          <li>400g mel</li>
          <li>200ml vann</li>
          <li>1pk gjær</li>
          <li>100g ost</li>
          <li>400g hakkede tomater</li>
        </ul>
        <img src='https://www.killingthyme.net/wp-content/uploads/2022/08/cast-iron-pizza-01.jpg' alt='oida, bildet er borte!'></img>
      </div>
      <div className='recipeSection'>
        <h3>Vi starter med å lage pizzadeigen</h3>
        <p className="instructionStep">
          Bland gjær og lunkent vann i en stor bolle. Tilsett så sukker, salt og hvitløkspulver. Bland inn litt og litt mel, helt til den ikke er altfor klissete.
          Bruk så lite mel som mulig for best mulig resultat, men mer mel il gjøre deigen lettere å jobbe med. Det skal være ca to ganger så mye mel som vann. Form
          deigen til en store klump, dekk til bolla med plastikkfolie eller et vått kjøkkenhåndkle. La bolla stå i kjøleskapet i opptil en uke. Jo lenger du lar den stå
          jo mer syrlig og spenstig vil den smake. Ikke la den stå til den blir blågrønn
        </p>
        <h3>Uka etter</h3>
        <p className="instructionStep">
          Nå som deigen er klar, kan vi starte med pizzalaging. Ta deigen ut av kjøleskapet og strekk det utover den ovnssikre stekepanna. Form den utover bunnen. Ikke stress
          om det ikke går med en gang, den kommer seg. Mens du venter på at deigen skal slappe av kan du lage sausen. Du kan selvfølgelig bruke sauss fra butikken eller
          ren tomatpure om du ikke føler for å lage egen sauss. Tilsett noe tomat til en bolla og hakk litt ekstra, slik at du får en type tomatsaus. TIlsett så 
          tomatpuree, balsamisk eddik, sukker, salt, pepper, hvitløkspulver og ulike urter. Jeg pleier å bruke tørr provencekrydder, basilikum, provence eller en blanding 
          av disse. Hakk og bland til du får en ordentlig pizzasauss.
        </p>
        <p className="instructionStep">
          Skru grillelementet i grillen på høy varme. Gjør siste innsats for å spre deigen utover panna. Heller for  bredt, enn for tynt. Den vil krympe. Spre så saus på 
          deigen, kant-til-kant. SLik får du deilige pizzakanter. Ta så på ost, også kant-til-kant. Til slutt kan du ta på dine valgfrie toppinger. Jeg liker pepperoni 
          og grønn chili. Gjerne digg jalapeno. Skru så på varmen på stekeplata. Stek bunnen av pizzaen til den er brun, og kanskje til og med bittelitt brent. 
          Legg nå stekepanna i midten av ovnen og vent i 2-3 minutter til osten lukter deilig og er brun. La nå pizaen hvile, og Bon apetit!
        </p>
      </div>
    </main>
  )
}

export default Recipe