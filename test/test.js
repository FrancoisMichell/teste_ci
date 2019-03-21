const supertest = require('supertest')
const app = require('../server.js')
const request = supertest(app)

describe('GET /', function(done) {
   it('displays "Hello World!"', function(done) {
     // The line below is the core test of our app.
     request.get('/')
      .expect('Hello World!')
      .then(() => done())
      .catch(done)
   })
 })