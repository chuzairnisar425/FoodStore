import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function VerifyOtp() {
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[20vw] text-sm">
                <input
                    type="tell"
                    name="otp"
                    id="otp"
                    className="outline-none border rounded-md px-3 py-2 focus:border-green-500 text-gray-600"
                    autoComplete="off"
                    placeholder="1234"
                    required
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp}
                />


                <input type="password"
                    name="password"
                    id="password"
                    className="outline-none border rounded-md px-3 py-2 focus:border-green-500 text-gray-600"
                    placeholder="******"
                    requuired
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />

                <button className="outline-none border-none rounded-md px-3 py-2 text-white bg-green-500 hover:bg-green-400 font-semibold cursor-pointer" type="submit"> Reset Password</button>

            </form>
        </div>
    )
}

export default VerifyOtp