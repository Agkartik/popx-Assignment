import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState('yes');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Proceed to profile on register, passing the user data
    navigate('/profile', { state: { name, email } });
  };

  return (
    <div className="screen-container">
      <h1 style={{ marginTop: '20px', marginBottom: '30px' }}>
        Create your<br />PopX account
      </h1>

      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="input-group">
          <fieldset>
            <legend>Full Name<span style={{ color: 'red' }}>*</span></legend>
            <input 
              type="text" 
              placeholder="Marry Doe" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </fieldset>
        </div>

        <div className="input-group">
          <fieldset>
            <legend>Phone number<span style={{ color: 'red' }}>*</span></legend>
            <input type="text" placeholder="Marry Doe" required />
          </fieldset>
        </div>

        <div className="input-group">
          <fieldset>
            <legend>Email address<span style={{ color: 'red' }}>*</span></legend>
            <input 
              type="email" 
              placeholder="Marry Doe" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </fieldset>
        </div>

        <div className="input-group">
          <fieldset>
            <legend>Password <span style={{ color: 'red' }}>*</span></legend>
            <input type="password" placeholder="Marry Doe" required />
          </fieldset>
        </div>

        <div className="input-group">
          <fieldset>
            <legend>Company name</legend>
            <input type="text" placeholder="Marry Doe" />
          </fieldset>
        </div>

        <div style={{ marginTop: '10px' }}>
          <p style={{ color: '#1d2226', marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>
            Are you an Agency?<span style={{ color: 'red' }}>*</span>
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '15px' }}>
              <input 
                type="radio" 
                name="agency" 
                value="yes"
                checked={isAgency === 'yes'}
                onChange={(e) => setIsAgency(e.target.value)}
                style={{ accentColor: 'var(--primary)', width: '20px', height: '20px' }}
              />
              Yes
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '15px' }}>
              <input 
                type="radio" 
                name="agency" 
                value="no"
                checked={isAgency === 'no'}
                onChange={(e) => setIsAgency(e.target.value)}
                style={{ accentColor: 'var(--primary)', width: '20px', height: '20px' }}
              />
              No
            </label>
          </div>
        </div>

        <div className="mt-auto" style={{ paddingTop: '40px' }}>
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
