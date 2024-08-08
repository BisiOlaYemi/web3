import React, { useState } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';

const CreateTokenForm = () => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [tonConnectUI,] = useTonConnectUI();
  const { connected, wallet } = tonConnectUI;

  const getWalletAddress = () => {
    if (!wallet) return null;

    if ('address' in wallet) {
      return wallet.address;
    }

    // Assuming walletInfoWithOpenMethod has an address property
    if ('wallet' in wallet && 'address' in wallet.account) {
      return wallet.account.address;
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!connected) {
      alert('Please connect your wallet first.');
      return;
    }

    const walletAddress = getWalletAddress();

    if (!walletAddress) {
      alert('Unable to retrieve wallet address.');
      return;
    }

    // Call your token creation function here
    // await createToken({ name, symbol, description, imageUrl, walletAddress });

    alert(`Token created successfully for address: ${walletAddress}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Symbol</label>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Image URL</label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Create Token
      </button>
    </form>
  );
};

export default CreateTokenForm;
