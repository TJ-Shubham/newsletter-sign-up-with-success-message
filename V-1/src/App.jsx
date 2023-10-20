import { useState } from "react";
import listIcon from "./assets/icon-list.svg";
import successIcon from "./assets/icon-success.svg";

function App() {
  const[email, setEmail] = useState("");
  const [isSubscribe, setIsSubscribe] = useState(false);

  return (
    <div className="min-h-screen md:bg-btn-color md:h-screen md:flex md:flex-col md:justify-center md:items-center">
      {!isSubscribe ? (<FormPage email={email} setEmail={setEmail} setIsSubscribe={setIsSubscribe} />)
        : (<ThankPage email={email} setEmail={setEmail} setIsSubscribe={setIsSubscribe} /> )}
    </div>
  )
}

export default App


function FormPage({email, setEmail, setIsSubscribe}){

  
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      setIsValid(true);
      setIsSubscribe(true);
    } else {
      setIsValid(false);
    }
  };

  return(
    <section className="m-0 p-0 font-sans text-base-color bg-white md:flex md:flex-row-reverse md:justify-center md:items-center h-3/4 md:w-7/12 md:p-4 md:rounded-3xl md:gap-6">
      <div className="bg-hero-pattern bg-cover bg-no-repeat h-72 w-full rounded-b-2xl md:h-full md:w-1/2 md:bg-desk-pattern md:rounded-xl"></div>
      <div className="flex flex-col items-start m-4 gap-3 bg-white md:w-1/2">
        <h1 className="text-4xl font-bold ">Stay updated</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="flex items-start gap-3">
          <img src={listIcon} alt="list icon" />
          <p>Product discovery and building what matters</p>
        </div>
        <div className="flex items-start gap-3">
          <img src={listIcon} alt="list icon" />
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className="flex items-start gap-3">
          <img src={listIcon} alt="list icon" />
          <p>And much more!</p>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <label className="font-bold text-sm">Email address</label>
            {!isValid && <span className="text-red-500 text-sm font-bold">Valid email required</span>}
          </div>
          <input className={`mt-2 mb-5 p-3 w-full placeholder:text-sm border-solid border-2 ${isValid ? 'border-gray-300 focus:outline-gray-400 bg-white text-gray-800':'focus:outline-red-500 bg-red-300 text-red-600'}  rounded-lg`} type="text" placeholder="email@company.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <button className="p-3 bg-btn-color border-none w-full text-white font-bold rounded-lg hover:bg-gradient-to-r from-custom-pink to-custom-yellow focus:bg-gradient-to-r from-custom-pink to-custom-yellow hover:shadow-lg hover:shadow-tomato">Subscribe to monthly newsletter</button>
        </form>
      </div>
      
    </section>
  )
}


function ThankPage({email, setEmail, setIsSubscribe}){

  function handleDismiss(){
    setEmail("");
    setIsSubscribe(prev => !prev)
  }

  return(
    <section className="flex flex-col items-start gap-60 mx-4 text-base-color bg-white md:w-3/12 md:gap-8 md:p-5 md:rounded-xl">
      <div className="flex flex-col items-start gap-10 mt-12 md:mt-0 md:gap-4">
        <img src={successIcon} alt="success icon" />
        <h1 className="text-4xl font-bold">Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
      </div>
      <button className="p-3 bg-btn-color border-none w-full text-white font-bold rounded-lg hover:bg-gradient-to-r from-custom-pink to-custom-yellow focus:bg-gradient-to-r from-custom-pink to-custom-yellow hover:shadow-lg hover:shadow-tomato" onClick={handleDismiss}>Dismiss message</button>
    </section>
  )
}