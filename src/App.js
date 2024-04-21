// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './sections/Footer';
import HomeBanner from './sections/HomeBanner';
import SuccessSection from './sections/SuccessSection';
import Video from './sections/Video';

function App() {
  return (
    <div className="App">
      <div>
        <section>
          <HomeBanner />
          <Video />
          <SuccessSection />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
