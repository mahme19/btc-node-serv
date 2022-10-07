const express = require("express");
const router = express.Router();
const request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const RPCUSER = process.env.RPC_USER;
const RPCPASS = process.env.RPC_PASSWORD;

const headers = {
  "content-type": "text/plain;"
};


router.get("/:wallet/getbalance/", (req, res) => {
  const optionsBody = `{"jsonrpc":"1.0","id":"curltext","method":"getbalance","params":[]}`;
  const options = {
    url: `http://${RPCUSER}:${RPCPASS}@127.0.0.1:18443/wallet/${req.params.wallet}`,
    method: "POST",
    headers: headers,
    body: optionsBody
  };
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(JSON.parse(body));
    }
  };
  request(options, callback);

  
});

// Getting blockcount in the local network
router.get("/getblockcount", (req, res) => {
  const optionsBody = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
  const options = {
    url: `http://${RPCUSER}:${RPCPASS}@127.0.0.1:18443/`,
    method: "POST",
    headers: headers,
    body: optionsBody
  };
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(JSON.parse(body));
    }
  };
  request(options, callback);
  
});

//Listing wallets on the blockchain
router.get("/listwallets", (req, res) => {
  const optionsBody = `{"jsonrpc":"1.0","id":"curltext","method":"listwallets","params":[]}`;
  const options = {
    url: `http://${RPCUSER}:${RPCPASS}@127.0.0.1:18443/`,
    method: "POST",
    headers: headers,
    body: optionsBody
  };
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(JSON.parse(body));
    }
  };
  request(options, callback);
  
});



// Send bitcoin from one wallet to another wallet, passes three parameters in the URL.
router.get("/sendtoaddress/:wallet/:amount/:address", (req, res) => {
  const optionsBody = `{"jsonrpc":"1.0","id":"curltext","method":"sendtoaddress","params":["${req.params.address}", ${req.params.amount} ]}`;
  const options = {
    url: `http://${RPCUSER}:${RPCPASS}@127.0.0.1:18443/wallet/${req.params.wallet}`,
    method: "POST",
    headers: headers,
    body: optionsBody
  };
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(JSON.parse(body));
    }
  };
  
    request(options, callback);
  
});


// Create new address for any wallet
router.get("/:wallet/getnewaddress", (req, res) => {
  const optionsBody = `{"jsonrpc": "1.0", "id": "curltest", "method": "getnewaddress", "params": []}`;
  const options = {
    url: `http://${RPCUSER}:${RPCPASS}@127.0.0.1:18443/wallet/${req.params.wallet}`,
    method: "POST",
    headers: headers,
    body: optionsBody
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(JSON.parse(body));

    }
    
  };
  request(options, callback);
});


//List unspent transactions for a single wallet
router.get("/:wallet/listunspent", (req, res) => {
  const optionsBody = `{"jsonrpc": "1.0", "id": "curltest", "method": "listunspent", "params": []}`;
  const options = {
    url: `http://${RPCUSER}:${RPCPASS}@127.0.0.1:18443/wallet/${req.params.wallet}`,
    method: "POST",
    headers: headers,
    body: optionsBody
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(JSON.parse(body));

    }
    
  };
  request(options, callback);
});


module.exports = router;
