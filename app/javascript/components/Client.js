import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import News from "./News";
import Contact from "./Contact";
import Detail from "./Detail";
import Direct from "./Direct";

class Client extends React.Component {
    render() {
        return(
            <div>
                <Nav/>
                    <Direct/>
                <Footer/>
            </div>
        );
    }
}
export default Client;