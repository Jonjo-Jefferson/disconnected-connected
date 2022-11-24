import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="grid items-center justify-center h-screen bg-hero bg-no-repeat bg-center bg-contain bg-cover">
      <div className="text-center">
        <h1 className="text-5xl">
          <span className="text-red-800">disconnecteD</span>:
          <span className="text-blue-800">detcennoC</span>
        </h1>
        <h1 className="text-5xl">
          <span className="text-blue-800">Detcennocsid</span>:
          <span className="text-red-800">Connected</span>
        </h1>
        <h2 className="text-2xl tracking-[.25em] ">
          <span className="text-blue-800">disconnected</span> by reality:
          <span className="text-red-800">connected</span> by humanity
        </h2>
      </div>
    </div>
  );
};

export default Home;
