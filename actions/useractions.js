"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    // fetch the secret of the user who is getting the payment 
   

    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })


    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database
    await Payment.create({ oid: x.id, amount: amount/100 , to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x

}


export const fetchuser = async (username) => {
    await connectDb()
    const u = await User.findOne({ username: username }).lean()
    if (!u) return null
    // normalize to a plain serializable object
    return {
        id: String(u._id),
        email: u.email,
        name: u.name || null,
        username: u.username,
        profilepic: u.profilepic || null,
        coverpic: u.coverpic || null,
        razorpayid: u.razorpayid || null,
        createdAt: u.createdAt ? new Date(u.createdAt).toISOString() : null,
        updatedAt: u.updatedAt ? new Date(u.updatedAt).toISOString() : null,
    }
}

export const fetchpayments = async (username) => {
    await connectDb()
    // find all payments sorted by decreasing order of amount and flatten object ids
    const p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    return p.map(item => ({
        id: String(item._id),
        name: item.name,
        to_user: item.to_user,
        oid: item.oid,
        message: item.message || null,
        amount: item.amount,
        done: !!item.done,
        createdAt: item.createdAt ? new Date(item.createdAt).toISOString() : null,
        updatedAt: item.updatedAt ? new Date(item.updatedAt).toISOString() : null,
    }))
}

// export const updateProfile = async (data, oldusername) => {
//     await connectDb()
//     let ndata = Object.fromEntries(data)

//     // If the username is being updated, check if username is available
//     if (oldusername !== ndata.username) {
//         let u = await User.findOne({ username: ndata.username })
//         if (u) {
//             return { error: "Username already exists" }
//         }   
//         await User.updateOne({email: ndata.email}, ndata)
//         // Now update all the usernames in the Payments table 
//         await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
        
//     }
//     else{

        
//         await User.updateOne({email: ndata.email}, ndata)
//     }


//}

