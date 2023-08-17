import { all } from 'redux-saga/effects';

import clientSaga from './modules/client/sagas';
import sigInSaga from './modules/sigIn/sagas';
import cepSaga from './modules/cep/sagas';

function* rootSaga() {
  yield all([...sigInSaga, ...clientSaga, ...cepSaga]);
}

export default rootSaga;
