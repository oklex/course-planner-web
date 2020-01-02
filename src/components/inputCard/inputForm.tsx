import React from "react";
import "./inputForm.scss";
import ReactTooltip from "react-tooltip";
const tooltipIcon: string = "/icons/tooltip.svg";

export interface IInputCardProps {
  title: string;
  tooltip?: string;
  isActive?: boolean;
  children: JSX.Element[] | JSX.Element;
}

class InputCard extends React.Component<IInputCardProps, {}> {
  renderTooltip = () => {
    if (this.props.tooltip) {
      return (
        <div>
          <img
            className="tooltip-icon"
            src={tooltipIcon}
            alt="tooltip"
            data-tip
            data-for={this.props.title}
          ></img>
          <ReactTooltip id={this.props.title} place="right" type="info" effect="float">{this.props.tooltip}</ReactTooltip>
        </div>
      );
    } else return <span />;
  };

  renderTitle = () => {
    return <h2 className="card-title">{this.props.title}</h2>;
  };

  render() {
    return (
      <div className="card card-sm">
        {this.renderTitle()}
        {this.renderTooltip()}
        {this.props.children}
      </div>
    );
  }
}

export default InputCard;
