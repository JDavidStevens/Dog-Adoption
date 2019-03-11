import React from 'react';
import {render} from "react-dom";
import Pet from './Pet';

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    return(
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese"/>
        <Pet name="Pepper" animal="bird" breed="Cockatiel"/>
        <Pet name="Doink" animal="cat" breed="Mixed"/>
      </div>
    )
  }
}

render(<App/>, document.getElementById("root"));

//npm run dev runs project in browser on http://localhost:1234