import React from "react";
import BlogPost from "../BlogPost/BlogPost";
// import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import Product from "../product/product";

class Home extends React.Component{
    state = {
        showComponent: true
    }

    componentDidMount () {
        // this.setState ({
        //     showComponent: true
        // })
    }
    render(){
        return(
            <div>
                {/* <YoutubeComponent title="Judul1" desc="2x ditonton"/>
                <YoutubeComponent title="Judul2" desc="3x ditonton"/>
                <YoutubeComponent title="Judul3" desc="4x ditonton"/>
                <YoutubeComponent /> */}
                {/* <Product /> */}
                {/* <p>Life Cycle Component</p>
                <hr/>
                {
                    this.state.showComponent 
                    ?
                    <LifeCycleComp />
                    : null
                } */}
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div>
        )
    }
}

export default Home;