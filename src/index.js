import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import reducers from "./reducers/index";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers);

const firebaseConfig = {
  apiKey: "AIzaSyChBWO6LLzBhOvPyqs2bM8OA_648rd9pC0",
  authDomain: "productivity-app-7bd77.firebaseapp.com",
  databaseURL: "https://productivity-app-7bd77-default-rtdb.firebaseio.com/",
  projectId: "productivity-app-7bd77",
  storageBucket: "productivity-app-7bd77.appspot.com",
  messagingSenderId: "926266889778",
  appId: "1:926266889778:web:21c21a1e7b132f636d4e2b",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
firebase.firestore();
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  db,
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
