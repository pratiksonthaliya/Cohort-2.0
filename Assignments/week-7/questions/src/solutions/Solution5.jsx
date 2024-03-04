import { useEffect, useState } from 'react';
import axios from 'axios';

let username = 'pratiksonthaliya';

export const Solution5 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(async (res) => {
        const details = await res.data;
        setData(details);
        console.log(details);
      })
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      {data ? (
        <>
          <img src={data.avatar_url} alt="Avatar" style={{ borderRadius: '50%', width: '100px', height: '100px', marginBottom: '10px' }} />
          <h2>{data.name}</h2>
          <h4>@{data.login}</h4>
          <p>{data.bio}</p>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
