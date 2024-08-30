import React, { useState } from 'react'

function ResetPassword() {
    const [email, setEmail] = useState('')
    return (
        <div className="flex justify-center items-center h-screen">

            <form className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[23vw] text-sm">
                <span className='text-lg text-gray-600 cursor-pointer -mb-1 text-center'>Enter your email for verification</span>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="outline-none border rounded-md px-3 py-2 focus:border-green-500 text-gray-600"
                    autoComplete="off"
                    placeholder="user@gmail.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />


                <button className="outline-none border-none rounded-md px-3 py-2 text-white bg-green-500 hover:bg-green-400 font-semibold cursor-pointer" type="submit"> Send Otp</button>

            </form>
        </div>
    )
}

export default ResetPassword