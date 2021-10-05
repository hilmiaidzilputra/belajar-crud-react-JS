import React, {Fragment} from "react";
import { Component } from "react";
import YoutubeComponent from "../../../component/YoutubeComponent/YoutubeComponent";

class YoutubeComponentPages extends Component {
    render(){
        return (
            <Fragment>
                <p>Halaman Youtube Component</p>
                <YoutubeComponent title="Judul1" desc="2x ditonton"/>
                <YoutubeComponent title="Judul2" desc="3x ditonton"/>
                <YoutubeComponent title="Judul3" desc="4x ditonton"/>
                <YoutubeComponent />
            </Fragment>
        )
    }
}

export default YoutubeComponentPages