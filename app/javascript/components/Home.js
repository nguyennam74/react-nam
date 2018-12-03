import React from "react"
class Home extends React.Component {
    render () {
        return (
            <div>
                <section className="download bg-primary text-center" id="download">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <h2 className="section-heading">Discover what all the buzz is about!</h2>
                                <p>Our app is available on any mobile device! Download now to get started!</p>
                                <div className="badges">
                                    <a className="badge-link" href="/"><img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/google-play-badge.svg"  /></a>
                                    <a className="badge-link" href="/"><img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/app-store-badge.svg"  /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Home;