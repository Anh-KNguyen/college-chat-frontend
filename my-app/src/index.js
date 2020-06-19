import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const MainPage = props => (
    <button id="post-button"> Post </button>
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