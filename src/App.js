import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './MediaQueries.css';

import Home from './pages/home';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Team from './pages/Team';
import News_Blog from './pages/News_Blog';
import Page2 from './pages/page/Page2';
import Page3 from './pages/page/Page3';
import Page4 from './pages/page/Page4';
import Page5 from './pages/page/Page5';
import Page6 from './pages/page/Page6';
import Page7 from './pages/page/Page7';
import Page8 from './pages/page/Page8';
import Page9 from './pages/page/Page9';
import Page10 from './pages/page/Page10';
import Page11 from './pages/page/Page11';
import Career from './pages/Career';

import ImportanceOfSecurity from './pages/pagesLinks/ImportanceOfSecurty';
import ADecatedTeam from './pages/pagesLinks/ADecatedTeam';
import ProgrammingLForMAD from './pages/pagesLinks/ProgrammingLForMAD';
import StreamYourSales from './pages/pagesLinks/StreamYourSales';
import CustumSoftwear from './pages/pagesLinks/CustumSoftwear';
import Devops from './pages/pagesLinks/Devops';
import Ethics from './pages/pagesLinks/Ethics';
import MentalHealthSoftware from './pages/pagesLinks/MentalHealthSoftware';
import DiscoveryWorkShop from './pages/pagesLinks/DiscoveryWorkShop';
import Bennifit from './pages/pagesLinks/Bennifit';
import BestManaging from './pages/pagesLinks/BestManaging';
import BestSoftware from './pages/pagesLinks/BestSoftware';
import BennifitsOfHirring from './pages/pagesLinks/BennifitsOfHirring';
import BabyBoomers from './pages/pagesLinks/BabyBoomers';
import AutoMationTools from './pages/pagesLinks/AutoMationTools';


function App() {
  return (
    <>


      <BrowserRouter>
        <Navigation />


        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Our-team' element={<Team />} />
          <Route path='/career' element={<Career />} />
          <Route path='/news-blog' element={<News_Blog />} />
          <Route path='/news-blog/page/2' element={<Page2 />} />
          <Route path='/news-blog/page/3' element={<Page3 />} />
          <Route path='/news-blog/page/4' element={<Page4 />} />
          <Route path='/news-blog/page/5' element={<Page5 />} />
          <Route path='/news-blog/page/6' element={<Page6 />} />
          <Route path='/news-blog/page/7' element={<Page7 />} />
          <Route path='/news-blog/page/8' element={<Page8 />} />
          <Route path='/news-blog/page/9' element={<Page9 />} />
          <Route path='/news-blog/page/10' element={<Page10 />} />
          <Route path='/news-blog/page/11' element={<Page11 />} />
          <Route path='/news-blog/the-importance-of-security-in-mobile-app-development-services' element={<ImportanceOfSecurity />} />
          <Route path='/news-blog/staff-agumentation-vs-outsourcing-a-dedicated-team' element={<ADecatedTeam />} />
          <Route path='/news-blog/top-10-programming-languages-for-mobile-app-development' element={ <ProgrammingLForMAD /> } />
          <Route path='/news-blog/streamling-your-sales-process-with-crm-for-real-estate-agents' element={ <StreamYourSales /> } />
          <Route path='/news-blog/why-custom-software-development-is-crucial-for-businesses' element={ <CustumSoftwear /> } />
          <Route path='/news-blog/what-technologies-do-i-need-to-know-for-devops' element={ <Devops /> } />
          <Route path='/news-blog/benefits-of-ai-chatbots-for-automatting-cutomer-experience' element={ <Bennifit /> } />
          <Route path='/news-blog/the-importence-of-ethics-in-ai-machine-learning' element={ <Ethics /> } />
          <Route path='/news-blogbs/6-best-real-estate-crm-software-for-2023' element={ <BestSoftware /> } />
          <Route path='/news-blog/what-is-a-disCovery-workshop-and-how-to-facilitate-it' element={ <DiscoveryWorkShop /> } />
          <Route path='/news-blog/top-6-mental-health-software-solutions-in-2023' element={ <MentalHealthSoftware /> } />
          <Route path='/news-blog/why-do-baby-boomers-donot-understand-technology' element={ <BabyBoomers /> } />
          <Route path='/news-blog/best-practoies-for-managing-staff-augmantation-teams' element={ <BestManaging /> } />
          <Route path='/news-blog/what-are-the-automation-tools-used-in-devops' element={ <AutoMationTools /> } />
          <Route path='/news-blog/benefits-of-hiring-an-experts-devops-consultant' element={ <BennifitsOfHirring /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
