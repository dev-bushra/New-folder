import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import "./styles/index.css";
import "./styles/tailwind.css";
import App from "./App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ProSidebarProvider } from "react-pro-sidebar";
import Routes from "./Routes";
import rootReducer from "./store/reducers";
import { createRoot } from "react-dom/client";

const store = createStore(rootReducer);
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ProSidebarProvider>
      <Routes />
    </ProSidebarProvider>
  </Provider>
);