import React, { Component } from "react";
import "../WhiteBookmark/WhiteBookmarkIcon.scss";

export default class Button extends Component {
  render() {
    return (
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 0H2C0.9 0 0 0.9 0 2V18L7 15L14 18V2C14 0.9 13.1 0 12 0ZM12 15L7 12.82L2 15V2H12V15Z"
          fill="white"
        />
      </svg>
    );
  }
}