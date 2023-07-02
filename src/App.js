import { useState } from 'react';
import './App.css';
import Weather from './Components/Weather';
import LoadingBar from 'react-top-loading-bar';

function App() {

  const [progress, setProgress] = useState(0)

  return (
    <div >
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Weather setProgress={setProgress}/>
    </div>
  );
}

export default App;
