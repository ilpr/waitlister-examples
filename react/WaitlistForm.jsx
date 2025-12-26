import { useState } from 'react';

const WAITLIST_KEY = 'YOUR_WAITLIST_KEY';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(`https://waitlister.me/s/${WAITLIST_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, name })
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
        setName('');
      } else {
        throw new Error();
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <div className="success">You're on the list! 🎉</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name (optional)"
      />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>
      {status === 'error' && (
        <div className="error">Something went wrong. Try again.</div>
      )}
    </form>
  );
}
