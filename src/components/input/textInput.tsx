import React from "react";

interface ITextInputProps {
//   title: string;
//   toolTip: string;
  isValid: (text: string) => boolean;
}

class Input extends React.Component<ITextInputProps, {}> {
  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    var valid = this.props.isValid(e.currentTarget.value);
    console.log(valid);
  };

  render() {
    return (
      <div>
        {/* {this.props.title} */}
        <input onChange={this.onChange}></input>
      </div>
    );
  }
}

export default Input;
