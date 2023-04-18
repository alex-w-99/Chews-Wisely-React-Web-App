import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {profileThunk} from "../services/users-thunks";

const CurrentUser = (content) => {
    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(profileThunk());
        }, []
    );

    return(
        content
    );
};

export default CurrentUser;
