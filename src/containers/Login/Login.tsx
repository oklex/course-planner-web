import React from "react";
import Input from "../../components/input/textInput";
import IErrorStatus from "../../types/errorStatus";
import InputCard from "../../components/inputCard/inputForm";

class Login extends React.Component {
  isValid = (text: string) => {
    var returnVal: IErrorStatus;
    if (text.includes("@")) {
      returnVal = { success: true, message: "" };
    } else {
      returnVal = { success: false, message: "is false" };
    }
    return returnVal;
  };

  render() {
    return (
      <div>
        <InputCard title="Login" tooltip="info here">
          <Input isValid={this.isValid} placeholder="school email" />
        </InputCard>
        
        <InputCard title="Signup" tooltip="info 2 here">
          <Input isValid={this.isValid} placeholder="school email" />
        </InputCard>
      </div>
    );
  }
}

export default Login;
