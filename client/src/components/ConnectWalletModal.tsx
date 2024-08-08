import React, { useState } from 'react';

const ConnectWalletModal: React.FC<{ onConnect: (address: string) => void }> = ({ onConnect }) => {
  const [address, setAddress] = useState('');

  const handleConnect = () => {
    onConnect(address);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-2xl font-bold mb-4">Connect Wallet</h2>
        <input
          type="text"
          placeholder="Enter your TON address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleConnect}
          className="py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
