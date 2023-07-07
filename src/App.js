import "./App.css";
import Dropdown from "./components/Dropdown";
import navLinksData from "./data.json";

function App() {
  return (
    <div className='App'>
      <div className='header-parent'>
        <header className='header' style={{marginLeft:450}}>
        
          <Dropdown navLinksData={navLinksData} />
        </header>
      </div>
      <body>
        <main className='main-content'>
          <h1 className='heading'>TASK CONSCIOTECH</h1>
        </main>
      </body>
    </div>
  );
}
export default App;
