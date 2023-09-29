import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 

const PrivetRotes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    // console.log(user)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>

    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRotes;

PrivetRotes.propTypes = {
    children: PropTypes.node
}