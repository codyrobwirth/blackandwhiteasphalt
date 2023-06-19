import footerLogo from "../../assets/footerLogo.png";
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';

let Footer = () => {

    return (
        <div style={{ height: '150px', backgroundColor: '#121212', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'white', borderTop: '2px solid white' }} >
            <div style={{ paddingRight: '25px' }}>
                <img src={footerLogo} alt="footerLogo" style={{ height: '100px', width: '100px', margin: '25px 0px 0px 25px' }} />
            </div>
            <div style={{ paddingRight: '15px' }}>
                <p>Columbus, OH 43219</p>
            </div>
            <div style={{ paddingRight: '15px' }}>
                <HorizontalRuleOutlinedIcon sx={{ transform: 'rotate(90deg)' }} />
            </div>
            <div style={{ lineHeight: '2px', paddingRight: '405px'}}>
                <p>C: 614-736-3344</p>
                <p>O: 614-971-3017</p>
            </div>
            <div>
                <p>© 2023 Black & White Asphalt - All Rights Reserved</p>
            </div>        
        </div>
    )
}

export default Footer;