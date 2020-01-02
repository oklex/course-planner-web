import React from "react";
import IErrorStatus from "../../types/errorStatus";
import "./textInput.scss";

const disabledIcon: string = "/icons/disabled_icon.svg";
const emptyIcon: string = "/icons/empty_icon.svg";
const successIcon: string = "/icons/success_icon.svg";
const warningIcon: string = "/icons/warning_icon.svg";

interface ITextInputProps {
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  isValid: (text: string) => IErrorStatus;
}

interface ITextInputState {
  value: string;
  status: boolean | null;
  message: string | null;
}

class Input extends React.Component<ITextInputProps, ITextInputState> {
  state = {
    value: "",
    status: null,
    message: null
  };
  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    this.setState({
      value: e.currentTarget.value,
      status: null,
      message: null
    });
  };

  onCheck = () => {
    var response: IErrorStatus = this.props.isValid(this.state.value);
    console.log(response.success);
    this.setState({
      status: response.success,
      message: response.message
    });
  };

  showStatusIcon = () => {
    if (this.props.disabled) {
      return <img src={disabledIcon} alt="disabled indicator"></img>;
    } else if (this.state.status === false) {
      return <img src={warningIcon} alt="error indicator"></img>;
    } else if (!this.state.status) {
      return <img src={emptyIcon} alt="empty text indicator"></img>;
    } else if (this.state.status) {
      return <img src={successIcon} alt="success indicator"></img>;
    }
  };

  getBorderColourClass = () => {
    if (this.state.status === null) {
      return ' '
    } else if (this.state.status === false) {
      return ' error'
    } else if (this.state.status) {
      return ' success'
    }
  }

  render() {
    const emptyString: string = "";
    const name: string = this.props.name ? this.props.name : emptyString;
    const placeholder: string = this.props.placeholder
      ? this.props.placeholder
      : emptyString;
    return (
      <div>
        <input
          className={"textInput" + this.getBorderColourClass()}
          onChange={this.onChange}
          onBlur={this.onCheck}
          name={name}
          placeholder={placeholder}
          {...(this.props.disabled ? "disabled" : "")}
          value={this.state.value}
        ></input>
        <span className="statusIcon">{this.showStatusIcon()}</span>
      </div>
    );
  }
}

export default Input;
