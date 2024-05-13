import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';

const words =[
  {
    id:1,
    english:'apple',
    transcription:'apple',
    russian: 'яблоко',
  },
  {
    id:2,
    english:'flower',
    transcription:'wlower',
    russian: 'цветы',
  },
  {
    id:3,
    english:'flower',
    transcription:'wlower',
    russian: 'цветы',
  },
  {
    id:4,
    english:'flower',
    transcription:'wlower',
    russian: 'цветы',
  },
  {
    id:5,
    english:'flower',
    transcription:'wlower',
    russian: 'цветы',
  },
]


function App() {
  return (
    <div className="App">
     <Header/>
     {
      words.map((word)=>{
        return(
          <Card word={word}/>
        )}) 
      }

      <Table wordsData={words}/>



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

