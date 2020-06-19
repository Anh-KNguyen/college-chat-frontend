import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component {
    handlePostClick() {
        console.log('Post click happened');
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