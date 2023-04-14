import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsBook/contacts/contacts-slice';
import { filterReducer } from './contactsBook/filter/filter-slice';
import {authSliceReducer} from './auth/auth-slice'

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
