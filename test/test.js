const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');
const should = chai.should();
const expect = chai.expect;


chai.use(chaiHttp);

describe('Testing balance on wallet test1', () => {
    it('should respond with balance of test1 wallet', () => { 
      chai.request(server)
      .get('/test1/getbalance')
      .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type','text/plain');

      })
      .catch(err => { throw err; })
      })
      
  });
  