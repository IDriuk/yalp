import { FETCH_BUSINESSES } from '../actions';

export default function (state=[], action) {
  switch (action.type) {
    case FETCH_BUSINESSES:
      const businesses= action.payload;
      return [...businesses];
    default:
      return state;
  }
}
