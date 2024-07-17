import "./footer.css"

function Footer() {
    return (
   <>
    <div className="Footer">
        <div className='footerInner'>
        <img src={require('../components/inst.png')} heigh={30} width={30}/>
        <img src={require('../components/youTube.png')} heigh={30} width={30}/>
        <img src={require('../components/fb.png')} heigh={30} width={30}/>
    <div className="sociaInner">
    <p>CONTACTS</p>
    <p>FACEBOOK</p>
    <p>Whatsa App</p>
    </div>
         
        </div>
    </div>
    </>
    )
    }
    
    export default  Footer;

