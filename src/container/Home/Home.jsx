//Library
import React, {Fragment} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

//Pages
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/product/product";
import YoutubeComponentPages from "../pages/YoutueComponentPages/YoutubeComponent";

//Style
import "./Home.css";

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
            <BrowserRouter>
            {/* <div>
                <YoutubeComponent title="Judul1" desc="2x ditonton"/>
                <YoutubeComponent title="Judul2" desc="3x ditonton"/>
                <YoutubeComponent title="Judul3" desc="4x ditonton"/>
                <YoutubeComponent />
                <Product />
                <p>Life Cycle Component</p>
                <hr/>
                {
                    this.state.showComponent 
                    ?
                    <LifeCycleComp />
                    : null
                }
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div> */}
            <Fragment>
                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">Life Cycle</Link>
                    <Link to="/youtubecomp">Youtube Component</Link>
                </div>
            <Route path="/" exact component={BlogPost} />
            <Route path="/detail-post/:id" component={DetailPost} />
            <Route path="/product" component={Product} />
            <Route path="/lifecycle" component={LifeCycleComp} />
            <Route path="/youtubecomp" component={YoutubeComponentPages} />
            </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;