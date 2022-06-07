import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div onContextMenu={e => e.preventDefault()} style={{height: "100%"}}>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default App;