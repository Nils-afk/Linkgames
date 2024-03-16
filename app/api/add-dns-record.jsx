// pages/add-dns-record.js
import { useState } from 'react';
import axios from 'axios';

export default function AddDNSRecord() {
  const [domain, setDomain] = useState('');
  const [type, setType] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://api.cloudflare.com/client/v4/zones/${process.env.CLOUDFLARE_ZONE_ID}/dns_records`,
        {
          type,
          name: domain,
          content,
          ttl: 120,
          proxied: false, // Set to true if you want the traffic to be proxied through Cloudflare
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response.data);
      // Handle success or display a success message
    } catch (error) {
      console.error(error);
      // Handle error or display an error message
    }
  };

  return (
    <div>
      <h1>Add DNS Record</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="domain">Domain:</label>
          <input
            type="text"
            id="domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Add DNS Record</button>
      </form>
    </div>
  );
}
