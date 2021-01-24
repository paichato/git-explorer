import Routes from './Routes/';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes/>    
    </BrowserRouter>
    <GlobalStyle/>

    </>
  );
}

export default App;
