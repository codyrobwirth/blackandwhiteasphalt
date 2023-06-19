import ResponsiveAppBar from '../../components/navbar/navbar';
import PageContent from '../../components/pageContent/pageContent';
import Footer from '../../components/footer/footer';

let Contact = () => {

    return (
        <div>
            <div className="App">
                <div className='navbar'>
                    <ResponsiveAppBar></ResponsiveAppBar>
                </div>
                <div className='form-content' style={{ backgroundColor: 'black', height: '800px', paddingTop: '150px' }}>
                <h3 style={{ fontSize: '32px', color: 'white', textDecoration: 'underline' }}>Contact Information</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ color: 'white', fontSize: '18px' }}>
                            <div>
                                <strong>VP of Operations / Sales - Jordan Coffman</strong>
                                <div>Email: JCoffman@BlackAndWhiteAM.com</div>
                                <div>Click To Call 614-736-3344</div>
                            </div>
                            <br></br>
                            <div>
                                <strong>Estimator - Terry Cooper</strong>
                                <div>Email: TCooper@BlackAndWhiteAM.com</div>
                                <div>Phone: Click To Call 614-377-0884</div>
                            </div>
                            <br></br>
                            <div>
                                <strong>CEO - Kailyn Coffman</strong>
                                <div>Email: KCoffman@BlackAndWhiteAM.com</div>
                                <div>Click To Call 740-485-4366</div>
                            </div>
                            <br></br>
                            <div>
                                <strong>Black & White Asphalt Management LLC</strong>
                                <div>P.O. Box 3761</div>
                                <div>Dublin Ohio 43016</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact;