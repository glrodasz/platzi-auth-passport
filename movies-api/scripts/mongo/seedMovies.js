// DEBUG=app:* node scripts/mongo/seedMovies.js

const chalk = require('chalk');
const debug = require('debug')('app:scripts:movies');
const MongoLib = require('../../lib/mongo');
const { moviesMock } = require('../../utils/mocks/movies');

async function seedMovies() {
  try {
    const mongoDB = new MongoLib();

    const promises = moviesMock.map(async movie => {
      await mongoDB.create('movies', movie);
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} movies have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedMovies();
