import { html } from "preact";
import { useState, useEffect } from "preact";

function HorseBetCard({ name, betType, image }){
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [borderColor, setBorderColor] = useState("#000000");

  useEffect(() => {
    if (betType === "Win"){
      setBackgroundColor("#dbbb48");
      setBorderColor("#634c28");
    }
    else if (betType === "Place"){
      setBackgroundColor("#8ba6c7");
      setBorderColor("#3c4f66");
    }
    else if (betType === "Show"){
      setBackgroundColor("#bf9bc9");
      setBorderColor("#54385c");
    }
  }, [betType]);

  return html`
  <section class="horseContainer" style="background-color:${backgroundColor}; border-color:${borderColor}">
  <article class="horseArticle">
  <p><b>Horse name</b>: ${name}</p>
  <p><b>Bet Type</b>: ${betType}</p>
  </article>
  <img src="${image}" alt="horse" class="horseAdminImage"/>
  </section>
  `;
}
export default HorseBetCard;
