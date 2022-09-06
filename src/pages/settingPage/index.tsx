import { PageWrapper } from "../globalComponents/pageWrapper";
import { Main, GreyBtn, RedBtn } from "./styles";
import { config } from "../../locales/en";
import { usePhotoFromFB } from "../../hooks/usePhotoFromFB";
import {ChangeEvent, useState} from "react";
import {getAuth, updateProfile} from "firebase/auth";
import {useUpload} from "../../hooks/useUpLoad";

const { titles, signatures, buttons } = config;

export const SettingPage = () => {
    const auth = getAuth();
    const {userPhoto} = usePhotoFromFB();
    const {upload} = useUpload();
    const [foto, setFoto] = useState(null);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const handleChange = (e: any) => {
        setFoto(e.target.files[0])
    };
    const handleSave = () => {
        if (userName) {
            updateProfile(auth.currentUser!, {
                displayName: userName,
            });
            setUserName("")
        }
        if (foto) {
            upload(foto)
        }
    };

console.log(auth.currentUser)
    return (
        <PageWrapper inputDisabled={true}>
            <Main>
                <h3>{titles.settingPage}</h3>
                <img src={userPhoto} alt={signatures.allBooksPage.userIcon} />
                <GreyBtn>
                    <input type="file" onChange={handleChange}/>
                    {buttons.settingPage.changePhoto}
                </GreyBtn>
                <div className="form-container">
                    <form>
                        <label className="form-label" htmlFor="username">
                            {signatures.startPage.registrationForm.username}
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={userName}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setUserName(e.target.value)
                            }
                        />
                    </form>
                    <form>
                        <label className="form-label" htmlFor="email">
                            {signatures.startPage.registrationForm.email}
                        </label>
                        <input
                            type="email"
                            id="emailAuth"
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
                        />
                    </form>
                    <form>
                        <label className="form-label" htmlFor="password">
                            {signatures.startPage.registrationForm.password}
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                        />
                    </form>
                    <form>
                        <label className="form-label" htmlFor="new-password">
                            {signatures.startPage.registrationForm.newPassword}
                        </label>
                        <input
                            type="password"
                            id="new-password"
                            value={newPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setNewPassword(e.target.value)
                            }
                        />
                    </form>
                </div>
                <RedBtn onClick={handleSave}>{buttons.settingPage.save}</RedBtn>
            </Main>
        </PageWrapper>
    );
};
