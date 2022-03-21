const { faker } = require("@faker-js/faker");

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const makeTopicData = () => {
  const newData = {
    id: faker.datatype.uuid(),
    timestamp: faker.date.soon(),
    key: faker.random.word(),
    content: faker.animal.cat(),
  };

  return newData;
};

function makeArray(length, generator) {
  return Array.from({ length }, generator);
}

function makeConsumersArray() {
  return makeArray(generateRandom(5, 20), faker.id);
}

const makeTopicDatasArray = () => {
  const length = generateRandom(0, 50);

  return new Array(length).fill(undefined).map(makeTopicData);
};

const mocks = {
  Query: () => ({
    topics: () => [...new Array(25)],
  }),

  Topic: () => ({
    id: faker.datatype.uuid,
    title: faker.lorem.words,
    starred: faker.datatype.boolean,
    consumers: makeConsumersArray(),
    datas: makeTopicDatasArray(),
  }),
};

module.exports = mocks;
