import { config } from "../../../../../../../locales/en";
import { Modal } from "./styles";
import { getAuth, signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { useNameFromFB } from "../../../../../../../hooks/useNameFromFB";

const { links, buttons } = config;
type Props = {
    state: boolean;
};

export const Popup = ({ state }: Props) => {
    const { userName } = useNameFromFB();
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth);
    };

    return (
        <Modal display={state ? "flex" : "none"}>
            <h5>{userName}</h5>
            <NavLink className="setting" to="/fox-library/setting">
                {links.homePage.header.setting}
            </NavLink>
            <NavLink className="orders" to="/fox-library/your-order">
                {links.homePage.header.myOrder}
            </NavLink>
            <button onClick={handleLogout}>
                {buttons.allBooksPage.logOut}
            </button>
        </Modal>
    );
};
