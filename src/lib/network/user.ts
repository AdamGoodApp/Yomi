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

export const bookmark = async (data: {}) => {
  const user: any = await getKey('user');
  const parsed: any = JSON.parse(user);

  if(user && data) {
    try {
      const response = await fetch(`https://yomi-server.herokuapp.com/users/${parsed.user.id}?access_token=${parsed.token}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    
      return await response.json();
    } catch (err) {
      return {error: 'unauthorized'}
    }
  }
};

export const me = async () => {
  const user: any = await getKey('user');
  const parsed: any = JSON.parse(user);

  if(user) {
    try {
      const response = await fetch(`https://yomi-server.herokuapp.com/users/me?access_token=${parsed.token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      return await response.json();
    } catch (err) {
      return {error: 'unauthorized'}
    }
  }
};