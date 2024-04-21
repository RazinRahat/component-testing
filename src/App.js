// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './sections/Footer';
import HomeBanner from './sections/HomeBanner';
import Insights from './sections/Insights';
import Solutions from './sections/Solutions';
import Success from './sections/Success';
import Video from './sections/Video';

function App() {
  return (
    <div className="App">
      <div>
        <section>
          <HomeBanner />
          <Video />
          <Success />
          <Solutions />
          <Insights />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
