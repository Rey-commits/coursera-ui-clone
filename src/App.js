import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Navigation from "./components/Navigation";
import TopicsList from './components/TopicsList';


function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <TopicsList />
    </div>
  )
}

export default App;
