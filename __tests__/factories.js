import faker from 'faker';
import { factory } from 'factory-girl';

import User from '../src/app/models/User';

// It is recommended for each model to create a factory for it!
// The factory girl can generate a ton of data in a very performatic way
factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export default factory;
