import {combineReducers} from 'redux';
import users from './users';
import stories from './stories';
import currentUser from './currentUser';

export default combineReducers({
  currentUser,
  users,
  stories
});

export * from './users';
export * from './stories';
export * from './currentUser';
