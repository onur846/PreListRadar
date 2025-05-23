import { useState } from 'react';
import tokenData from '../public/tokens.json';

export default function Home() {
  const [password, setPassword] = useState('');
  const [access, setAccess] = useState(false);

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_PASSWORD || password === 'rockeclub') {
      setAccess(true);
    } else {
      alert('Yanlış şifre!');
    }
  };

  if (!access) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">PreListRadar Giriş</h1>
        <input
          type="password"
          className="p-2 border rounded"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleLogin}
        >
          Giriş
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Yüksek İhtimalle Listelenecek Coinler</h1>
      <ul className="space-y-4">
        {tokenData.map((token, idx) => (
          <li key={idx} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{token.name}</h2>
            <p>Borsa: {token.exchange}</p>
            <p>Belirti: {token.indicator}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
