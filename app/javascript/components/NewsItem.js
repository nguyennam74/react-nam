import React from "react"
class NewsItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-4">
                <div className="card-deck">
                    <div className="card">
                        <a href="/tin-chi-tiet">
                            <img src={this.props.img} className="img-fluid" />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">{this.props.title}</h4>
                            <p className="card-text">{this.props.content}</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}
export default NewsItem;