import React, { useState } from 'react';
import"./register.css"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import KeyIcon from '@mui/icons-material/Key';

const Register = ({logIn}) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!firstName || !email || !password || !repeatPassword) {
      setError('All fields are required');
      return;
    }

    if (!termsChecked){
      setError('Please indicate that you have read and agreed to the terms of conditions of PetaByte.');
      return;
    }

    if (!email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');

    logIn({
      id: 0,
      username: "marco",
      bio:"hi,im marco paolieri, i have a dog",
      followers:21,
      following:20,
      password: "1234",
      email: "mail@mail.com",
      profile_picture: "https://qed.usc.edu/paolieri/marco_paolieri.jpg",
    });
  };
  return (
    <div className="register">
        <div className="registerWrapper">
          <div className="registerLeft">
          <h3 className="registerLogo">Sign up</h3>
          <div className="registerBox">
            <div className="registerName">
            <PersonIcon/>
            <input
                placeholder="User Name"
                className="registerInput"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="registerEmail">
              <EmailIcon/>
              <input
                placeholder="Email"
                className="registerInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="registerPassword">
              <LockIcon/>
              <input
                placeholder="Password"
                type="password"
                className="registerInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="registerRepeatPassword">
              <KeyIcon/>
              <input
                placeholder="Re-enter Password"
                type="password"
                className="registerInput"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>  
            <div className="termsCheckbox">
              <input
                type="checkbox"
                checked={termsChecked}
                onChange={() => setTermsChecked(!termsChecked)}
              />
              <span> I agree to the terms and conditions of PetaByte.</span>
            </div>
            {error && (
              <p className="errorText" style={{ marginBottom: '15px', color: 'red', fontWeight: 'bold' }}>
                {error}
              </p>
            )}
            <button className='registerButton' onClick={handleRegister}>
              Register
            </button>
          </div>
          </div>
        </div>

        <div className="image-container">
      <img className="register-image" src='Cute-Puppy-PNG.png' alt="Description of the image" />
     </div>
    </div>
  )
}

export default Register;