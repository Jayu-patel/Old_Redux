import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
const User=(props)=>{
    // const {name} = props.data
    return(
        <>
            <h1>User components</h1>
            <div className="cart">
                <div className="img-wraper">
                    <img src={image1} alt="Error" />
                    <div className="btns">
                        <button className='btn'>Add-to-cart</button>
                        <button className='btn-r'>Remove</button>
                    </div>
                </div>

                <div className="img-wraper">
                    <img src={image2} alt="Error" />
                    <div className="btns">
                        <button className='btn'>Add-to-cart</button>
                        <button className='btn-r'>Remove</button>
                    </div>
                </div>

                <div className="img-wraper">
                    <img src={image3} alt="Error" />
                    <div className="btns">
                        <button className='btn'>Add-to-cart</button>
                        <button className='btn-r'>Remove</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default User