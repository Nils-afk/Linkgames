"use client"
// pages/app/api/add-dns-record.js
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import AddDNSRecordForm from '/app/api/AddDNSRecordForm'; // Adjust the path according to your file structure

export default function AddDNSRecordPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <p className="text-center text-red-500 py-2">Our Api is currently under Production! So you maybe cant use our Service rightnow!</p>
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center overflow-y-auto bg-gradient-to-r from-blue-400/10 via-blue-500/10 to-blue-600/10 backdrop-blur-lg p-24 mt-auto">
        <h1 className="font-bold text-center mb-5 text-3xl lg:text-4xl rounded-full p-2 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 hover:from-blue-400/30 hover:via-blue-500/30 hover:to-blue-600/30 cursor-pointer backdrop-blur-lg text-white border border-transparent hover:border-blue-400/20 transition-all duration-150 ease-in-out">
          Add DNS Record
        </h1>
        <AddDNSRecordForm />
      </main>
      
      {/* Footer */}
      <main className="flex-grow flex flex-col items-center justify-center overflow-y-auto bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-600/10 backdrop-blur-lg p-24 mt-auto">
  <p className="font-bold text-center mb-5 text-3xl lg:text-4xl rounded-full p-2 bg-gradient-to-r from-gray-400/20 via-gray-500/20 to-gray-600/20 hover:from-gray-400/30 hover:via-gray-500/30 hover:to-gray-600/30 cursor-pointer backdrop-blur-lg text-white border border-transparent hover:border-gray-400/20 transition-all duration-150 ease-in-out">
    Use our Discord API under <a href="https://discord.linkgames.de/api/raw/[user_id]" className="text-gray-700 hover:text-gray-900">discord.linkgames.de/api/raw/[user_id]</a> Make sure you joined our <a href="https://discord.gg/yGxbwpknsD" className="text-gray-700 hover:text-gray-900">Discord</a>!
  </p>
</main>
      <Footer />
    </div>
  );
}
