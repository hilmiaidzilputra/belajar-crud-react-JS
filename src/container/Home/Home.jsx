//Libraries
import React, {Fragment} from "react";
import {BrowserRouter, Route,} from "react-router-dom";

//Pages
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import Crud from "../pages/Crud";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/product/product";
import YoutubeComponentPages from "../pages/YoutubeComponentPages/YoutubeComponent";
import Tampilan from "../pages/KasirApp/Tampilan";

//Styles
import "./Home.css";
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import { Sukses } from "../pages/KasirApp/Components";

class Home extends React.Component{
    state = {
        showComponent: true,
        linkYangdipilih : ""
    }

    componentDidMount () {
        // this.setState ({
        //     showComponent: true
        // })
    }


    render(){
        console.log(this.state.linkYangdipilih)
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
                <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">REACT JS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="active" href="/">Blog Post</Nav.Link>
                        <Nav.Link className="active" href="/kasirapp">Kasir APP</Nav.Link>
                        <Nav.Link className="active" href="/crud">CRUD</Nav.Link>
                        <Nav.Link className="active" href="/product">Product</Nav.Link>
                        <Nav.Link className="active" href="/lifecycle">Life Cycle</Nav.Link>
                        <Nav.Link className="active" href="/youtubecomp">Youtube Component</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            <Route path="/" exact component={BlogPost}/>
            <Route path="/detail-post/:id" component={DetailPost} />
            <Route path="/product" component={Product} />
            <Route path="/lifecycle" component={LifeCycleComp} />
            <Route path="/youtubecomp" component={YoutubeComponentPages} />
            <Route path="/crud" component={Crud} />
            <Route path="/kasirapp" component={Tampilan} />
            <Route path="/sukses" component={Sukses} />
            </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;