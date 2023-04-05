import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./index";

const logger = createLogger({
  collapsed: true,

  // only log in development mode
  predicate: () => __DEV__,

  // transform immutable state to plain objects
  stateTransformer: (state) => state.toJS(),

  // transform immutable action payloads to plain objects
  actionTransformer: (action) =>
    action && action.payload && action.payload.toJS
      ? { ...action, payload: action.payload.toJS() }
      : action,
});

export default configureStore({
  reducer: {
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});