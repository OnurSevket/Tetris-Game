import React from 'react';

import Stage from './Stage';
import Display from  './Display';
import StartButton from './StartButton';

import {createStage} from '../gameHelper';
import {StyledTetrisWrapper,StyledTetris} from './styles/StyledTetris';


const Tetris = () =>(
    <div>
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage ={createStage()}/>
        <aside>
            <div>
            <Display  text="Score"/>
            <Display  text="Rows"/>
            <Display  text="Level"/>
            </div>
            <StartButton/>
        </aside>
            </StyledTetris>   
        </StyledTetrisWrapper> 
    </div>
);

export default Tetris;