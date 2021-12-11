import React from "react";

import NavBar from "./Nav";
import AppSection from "./Appsection";
import CardSection from "./cardsection";
import HeroSection from "./herosection";
import Footer from "./footer";
const App = () => {
    return(
        <div>
            <NavBar />
            <HeroSection />
            <AppSection />
            <CardSection />
            <Footer />
        </div>
    );
};

export default App;





