import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store, { persistor } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import Loader from './components/Loader.jsx'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Suspense fallback={<Loader />} className="app">
          <App />
        </Suspense>
      </PersistGate>
  </Provider>
);
