import React from "react";
import { Col , Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import "./Menus.css"

const Menus = ({menu, masukKeranjang}) => {
    return (
        <Col md={4} xs={5} className="mb-4">
            <div className="kartu shadow" onClick={() => masukKeranjang(menu)}>
               <Card.Img variant="top" src={"assets/"+menu.category.nama.toLowerCase()+"/"+menu.gambar} />
            <Card.Body>
                <Card.Title>{menu.nama} <p><b>({menu.kode})</b></p></Card.Title>
                <Card.Text>
                    Rp {numberWithCommas(menu.harga)}
                </Card.Text>
            </Card.Body> 
            </div>
            
        </Col>
    )
}

export default Menus