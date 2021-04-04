import { useState } from 'react'
import './App.css';

function App() {
  const [fullname ,setFullname] = useState('')
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const [address ,setAddress] = useState('')
  
  return (
    <div>
        <div className="main">
        <div className="form">
          <div className="form_group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
          </div>
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="form_group">
            <label htmlFor="address">Address</label>
            <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <button className="btn" onClick={() => {setFullname('');
                                                  setEmail('');
                                                  setPassword('');
                                                  setAddress('')}}>Reset</button>
          <div className="form_info">
            <p className="form_info-text"><b>Full Name</b> : {fullname}</p>
            <p className="form_info-text"><b>Email</b> : {email}</p>
            <p className="form_info-text"><b>Password</b> : {password}</p>
            <p className="form_info-text"><b>Address</b> : {address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
