import React from 'react';
import {Header} from './layout/Header'
import {Footer} from './layout/Footer';
// import {Main} from './layout/Main';
import {MainFunction} from './layout/MainFunction';

function App() {
  return (
    <>
        <Header />
        {/* <Main /> */}
        <MainFunction />
        <Footer />
    </>
    // <React.Fragment>
    //     <Header />
    // </React.Fragment>
  );
}

export default App;
