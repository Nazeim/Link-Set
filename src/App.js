import React, { Component } from "react";
import "./App.css";

import SetProtocol from "setprotocol.js";
import BigNumber from "bignumber.js";

// Metamask configuration
const userMetamaskAddress = "0xafd860a9ac1e1f29e1efa102f82081cd38626054";
const trueUsdAddress = "0xadb015d61f4beb2a712d237d9d4c5b75bafefd7b";
const daiAddress = "0x1d82471142f0aeeec9fc375fc975629056c26cee";

// Kovan configuration
const config = {
  coreAddress: "0x29f13822ece62b7a436a45903ce6d5c97d6e4cc9",
  setTokenFactoryAddress: "0x6c51d8dad8404dbd91e8ab063d21e85ddec9f626",
  transferProxyAddress: "0xd50ddfed470cc13572c5246e71d4cfb4aba73def",
  vaultAddress: "0x014e9b34486cfa13e9a2d87028d38cd98f996c8c",
  rebalancingSetTokenFactoryAddress:
    "0x36d6f26843f3e882a2fd1017e93cdad86f3be3cb"
};

class App extends Component {
  constructor() {
    super();
    const injectedWeb3 = window.web3 || undefined;
    let setProtocol;
    try {
      // Use MetaMask/Mist provider
      const provider = injectedWeb3.currentProvider;
      setProtocol = new SetProtocol(provider, config);
    } catch (err) {
      // Throws when user doesn't have MetaMask/Mist running
      throw new Error(
        `No injected web3 found when initializing setProtocol: ${err}`
      );
    }

    this.state = {
      setProtocol,
      web3: injectedWeb3,
      // Etherscan Links
      createdSetLink: "",
      daiBalance: "",
<<<<<<< HEAD
      trueUsdBalance: ""
=======
      chainlinkBalance: ""
>>>>>>> feature/combine-contracts
    };
    this.createSet = this.createSet.bind(this);
    this.getAccount = this.getAccount.bind(this);
  }

  async componentDidMount() {
    await this.getMyTokenBalances();
  }

  async createSet() {
    const { setProtocol } = this.state;

    /**
     * Steps to create your own Set Token
     * ----------------------------------
     *
     * 1. Fund your MetaMask wallet with Kovan ETH: https://gitter.im/kovan-testnet/faucet
     * 2. Modify your Set details below to your liking
     * 3. Click `Create My Set`
     */

<<<<<<< HEAD
    const componentAddresses = [trueUsdAddress, daiAddress];
=======
    const componentAddresses = [chainlinkAddress, daiAddress];
>>>>>>> feature/combine-contracts
    const componentUnits = [new BigNumber(5), new BigNumber(5)];
    const naturalUnit = new BigNumber(10);
    const name = "My Set";
    const symbol = "MS";
    const account = this.getAccount();
    const txOpts = {
      from: account,
      gas: 4000000,
      gasPrice: 8000000000
    };

    const txHash = await setProtocol.createSetAsync(
      componentAddresses,
      componentUnits,
      naturalUnit,
      name,
      symbol,
      txOpts
<<<<<<< HEAD
    );
    const setAddress = await setProtocol.getSetAddressFromCreateTxHashAsync(
      txHash
    );
=======
    );
    const setAddress = await setProtocol.getSetAddressFromCreateTxHashAsync(
      txHash
    );
>>>>>>> feature/combine-contracts
    this.setState({
      createdSetLink: `https://kovan.etherscan.io/address/${setAddress}`
    });
  }

  async issueSet() {
    /**
     * Steps to Issue your Set Token
     * -----------------------------
     *
     * 1. Get TestNet TrueUSD and Dai
     *   - Navigate to the links below:
     *     - TrueUSD: https://kovan.etherscan.io/address/0xadb015d61f4beb2a712d237d9d4c5b75bafefd7b#writeContract
     *     - Dai:     https://kovan.etherscan.io/address/0x1d82471142f0aeeec9fc375fc975629056c26cee#writeContract
     *   - Click `Connect with MetaMask` link in the `Write Contract` tab. Click `OK` in the modal that shows up.
     *   - In the `greedIsGood` function, put in:
     *     - _to: Your MetaMask address
     *     - _value: 100000000000000000000000
     *   - Click the `Write` button
     *   - Confirm your MetaMask transaction
     *   - You now have TestNet tokens for TrueUSD/Dai.
     *   - Be sure to repeat the process for the other remaining TrueUSD/Dai token.
     */
    // Tutorial Link: https://docs.setprotocol.com/tutorials#issuing-a-set
    // TODO: Insert your code here
  }

  getAccount() {
    const { web3 } = this.state;
    if (web3.eth.accounts[0]) return web3.eth.accounts[0];
    throw new Error("Your MetaMask is locked. Unlock it to continue.");
  }

  renderEtherScanLink(link, content) {
    return (
      <div className="App-button-container">
        <a target="_blank" rel="noopener" href={link}>
          {content}
        </a>
      </div>
    );
  }

  renderBalanceHtml(token, balance) {
    return (
      <div className="token-balance">
        <p>
          {token} Balance: {balance}
        </p>
      </div>
    );
  }

  async getMyTokenBalances() {
    const { web3, setProtocol } = this.state;
    const daiBalance = await setProtocol.erc20.getBalanceOfAsync(
      daiAddress,
<<<<<<< HEAD
      userMetamaskAddress
    );
    const trueUsdBalance = await setProtocol.erc20.getBalanceOfAsync(
      trueUsdAddress,
      userMetamaskAddress
    );
    console.log("DAI BALANCE: ", daiBalance);
    console.log("TRUEUSD BALANCE: ", trueUsdBalance);

    this.setState({
      daiBalance: daiBalance.toNumber() / 1e18,
      trueUsdBalance: trueUsdBalance.toNumber() / 1e18
=======
      this.getAccount()
    );
    const chainlinkBalance = await setProtocol.erc20.getBalanceOfAsync(
      chainlinkAddress,
      this.getAccount()
    );
    console.log("DAI BALANCE: ", daiBalance);
    console.log("CHAINLINK BALANCE: ", chainlinkBalance);

    this.setState({
      daiBalance: daiBalance.toNumber() / 1e18,
      chainlinkBalance: chainlinkBalance.toNumber() / 1e18
>>>>>>> feature/combine-contracts
    });
  }

  render() {
<<<<<<< HEAD
    const { createdSetLink, daiBalance, trueUsdBalance } = this.state;
=======
    const { createdSetLink, daiBalance, chainlinkBalance } = this.state;
>>>>>>> feature/combine-contracts
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Set Boiler Plate</h1>
        </header>
        <button onClick={this.createSet}>Create My Set</button>
<<<<<<< HEAD
=======
        <Rebalance />
>>>>>>> feature/combine-contracts
        {createdSetLink
          ? this.renderEtherScanLink(createdSetLink, "Link to your new Set")
          : null}
        {daiBalance ? this.renderBalanceHtml("DAI", daiBalance) : null}
<<<<<<< HEAD
        {trueUsdBalance
          ? this.renderBalanceHtml("TRUEUSD", trueUsdBalance)
=======
        {chainlinkBalance
          ? this.renderBalanceHtml("CHAINLINK", chainlinkBalance)
>>>>>>> feature/combine-contracts
          : null}
      </div>
    );
  }
}

export default App;
