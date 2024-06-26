import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { PwSlice } from './Reducers/PwSlice';

const main = combineReducers({
  pw: PwSlice.reducer,
})

export default configureStore({
  reducer: {
    main: main,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
})
