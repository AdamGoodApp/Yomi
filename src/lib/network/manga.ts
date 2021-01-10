import { getKey } from '../secure-storage';

export const top24 = async () => {
  const masterKey = await getKey('master_key');

  if(masterKey ) {
    try {
      const response = await fetch(`https://yomi-server.herokuapp.com/manga?access_token=${masterKey}&list=top24`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      return await response.json();
    } catch (err) {
      return {error: 'unauthorized'}
    }
  }
};

export const getTop7d = async () => {
  const masterKey = await getKey('master_key');

  if(masterKey ) {
    try {
      const response = await fetch(`https://yomi-server.herokuapp.com/manga?access_token=${masterKey}&list=top7d`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      return await response.json();
    } catch (err) {
      return {error: 'unauthorized'}
    }
  }
};