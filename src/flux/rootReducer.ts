import clientReducer from './modules/client/reducers';
import sigInReducer from './modules/sigIn/reducers';

const rootReducer = () => ({
  sigIn: sigInReducer,
  client: clientReducer
});

export default rootReducer;
