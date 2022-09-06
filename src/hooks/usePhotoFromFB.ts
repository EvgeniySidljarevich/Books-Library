import { getAuth } from "firebase/auth";
import {useEffect, useState} from "react";

export const usePhotoFromFB = () => {
    const auth = getAuth();
    const [userPhoto, setUserPhoto] = useState(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    );

    useEffect(() => {
        if (auth && auth.currentUser?.photoURL) {
            setUserPhoto(auth.currentUser?.photoURL);
        }
    },[userPhoto])
    return { userPhoto };
};


