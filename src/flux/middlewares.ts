/* eslint-disable import/no-anonymous-default-export */
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

export default () => {
  const middlewares = [sagaMiddleware];

  return middlewares;
};
