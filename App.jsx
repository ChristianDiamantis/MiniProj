import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div>
                <Link to="/" className="mr-4 hover:underline">Home</Link>
                <Link to="/login" className="mr-4 hover:underline">Login</Link>
                <Link to="/register" className="hover:underline">Register</Link>
            </div>
            <div>
                <p className="text-sm">Campaign Crushers - Empowering Your Business</p>
            </div>
        </nav>
    );
}

function App() {
    return (
        <>
            <Navbar />
            <div className="p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
