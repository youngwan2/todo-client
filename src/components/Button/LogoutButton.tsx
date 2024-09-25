// interface PropsType { }

import { icons } from "../../constants/icon";
import { AuthContext } from "../../contexts/AuthContext";
import Button from "../Common/Button";
import { useContext } from "react"


export default function LogoutButton() {

    const { logout } = useContext(AuthContext)
    const { LogoutIcon } = icons

    return (
        <Button onClick={logout}>
            <LogoutIcon /> 종료
        </Button>
    )
}