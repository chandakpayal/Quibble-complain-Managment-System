import React  from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
const Register = () => {

const navigate  = useNavigate()

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [role,setRole] = useState("");
  const [password,setPassword] = useState("");
 
  

  const handleSubmit=(e)=>{
      e.preventDefault();

      const datas = {name,email,password,role};
      

      fetch("http://localhost:9090/api/v1/register",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(datas)
      }).then((res)=>{

        alert("Saved Succesfully!")
        navigate("/login");

      }).catch((err)=>{
        console.log(err.message)
      })


      
  }





  return (
    <>

        <div class="h-screen md:flex">
            <div style={{
              backgroundImage:
              "url('https://img.freepik.com/free-vector/hand-draw-blue-colorful-watercolor-texture-background_1035-23146.jpg?w=996&t=st=1682162777~exp=1682163377~hmac=0279ac65007aaac9cb5ed53a829371b2f4b9511b6c57200cd52d3712ed5e42da')",
            }}
                class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                <div>
                    <h1 class="text-white font-bold text-4xl font-sans">Qubbile-Register</h1>
                    <p class="text-white mt-1">A platform to RESOLVE your queries</p>
                    <div className='flex justify-between items-center'> 
                      <Link to='/Login'  class="block w-28 text-center bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2" >Login</Link>
                      <Link to='/'  class="block w-28 text-center bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2" >Home</Link>
                    </div>
                </div>
                <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">


                <form onSubmit={handleSubmit} class="bg-white">
                    <h1 class="text-gray-800 font-bold text-2xl mb-1">Please Register To Continue..</h1>
                    <p class="text-sm font-normal text-gray-600 mb-7">Welcome to Educa</p>

                    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <select value={role} onChange={e=>setRole(e.target.value)} name="role" id='role' class="pl-2 outline-none w-full border-none rounded-md text-black-800">
                        <option>Select your Role</option>
                        <option>Student</option>
                       
                        <option>Admin</option>
                    </select>
                    </div>

                    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd" />
                        </svg>
                        <input class="pl-2 outline-none border-none" value={name} onChange={e=>setName(e.target.value)} type="text" name="name" id="name" placeholder="Full name" />
                    </div>

                 

                    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        <input class="pl-2 outline-none border-none" type="text" value={email} onChange={e=>setEmail(e.target.value)} name="email" id="email" placeholder="Email Address" />
                    </div>

                    <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd" />
                            </svg>
                        <input class="pl-2 outline-none border-none" value={password} onChange={e=>setPassword(e.target.value)} type="text" name="password" id="password" placeholder="Password" />
                    </div>

                        <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                        <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ? Click Here to </span> <Link to='/login'>Login</Link>
                </form>


            </div>
        </div>
            
    
    </>
  )
}

export default Register