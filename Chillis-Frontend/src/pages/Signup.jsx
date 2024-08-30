import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    return (

        <div className="flex justify-center items-center h-screen">
            <form className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[20vw] text-sm">
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="outline-none border rounded-md px-3 py-2 focus:border-green-500 text-gray-600"
                    autoComplete="off"
                    placeholder="username"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

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
                <input type="password"
                    name="password"
                    id="password"
                    className="outline-none border rounded-md px-3 py-2 focus:border-green-500 text-gray-600"
                    placeholder="******"
                    requuired
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />

                <button className="outline-none border-none rounded-md px-3 py-2 text-white bg-green-500 hover:bg-green-400 font-semibold cursor-pointer" type="submit"> Signup</button>
                <p className="text-xs text-gray-600 flex gap-2 mt-1"><span>Or</span>
                    <Link to='/login' className="hover:text-green-600 no-underline">Already have an account?</Link></p>
            </form>
        </div>
    )
}

export default Signup