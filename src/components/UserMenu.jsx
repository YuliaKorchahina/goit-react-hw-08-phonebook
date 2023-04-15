import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/auth-selectors";

const UserMenu = () => {
const {name} = useSelector(selectUser);
    return (
        <div>
        <p>Welcome, {name} 🍕</p>
        <button>Logout</button>
      </div>

    )
}

export default UserMenu;