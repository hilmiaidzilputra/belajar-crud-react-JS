import React from "react"
import Post from "../../../component/Post/Post"
import './BlogPost.css'
import axios from "axios"

class BlogPost extends React.Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1,
        },
        isUpdate: false
    }

    getPostAPI = () =>{
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res)=>{
            console.log(res)
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1,
                }
            })
        },(err) => {
            console.log('error: ', err)
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost).then((res)=>{
            console.log(res)
            this.getPostAPI();
            this.setState({
                isUpdate:false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1,
                }
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            this.getPostAPI()
        })
    }
    
    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        // console.log('Form Change', even.target)
        let formBlogPostNew = {...this.state.formBlogPost}
        let timeStamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () =>{
        if (this.state.isUpdate) {
            this.putDataToAPI();
        }else{
            this.postDataToAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    componentDidMount(){
        // axios.get('http://localhost:3004/posts')
        // .then((result) => {
        //     this.setState({
        //         post: result.data
        //     })
        // })
        this.getPostAPI()
    }
    render(){
        return(
            <div>
                <p>Halaman Blog Post</p>
                <hr />
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="Add Title" onChange={this.handleFormChange} />
                    <label htmlFor="body-content">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body-content" cols="30" rows="10" placeholder="Add Blog Content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} title={post.title} desc={post.body} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                    })
                }
            </div>
            )
        }
}

export default BlogPost