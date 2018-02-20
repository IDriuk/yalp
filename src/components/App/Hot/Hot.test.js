import React from 'react';
import ReactDOM from 'react-dom';
import Hot from './Hot';

import bluestonelane from '../../../images/bluestonelane.jpg';
import kaya from '../../../images/kaya.jpg';
import pastapopup from '../../../images/pastapopup.jpg';

const defaultBusinesses = [
  {
    id: 1,
    image_url: bluestonelane,
    name: "Bluestone Lane",
    rating: "4.5",
    review_count: "15",
    price: "$$",
    categories: [{"alias":"Coffee & Tea","title":"Coffee & Tea"}],
    location: { display_address: ["Financial District, SoMa"] },
    opened: "Opened 7 weeks ago"
  },
  {
    id: 2,
    image_url: kaya,
    name: "Kaya",
    rating: "4.5",
    review_count: "11",
    price: "$$",
    categories: [{"alias":"Caribbean","title":"Caribbean"}],
    location: { display_address: ["Civic Center"] },
    opened: "Opened 2 weeks ago"
  },
  {
    id: 3,
    image_url: pastapopup,
    name: "Pasta Pop-Up",
    rating: "4.5",
    review_count: "32",
    price: "$$",
    categories: [{"alias":"Italian","title":"Italian"}, {"alias":"Pop-Up Restaurants","title":"Pop-Up Restaurants"}],
    location: { display_address: ["North Beach/Telegraph Hill"] },
    opened: "Opened 6 weeks ago"
  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hot businesses={defaultBusinesses}/>, div);
});
