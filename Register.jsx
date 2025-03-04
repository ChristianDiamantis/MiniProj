import { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        id: '',
        email: '',
        city: '',
        zip: '',
        username: '',
        password: '',
    });

    const validateForm = () => {
        const { firstName, lastName, id, email, city, zip, username, password } = formData;

        if (firstName.trim() === '' || firstName.split('').some(char => !isNaN(char))) {
            alert("First Name must not contain numbers.");
            return false;
        }
        if (lastName.trim() === '' || lastName.split('').some(char => !isNaN(char))) {
            alert("Last Name must not contain numbers.");
            return false;
        }
        if (!id || isNaN(id)) {
            alert("ID must be numeric only.");
            return false;
        }
        if (!email.includes('@') || !email.includes('.')) {
            alert("Email must contain '@' and '.' symbols.");
            return false;
        }
        if (!city) {
            alert("Please select a city.");
            return false;
        }
        if (!zip || isNaN(zip)) {
            alert("Zip Code must be numeric only.");
            return false;
        }
        if (!username || username.startsWith(' ') || username.split('').some(char => char === ' ' || (!isNaN(char) && username.indexOf(char) === 0))) {
            alert("Username must not contain spaces, start with a number or special character.");
            return false;
        }
        if (
            password.length < 10 || 
            !password.split('').some(char => char >= 'A' && char <= 'Z') || 
            !password.split('').some(char => char >= 'a' && char <= 'z') || 
            !password.split('').some(char => !isNaN(char))
        ) {
            alert("Password must be at least 10 characters long, contain an uppercase letter, a lowercase letter, and a digit.");
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert(`Registration successful for ${formData.username}`);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="First Name" onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full p-2 border rounded" />
                <input type="text" placeholder="Last Name" onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full p-2 border rounded" />
                <input type="text" placeholder="ID" onChange={(e) => setFormData({...formData, id: e.target.value})} className="w-full p-2 border rounded" />
                <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-2 border rounded" />
                <select onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full p-2 border rounded">
                    <option value="">Select City</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                </select>
                <input type="text" placeholder="Zip Code" onChange={(e) => setFormData({...formData, zip: e.target.value})} className="w-full p-2 border rounded" />
                <input type="text" placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} className="w-full p-2 border rounded" />
                <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full p-2 border rounded" />
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Register</button>
            </form>
        </div>
    );
}

export default Register;
