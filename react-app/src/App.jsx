import React, { useEffect, useState } from 'react';
import './App.css';
import {Counter} from './components/counter';
import {Timer} from './components/timer';
 import { Page } from './components/page';

function App() {

  return (
    <Page color = {'red'}>
      <Counter />
    </Page>
  );
}

export default App;
