import React from "react";
import Formulir from "./Formulir";
import NavbarComp from "./NavbarComp";
import Table from "./Table";


class Crud extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            makanans : [],
            nama: "",
            deskripsi : "",
            harga : "",
            id: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.id === "") {
            this.setState({
                makanans : [
                    ...this.state.makanans,
                    {
                        id: this.state.makanans.length+1,
                        nama: this.state.nama,
                        deskripsi : this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            })
        }else{
            const makananYangSelainDipilih = this.state.makanans.filter((makanan)=> makanan.id !== this.state.id).map((filterMakanan)=>{
            return filterMakanan
        })
        this.setState({
            makanans : [
                ...makananYangSelainDipilih,
                {
                    id: this.state.makanans.length+1,
                    nama: this.state.nama,
                    deskripsi : this.state.deskripsi,
                    harga: this.state.harga
                }
            ]
        })
        }

        this.setState({
            nama: "",
            deskripsi : "",
            harga : "",
            id: ""
        })
    }

    editData = (id) =>{
        const makananYangDipilih = this.state.makanans.filter((makanan)=> makanan.id === id).map((filterMakanan)=>{
            return filterMakanan
        })

        this.setState({
            nama: makananYangDipilih[0].nama,
            deskripsi : makananYangDipilih[0].deskripsi,
            harga : makananYangDipilih[0].harga,
            id: makananYangDipilih[0].id
        })
    }

    hapusData = (id) => {
        const makananBaru = this.state.makanans.filter((makanan)=> makanan.id !== id).map((filterMakanan)=>{
            return filterMakanan
        })
        this.setState({
            makanans : makananBaru
        })
    }

    render(){
        return(
            <div>
                {/* <NavbarComp /> */}
                <div className="container mt-4">
                <p>Halaman CRUD</p>
                <hr />
                    <Table makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData}/>
                    <hr />
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default Crud