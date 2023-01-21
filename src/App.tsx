import React from "react";
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/router";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RouterProvider router={ROUTES} />
      </PersistGate>
    </Provider>
  );
};

export default App;
