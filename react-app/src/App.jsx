import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { FormDeal } from "pages/form.page";
import { Deals } from "pages/deal.page"
import { rand4 } from "./helpers";
import { Navigation } from "components/navigation";

function App() {

  const [dealList, setDeals] = useState([]);

  const onAddDeal = (text) => {
    setDeals((state) => {
      return [
        ...state,
        {
          id: rand4(),
          text,
          status: false,
        }
      ]
    })
  }

  const onEdit = (updateDeal) => {
    setDeals((state) => {
      return state.map ((e) => {
        if(e.id === updateDeal.id) {
          return {...e, ...updateDeal}
        }
        return e;
      })
    })
  }

  const onRemove  = (id) => {
    setDeals((state) => {
      return state.filter((e) => e.id !== id)
    })
  }
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Deals deals={dealList} onEdit={onEdit} onRemove={onRemove}/>} />
        <Route exact path='/form/:id' element={<FormDeal onAddDeal={onAddDeal} onEdit={onEdit} deals={dealList} />} />
      </Routes> 
    </Router>
  );
}

export default App;
