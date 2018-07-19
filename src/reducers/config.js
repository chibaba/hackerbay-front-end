import { Record } from 'immutable';
import createReducers from '../store/createReducers';

const Form = Record({});

const initialState = new Form();

export default createReducers(initialState, {});
