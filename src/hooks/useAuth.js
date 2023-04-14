import { useSelector } from "react-redux";
import { selectIsLogin } from "redux/auth/auth-selectors";

export const useAuth =()=>{
    return useSelector(selectIsLogin);
}