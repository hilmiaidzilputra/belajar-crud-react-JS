import React, { Component } from "react";
import { Badge, Col, ListGroup ,Row} from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

class Hasil extends Component {
    render() {
        const {keranjangs} = this.props;
        return (
            <Col md={3} mt="2">
                <h4><strong>Hasil</strong></h4>
                <hr />
                {keranjangs.lenght !== 0 && (
                <ListGroup variant="flush">
                    {keranjangs.map((menuKeranjang) => (
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <strong>{menuKeranjang.jumlah}</strong>
                        
                                </Col>

                                <Col>
                                    <h5>{menuKeranjang.product.nama}</h5>
                                    <p>{numberWithCommas(menuKeranjang.product.harga)}</p>
                                </Col>

                                <Col>
                                    <strong className="float-right">{numberWithCommas(menuKeranjang.total_harga)}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        ))}
                </ListGroup>
                )}
            </Col>
        )
    }
}

export default Hasil