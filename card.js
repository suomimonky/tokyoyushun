import { html, render } from "preact";
import { useState } from "preact";
import Radio from "./radio.js";

function Card({ cardid, horseName, horseId, horseObj, updateHorse }){
  const [betType, setBetType] = useState(horseObj?.betType ?? "win");
  let imageSource;
  if (horseName === "placeholder"){
    imageSource = "assets/placeholder.jpg";
  }
  else {
    imageSource =`assets/${horseId}.jpg`
  }
  const handleBetTypeChange = (e) => {
    const newBetType = e.target.value;
    setBetType(e.target.value);

    updateHorse({ 
        ...horseObj, 
        betType: newBetType 
    });
};

  return html`<section id=${"horseCard" + cardid} class="horsecards">
    <img src=${imageSource} alt=${horseName === "placeholder" ? "Placeholder image in horse card" : horseId} class="horseImage" id=${"horseImage"+cardid}/>
    <${Radio}>
    <input  type="radio" name=${"betType" + cardid} id=${"Win" + cardid} value="Win" 
    checked=${betType === "Win"}
    onChange=${handleBetTypeChange}/>
    <label for=${"win" + cardid}>Win</label>
    <input type="radio" name=${"betType" + cardid} id=${"Place" + cardid} value="Place" 
    checked=${betType === "Place"} 
    onChange=${handleBetTypeChange}/>
    <label for=${"place"+cardid}>Place</label>
    <input type="radio" name=${"betType" + cardid} id=${"Show" + cardid} value="Show"
    checked=${betType === "Show"} 
    onChange=${handleBetTypeChange}/>
    <label for=${"show"+cardid}>Show</label>
    <//>
  </section>`;
}
export default Card;