import React, { Component } from 'react';
import '../StyleSheets/Main.css';

class Main extends Component {
    render() {
        return(
            <div className="card">
                <header>
                    <img src={this.props.avatar} alt="avatar" className="avatar"/>
                    <div className="username">{this.props.username}</div>          
                </header>

                <img src={this.props.cover} alt="cover" className="cover" />
                
                <footer>
                    <div className="videos">Toatal videos: {this.props.videos}</div>
                    <div className="fans">Total fans: {this.props.fans}</div>
                </footer>
            </div>
        );
    }
}

export default Main;
