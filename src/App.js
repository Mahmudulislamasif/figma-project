import logo from './logo.svg';
import './App.css';
import image from'./Assets/Rectangle 5356.png'
import image2 from './Assets/Vector (2).png'
import image3 from './Assets/vector-2.png'
function App() {
  return (
    <div className='App'>
          <p className="text-6xl text-left font-bold text-[#131313] mt-32 block md:hidden">How We Work To Powerfull <span className="text-[#5D51F2]">Help You</span> </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto container">
          <div>
            <img className="pt-32" src={image} alt="" />
          </div>
          
          <div className="relative">
            <img src={image2} alt="" className="absolute top-28 -left-8" />
            <img src={image3} alt="" className="absolute right-0 top-0 hidden md:block" />
            <p className="text-6xl text-left font-bold text-[#131313] mt-32 hidden md:block">How We Work To Powerfull <span className="text-[#5D51F2]">Help You</span> </p>
            <p className='text-left font-medium text-4xl text-[#
#131313] mt-20'>1.  Sitemap and user flow</p>
            <p className="text-2xl text-[#838383] text-left mt-5 mb-10">We provide comprehensive services to support your business by leveraging strategy.</p>
            <p  className='text-left font-medium text-4xl text-[#
#131313] mt-20'>2.  Wireframe</p>
            <p className="text-2xl text-[#838383] text-left">We provide comprehensive services to support your business by leveraging strategy.</p>
            <p className='text-left font-medium text-4xl text-[#
#131313] mt-20' >3.  Design and Development</p>
            <p className="text-2xl text-[#838383] text-left">We provide comprehensive services to support your business by leveraging strategy.</p>
          </div>
        </div>
    </div>
  );
}

export default App;
