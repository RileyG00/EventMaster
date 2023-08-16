/*==================================================================================
[0] Imports
==================================================================================*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {store} from "./redux/Store.js";
import {Provider} from "react-redux";


/*==================================================================================
[1] Generate Final
==================================================================================*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
