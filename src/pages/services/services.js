import ResponsiveAppBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';
import img10 from '../../assets/10.jpg';
import img11 from '../../assets/11.jpg';
import img12 from '../../assets/12.jpg';
import './services.css'

let Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <div className="App">
                <div className='navbar'>
                    <ResponsiveAppBar></ResponsiveAppBar>
                </div>
                <div
                    className='form-content'
                    style={{
                        backgroundColor: 'black',
                        height: '1200px',
                        marginTop: '100px',
                        paddingTop: '50px',
                        paddingLeft: '50px',
                        paddingRight: '50px'
                    }}
                >
                    <h3
                        style={{
                            fontSize: '32px',
                            paddingTop: '90px',
                            color: 'white',
                            textDecoration: 'underline'
                        }}
                    >
                        Commercial Services
                    </h3>
                    <div
                        style={{
                            backgroundColor: 'rgb(18, 18, 18)',
                            display: 'flex',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '22px',
                            border: '2px solid white',
                            width: '30%',
                            marginLeft: '400px',
                            alignContent: 'center',
                            padding: '20px',
                            marginBottom: '125px'
                        }}
                    >
                        <ul>
                            <li>Sealcoating</li>
                            <li>Crackfill/Crack Seal</li>
                            <li>Striping</li>
                            <li>ADA Compliant Repairs</li>
                            <li>Thermoplastic Striping</li>
                            <li>Roadway Signage Installation</li>
                            <li>Concrete</li>
                            <li>Pot-Hole Repairs</li>
                            <li>Patch Work / Asphalt Repairs</li>
                            <li>Apron Replacement</li>
                            <li>Parking Blocks</li>
                            <li>Speed Bumps</li>
                        </ul>
                    </div>
                    <div
                        className="container"
                        style={{
                            width: '750px',
                            height: '400px',
                            margin: '0 auto',
                            backgroundColor: 'white',
                            border: '2px solid yellow',
                        }}
                    >
                        <Slider {...settings}>
                            <div>
                                <img style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }} src={img1} alt="img1" />
                            </div>
                            <div>
                                <img
                                    src={img2}
                                    alt="img2"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                            <div>
                                <img
                                    src={img3}
                                    alt="img3"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                            <div>
                                <img
                                    src={img4}
                                    alt="img4"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                            <div>
                                <img
                                    src={img5}
                                    alt="img5"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                            <div>
                                <img
                                    src={img6}
                                    alt="img6"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                            <div>
                                <img
                                    src={img7}
                                    alt="img7"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                            <div>
                                <img
                                    src={img8}
                                    alt="img8"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                            <div>
                                <img
                                    src={img9}
                                    alt="img9"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                            <div>
                                <img
                                    src={img10}
                                    alt="img10"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                            <div>
                                <img
                                    src={img11}
                                    alt="img11"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                            <div>
                                <img
                                    src={img12}
                                    alt="img12"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Services;