import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const MainPage = props => (
    <div id="main-page-buttons">
        
    </div>
)

class App extends React.Component {
    handleClick() {
        console.log('Click happened');
    }
    
    render() {
        return (
            <div>
                <button id="post-button" onClick={this.handleClick}> Post </button>
                <button id="delete-button"> Delete </button>
                <button id="show-all-button"> Show All </button>
                <button id="show-single-button"> Show Single</button>
            </div>
            
        );
    }
}

const mainNode = document.getElementById("root");
ReactDOM.render(<App />, mainNode);