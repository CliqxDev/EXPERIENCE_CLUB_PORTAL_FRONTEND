import clientReducer from './modules/client/reducers';
import authReducer from './modules/auth/reducers';
import addressReducer from './modules/address/reducers';

const rootReducer = () => ({
  auth: authReducer,
  address: addressReducer,
  client: clientReducer
});

export default rootReducer;
