import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// 这里安装了nom install react-redux  lib
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* 全局使用store : provider*/}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
