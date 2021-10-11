import React from "react";
import { Col, Form, Row , Button} from "react-bootstrap";

const Formulir = ({nama, deskripsi, harga, handleChange, handleSubmit, id}) => {
    return (
        <div className="mt=3">
            <Row>
                <Col>
                <h4>{id ? "Ubah Data" : "Tambah Data"}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>Nama Makanan</Form.Label>
                        <Form.Control type="text" name="nama" value={nama} placeholder="Masukan Nama Makanan" onChange={(event) => handleChange(event)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Deskripsi">
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control as="textarea" name="deskripsi"  value={deskripsi} placeholder="Masukan Deskripsi" onChange={(event) => handleChange(event)} rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Harga">
                        <Form.Label>Harga</Form.Label>
                        <Form.Control type="number" name="harga"  value={harga} placeholder="Masukan Harga" onChange={(event) => handleChange(event)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Formulir