import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {
    const {createUser, setUser, updateUser} = use(AuthContext);
     const [nameError, setNameError] = useState("");

     const navigate = useNavigate();

     const handleGoogleSignIn = () => {
  handleGoogleSignIn()
    .then((result) => {
      setUser(result.user);
      toast.success("Logged in with Google!");
      navigate("/");
    })
    .catch((err) => toast.error(err.message));
};

    const handleRegister=(e)=>{ 
        e.preventDefault();
        //console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must have at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must have at least one lowercase letter");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
        //console.log({name,photo, email,password});


          createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
    
    return (
         <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center text-cyan-700'>Register your account</h2>



      <form onSubmit={handleRegister} className="card-body">
       
        {/* name */}
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Your Name" required/>
          {
             nameError && <p className='text-xs text-error'>{nameError}</p>
          }

         {/*photo url*/}
          <label className="label">Photo URL</label>
          <input name='photo' type="text" className="input" placeholder="Photo URL" required/>

         {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>

          {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>

         
          <button type="submit" className="btn btn-neutral mt-4">Register</button>

           <div className="divider">or</div>
    <button
      onClick={handleGoogleSignIn}
      type="button"
      className="btn btn-outline w-full"
    >
      <img src="/google-icon.png" alt="" className="w-5 h-5 mr-2" />
      Continue with Google
    </button>

          <p className='font-semibold text-center py-3'>Already Have An Account ?<Link className='text-pink-700' to="/auth/login"> Login</Link></p>


        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;