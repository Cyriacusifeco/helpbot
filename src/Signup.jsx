import './App.css'
import './Signup.css'



export default function Signup() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-6 p-3 d-none  d-sm-block'>
          <img src="src/assets/2.jpeg" alt="" className='img-fluid image' />
        </div>
        <div className='col-md-6 log-in p-3'>
          <div className="logo-container">
            <a href="#">LOGO</a>
          </div>
          <h3>Sign Up</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <p>Lorem ipsum dolor sit amet. </p>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
          </div>
          <div className="mb-3">
            <button className='active'>Build your Chatbot</button>
          </div>
          <hr />
          <div className="mb-2">
            <button className='inactive'>Sign up with Google</button>
          </div>
          <div className="mb-2">
            <button className='inactive'>Sign Up with Apple</button>
          </div>
        </div>

      </div>

    </div>
  )
}