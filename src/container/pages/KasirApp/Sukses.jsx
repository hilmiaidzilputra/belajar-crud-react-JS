import React, { Component } from "react";
import {Button, Image} from "react-bootstrap"
import {Link} from "react-router-dom"

class Sukses extends React.Component {
    render(){
        return(
            <div className="mt-4 text-center">
                <Image src="assets/sukses.png" width="400px" />
                <h2>Sukses dipesan</h2>
                <p>Terimaksih sudah memesan</p>
                <Button variant="primary" as={Link} to="/kasirapp">Kembali</Button>
            </div>
        )
    }
}

export default Sukses