import React from "react";
import Input from '../../components/input/textInput'

class Login extends React.Component<{}, {}> {
  isValid = (text:string) => {
    if (text.length > 5) return true
    else return false
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <p>hello world</p>
            <Input isValid={this.isValid}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
