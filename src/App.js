import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [tulos, setTulos] = useState(0);

function calculate(e) {
  e.preventDefault();

  let litrat = bottles * 0.33
  let grammat = litrat * 8 * 4.5
  let palaminen = weight / 10
  let valitulos = grammat - (palaminen * time);
  let tulos = 0;
  
  if (gender === 'male') {
    tulos = valitulos / (weight * 0.7); 
  } else {
    tulos = valitulos / (weight * 0.6);
  }
  setTulos(tulos);
}

  return (
    <div>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>

        <div>
          <label>Bottles</label>
          <input name="bottles" type="number" value={bottles} onChange={e => setBottles(e.target.value)}></input>
        </div>

        <div>
          <label>Time</label>
          <input name="type" type="number" value={time} onChange={e => setTime(e.target.value)}></input>
        </div>

        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input>
          <label for="male">Male</label>

          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>
          <label for="female">Female</label>
        </div>

        <div>
          <label>Blood alcohol level</label>
          <output>{tulos.toFixed(2)}</output>
        </div>

        <div>
        <button>Calculate</button>
        </div>

      </form>
    </div>
  );
}

export default App;
