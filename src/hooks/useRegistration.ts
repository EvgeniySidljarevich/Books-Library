import {useState} from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile} from "firebase/auth";

export const useRegistration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const handleRegister = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then()
            .catch(console.error);
        onAuthStateChanged(auth, (user)=>{
            if (user) {
                updateProfile(user, {
                    displayName: userName,
                });
            }
        })
    };

    return {email, setEmail, password, setPassword, userName, setUserName, handleRegister}
};