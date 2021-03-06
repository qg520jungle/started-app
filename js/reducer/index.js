import {combineReducers} from 'redux';
import theme from './theme';
import popular from './popular';
import {rootCom, RootNavigator} from '../navigator/AppNavigators';

const navState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(rootCom),
);

const navReducer = (state = navState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

const reducers = combineReducers({
  theme: theme,
  nav: navReducer,
  popular: popular,
});

export default reducers;
