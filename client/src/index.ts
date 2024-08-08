// src/index.ts
import { ethers } from 'ethers';

// Assuming you have a provider setup somewhere
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Example usage of ethers.utils
const utils = ethers.utils;
console.log(utils.formatEther('1000000000000000000'));
