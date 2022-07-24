import React from "react";
import SamplePage from "./pages/SamplePage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h1>Welcome to Transpik</h1>
      <SamplePage></SamplePage>
    </div>);
  }
}

export default App;