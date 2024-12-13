import React, { useState } from 'react';

const getTokenFromSessionStorage = (): string | null => {
  try {
    return sessionStorage.getItem('jwtToken');
  } catch (error) {
    console.error('Error retrieving token from session storage:', error);
    return null;
  }
};

const saveTokenToSessionStorage = (token: string): void => {
  try {
    sessionStorage.setItem('jwtToken', token);
  } catch (error) {
    console.error('Error saving token to session storage:', error);
  }
};

const clearTokenFromSessionStorage = (): void => {
  try {
    sessionStorage.removeItem('jwtToken');
  } catch (error) {
    console.error('Error clearing token from session storage:', error);
  }
};

const SessionStorageManager: React.FC = () => {
  const [token, setToken] = useState<string | null>(getTokenFromSessionStorage());

  return (
    <div>
      <h2>Session Storage Manager</h2>
      <p>Current Token: {token || 'No token saved'}</p>
      <button onClick={() => saveTokenToSessionStorage('exampleToken123')}>Save Token</button>
      <button onClick={() => { clearTokenFromSessionStorage(); setToken(null); }}>Clear Token</button>
    </div>
  );
};

export { saveTokenToSessionStorage, clearTokenFromSessionStorage };
export default SessionStorageManager;
