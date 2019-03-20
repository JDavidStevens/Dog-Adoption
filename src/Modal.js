import React from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  //almost always used to clean up memory (remove event listners,extraneous documents. Anything that is going to leak memory)
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render(){
      return createPortal(this.props.children, this.el)
  }
}
export default Modal;