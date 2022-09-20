require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan raise night puppy hunt beach swing genre'; 
let testAccounts = [
"0xbf7a290437dc6de055923a031fbf7286892f7d89d8ada9e2877bc6f1fe401864",
"0xd5c67dc0e9fa271ce676ad08822bf9c3168abddff979d82873328ff2a99a65e4",
"0xf085151af10d97a45e3a612d2c3eb7a16a0a4f72bc390e408744a6b7f9ff601a",
"0x411a9bf4244c6a503db96f199976a43307b0511685db3cb9c9339d79f4255691",
"0x6e60c18eefa0e496f2ed9bd35d0749b9fc0782fe2678684c477ea221b0090e5a",
"0xfddaebf7744835fdff30875c511916f888b544ce251717200f290b788c3f76d1",
"0x2bc3538f601be26a60a4b8cd74d6a614acac47dbbb6b1ae7c30e8ce2cb3a492f",
"0x102258c556f5872d558a359b0b5171b1122ef74328d49de073da3f6abab8a125",
"0x0e3176ead131b8d07359ae99d43e1da38a9cc67548a1a6c721c61dc9ced6693d",
"0x4674c1a28708876110bd3aade1541a5dff1c99370b67a86736bedc1e40451772"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

