import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from '../context/authContext';
import Postbook from '../pages/Postbook';

const Navbar = () => {
    const { logOutUser } = useContext(AuthContext);
    const [isAddPostOpen, setIsAddPostOpen] = useState(false);

    const getToken = () => {
        return localStorage.getItem("authToken");
    };

    return (
        <nav className='navbar1'>
            {!getToken() && (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </>
            )}

            {getToken() && 
                <>
                    <Link to="/feed">feed</Link>
                    <Link to="/profile">Profile</Link>
                    <button onClick={ logOutUser }>Logout</button>
                    <button onClick={() => setIsAddPostOpen(true)}>Add Book</button>
                    {isAddPostOpen && <Postbook onClose={() => setIsAddPostOpen(false)} />}
                    <p>Scribes 2024 @</p>
                </>
               
            }
        </nav>
    );
};

export default Navbar;
