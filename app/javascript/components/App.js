import React from "react";
import NoiDung from "./NoiDung";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: "khoitao",
            trangthai2: "khoitao2"
        }
    }

    componentWillMount() {
        console.log("componentWillMOunt chay");
    }

    componentDidMount(){
        console.log("componentDidMount da chay");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate da chay");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate da chay");
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("componentDidUpdate da chay");
    }

    capNhatState = () => {
        this.setState(
            {
                trangthai: "capnhat1",
                trangthai2: "capnhat2"
            }
        );
    }
    render(){
        console.log('day la render da chay');
        console.log(this.state.trangthai);
        return (

          <div className="App">
            <NoiDung ten={this.state.trangthai2}></NoiDung>
            <button onClick={() => this.capNhatState()}>Click update state</button>
          </div>
        );
    }
}
export default App;