"use client"
import React from 'react'
import Script from 'next/script'
import { useState ,useEffect} from 'react'
import { fetchuser, fetchpayments , initiate } from '@/actions/useractions'
const PaymentPage = ({username}) => {

    const [paymentform, setPaymentform] = useState({name: "", message: "", amount: ""})
    const [currentUser, setcurrentUser] = useState({})
     const [payments , setPayments] = useState([])

  useEffect(() =>{
    getData()
  },[])

 const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

      const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments) 
         console.log(u,dbpayments);
         
    }

  const pay = async(amount )=>{
     //get the orderid
  let a = await initiate(amount, username,paymentform);
    let orderId = a.id
    // ensure Razorpay script is loaded
    if (typeof window === 'undefined' || !window.Razorpay) {
      await loadRazorpayScript();
    }

    var options = {
    "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
    "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Get Me A Chai", // your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": orderId, // This is a sample Order ID. Pass the id obtained in the response of Step 1
    "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
    "prefill": { // We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", // your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" // Provide the customer's phone number for better conversion rates
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
  }
  var rzp1 = new window.Razorpay(options);
   rzp1.open();
};

// helper to load Razorpay script dynamically
function loadRazorpayScript() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('Window is undefined'));
    if (window.Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error('Failed to load Razorpay script'));
    document.body.appendChild(script);
  });
}


  return (
    <div>
      <>
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          className="object-cover w-full h-[300px]"
          src="patreon_banner.gif"
          alt="banner"
        />

        {/* Profile Image */}
        <div className="absolute -bottom-20 right-[46%] border-2 border-white rounded-full">
          <img
            className="rounded-full"
            width={100}
            height={100}
            src="pexels-pixabay-45201.jpg"
            alt="profile"
          />
        </div>
      </div>
      {/* Info Section */}
      <div className="info flex justify-center items-center my-20 flex-col">
        <div className="font-bold text-lg"> @{username}</div>
        <div className="text-slate-400">
          Creating Animated art for VTT&apos;s
        </div>
        <div className="text-slate-400">
          20,254 members · 102 posts · $18,770/release
        </div>
      </div>

      {/* Payment Section */}
      <div className="payment flex w-full gap-4 px-4 pb-10">
        {/* Supporters */}
        <div className="supporters w-1/2 bg-violet-950 p-10 rounded-md text-white">
          <h2 className="text-2xl font-bold my-5"> Supporters</h2>
          <ul>
           { payments.map((p,i)=>{
            return <li key={i} className="my-2 flex gap-2">
              <img width={30} src="user.svg" alt="" />
             {p.name} donated ₹{p.amount} with a message: {"`" + p.message + "`"}
            </li>
})}
           
          </ul>
        </div>

        <div className="makePayment w-1/2 bg-violet-950 p-10 rounded-md text-white">
          <h2 className="text-2xl font-bold my-5"> Make Payment</h2>
          <div className="flex gap-2 flex-col">
            <div className="mb-2">
              <input
               onChange={handleChange} 
               value={paymentform.name}
                name="name"
                type="text"
                placeholder="Enter Name"
                className="bg-violet-950 border w-full mb-2 p-2 rounded-md text-black"
              />
              <input
               onChange={handleChange}
                value={paymentform.message}
                name="message"
                type="text"
                placeholder="Enter Message"
                className="bg-violet-950 border w-full mb-2 p-2 rounded-md text-black"
              />
              <input
               onChange={handleChange}
                value={paymentform.amount}
                name="amount"
                type="number"
                placeholder="Enter Amount"
                className="bg-violet-950 border w-full p-2 mb-2 rounded-md text-black"
              />

              <button
              onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                id="rzp-button1"
                type="button"
                className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 font-bold rounded-lg text-sm px-5 py-2.5 mb-2"
              >
                Pay
              </button>
            </div>
            {/* Quick Amounts */}
            <div className="flex gap-2 my-5">
              <button className="border p-2 rounded-md" onClick={()=>pay(1000)}>₹10</button>
              <button className="border p-2 rounded-md" onClick={()=>pay(2000)}>₹20</button>
              <button className="border p-2 rounded-md" onClick={()=>pay(3000)}>₹50</button>
            </div>
          </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default PaymentPage
