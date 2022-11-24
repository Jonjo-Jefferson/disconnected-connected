import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="grid lg:items-center justify-center h-screen bg-hero bg-repeat bg-center bg-contain lg:bg-cover lg:bg-no-repeat">
      <div className="text-center mt-52">
        <h1 className="text-1rem lg:text-5xl">
          <span className="text-red-800">disconnected</span> :
          <span className="text-blue-800 opacity-10 "> Connected</span>
        </h1>
        <h1 className="text-sm lg:text-5xl">
          <span className="text-blue-800 opacity-10">disconnected</span> :
          <span className="text-red-800"> connected</span>
        </h1>
        <h2 className="text-[12px] tracking-[.25em] lg:text-2xl ">
          <span className="text-blue-800 ">disconnected</span> from reality
          <br />
          <span className="text-red-800">connected</span> by humanity
        </h2>
      </div>
    </div>
  );
};

export default Home;
