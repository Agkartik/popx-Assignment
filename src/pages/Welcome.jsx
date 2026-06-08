import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="screen-container" style={{ justifyContent: 'flex-end', paddingBottom: '40px' }}>
      <h1>Welcome to PopX</h1>
      <p>
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/register')}
        >
          Create Account
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
