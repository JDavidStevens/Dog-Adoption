import React from "react";
import {render} from 'react-dom';
import Results from './Results';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Adopt Me!</h1>
        <Results/>
      </div>
    )
  }
}
render(<App />, document.getElementById("root"));

//npm run dev runs project in browser on http://localhost:1234
{/* 
          dump state into DOM:
          <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
          </pre> */}