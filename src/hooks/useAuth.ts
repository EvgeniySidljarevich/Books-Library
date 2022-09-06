import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuth = () => {
    const auth = getAuth();
    const [currentUser, setUser] = useState<any>();
    useEffect(() => {
        const onsub = onAuthStateChanged(auth, (user) => setUser(user));
        return onsub;
    }, []);

    return currentUser;
};