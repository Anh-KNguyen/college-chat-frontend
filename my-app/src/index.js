import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowAllClick = this.handleShowAllClick.bind(this);
        this.state = {articles: []};
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
    handleDeleteClick() {
        console.log('Delete click happened');
    }
    async handleShowAllClick() {
        fetch('http://localhost:3000/articles')
            .then(response => response.json())
            .then(data => this.setState({
                articles: data
            }));
    }
    handleShowSingleClick() {
        console.log('Show Single click happened')
    }
    
    render() {
        return (
            <div>
                <textarea> this is a text area </textarea>
                <button id="post-button" onClick={this.handlePostClick}> Post </button>
                <button id="delete-button" onClick={this.handleDeleteClick}> Delete </button>
                <div>
                    <button id="show-all-button" onClick={this.handleShowAllClick}> Show All </button>
                    <ul>
                        {this.state.articles.map(d => (
                            <li>{d.Id}, {d.Title}, {d.desc}, {d.content}</li>
                        ))}
                    </ul>
                </div>
                <button id="show-single-button" onClick={this.handleShowSingleClick}> Show Single</button>
            </div>
            
        );
    }
}

const mainNode = document.getElementById("root");
ReactDOM.render(<App />, mainNode);