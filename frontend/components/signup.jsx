import React , { useState }from 'react'
import './login.css'
import { useNavigate , Link } from 'react-router-dom';


function signup() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[name,setname]=useState("")
  const navigate = useNavigate();

  const Signup = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name,email, password }),
      });
console.log(response);
      if (!response.ok) {
        alert("Error Occured !")
        return;
      }

      const data = await response.json();
      localStorage.setItem('token',data.token)
      navigate('/');
      console.log('Signup successful:', data);
    } catch (error) {
      console.error("Internal Server Error");
    }
  };

  return (

<div className="containers">
<div className="form-box">
  <h1 id="titles" className='my-3'>CREATE - ACCOUNT</h1>
  <form  method='POST'>
  
              <div className="mb-3">

              <input onChange={(e)=>{setname(e.target.value)}} name='name'  id="form" type="text" placeholder="Name"/>
</div>
<div className="mb-3">

<input  name='email' id="form" type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />   
</div>
<div className="mb-3">

<input onChange={(e) => { setPassword(e.target.value) }} name='password' id="form" type="password" placeholder="Password" />
</div>

<button id="btn" onClick={Signup} type="submit" className="btn btn-primary my-3">Log in</button>
</form>

  <p>Already have an account? <Link to="/login">Signup</Link></p>
</div>
</div>
  )
}

export default signup