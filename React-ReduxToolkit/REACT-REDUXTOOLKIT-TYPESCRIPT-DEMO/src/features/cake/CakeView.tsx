import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {

    const numOfCakes = useAppSelector(
        (state) => state.cake.numOfCakes
    );

    const dispatch = useAppDispatch();
    
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restocked(3))}>Restock Cakes</button>
        </div>
    )
};

export default CakeView;