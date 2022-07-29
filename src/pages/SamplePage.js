import transpikComponents from "../components";
import React from "react";

class SamplePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Sample Page</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <transpikComponents.SampleComponent></transpikComponents.SampleComponent>
      </div>
    );
  }
}

export default SamplePage;
