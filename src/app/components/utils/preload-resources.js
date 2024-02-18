"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/public/icons.svg", {
    as: "image",
  });

  return null;
}
