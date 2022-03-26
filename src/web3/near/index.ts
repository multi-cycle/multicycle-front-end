import * as nearAPI from "near-api-js";
const { connect, keyStores, WalletConnection } = nearAPI;

const loginnear = async() =>{
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();

    const config = {
        networkId: "testnet",
        keyStore, // optional if not signing transactions
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
    };

    // @ts-ignore
    const near = await connect(config);

    // create wallet connection
    const wallet = new WalletConnection(near,'player1');

    if(wallet.isSignedIn()) {
        const walletAccountId = wallet.getAccountId();
        return walletAccountId
    }else{
        await wallet.requestSignIn(
            "example-contract.testnet", // contract requesting access
            "Example App", // optional
            // "http://YOUR-URL.com/success", // optional
            // "http://YOUR-URL.com/failure" // optional
        );
    }
}

export default loginnear