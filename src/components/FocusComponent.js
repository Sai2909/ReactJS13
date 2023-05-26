import React from "react";
export class FocusComponent extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // Access the textInput using "current"
      // and set the focus using the input's DOM API
      this.textInput.current.focus();
    }
  
    render() {
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />
          <input
            type="button"
            value="Focus"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }