import React from "react";
import CardProduct from "../CardProduct/CardProduct";
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
             <div>
                 <div className="header">
                    <div className="troley">
                        <div className="count">{this.state.order}</div>
                    </div>
                 </div>
                 <CardProduct onCounterChange={(value)=>this.handleOnCounterChange(value)}/>
             </div>
        )
    }
}

export default Product;