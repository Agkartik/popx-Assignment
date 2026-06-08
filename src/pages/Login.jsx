import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Proceed to profile on login
    navigate('/profile');
  };

  return (
    <div className="screen-container">
      <h1 style={{ marginTop: '20px' }}>
        Signin to your<br />PopX account
      </h1>
      <p style={{ width: '80%' }}>
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
        <div className="input-group">
          <fieldset>
            <legend>Email Address</legend>
            <input type="email" placeholder="Enter email address" required />
          </fieldset>
        </div>

        <div className="input-group">
          <fieldset>
            <legend>Password</legend>
            <input type="password" placeholder="Enter password" required />
          </fieldset>
        </div>

        <button type="submit" className="btn btn-gray" style={{ marginTop: '10px' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
