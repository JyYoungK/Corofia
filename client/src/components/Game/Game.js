import React, {Component} from "react";
import './Game.css';

class Game extends Component {
    render(){
        return (
            <div>
                <div className="row">
                    <div className="column">
                        <button className="sectorButton"> Sector 1 </button>
                    </div>
                    <div className="column">
                        <button className="sectorButton"> Sector 2 </button>
                    </div>
                    <div className="column">
                        <button className="sectorButton"> Sector 3 </button>
                    </div>
                    <div className="column">
                        <button className="sectorButton"> Sector 4 </button>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <button className="sectorButton"> Sector 5 </button>
                    </div>
                    <div className="column">
                        <button className="sectorButton"> Sector 6 </button>
                    </div>
                    <div className="column">
                        <button className="sectorButton"> Sector 7 </button>
                    </div>
                    <div className="column">
                        <button className="sectorButton"> Sector 8 </button>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <button className="sectorButton"> Sector 9 </button>
                    </div>
                    <div className="column">
                        <button className="sectorButton"> Sector 10 </button>
                    </div>
                    <div className="column">
                        <button className="sectorButton"> Sector 11 </button>
                    </div>
                    <div className="column">
                        <button className="sectorButton"> Sector 12 </button>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    <button className="sectorButton"> Sector 13 </button>
                    </div>
                    <div className="column">
                    <button className="sectorButton"> Sector 14 </button>
                    </div>
                    <div className="column">
                    <button className="sectorButton"> Sector 15 </button>
                    </div>
                    <div className="column">
                    <button className="sectorButton"> Sector 16 </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;

