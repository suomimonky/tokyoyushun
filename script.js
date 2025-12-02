"use strict";
import { html, render } from "preact";
import { useState } from "preact";
import Card from "./card.js";
import GenInfo from "./geninfo.js";
import HorseSelect from "./horseselect.js";
import Form from "./form.js";
import Admin from "./admin.js";

function App() {
  const [adminView, setAdminView] = useState(false);
  
  return html`
  <nav id="viewNav">
  <button class=${adminView === false ? "nav-view-button active" : "nav-view-button"} onClick=${(e) => setAdminView(false)}>Form View</button>
  <button class=${adminView === true ? "nav-view-button active" : "nav-view-button"} onClick=${(e) => setAdminView(true)}>Admin View</button>
  </nav>
  ${adminView
    ? html`<${Admin}/>`
    :html`<${Form} setAdminView=${setAdminView}/>`}`;
}
render(html`<${App} />`, document.getElementById("root"));

