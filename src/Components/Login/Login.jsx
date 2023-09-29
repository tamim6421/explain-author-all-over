import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {signInUser, signInWithGooglePopup} = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log(signInUser)

    const handleSubmit= e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        signInUser(email, password)
        .then(res =>{
            const user = res.user
            console.log(user)
            e.target.reset()
            navigate('/')
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleGoogle = () =>{
        signInWithGooglePopup()
        .then(res =>{
            const user = res.user
            console.log(user)
        })
        .catch( error =>{
            console.log(error)
        })
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            
                <form onSubmit={handleSubmit} >
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
                </form>
                <p>Create a new account? Please<Link to='/register'> 
                <button className="btn btn-link">Register</button>
                </Link> </p>
                <p><button onClick={handleGoogle} className="btn btn-ghost">Google</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
