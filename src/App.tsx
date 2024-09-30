import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Monster from "./components.tsx";
import Form from "./Components/Form.tsx";

function App() {
  const initialMonster = Monster("", 0, 0,0,0,"");

  const [monster1, setMonster1] =  useState<Monster>(initialMonster);
  const [monster2, setMonster2] = useState<Monster>(initialMonster);
  const [winner, setWinner] = useState();
  function handleDataFromChild1(data) {
      setMonster1(data);
  }

  function handleDataFromChild2(data) {
      setMonster2(data);
  }

  useEffect(() => {
      calculateBattle(monster1, monster2);
  }, [monster1, monster2]);
  const calculateBattle = (m1: any, m2: any)   => {

      let first = m1.speed > m2.speed ? m1 : m1.attack > m2.attack ? m1 : m2;
      let second = first === m1 ? m2 : m1;

      while (m1.hp > 0 && m2.hp > 0) {
          second.hp -= Math.max(first.attack - second.defense, 1);
          if (second.hp <= 0) return setWinner(first);
          first.hp -= Math.max(second.attack - first.defense, 1);
          if (first.hp <= 0) return setWinner(second);
      }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between',  gap: '20px'  }}>
          <Form title="Monster 1" sendDataToParent={handleDataFromChild1}></Form>
          <Form title="Monster 2" sendDataToParent={handleDataFromChild2}></Form>
      </div>
      {winner ? <h1>The winner is: {winner.name}</h1> : null}
    </>
  )
}

export default App
