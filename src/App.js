import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

const words =[
  {
    english:'apple',
    transcription:'apple',
    russion: 'яблоко',
  },
  {
    english:'flower',
    transcription:'wlower',
    russion: 'цветы',
  },
]


function App() {
  return (
    <div className="App">
     <Header/>
     <div>
     <img src={require('./components/inst.png')} heigh={60} width={60}/>
     <img src={require('./components/youTube.png')} heigh={60} width={60}/>
     <img src={require('./components/fb.png')} heigh={60} width={60}/>
     <Footer/>
     </div>
    </div>
  );
}

export default App;

