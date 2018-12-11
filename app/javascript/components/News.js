import React from "react";
import NewsItem from "./NewsItem";
import dl from "./data.json";
class News extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-3">
                        {
                            dl.map((value, key) => {
                                return (
                                    <NewsItem key={key} img={value.anh}
                                              title={value.tieuDe} content={value.trichDan} id={value.id}>
                                    </NewsItem>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default News;