import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Olá Mundo",
      contador: 0
    };
  }

  somar = valor => {
    this.setState({ contador: this.state.contador + valor });
  };

  render() {
    /* let msg = "Olá mundo"; */
    return (
      <div>
        
        <header className="header_area">
           	<div className="top_menu">
           		<div className="container">
           			<div className="top_inner">
           				<div className="float-left">
           					<a href="#">Visit Us</a>
           					<a href="#">Online Support</a>
           				</div>
           				<div className="float-right">
           					<ul className="list header_socila">
           						<li><a href="#"><i className="fa fa-facebook"></i></a></li>
           						<li><a href="#"><i className="fa fa-twitter"></i></a></li>
           						<li><a href="#"><i className="fa fa-dribbble"></i></a></li>
           						<li><a href="#"><i className="fa fa-behance"></i></a></li>
           					</ul>
           				</div>
           			</div>
           		</div>
           	</div>
            <div className="main_menu" id="mainNav">
            	<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container">

						<a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/><img src="img/logo-2.png" alt=""/></a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>

						<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul className="nav navbar-nav menu_nav ml-auto">
								<li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li> 
								<li className="nav-item"><a className="nav-link" href="about-us.html">About</a></li> 
								<li className="nav-item submenu dropdown">
									<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
									<ul className="dropdown-menu">
										<li className="nav-item"><a className="nav-link" href="projects.html">Project</a></li>
										<li className="nav-item"><a className="nav-link" href="project-details.html">Project Details</a></li>
										<li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
									</ul>
								</li> 
								<li className="nav-item submenu dropdown">
									<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
									<ul className="dropdown-menu">
										<li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
										<li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
									</ul>
								</li> 
								<li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
							</ul>
						</div> 
					</div>
            	</nav>
            </div>
        </header>

        <section className="home_banner_area">
            <div className="banner_inner">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="banner_content">
								<h2>Precise concept design <br />for stylish living</h2>
								<p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
								<a className="banner_btn" href="#">Get Started</a>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="home_right_box">
								<div className="home_item">
									<i className="flaticon-sofa"></i>
								</div>
								<div className="home_item">
									<i className="flaticon-bed"></i>
								</div>
								<div className="home_item">
									<i className="flaticon-computer"></i>
								</div>
								<div className="home_item">
									<i className="flaticon-mirror"></i>
								</div>
								<div className="home_item">
									<i className="flaticon-closet"></i>
								</div>
								<div className="home_item">
									<i className="flaticon-kitchen"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>

        <section className="furniture_area p_120">
        	<div className="container">
        		<div className="main_title">
        			<h2>Most Popular Furnitures</h2>
        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        		</div>
        		<div className="furniture_inner row">
        			<div className="col-lg-4">
        				<div className="furniture_item">
        					<img className="img-fluid" src="img/furniture/furniture-1.jpg" alt=""/>
        					<h4>Green Butter Sofa</h4>
        					<p>Sony laptops are among the most well known laptops on today’s market. Sony is a name that.</p>
        				</div>
        			</div>
        			<div className="col-lg-4">
        				<div className="furniture_item">
        					<img className="img-fluid" src="img/furniture/furniture-2.jpg" alt=""/>
        					<h4>Green Butter Sofa</h4>
        					<p>Sony laptops are among the most well known laptops on today’s market. Sony is a name that.</p>
        				</div>
        			</div>
        			<div className="col-lg-4">
        				<div className="furniture_item">
        					<img className="img-fluid" src="img/furniture/furniture-3.jpg" alt=""/>
        					<h4>Green Butter Sofa</h4>
        					<p>Sony laptops are among the most well known laptops on today’s market. Sony is a name that.</p>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>

        <section className="projects_area">
        	<div className="row m0">
        		<div className="projects_item wd_18">
					<img src="img/projects/projects-1.jpg" alt=""/>
					<div className="hover">
						<h4>Alex Complex for esidence</h4>
						<p>LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create  slimmer.</p>
					</div>
				</div>
				<div className="projects_item wd_18">
					<img src="img/projects/projects-2.jpg" alt=""/>
					<div className="hover">
						<h4>Alex Complex for esidence</h4>
						<p>LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create  slimmer.</p>
					</div>
				</div>
				<div className="projects_item wd_44">
					<img src="img/projects/projects-3.jpg" alt=""/>
					<div className="hover">
						<h4>Alex Complex for esidence</h4>
						<p>LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create  slimmer.</p>
					</div>
				</div>
				<div className="projects_item wd_18">
					<img src="img/projects/projects-4.jpg" alt=""/>
					<div className="hover">
						<h4>Alex Complex for esidence</h4>
						<p>LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create  slimmer.</p>
					</div>
				</div>
        	</div>
        </section>

        <section className="feature_area p_120">
        	<div className="container">
        		<div className="main_title">
        			<h2>Some Features that Made us Unique</h2>
        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        		</div>
        		<div className="row feature_inner">
        			<div className="col-lg-4 col-md-6">
        				<div className="feature_item">
        					<h4><i className="lnr lnr-user"></i>Expert Technicians</h4>
        					<p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="feature_item">
        					<h4><i className="lnr lnr-license"></i>Professional Service</h4>
        					<p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="feature_item">
        					<h4><i className="lnr lnr-phone"></i>Great Support</h4>
        					<p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="feature_item">
        					<h4><i className="lnr lnr-rocket"></i>Technical Skills</h4>
        					<p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="feature_item">
        					<h4><i className="lnr lnr-diamond"></i>Highly Recomended</h4>
        					<p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="feature_item">
        					<h4><i className="lnr lnr-bubble"></i>Positive Reviews</h4>
        					<p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
        <section className="impress_area p_120">
        	<div className="container">
        		<div className="impress_inner text-center">
					<h2>Looking for a <br />quality and affordable Furniture?</h2>
					<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.</p>
					<a className="main_btn" href="#">Read Details</a>
        		</div>
        	</div>
        </section>

        <section className="our_blog_area p_120">
        	<div className="container">
        		<div className="main_title">
        			<h2>Recent Posts from our blog</h2>
        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        		</div>
        		<div className="blog_inner row">
        			<div className="col-lg-4">
        				<div className="o_blog_item">
        					<div className="blog_img">
        						<img className="img-fluid" src="img/our-blog/our-blog-1.jpg" alt=""/>
        					</div>
        					<div className="blog_text">
        						<div className="blog_cat">
        							<a className="active" href="#">Travel</a>
        							<a href="#">Life style</a>
        						</div>
        						<a href="#"><h4>Low Cost Advertising</h4></a>
        						<p>Acres of Diamonds… you’ve read the famous story, or at least had it related to you A farmer.</p>
        						<a className="date" href="#">31st January, 2018</a>
        					</div>
        				</div>
        			</div>
        			<div className="col-lg-4">
        				<div className="o_blog_item">
        					<div className="blog_img">
        						<img className="img-fluid" src="img/our-blog/our-blog-2.jpg" alt=""/>
        					</div>
        					<div className="blog_text">
        						<div className="blog_cat">
        							<a className="active" href="#">Travel</a>
        							<a href="#">Life style</a>
        						</div>
        						<a href="#"><h4>Low Cost Advertising</h4></a>
        						<p>Acres of Diamonds… you’ve read the famous story, or at least had it related to you A farmer.</p>
        						<a className="date" href="#">31st January, 2018</a>
        					</div>
        				</div>
        			</div>
        			<div className="col-lg-4">
        				<div className="o_blog_item">
        					<div className="blog_img">
        						<img className="img-fluid" src="img/our-blog/our-blog-3.jpg" alt=""/>
        					</div>
        					<div className="blog_text">
        						<div className="blog_cat">
        							<a className="active" href="#">Travel</a>
        							<a href="#">Life style</a>
        						</div>
        						<a href="#"><h4>Low Cost Advertising</h4></a>
        						<p>Acres of Diamonds… you’ve read the famous story, or at least had it related to you A farmer.</p>
        						<a className="date" href="#">31st January, 2018</a>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>

        <section className="clients_logo_area p_120">
        	<div className="container">
        		<div className="clients_slider owl-carousel">
        			<div className="item">
        				<img src="img/clients-logo/c-logo-1.png" alt=""/>
        			</div>
        			<div className="item">
        				<img src="img/clients-logo/c-logo-2.png" alt=""/>
        			</div>
        			<div className="item">
        				<img src="img/clients-logo/c-logo-3.png" alt=""/>
        			</div>
        			<div className="item">
        				<img src="img/clients-logo/c-logo-4.png" alt=""/>
        			</div>
        			<div className="item">
        				<img src="img/clients-logo/c-logo-5.png" alt=""/>
        			</div>
        		</div>
        	</div>
        </section>

        <footer className="footer_area p_120">
        	<div className="container">
        		<div className="row footer_inner">
        			<div className="col-lg-5 col-sm-6">
        				<aside className="f_widget ab_widget">
        					<div className="f_title">
        						<h3>About Me</h3>
        					</div>
        					<p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
        					<p></p>
        				</aside>
        			</div>
        			<div className="col-lg-5 col-sm-6">
        				<aside className="f_widget news_widget">
        					<div className="f_title">
        						<h3>Newsletter</h3>
        					</div>
        					<p>Stay updated with our latest trends</p>
        					<div id="mc_embed_signup">
                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative">
                                	<div className="input-group d-flex flex-row">
                                        <input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required="" type="email"/>
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
        						<h3>Follow Me</h3>
        					</div>
        					<p>Let us be social</p>
        					<ul className="list">
        						<li><a href="#"><i className="fa fa-facebook"></i></a></li>
        						<li><a href="#"><i className="fa fa-twitter"></i></a></li>
        						<li><a href="#"><i className="fa fa-dribbble"></i></a></li>
        						<li><a href="#"><i className="fa fa-behance"></i></a></li>
        					</ul>
        				</aside>
        			</div>
        		</div>
        	</div>
        </footer>
      </div>
    );
  }
}

export default App;
