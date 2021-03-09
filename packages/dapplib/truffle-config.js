require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind essay idea drive force skill'; 
let testAccounts = [
"0x64d2b5f0c03fb6227d54322ec4b74db9e36c7ea4dfdb1c62c2628e61ad12ace8",
"0x7a9e39860843a46619b13b679653f0b44947c11934f00d4cf94a53974b504d33",
"0xf300d9cce1d27ace0bc343f8263aa7be7873b5744b21e1db7e8eb517bed8b8e9",
"0x74da18c510bbda548219e284be23e35ca698406fbf3bfc25d92c3fce734c31d9",
"0xc583992e0835fb3d6cf8970b41b03de449cae4abc8069b1eba0c05e22f422dce",
"0x072b5a15da764dfb3759b96956a3538e6ea5fdfd8d58357d2a8caf1ee0b46eae",
"0x31ec128288978369d12d868ab3aa2e5a66de3289656a699e7d2449784f008da2",
"0x70485df4aedcba6fe7999910e513211efb959940b177934b205792912b6121e8",
"0x3c469c7e2167c96fcc67e6aa2b3d8c90d0a0e58faf2a9da29c14c39bfe8dcd49",
"0xe402713beb7e840146525b7f5a08465f59b42be198077f6d009cd71da095efb1"
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
            version: '^0.5.11'
        }
    }
};
