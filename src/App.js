import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';
import Carusel from './components/Carusel';
import NoMatch from './components/NoMatch';
import {BrowserRouter as Router,Routes,Route,Link
} from "react-router-dom";
import WordElements from './components/WordElements';



const words =[
  {
    id:1,
    english:'apple',
    transcription:'/ˈæpəl/',
    russian: 'Яблоко',
  },
  {
    id:2,
    english:'flower',
    transcription:'/ˈflaʊɚ/',
    russian: 'Цветы',
  },
  {
    id:3,
    english:'icon',
    transcription:'/ˈaɪkɑn/',
    russian: 'Икона',
  },
  {
    id:4,
    english:'pineapple',
    transcription:'/ˈpaɪˌnæpəl/',
    russian: 'Ананас',
  },

  {
    id:5,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:6,
    english:'cool',
    transcription:'/kuːl/',
    russian: 'классный',
  },
  {
    id:7,
    english:'nice',
    transcription:'/naɪs/',
    russian: 'Милый',
  },
  {
    id:8,
    english:'funny',
    transcription:'/ˈfʌn.i/',
    russian: 'Забавный',
  },
  {
    id:9,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лим',
  },
  {
    id:10,
    english:'smart',
    transcription:'/smɑːrt/',
    russian: 'Умный',
  },
  {
    id:11,
    english:'beautiful',
    transcription:'/ˈbjuːtɪfl/',
    russian: 'красивый',
  },
  {
    id:12,
    english:'handsome',
    transcription:'/ˈhænsəm/',
    russian: 'красивый',
  },
  {
    id:13,
    english:'very',
    transcription:'/ˈvɛri/',
    russian: 'очень',
  },
  {
    id:14,
    english:'so',
    transcription:'/soʊ/',
    russian: 'такой',
  },
  {
    id:15,
    english:'adapt',
    transcription:'/əˈdæpt/',
    russian: 'настраивать',
  },
  {
    id:16,
    english:'add to list',
    transcription:'/æd tu lɪst/',
    russian: 'добавлять в список',
  },
  {
    id:17,
    english:'application',
    transcription:'/æplɪˈkeɪʃnn/',
    russian: 'приложение',
  },
  {
    id:18,
    english:'archive',
    transcription:'/ˈɑrˌkaɪv/',
    russian: 'архивировать',
  },
  {
    id:19,
    english:'attempt',
    transcription:'/əˈtɛmpt/',
    russian: 'попытка',
  },
  {
    id:20,
    english:'authorization',
    transcription:'/ˌɔːθərəˈzeɪʃn/',
    russian: 'авторизация',
  },
  {
    id:21,
    english:'automatically',
    transcription:'/ˌɔtəˈmætɪkli/',
    russian: 'автоматически',
  },
  {
    id:22,
    english:'backup',
    transcription:'/ˈbæˌkʌp/',
    russian: 'резервная копия',
  },
  {
    id:23,
    english:'binary',
    transcription:'/ˈbaɪnəri/',
    russian: 'двоичный',
  },
  {
    id:24,
    english:'blowfish',
    transcription:'/ˈbloʊfɪʃ/',
    russian: 'блоуфиш (криптографический алгоритм)',
  },
  {
    id:25,
    english:'compatible',
    transcription:'/kəmˈpætəbə/',
    russian: 'совместимый',
  },
  {
    id:26,
    english:'lomponent',
    transcription:'/ˈkəmˈpoʊnənt/',
    russian: 'компонент',
  },
]





function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
   <div className='cardsArray'>
   
<WordElements words={words}/>
 
  </div>

      <Routes>
          <Route path="/game" element={<Carusel wordsData={words}/>} />
          <Route path="/Table" element={<Table wordsData={words}/>} />
          <Route path="/Card" element={<Card wordsData={words}/>} /> 
          <Route path="/*"  element={<NoMatch/>}/>
    </Routes>

     <Footer/>
     </div>
     </Router>
     
  );
}


export default App;






