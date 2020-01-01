import React from "react";
import Input from "../../components/input/textInput";
import IErrorStatus from "../../types/errorStatus";

class Login extends React.Component<{}, {}> {
  isValid = (text: string) => {
    var returnVal: IErrorStatus;
    if (text.includes('@')) {
      returnVal = { success: true, message: "" };
    } else {
      returnVal = { success: false, message: "is false" };
    }
    return returnVal;
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <p>hello world</p>
            <Input isValid={this.isValid} placeholder="school email"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
