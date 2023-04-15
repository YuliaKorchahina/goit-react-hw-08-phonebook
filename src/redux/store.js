import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsBook/contacts/contacts-slice';
import { filterReducer } from './contactsBook/filter/filter-slice';
import {authSliceReducer} from './auth/auth-slice'

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
 
};

const rootReducer = combineReducers({
  auth:  persistReducer(persistConfig, authSliceReducer ),
  contacts: contactsReducer,
  filter: filterReducer,
});

// const persistedTokenReducer = persistReducer(
//   rootPersistConfig,
//   rootReducer
// );

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

