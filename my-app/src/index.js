import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component {
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
    }
    handleDeleteClick() {
        console.log('Delete click happened');
    }
    handleShowAllClick() {
        console.log('Show All click happened');
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
                <button id="show-all-button" onClick={this.handleShowAllClick}> Show All </button>
                <button id="show-single-button" onClick={this.handleShowSingleClick}> Show Single</button>
            </div>
        );
    }
}

const mainNode = document.getElementById("root");
ReactDOM.render(<App />, mainNode);