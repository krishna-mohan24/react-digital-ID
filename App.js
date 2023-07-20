import './App.css';
import Image from './components/image';
import Body from './components/body';

function App() {
  return (
    <div className = "main-comp">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

      <Image></Image>
      <div className = "buttons">
      <button type="button" class="btn btn-light" width = {100}>Email</button>
            <button type="button" class="btn btn-primary" wifth = {100}>Linkedin</button>
            </div>
            <Body></Body>
    </div>
  );
}

export default App;
