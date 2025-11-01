import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Login: React.FC = () => {
    const { dispatch } = useAppContext();
    const [email, setEmail] = useState('alex.rover@example.com');
    const [password, setPassword] = useState('password');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd validate credentials. For this demo, we log in a mock user.
        dispatch({
            type: 'LOGIN',
            payload: {
                name: 'Alex Rover',
                email: 'alex.rover@example.com',
                avatar: `https://i.pravatar.cc/150?u=${email}`
            }
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cyan-50">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg m-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-cyan-600">Travel Diary</h1>
                    <p className="text-gray-500 mt-2">Log in to your journey</p>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            placeholder="******************"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors duration-300"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
