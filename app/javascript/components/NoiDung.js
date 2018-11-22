import React from "react";

class NoiDung extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps cua noidung.js " + nextProps.ten);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate cua noidung.js " + nextProps.ten);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate cua noidung.js");
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("componentDidUpdate cua noidung.js");
    }

    render() {
        return (
           <h4> {this.props.ten} </h4>
        );
    }
}

export default NoiDung;