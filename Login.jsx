import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Both fields are required!");
            return;
        }
        if (username === "admin" && password === "password123") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            {isLoggedIn ? (
                <p className="text-green-500 text-lg font-semibold">You are logged in!</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
                </form>
            )}
        </div>
    );
}

export default Login;
