import { FETCH_FROM_YELP } from '../actions';

export default function (state={}, action) {
  switch (action.type) {
    case FETCH_FROM_YELP:
      const data = action.payload;
      return {...data};
    default:
      return state;
  }
}
