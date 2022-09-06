import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export const useStartButton = () => {
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const handleEnter = () => {
        onAuthStateChanged(auth, (user)=>{
            if (user) {
                navigate("/fox-library/all-books")
            } else {
                setOpen(true);
                setTimeout(() => {
                    setOpen(false);
                }, 2000)
            }
        })
    };

    return {handleEnter, isOpen}
};