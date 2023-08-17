import clientReducer from './modules/client/reducers';
import sigInReducer from './modules/sigIn/reducers';
import cepReducer from './modules/cep/reducers';

const rootReducer = () => ({
  sigIn: sigInReducer,
  cep: cepReducer,
  client: clientReducer
});

export default rootReducer;
