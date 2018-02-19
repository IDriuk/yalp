const headers = new Headers({'Authorization': 'Bearer XWnHkdjVcOwzQUmu7JWfsSWAk_a-PMzZRjquN_SK189GYdKUgK-Jdn9gW3Ca0YrO8IYpE-SI7yofu3ktLI8uwFpIkc0c6WHZAv-SWO2_ntl4qx7KgCX7ZfUKavuHWnYx'});
const options = {method: 'GET', headers: headers, mode: 'cors', cache: 'default'};

export const FETCH_BUSINESSES = 'fetch_businesses';

// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
const corsProxy = 'https://cors-anywhere.herokuapp.com/'

export function fetchBusinesses() {
  const businessesUrl = `${corsProxy}https://api.yelp.com/v3/businesses/search?term=food&limit=3&latitude=37.786882&longitude=-122.399972`;
  const req = new Request(businessesUrl, options);

  return dispatch => fetch(req)
  .then(res =>res.json(), err => {})
  .then(data => dispatch({type: FETCH_BUSINESSES, payload: data ? data.businesses: []}));
}
