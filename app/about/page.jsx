import React from "react";
//import Header from '/components/header';
//import Footer from '/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="flex-grow overflow-y-auto bg-gradient-to-r from-blue-400/10 via-blue-500/10 to-blue-600/10 backdrop-blur-lg flex flex-col items-center justify-center p-24">
        <h1 className="font-bold text-center mb-5 text-3xl lg:text-4xl rounded-full p-2 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 hover:from-blue-400/30 hover:via-blue-500/30 hover:to-blue-600/30 cursor-pointer backdrop-blur-lg text-white border border-transparent hover:border-blue-400/20 transition-all duration-150 ease-in-out">
          Hello, here you can get a free Subdomain!
        </h1>
        {/* Add more content here */}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
