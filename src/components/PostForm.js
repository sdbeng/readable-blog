import React, {Component} from 'react'
import moment from 'moment'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.post ? props.post.title : '',
      body: props.post ? props.post.body : '',
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      category: props.category ? props.post.category : '',
      error: '',
    }
  }
  //onTitleChange
  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({title}))
  }
  //onBodyChange
  onBodyChange = (e) => {
    e.persist()
    this.setState(() => ({body: e.target.value}))
  }
  //onAuthorChange
  onAuthorChange = (e) => {
    e.persist()
    this.setState(() => ({author: e.target.value}))
  }
  //onSubmit
  onSubmit = (e) => {
    e.preventDefault()
    if(!this.state.title){
      //show error
      this.setState(() => ({
        error:'Please provide a title for your post.'
      }))
    }else {
      //update error state
      this.setState(() => ({
        error:''
      }))
      //call onSubmit from AddPost Page
      this.props.onSubmit({
        title:this.state.title,
        body:this.state.body,
        createdAt:this.state.createdAt.valueOf(),
        author:this.state.author,
        voteScore:this.state.voteScore,
        category:this.state.category,
      })
      console.log('post submitted!');
    }
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="enter title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <textarea
            placeholder='add content to your post'
            value={this.state.body}
            onChange={this.onBodyChange}
            >
          </textarea>
          <input
            type="text"
            placeholder='enter author'
            value={this.state.author}
            onChange={this.onAuthorChange}
          />
          <button>Add Post</button>
        </form>
      </div>
    )
  }
}

export default PostForm
