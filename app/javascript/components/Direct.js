import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import News from "./News";
import Contact from "./Contact";
import Detail from "./Detail";
import Home from "./Home";

class Direct extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tin" component={News} />
                </div>
            </Router>
        );
    }
}
export default Direct;