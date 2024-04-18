import React from 'react'
import AdressCard from '../adresscard/AdressCard'
import CartItem from './CartItem'
import { Button } from '@mui/material'

function OrderSummary() {
  return (
    <div>
    <div className='p-5 shadow-lg rounded-s-m border'>
      <AdressCard />
    </div>
    <div className="">
       <div className="lg:grid grid-cols-3 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
        <div className=" space-y-3">
        {[1, 1, 1, 1].map((item) => <CartItem key={item} item={item} />)}
             
         
        </div>
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
          <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />

          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black ">
              <span>Price </span>
              <span>₹433</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">-₹53</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹221</span>
            </div>
          </div>

          <Button
            variant="contained"
            type="submit"
            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
          >
            Check Out
          </Button>
        </div>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default OrderSummary