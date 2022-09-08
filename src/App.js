import logo from './logo.svg';
import './App.css';
import image from'./Assets/Rectangle 5356.png'
import image2 from './Assets/Vector (2).png'
import image3 from './Assets/vector-2.png'
function App() {
  return (
    <div className='App'>
          <div>
          <img src={image2} alt="" className="absolute block md:hidden top-20" />
          <p className="text-6xl font-bold text-center text-[#131313] mt-32 block md:hidden mx-auto">How We Work To Powerfull <span className="text-[#5D51F2]">Help You</span> </p>
          </div>
          <div className="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img className="pt-32 mx-auto w-11/12" src={image} alt="" />
            </div>
            
            <div className="relative ml-20">
              <img src={image2} alt="" className="absolute hidden md:block top-28 -left-8" />
              <img src={image3} alt="" className="absolute -right-16 top-0 hidden md:block" />
              <p className="text-6xl text-left font-bold text-[#131313] mt-32 hidden md:block">How We Work To Powerfull <span className="text-[#5D51F2]">Help You</span> </p>
              <ol class="list-decimal">
                    <li className='text-left font-medium text-4xl text-[#
  #131313] mt-20'>    Sitemap and user flow
                    <ul className="text-2xl text-[#838383] text-left mt-5 mb-10">
                        <li>
                          We provide comprehensive services to support your business by leveraging strategy.
                        </li>
                    </ul>
                    </li>
                
                <li className='text-left font-medium text-4xl text-[#
  #131313] mt-20'>
                Wireframe
                  <ul className="text-2xl text-[#838383] text-left mt-5 mb-10">
                    <li>We provide comprehensive services to support your business by leveraging strategy.</li>
                  </ul>
                </li>
                <li className='text-left font-medium text-4xl text-[#
  #131313] mt-20' >
                Design and Development
                <ul className="text-2xl text-[#838383] text-left mt-5 mb-10">
                    <li>
                    We provide comprehensive services to support your business by leveraging strategy.

                    </li>
                </ul>
                </li>
              </ol>
            
            </div>
          </div>
          </div>
    </div>
  );
}

export default App;
