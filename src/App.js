import './App.css';
import Footer from './components/page/footer/footer';
import Navbar from './components/page/navbar/navbar';
import User from './components/page/user';
export default function App() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <User />
      <Footer />
    </div>
  )
}