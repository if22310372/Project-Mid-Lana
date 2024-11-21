import logo from './logo.svg';
import './App.css';

import C1 from "./component/container/container.js"
import Section1 from './component/section1/section1.js';
import Section2 from './component/section2/section2.js';
import Section3 from './component/section3/section3.js';
import Section4 from './component/section4/section4.js';
import Section5 from './component/section5/section5.js';

function App() {
  return (
    <div className="container">
  <C1 />
  <div className="section">
    <Section1 />
    </div>
  <div className="section">
    <Section2 />
  </div>
  <div className="section">
    <Section3 />
  </div>
  <div className="section">
    <Section4 />
  </div>
  <div className="section">
    <Section5 />
  </div>
</div>

  );
}

export default App;
