import React from "react";
import ReactDom from "react-dom"; //htmlにreactで作成されたDOMを反映するのに必要
import { App } from "./App";

ReactDom.render(<App />, document.getElementById("root"));
