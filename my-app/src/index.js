import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowAllClick = this.handleShowAllClick.bind(this);
        this.handleShowSingleClick = this.handleShowSingleClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleDeleteChange = this.handleDeleteChange.bind(this);
        this.state = {articles: [],
                      article: {},
                      id_num: undefined
                     };
    }
    handlePostClick() {
        // do a POST request to localhost:3000/articles
        /*
        {
            "Id": "13", 
            "Title": "Newly Created Post", 
            "desc": "The description for my new post", 
            "content": "my articles content" 
        }  
        */
       console.log('Post click happened');
    }
    handleDeleteChange(e) {
        this.setState({
            id_num: e.target.value
        })
    }
    
    handleDeleteClick() {
        let id = this.state.id_num
        fetch('http://localhost:3000/article/' + id,
        {
            method: 'DELETE'
        })
    }
    async handleShowAllClick() {
        fetch('http://localhost:3000/articles')
            .then(response => response.json())
            .then(data => this.setState({
                articles: data
            }));
    }
    async handleShowSingleClick() {
        fetch('http://localhost:3000/article/1')
            .then(response => response.json())
            .then(dataOne => this.setState({
                article: dataOne
            }));
    }
    // note: each article should have delete and update components
    render() {
        return (
            <div>
                <textarea> this is a text area </textarea>
                <button id="post-button" onClick={this.handlePostClick}> Post </button>
                <div>
                    <input type="text" value={this.state.id_num} onChange={this.handleDeleteChange}/>
                    <button id="delete-button" onClick={this.handleDeleteClick}> Delete </button>
                </div>
                <div>
                    <button id="show-all-button" onClick={this.handleShowAllClick}> Show All </button>
                    <ul>
                        {this.state.articles.map(d => (
                            <li>{d.Id}, {d.Title}, {d.desc}, {d.content}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button id="show-single-button" onClick={this.handleShowSingleClick}> Show Single</button>
                    <ul>
                        {this.state.article.Id}
                    </ul>
                </div>
                
            </div>
            
        );
    }
}

const mainNode = document.getElementById("root");
ReactDOM.render(<App />, mainNode);