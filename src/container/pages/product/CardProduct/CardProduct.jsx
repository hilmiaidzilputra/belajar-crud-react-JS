import React from "react";
import '../product.css';

class CardProduct extends React.Component{
    state= {
        order: 0
    }

    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })

    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }
    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://cf.shopee.co.id/file/9bd353cbbd4047666dff173138118a79" alt="card" />
                </div>
                <p className="product-title">Baju Kaos Distro Astronout</p>
                <p className="product-price">RP 135.000</p>
                <div className="counter">
                   <button className="minus" onClick={this.handleMinus}>-</button>
                   <input type="text" value={this.state.order} />
                   <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
       )
    }
}

export default CardProduct;