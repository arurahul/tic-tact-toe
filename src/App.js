
import './App.css';
import React from 'react';
function App() {

  const Square=(props)=>{

    return(
      <button className="square" onClick={props.clickEvent}>
        {props.value}
      </button>
    )
  }

  const Board=()=>{
    const initialValues=[null,null,null,null,null,null,null,null,null];
    const [squares,setSquares]=React.useState(initialValues);
    const [player,setPlayer]=React.useState(true);
    const handleClick=(i)=>
    {
      const values=[...squares];
      const winnerSelected=Boolean(calculateWinner(values));
      const checkValue=Boolean(values[i])
      if (winnerSelected || checkValue)
      {
        return
      }
      values[i]=player?"X":"O";
      setPlayer(!player);
      setSquares(values);
      calculateWinner(values);
    }
    const renderSquare=(i)=>{
      return (
        <Square value={squares[i]} clickEvent={()=>handleClick(i)}/>
      );
    }
    const winner=calculateWinner(squares);
    return(
      <div className="board">
        { winner?`Winner:${winner}`: `Player to be played:${player?"X":"O"}`}
        <div className="board-row">
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
        </div>
        <div className="board-row">
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
        </div>
        <div className="board-row">
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
        </div>
      </div>
    )
  }

  const Game=()=>{
    return(
      <div className="game">
        TIC TAC TOE
        <Board />
      </div>
    )
  }

  function calculateWinner(squares)
  {
    const lines=[[0,1,2],[3,4,5],[6,7,8]
  ,[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for(let line of lines)
    {
      const [a,b,c]=line;
      if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c])
      {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Game />

      </header>
    </div>
  );
}

export default App;
