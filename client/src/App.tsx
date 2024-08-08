import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';
import CreateTokenForm from './components/CreateTokenForm';

const App = () => {
  return (
    <TonConnectUIProvider manifestUrl="https://dapp-url.com/manifest.json">
      <div className="min-h-screen bg-gray-800 flex">
        <div className="w-1/2 p-12 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-cyan-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative bg-white shadow-lg rounded-3xl p-12 w-full max-w-lg">
            <h1 className="text-3xl font-bold mb-8 text-center">Ton Token</h1>
            <CreateTokenForm />
          </div>
        </div>

        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className='mb-24 flex justify-end'>
            <TonConnectButton 
              className="inline-flex py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
          </div>
          <h2 className="text-4xl font-bold mb-12 text-white">Create Your Own Token</h2>
          <p className="text-xl text-white mb-4">
            Easily deploy your custom token on the TON blockchain with our user-friendly interface.
          </p>
          <ul className="list-disc list-inside text-lg text-white space-y-2">
            <li>Specify your token's name, symbol, and description</li>
            <li>Add an image URL for your token's logo</li>
            <li>Deploy with just a click</li>
            <li>Get your token contract address instantly</li>
          </ul>
          <p className="mt-6 text-lg text-white">
            Start creating your TON-token today with custom our Jettons!
          </p>
        </div>
      </div>
    </TonConnectUIProvider>
  );
};

export default App;
