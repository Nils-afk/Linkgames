// components/AddDNSRecordForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function AddDNSRecordForm() {
  const [subdomain, setSubdomain] = useState('');
  const [type, setType] = useState('');
  const [content, setContent] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formBackground, setFormBackground] = useState('bg-gradient-to-r from-blue-400/10 via-blue-500/10 to-blue-600/10');
  const [textColor, setTextColor] = useState('text-black');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validierung: Überprüfe, ob alle Felder ausgefüllt sind
    if (!subdomain || !type || !content) {
      setErrorMessage('Please fill out all fields.');
      setFormBackground('bg-red-200'); // Hintergrundfarbe auf Rot setzen
      setTextColor('text-black'); // Schriftfarbe auf Schwarz setzen
      return;
    }

    try {
      const response = await axios.post(
        `https://api.cloudflare.com/client/v4/zones/${process.env.CLOUDFLARE_ZONE_ID}/dns_records`,
        {
          type,
          name: `${subdomain}.linkgames.de`,
          content,
          ttl: 120,
          proxied: false,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response.data);
      setSuccessMessage('DNS record successfully added.');
      setErrorMessage('');
      setFormBackground('bg-green-200'); // Hintergrundfarbe auf Grün setzen bei Erfolg
      setTextColor('text-black'); // Schriftfarbe auf Schwarz setzen
    } catch (error) {
      console.error(error);

      // Validierung: Überprüfe, ob der DNS-Eintrag bereits vorhanden ist
      if (error.response && error.response.status === 409) {
        setErrorMessage('DNS record already exists.');
      } else {
        setErrorMessage('Failed to add DNS record. Please try again.');
      }

      setSuccessMessage('');
      setFormBackground('bg-red-200'); // Hintergrundfarbe auf Rot setzen bei Fehler
      setTextColor('text-black'); // Schriftfarbe auf Schwarz setzen
    }
  };

  return (
    <div className={`rounded-lg p-6 ${formBackground}`}>
      <div className="rounded-lg p-6 bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <label htmlFor="subdomain" className={`mr-2 ${textColor}`}>Subdomain:</label>
            <input
              type="text"
              id="subdomain"
              value={subdomain}
              onChange={(e) => setSubdomain(e.target.value)}
              placeholder="Enter your subdomain"
              className={`bg-white ${textColor} border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 flex-1`}
            />
            <div className={`ml-2 ${textColor}`}>linkgames.de</div>
          </div>
          <div className="mb-4">
            <label htmlFor="type" className={textColor}>Type:</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={`bg-white ${textColor} border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500`}
            >
              <option value="">Select DNS Type</option>
              <option value="A">A</option>
              <option value="AAAA">AAAA</option>
              <option value="CNAME">CNAME</option>
              <option value="MX">MX</option>
              <option value="TXT">TXT</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="content" className={textColor}>Content:</label>
            <input
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={`bg-white ${textColor} border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500`}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500">Add DNS Record</button>
        </form>
      </div>
      {errorMessage && <p className={`text-red-600 mt-2 ${textColor}`}>{errorMessage}</p>}
      {successMessage && <p className={`text-green-600 mt-2 ${textColor}`}>{successMessage}</p>}
    </div>
  );
}
