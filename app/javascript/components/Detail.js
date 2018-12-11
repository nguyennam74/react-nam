import React from "react";
import dl from "./data.json";
class Detail extends React.Component {
    render() {
        return (

            <div>
                <div>
                    {
                        dl.map((value, key) => {
                            if(value.id == this.props.match.params.id) {
                                return (
                                    <div className="jumbotron jumbotron-fluid">
                                        <div className="container">
                                            <img src={value.anh} className="img-fluid" />
                                            <h3 className="lead text-center">{value.tieuDe}</h3>
                                            <hr className="my-2" />
                                            {
                                                value.noiDung
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    <div className="container">
                        <h4 className="card-title text-center">Tin lien quan</h4>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-deck">
                                    <div className="card">
                                        <img src="http://placehold.it/500x300" className="card-img-top" />
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Our app is available on any mobile device!</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="http://placehold.it/500x300" className="card-img-top" />
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Our app is available on any mobile device!</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="http://placehold.it/500x300" className="card-img-top" />
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Our app is available on any mobile device!</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="http://placehold.it/500x300" className="card-img-top" />
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Our app is available on any mobile device!</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="http://placehold.it/500x300" className="card-img-top" />
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Our app is available on any mobile device!</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="http://placehold.it/500x300" className="card-img-top" />
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Our app is available on any mobile device!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Detail;