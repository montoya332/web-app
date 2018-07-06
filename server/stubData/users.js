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
  login: {
    uuid: '6913bd78-ccd4-480a-8232-0313015c532b',
    username: 'browncat155',
    password: 'butkus',
    salt: 'XVZrGdOG',
    md5: '3d6f89835321520e43d5accb748d05de',
    sha1: '6714e4ccb3f8c8ba90a66444705d5819f42743c9',
    sha256: 'd95294ff22b4d61f02917fb1ed0a349affafdd08177f41def9f01f81ff0ea318'
  },
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
  id: {
    name: '',
    value: null
  },
  picture: {
    large: 'http://via.placeholder.com/350x150',
    medium: 'http://via.placeholder.com/350x150',
    thumbnail: 'http://via.placeholder.com/350x150'
  },
  nat: 'BR'

}));

module.exports = users;
