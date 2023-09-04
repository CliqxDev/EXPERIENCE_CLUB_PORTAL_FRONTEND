import { all } from 'redux-saga/effects';

import clientSaga from './modules/client/sagas';
import authSaga from './modules/auth/sagas';
import addressSaga from './modules/address/sagas';
import postSaga from './modules/post/sagas';
import employeeSaga from './modules/collaborator/sagas'

function* rootSaga() {
  yield all([...authSaga, ...clientSaga, ...addressSaga, ...postSaga, ...employeeSaga]);
}

export default rootSaga;
