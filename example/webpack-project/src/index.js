import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// todo: use the imported version in prod, source in dev.
/**
 * Import RJEA component
 */

//Using distribution version in node_modules
//import JSONInput  from 'json-parser';
//import locale     from 'json-parser/locale/en';

//Using distribution version from project
//import JSONInput  from '../../../dist';
//import locale     from '../../../dist/locale/en';

//Using source code
import JSONInput from "../../../src";

/**
 * Import some data. This is a sample object, which will be passed down to JSONInput placeholder properperties.
 * You can use placeholder to show data once, after component has mounted.
 */
import sampleData from "./sampledata";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        clearAll:false,
    }
}
handleClearAll(){
  this.setState({clearAll:true})
}

  render() {
    /**
     * Rendering this JSONInput component with some properties
     */
    return (
      <React.Fragment>
          <div style={{ maxWidth: "1400px", maxHeight: "100%" }}>
            <JSONInput
              id="unique_string" // an id is required
               // data to display
              theme="dark_vscode_tribute"
              clearAll={this.state.clearAll}
              colors={{
                string: "#DAA520" // overrides theme colors with whatever color value you want
              }}
              height="550px"
            />
          </div>
          <div>
                <button type="button" onClick={this.handleClearAll.bind(this)}>Clear All</button>
          </div>
      </React.Fragment>
     
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
