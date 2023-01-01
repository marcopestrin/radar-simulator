import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { initialState } from "./initialState";
import reducers from "./reducers";
import rootSaga from "./rootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    __REDUX_DEVTOOLS_EXTENSION__(): any
  }
}
export const configureStore = () => {
  const isExtensionInstalled = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  const isDevMode = process.env.NODE_ENV !== "production";
  const isChrome = navigator.userAgent.indexOf("Chrome") !== -1;
  let store;
  const middlewareSaga = createSagaMiddleware();

  if (isDevMode && isChrome && isExtensionInstalled) {
    store = createStore(
      reducers,
      initialState,
      compose(applyMiddleware(middlewareSaga), window.__REDUX_DEVTOOLS_EXTENSION__())
    );
  } else {
    store = createStore(
      reducers,
      initialState,
      compose(applyMiddleware(middlewareSaga))
    );
  }
  middlewareSaga.run(rootSaga);
  return store;
}