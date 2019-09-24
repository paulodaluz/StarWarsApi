import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer_area p_120">
                    <div className="container">
                        <div className="row footer_inner">
                            <div className="col-lg-5 col-sm-6">
                                <aside className="f_widget ab_widget">
                                    <div className="f_title">
                                        <h3>Sobre mim</h3>
                                    </div>
                                    <p>Gamer, desenvolvedor e louco pelas tecnologias mais atuais existentes no mercado.</p>
                                </aside>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                                <aside className="f_widget news_widget">
                                    <div className="f_title">
                                        <h3>Ultimas Notícias</h3>
                                    </div>
                                    <p>Mantenha-se atualizado com as nossas últimas tendências</p>
                                    <div id="mc_embed_signup">
                                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative">
                                            <div className="input-group d-flex flex-row">
                                                <input name="EMAIL" placeholder="Digite seu endereço de email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required="" type="email" />
                                                <button className="btn sub-btn"><span className="lnr lnr-arrow-right"></span></button>
                                            </div>
                                            <div className="mt-10 info"></div>
                                        </form>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-2">
                                <aside className="f_widget social_widget">
                                    <div className="f_title">
                                        <h3>Me siga nas rede sociais</h3>
                                    </div>
                                    <p>Redes Sociais</p>
                                    <ul className="list">
                                        <li><a href="https://www.facebook.com/PauloDaLuzz"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/Paulo_Luzz"><i className="fa fa-twitter"></i></a></li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
