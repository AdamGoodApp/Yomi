import { encode } from 'base-64';
import { getKey } from '../secure-storage';

export const login = async (email: string, password: string) => {
  const masterKey = await getKey('master_key');

  if(masterKey && email && password) {
    try {
      const response = await fetch(`https://yomi-server.herokuapp.com/auth/?access_token=${masterKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${encode(email + ":" + password)}`
        }
      });
    
      return await response.json();
    } catch (err) {
      return {error: 'unauthorized'}
    }
  }
};