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
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/tin" component={News} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/chi-tiet" component={Detail} />
            </div>
        );
    }
}
export default Direct;