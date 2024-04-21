// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './sections/Footer';
import HomeBanner from './sections/HomeBanner';

function App() {
  return (
    <div className="App">
      <div>
        <section>
          <HomeBanner />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
