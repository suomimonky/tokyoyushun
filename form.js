import { html } from "preact";
import { useState } from "preact";
import Card from "./card.js";
import GenInfo from "./geninfo.js";
import HorseSelect from "./horseselect.js";
import Admin from "./admin.js";

const horseStorage = "horseSubmissions";

function Form( { setAdminView }){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  function loadFormSubmissions(){
    const isStored = localStorage.getItem(horseStorage);
    if (!isStored){
      return [];
    }
    return JSON.parse(isStored);
  }

  function saveSubmissions(data){
    
    localStorage.setItem(horseStorage, JSON.stringify(data));
  }

  const [horseCount, setHorseCount] = useState(0);
  const [selectedHorses, setSelectedHorses] = useState([]);

  function handleUpdateHorse(data){
    setSelectedHorses(horse => horse.map(h=>(h.id === data.id ?{...h, betType:data.betType} : h)));

  }
  const handleSubmit = (e)=> {
    e.preventDefault();
      const submission = {
        name: name,
        email: email,
        phone: phone,
        horses: selectedHorses.map(horse => ({
          name: horse.name,
          betType: horse.betType??"Win",
          image: horse.image
        }))
      };
    let isDuplicate = false;
    const allSaved = loadFormSubmissions();
    Array.from(allSaved).forEach((sub, i) => {
      if (JSON.stringify(submission)===JSON.stringify(sub)){
        isDuplicate = true;
      }
    });
    if (!isDuplicate){
    allSaved.unshift(submission);
    saveSubmissions(allSaved);
    }
  }
  

  
  const handleHorseCountChange = (e) => {
    const count = parseInt(e.target.value)|| 0;
    setHorseCount(Math.min(Math.max(count, 0), 3));
  }

  const handleHorseCheckbox = (horseObj, isChecked) => {

    if (isChecked){
      if (selectedHorses.length>=3){
        alert("You can only select 3 horses");
        // e.target.checked = false;
      }
      else {
        setSelectedHorses([...selectedHorses, horseObj]);
      }
    }
    else {
      setSelectedHorses(selectedHorses.filter(horse => horse.name !== horseObj.name));
    }
  };
  return html `
		<form id="bigform" onSubmit=${handleSubmit}>
		<${GenInfo} 
    name=${name}
    email=${email}
    phone=${phone}
    horseCount=${horseCount}
    onHorseCountChange=${handleHorseCountChange}
    setName=${setName}
    setEmail=${setEmail}
    setPhone=${setPhone}/>
	  <${HorseSelect} selectedHorses=${selectedHorses} onHorseCheckbox=${handleHorseCheckbox}/>
    <section id="cardContainer">
    ${Array.from({ length: horseCount }, (el, i) => 
     html`<${Card} cardid=${i} horseName=${selectedHorses[i]?.name || "placeholder"} horseId=${selectedHorses[i]?.id||"placeholder"}
    horseObj=${selectedHorses[i]} updateHorse=${handleUpdateHorse}/>`)}
    </section>
		<button type="submit" id="submit">submit</button>
		</form>`;
}

export default Form;