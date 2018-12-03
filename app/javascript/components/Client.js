import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import News from "./News";
import Contact from "./Contact";
import Detail from "./Detail";

class Client extends React.Component {
    render() {
        return(
            <div>
                <Nav/>
                {/*<Home/>*/}
                {/*<News/>*/}
                {/*<Detail/>*/}
                <Contact/>
                <Footer/>
            </div>
        );
    }
}
export default Client;