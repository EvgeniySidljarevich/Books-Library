import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useNameFromFB = () => {
    const auth = getAuth();
    const [userName, setUserName] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUserName(user?.displayName!);
        })
    }, [auth]);
    return { userName };
};