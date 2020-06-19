import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const MainPage = props => (
    <div id="main-page-buttons">
        <button id="post-button"> Post </button>
        <button id="delete-button"> Delete </button>
    </div>
)

class App extends React.Component {
    render() {
        return (
            <MainPage />
        );
    }
}

const mainNode = document.getElementById("root");
ReactDOM.render(<App />, mainNode);