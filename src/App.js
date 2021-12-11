
import { useContext } from 'react';
import './App.css';
import SimpleApp from './Components/SimpleApp';
import { ThemeContext } from './Context/ThemeContextProvider';

function App() {
  const [{theme,themeData}]=useContext(ThemeContext);
  const currentTheme = themeData[theme];
  return (
    <div className="App" style={{
      color: currentTheme.color,
      background: currentTheme.background
    }}>
      <h1>Dark Mode By Using Context API in React</h1>
      <SimpleApp/>
    </div>
  );
}

export default App;
