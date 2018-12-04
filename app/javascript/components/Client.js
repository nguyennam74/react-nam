import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Nav from "./Nav";
import Footer from "./Footer";
import Direct from "./Direct";

class Client extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Nav/>
                        <Direct/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
export default Client;