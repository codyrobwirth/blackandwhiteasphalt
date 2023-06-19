import ResponsiveAppBar from '../../components/navbar/navbar';
import img from '../../assets/asphaltPageContent.jpeg';
import './pageContent.css';


let PageContent = () => {

    return (
        <div>
            <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', height: '400px', paddingTop: '25px' }}>
                <div style={{ paddingTop: '35px'}}>
                    <h1 className='content-text'>SERVICES</h1>
                    <h3 className='content-text'>Dura-Seal is a professional asphalt contractor in Columbus, Ohio. We serve commercial and</h3> 
                    <h3 className='content-text'>industrial businesses in the broader central Ohio area including municipalities, university and</h3>
                    <h3 className='content-text'>hospital campuses, industrial complexes and more!</h3>
                </div>
            </div>
        </div>
    )
}

export default PageContent;
