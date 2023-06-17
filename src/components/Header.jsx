import { useSelector} from "react-redux"
function Header()
{
    // console.warn(props.data)
    const myState = useSelector(state => state.cardItems)
    // const dispatch = useDispatch()
    console.log(myState)
    return(
        <div>
             <div className="add-to-cart">
             {/* props?.data?.length */}
    <span className="cart-count">{myState.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header