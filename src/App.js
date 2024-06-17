import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';


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
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:7,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:8,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:9,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:10,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:11,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:12,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:13,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:14,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:15,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:16,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:17,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:18,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:19,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:20,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:21,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:22,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:23,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:24,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:25,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
  {
    id:26,
    english:'lemon',
    transcription:'/ˈlɛmən/',
    russian: 'Лимон',
  },
]


function App() {
  return (
    <div className="App">
     <Header/>
     {
      window.addEventListener("languagechange", () => {
        console.log("languagechange event detected!");
      })
      // kak suda ego pri
     }

     {
      words.map((word)=>{
        return(
          <Card word={word}/>
          
        )}) 
      }

      <Table wordsData={words}/>
      



     
     <Footer/>
     </div>
  );
}

export default App;

