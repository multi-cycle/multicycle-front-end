
const LoginSubstrate = async () =>{
    const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
    const allInjected = await web3Enable('my cool dapp');
    const web3Accounts = (await import("@polkadot/extension-dapp")).web3Accounts;
    const allAccounts = await web3Accounts();
    console.log(allAccounts)

}

export default LoginSubstrate