import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [gender,setGender] = useState('Male');
  const [phNo,setPhNo] = useState('');
  const [password,setPassword] = useState('');
  const [nameError,setNameError] = useState('');
  const [emailError,setEmailError] = useState('');
  const [genderError,setGenderError] = useState('');
  const [phError,setPhNoError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [state,setState] = useState(false);
  const [mandatory,setMandatory] = useState('');
  const [username,setUsername] = useState('');

   const resetError = ()=>{
    setMandatory('')
    setNameError('');
    setEmailError('');
    setGenderError('');
    setPhNoError('');
    setPasswordError('');
   }
  const clickHandler = (e) =>{
    e.preventDefault()
     if(name == '' || email == '' || gender == '' || phNo == '' || password==''){
          console.log('All fields are mandatory');
          setMandatory('All fields are mandatory')
    }
     else if(!name.match(/^[A-Za-z0-9- ]+$/)){
      console.log('Name is not alphanumeric');
      resetError()
      setNameError('Name is not alphanumeric')
    }
     else if(!email.includes('@')){
      resetError()
      console.log('Email must contain @');
      setEmailError('Email must contain @')
    }
    else if(!gender.match(/Male|Female|Others/)){
      resetError()
      console.log('Please identify as male, female or others');
      setGenderError('Please identify as male, female or others')
    }
    else if(!phNo.match(/[0-9]/)){
      resetError()
      console.log("Phone Number must contain only numbers");
      setPhNoError("Phone Number must contain only numbers")
    }
    else if(password.length < 6){
      resetError()
      console.log('Password must contain atleast 6 letters');
      setPasswordError('Password must contain atleast 6 letters')
    }
    else {
      resetError();
      setState(true);
      setUsername(email.substring(0,email.indexOf('@')))
      setEmail('')
      setName('')
      setGender('Male')
      setPassword('')
      setPhNo('')
    }
  }

  return (
    <div id="main">
      <h1>{mandatory}</h1>
      <form >
      <lebel for='Name' />Name:
      <input data-testid = 'name' placeholder="Enter your Name" value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
      <h4>{nameError}</h4>
      <lebel for='email' />Email address:
      <input data-testid = 'email' placeholder="Enter your Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
      <h4>{emailError}</h4>
      <lebel for='gender' /> Gender:
      <select data-testid = 'gender' value={gender} onChange={(e)=>setGender(e.target.value)}>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </select>
      <h4>{genderError}</h4>
     
      <lebel for='phno' />Phone Number:
      <input data-testid = 'phoneNumber' placeholder="Enter your Phone Number" value={phNo} onChange={(e)=>setPhNo(e.target.value)}/><br></br>
      <h4>{phError}</h4>
      <lebel for='Password' />Password:
      <input data-testid = 'password'  type='password' placeholder="Enter your Name" value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
      <h4>{passwordError}</h4>
      <button data-testid = 'submit' type="submit" onClick={clickHandler}>Submit</button>
      </form>
      <div>
        <div>{state?(<h1>Hello {username}</h1>):('')}</div>
      </div>
    </div>
  )
}


export default App;
