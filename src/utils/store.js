import { configureStore } from "@reduxjs/toolkit";
import authenticationRed from "./redux_config";
export const store = configureStore({
  reducer: {
    authentication: authenticationRed,
  },
});
