"use client"
import { useState, useEffect } from "react";
import { ethers } from "ethers";

const Header = () => {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      provider.listAccounts().then((accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      });
    }
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <header className="flex justify-between w-full gap-10 items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img
          src="/header.png"
          alt="Company Logo"
          className="h-10"
        />
        
      </div>
      <button
        onClick={connectWallet}
        className="p-2 bg-blue-600 rounded-md"
      >
        {walletAddress
          ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(
              -4
            )}`
          : "Connect Wallet"}
      </button>
    </header>
  );
};

export default Header;
