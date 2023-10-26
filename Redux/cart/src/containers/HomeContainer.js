import {useDispatch, useSelector} from "react-redux";

import {addToCart} from "../services/actions/action";

const Form = () => {
    // mapStateToProps
    const selector = useSelector((state) => {

    });

    // mapDispatchToProps
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(data));
    };
}

export default Form;