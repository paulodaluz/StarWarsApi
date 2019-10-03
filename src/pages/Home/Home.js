import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

//Import CSS
import '../../App.css';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <section className="home_banner_area">
                    <div className="banner_inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="banner_content">
                                        <h2>Paulo Ricardo da Luz Júnior</h2>
                                        <h3>1116505@imed.edu.br</h3>
                                        <p>RA: 1116505</p>
                                        {/* <a className="banner_btn" href="/">Enviar um Email</a> */}
                                        <Link to="/"><Button className="banner_btn" variant="light">Enviar um Email</Button></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div style={{ 'text-transform': 'uppercase', 'font-family': "Heebo, sans-serif" }} className="home_right_box">
                                        <div className="home_item">
                                            {/* <i className="flaticon-sofa"></i> */}
                                            <Link to="/pessoas" className="navbar-brand logo_h" style={{ color: 'white' }}>Pessoas</Link>
                                        </div>
                                        <div className="home_item">
                                            {/* <i className="flaticon-bed"></i> */}
                                            <Link to="/filmes" className="navbar-brand logo_h" style={{ color: 'white' }}>Filmes</Link>
                                        </div>
                                        <div className="home_item">
                                            {/* <i className="flaticon-computer"></i> */}
                                            <Link to="/planetas" className="navbar-brand logo_h" style={{ color: 'white' }}>Planetas</Link>
                                        </div>
                                        <div className="home_item">
                                            {/* <i className="flaticon-mirror"></i> */}
                                            <Link to="/species" className="navbar-brand logo_h" style={{ color: 'white' }}>Espécies</Link>
                                        </div>
                                        <div className="home_item">
                                            <div >
                                            {/* <i className="flaticon-closet"></i> */}
                                                <Link to="/starships" className="navbar-brand logo_h" style={{ color: 'white' }}>Naves</Link>
                                            </div>
                                        </div>
                                        <div className="home_item">
                                            {/* <i className="flaticon-kitchen"></i> */}
                                            <Link to="/login" className="navbar-brand logo_h" style={{ color: 'white' }}>Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
