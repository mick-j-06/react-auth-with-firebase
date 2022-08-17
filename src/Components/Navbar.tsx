import React from "react";
import {Link} from "react-router-dom";
import {typeModalState} from "../types";

const Navbar: React.FC<{ changeModalState: (param: typeModalState) => any }> = (props) => {
    const {changeModalState} = props;
    const changeModal = (modal: string): void => {
        switch (modal) {
            case 'singIn' : {
                changeModalState({
                    signUpModalState: false,
                    singInModalState: true
                })
                break;
            }
            case 'singUp' : {
                changeModalState({
                    signUpModalState: true,
                    singInModalState: false
                })
                break;
            }
            default : {
                changeModalState({
                    signUpModalState: false,
                    singInModalState: false
                })
                break;
            }
        }
    }

    return (
        <nav className={"navbar position-fixed top-0 vw-100 navbar-dark bg-dark px-4"}>
            <Link to={"/"} className={"navbar-brand"}>Navbar</Link>
            <div>
                <button className={"btn btn-secondary"} onClick={() => {
                    changeModal("singUp")
                }}>Sign Up
                </button>
                <button className={"btn btn-secondary ms-3"} onClick={() => {
                    changeModal("singIn")
                }}>Sign In
                </button>
                <button className={"btn btn-secondary ms-3"} onClick={() => {
                    changeModal("logOut")
                }}>Log Out
                </button>
            </div>
        </nav>
    )

}

export default Navbar;
