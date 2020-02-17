import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

export function setupIntegrationTest(reducers, sagas) {
  const dispatchSpy = jest.fn(() => ({}));
  const reducerSpy = (state, action) => dispatchSpy(action);
  const combinedReducers = combineReducers({
    reducerSpy,
    ...reducers,
  });

  const store = createStore(combinedReducers);

  return { store, dispatchSpy };
}
