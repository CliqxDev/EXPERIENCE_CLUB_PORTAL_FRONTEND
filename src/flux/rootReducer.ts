import clientReducer from './modules/client/reducers';
import authReducer from './modules/auth/reducers';
import addressReducer from './modules/address/reducers';
import postReducer from './modules/post/reducers';
import addEmployee from './modules/employee/reducers';

const rootReducer = () => ({
  auth: authReducer,
  address: addressReducer,
  post: postReducer,
  client: clientReducer,
  employee: addEmployee,
});

export default rootReducer;
