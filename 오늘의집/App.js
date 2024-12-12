import logo from './logo.svg';
import './App.css';


function Header() {
  return (
  <section >
    <div className='nav'>

    
    <div className='nav_1'>
      <img src='logo.jpg' width="79px" height="38px"/>
    </div>
    
    <div className='nav_11'>
      <div  >
      <p>커뮤니티</p>
      </div>
      <div >
      <p>쇼핑</p>
      </div>
      <div >
      <p>인테리어/생활</p>
      </div>
    </div>

    <div className='input'>
      <input/>
    </div>
    </div>
    <div className='nav_2'>
      홈
    </div>
  </section>

  
  );

}
function header() {

}





function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default function TodaysHouse() {
  function Entire(){

  }
  return (
   <div className='entire'>
    <Header />
    </div>
     
    
  )
};
