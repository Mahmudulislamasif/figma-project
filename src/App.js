import logo from './logo.svg';
import './App.css';
import image from'./Assets/Rectangle 5356.png'
import image2 from './Assets/Group 1000004056.png'
import image3 from './Assets/Group 1000004057.png'
function App() {
  return (
    <div className='App'>
          <div>
          <img src={image2} alt="" className="absolute block md:hidden top-5 left-10" />
          <p className="text-3xl font-bold text-[#131313] mx-6 my-11 block md:hidden">How We Work To <br /> Powerfull <span className="text-[#5D51F2]">Help You</span> </p>
          </div>
          <div className="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img className="md:pt-32 mx-auto w-11/12" src={image} alt="" />
            </div>
            
            <div className="relative">
              <img src={image2} alt="" className="absolute hidden md:block top-28 -left-10" />
              <img src={image3} alt="" className="absolute -right-20 top-0 hidden md:block" />
              <p className="text-6xl text-left font-bold text-[#131313] mt-32 hidden md:block">How We Work To Powerfull <span className="text-[#5D51F2]">Help You</span> </p>
              <ol class="list-decimal ml-6 md:ml-20">
                    <li className='text-left font-medium md:font-medium text-lg  md:text-4xl text-[#
  #131313] mt-20 mb-7 md:mb-10'> Sitemap and user flow
                    <ul className="text-sm md:text-2xl text-[#838383] text-left mt-5 mb-10">
                        <li>
                          We provide comprehensive services to support your business by leveraging strategy.
                        </li>
                    </ul>
                    </li>
                
                <li className='text-left font-medium md:font-medium text-lg md:text-4xl text-[#
  #131313] mt-20 mb-7 md:mb-10'>
                Wireframe
                  <ul className="text-sm md:text-2xl text-[#838383] text-left mt-5">
                    <li>We provide comprehensive services to support your business by leveraging strategy.</li>
                  </ul>
                </li>
                <li className='text-left font-medium md:font-medium text-lg md:text-4xl text-[#
  #131313] mt-20' >
                Design and Development
                <ul className="text-sm md:text-2xl text-[#838383] text-left mt-5 mb-10">
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
