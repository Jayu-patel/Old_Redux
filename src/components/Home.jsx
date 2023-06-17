import React from 'react'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import {useDispatch} from 'react-redux'
import {addToCart, removeFromCart} from '../Services/Actions/action'

function Home() {
    const dispatch = useDispatch()
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    {/* <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" /> */}
                    <img src={image1} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <div><button className='btnOne'
                    onClick={
                        ()=>{dispatch(addToCart({price:1000,name:'i phone 11'}))}
                        // props.addToCartHandler({price:1000,name:'i phone 11'})
                        }>
                        Add</button></div>
                    
                        <div><button className='btnTwo'
                    onClick={
                        ()=>{dispatch(removeFromCart())}
                        }>
                        Remove</button></div>
                </div>
            </div>


            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    {/* <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" /> */}
                    <img src={image2} />
                </div>
                <div className="text-wrapper item">
                    <span>
                            Galaxy S23 Ultra
                    </span>
                    <span>
                        Price: $900.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <div><button className='btnOne'
                    onClick={
                        ()=>{dispatch(addToCart({price:900,name:'Galaxy S23 Ultra'}))}
                        // props.addToCartHandler({price:1000,name:'i phone 11'})
                        }>
                        Add</button></div>
                    
                        <div><button className='btnTwo'
                    onClick={
                        ()=>{dispatch(removeFromCart())}
                        }>
                        Remove</button></div>
                </div>
            </div>

            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    {/* <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" /> */}
                    <img src={image3} />
                </div>
                <div className="text-wrapper item">
                    <span>
                            Galaxy J2
                    </span>
                    <span>
                        Price: $150.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <div><button className='btnOne'
                    onClick={
                        ()=>{dispatch(addToCart({price:150,name:'Galaxy J2'}))}
                        // props.addToCartHandler({price:1000,name:'i phone 11'})
                        }>
                        Add</button></div>
                    
                        <div><button className='btnTwo'
                    onClick={
                        ()=>{dispatch(removeFromCart())}
                        }>
                        Remove</button></div>
                </div>
            </div>
        </div>
    )
}
export default Home