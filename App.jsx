import './App.css';
import elephant from "C:\Users\Kunathi Mrudula\Documents\lab-react-jsx-boilerplate\src\images\elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const images = imageData();

  return (
    <div className="App">
      <h1>Kalvium Gallery</h1>
      <div className="image-gallery">
        {images.map((img) => (
          <img key={img.id} src={img.img} alt={`image-${img.id}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
