import { all } from 'redux-saga/effects';

import clientSaga from './modules/client/sagas';
import sigInSaga from './modules/sigIn/sagas';

function* rootSaga() {
  yield all([...sigInSaga, ...clientSaga]);
}

export default rootSaga;
