import classes from './components/footer/Footer.module.css'
import React, {useRef} from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content'
import Footer from './components/footer/Footer';
import AttractionsContainer from "./components/Attractions/AttractionsContainer";
import Directions from "./components/Directions/Directions"
import Advices from "./components/Advices/Advices"

import Error from './components/common/Error'
import ErrorCatch from './hoc/ErrorCatch';
import {useDispatch} from "react-redux";
function App() {
    const dispatch = useDispatch()

    const scrollToRef = useRef();
  return (
    <div className={classes.container}>
      <Header />
      <Routes>
        <Route path='/' element={<Content scrollToRef={scrollToRef}/>} />
        <Route path={'/attractions'} element={<ErrorCatch><AttractionsContainer /></ErrorCatch>} />
        <Route path={'/directions'} element={<ErrorCatch><Directions /></ErrorCatch>} />
        <Route path={'/advices'} element={<ErrorCatch><Advices /></ErrorCatch>} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer scrollToRef={scrollToRef} />
    </div>
  );
}

export default App;


