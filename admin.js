import { html } from "preact";
import Submission from "./submission.js";
import BetPlacer from "./betplacer.js";
import { useState } from "preact";

  const horseStorage = "horseSubmissions";
  function loadFormSubmissions(){
    const isStored = localStorage.getItem(horseStorage);
    if (!isStored){
      return [];
    }
    try{
    return JSON.parse(isStored);
    }
    catch(e){
      console.log(":(");
      return [];
    }
  }
  function Admin(){
  const [currentSubmission, setCurrentSubmission] = useState(0);
  const submissions = loadFormSubmissions();
  if (submissions.length===0){
    return html`
     <section id="admin-view">
    <p>Nothing to see here</p>
    </section>`;
  }
  const selectedSubmission = submissions[currentSubmission];

  return html`
  <section id="admin-view">
  <nav id="submissionNav">
  ${submissions.length===0
    ? html`<p>Nothing to see here</p>`
    :submissions.map((submission, index) => html`
    <button class=${currentSubmission === index ? "nav-button active" : "nav-button"}
    onClick=${() => setCurrentSubmission(index)}>
    ${submission.name}</button>`)}
    </nav>
  <${Submission}
  name=${selectedSubmission.name} 
  email=${selectedSubmission.email} 
  phone=${selectedSubmission.phone}
  horses=${selectedSubmission.horses}/>
  </section>`;
}
export default Admin;