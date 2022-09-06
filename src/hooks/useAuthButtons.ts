import {useState} from "react";

export const useAuthButtons = () => {
    const [isOpenReg, setOpenReg] = useState(false);
    const [isOpenAuth, setOpenAuth] = useState(false);
    const handleClickReg = () => setOpenReg(!isOpenReg);
    const handleClickAuth = () => setOpenAuth(!isOpenAuth);

    return {isOpenReg, isOpenAuth, handleClickReg, handleClickAuth}
};