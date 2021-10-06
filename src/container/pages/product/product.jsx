import React, {Fragment} from "react";
import CardProduct from "./CardProduct/CardProduct";
import './product.css'

class Product extends React.Component{
    state= {
        order: 0
    }

    handleOnCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    
    render(){
        return(
            <Fragment>
            <div className="container mt-4">
                <p>Halaman Product</p>
                <hr />
                    <div className="header">
                        <div className="logo">
                            <img src="https://i.pinimg.com/originals/87/86/9a/87869a840d94cc47c8356895585209a9.jpg" alt="logo" />
                        </div>
                        <div className="troley">
                            <div className="count">{this.state.order}</div>
                        </div>
                    </div>
                    <CardProduct onCounterChange={(value)=>this.handleOnCounterChange(value)}/>
             </div>
            </Fragment>
        )
    }
}

export default Product;