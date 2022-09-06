import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {updateProfile} from "firebase/auth";
import {useAuth} from "./useAuth";

export const useUpload = () => {
    const currentUser = useAuth();
    const storage = getStorage();
    const upload = async (file: any) => {
        const fileRef = ref(storage, file.name);
        const snapshot = await uploadBytes(fileRef, file);
        const photoUrl = await getDownloadURL(fileRef)
        updateProfile(currentUser, {photoURL: photoUrl});
    };

    return {upload};
};