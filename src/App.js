import './App.css';
import Navi from './Navi';
import Carousel from './Carousel';
import Gallery from './Gallery'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Carousel></Carousel>
      <Gallery propid='review' proptitle='이벤트' propfolder='event'></Gallery>
      <Gallery propid='gallery' proptitle='상품' propfolder='product'></Gallery>
    </div>
  );
}

export default App;
