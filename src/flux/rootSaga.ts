import { all } from 'redux-saga/effects';

import clientSaga from './modules/client/sagas';
import authSaga from './modules/auth/sagas';
import addressSaga from './modules/address/sagas';

function* rootSaga() {
  yield all([...authSaga, ...clientSaga, ...addressSaga]);
}

export default rootSaga;
