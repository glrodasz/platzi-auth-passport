const express = require('express');
const supertest = require('supertest');

function testServer(route) {
  const app = express();
  route(app);
  return supertest(app);
}

module.exports = testServer;
