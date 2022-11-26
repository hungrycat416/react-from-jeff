import React from 'react';
import { createRoot } from 'react-dom';

import { Toolbar } from '@mui/material';

import Topbar from './Topbar';
import AddM from './AddM';
import MList from './MList';

const App = () => {
  const [m, setM] = React.useState([]);
  const [currentM, setCurrentM] = React.useState({ text: '', key: '' });

  const addM = (event) => {
    event.preventDefault();

    if (m.indexOf(currentM) !== -1) return;
    setM([...m, currentM]);
  };

  const handleInput = (event) => {
    setCurrentM({
      text: event.target.value,
      key: Date.now(),
    });
  };

  const removeM = (key) => {
    setM(m.filter((m) => key != m.key));
  };

  return (
    <div>
      <Topbar />
      <Toolbar />
      <AddM addM={addM} handleInput={handleInput} />
      <MList m={m} remove={removeM} />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
