const _ = require('lodash');

const users = (count = 5) => _.times(count, i => ({
  gender: 'male',
  name: {
    title: 'mr',
    first: `arturo-${i}`,
    last: 'montoya'
  },
  location: {
    street: '1932 rua sete de setembro ',
    city: 'sete lagoas',
    state: 'paraná',
    postcode: 56343,
    coordinates: {
      latitude: '-73.3282',
      longitude: '-58.0948'
    },
    timezone: {
      offset: '-10:00',
      description: 'Hawaii'
    }
  },
  email: `arturo-${i}.montoya@example.com`,
  dob: {
    date: '1955-06-06T04:42:27Z',
    age: 63
  },
  registered: {
    date: '2003-08-01T17:04:51Z',
    age: 14
  },
  phone: '(00) 3732-1718',
  cell: '(45) 0238-7243',
  id: `6913bd78-ccd4-480a-8232-${i}`,
  picture: {
    large: 'http://via.placeholder.com/350x150',
    medium: 'http://via.placeholder.com/350x150',
    thumbnail: 'http://via.placeholder.com/350x150'
  },
  nat: 'BR'
}));

module.exports = users;
