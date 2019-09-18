import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';
import {middleware, navReducer} from '../navigator/AppNavigators';
import action from '../action';

// 自定义中间件
const logger = store => next => action => {
  if (typeof action === 'function') {
    console.log('dispatching a function');
  } else {
    console.log('dispatching ', action);
  }
  const result = next(action);
  console.log('nextState', store.getState());
};

const middlewares = [middleware, logger, thunk];
// const appReducer = combineReducers({
//   nav: navReducer,
// });

// const store = createStore(reducers, applyMiddleware(middleware));
// export default store;
export default createStore(reducers, applyMiddleware(...middlewares));
