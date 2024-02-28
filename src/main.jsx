import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loader.jsx";
import LoaderOnPageMount from "./components/LoaderOnPageMount.jsx";

const container = document.getElementById("root");

const root = createRoot(container);

const AppContainer = () => {
  const [contentRendered, setContentRendered] = useState(false);

  useEffect(() => {
    const asyncCall = () => {
      return new Promise((resolve) => setTimeout(resolve, 2500));
    };

    asyncCall().then(() => {
      setContentRendered(true);
      removeLoader();
    });
  }, []);

  return contentRendered ? <App /> : <LoaderOnPageMount />;
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
