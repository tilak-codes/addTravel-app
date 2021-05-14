  
import React from 'react';
import { GiMountainCave } from 'react-icons/gi';
import { FiSun } from "react-icons/fi";
import { FaBeer } from 'react-icons/fa';

const getProgress = (total, goal) => {
    return Math.floor((total/goal)*100) + '%';
}

const getProgressBarWidth = (width) => {
    return {width};
}

export const TripsCount = ({total, tropic, trek, club, goal=15}) => (
    <div className="trips-count">
        <div className="content">
            <div className="total"><h1>{total}</h1>Trips Done</div>
            <div className="tropic"><h3>{tropic}</h3><FiSun /></div>
            <div className="trek"><h3>{trek}</h3><GiMountainCave /></div>
            <div className="club"><h3>{club}</h3><FaBeer /></div>
            <div className="goal"><div className="progress" style={getProgressBarWidth(getProgress(total,goal))}>
            </div> 
            {getProgress(total, goal)}
            </div>
        </div>
    </div>
)