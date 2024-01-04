import React from "react";
import profilBilde from "../../assets/Eskild_er_meg.jpg";
import ExperiencePoint from "./ExperiencePoint";

function AboutMe() {
  return (
    <main className="container">
      <div className="pageSection">
        <h1>Infromatikkstudent søker jobb!</h1>
      </div>
      <div className="infoContainer pageSection">
        <p className="introText">
          Heisann, mitt navn er Eskild Øveren. Jeg liker å game, se artige
          filmer, gå lange turer og tenne varme bål. I tillegg har jeg stor
          entusiasme for matlaging, matspising og kaffe. Indre ro kan kun oppnås
          om morgenen med ett stykke frittata på tallerkenen og ei mugge full av
          sterk java. Jeg drømmer om å ha et rent og ryddig hus med seng,
          stekepanne, tresleiv og mokkakanne. Dette trenger jeg dessverre jobb
          for å oppnå. Derfor er det forhåpentligvis en storsjef der ute som
          leser dette og tenker å gi denne kafferotta muligheten til å arbeide
          for en grei slant
        </p>
        <img src={profilBilde} alt="oida, bildet er borte!"></img>
      </div>
      <ExperiencePoint />
      <div className="pageSection">
        <h3>Jobberfaring</h3>
        <p className="instructionStep">
          Bland gjær og lunkent vann i en stor bolle. Tilsett så sukker, salt og
          hvitløkspulver. Bland inn litt og litt mel, helt til den ikke er
          altfor klissete. Bruk så lite mel som mulig for best mulig resultat,
          men mer mel il gjøre deigen lettere å jobbe med. Det skal være ca to
          ganger så mye mel som vann. Form deigen til en store klump, dekk til
          bolla med plastikkfolie eller et vått kjøkkenhåndkle. La bolla stå i
          kjøleskapet i opptil en uke. Jo lenger du lar den stå jo mer syrlig og
          spenstig vil den smake. Ikke la den stå til den blir blågrønn
        </p>
        <h3>Frivillig verv</h3>
        <h3>Kurs</h3>
        <h3>Språk</h3>
      </div>
    </main>
  );
}

export default AboutMe;
