import React, {Fragment} from "react";
import { Component } from "react";
import YoutubeComponent from "../../../component/YoutubeComponent/YoutubeComponent";

class YoutubeComponentPages extends Component {
    render(){
        return (
            <Fragment>
                <div className="container mt-4">
                <p>Halaman Youtube Component</p>
                <hr />
                <YoutubeComponent title="Judul1" desc="2x ditonton"/>
                <YoutubeComponent title="Judul2" desc="3x ditonton"/>
                <YoutubeComponent title="Judul3" desc="4x ditonton"/>
                <YoutubeComponent />
                </div>
            </Fragment>
        )
    }
}

export default YoutubeComponentPages