
const IPFS = require('ipfs-api');
// const ipfs = new IPFS({host:'rinkeby.infura.io',port:5001,protocol:'https'});
const ipfs = new IPFS({host:'127.0.0.1',port:5002,protocol:'http'});

export default ipfs;