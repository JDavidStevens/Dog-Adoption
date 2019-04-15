import React from "react";
import { createPortal } from "react-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.el = document.createElement("div");
    this.modalRoot = document.getElementById("modal");
    modalRoot.appendChild(this.el);
  }

  //almost always used to clean up memory (remove event listners,extraneous documents. Anything that is going to leak memory)
  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}
export default Modal;
