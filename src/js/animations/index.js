import './nav/navAnimations';
import topTL from './top/topAnimations';
import servicesScene from './services/servicesAnimations';
import portfolioScene from './portfolio/portfolioAnimations';
import aboutScene from './about/aboutAnimations';
import teamScene from './team/teamAnimations';
import contactScene from './contact/contactAnimations';

window.onload = () => {
  topTL();
  servicesScene();
  portfolioScene();
  aboutScene();
  teamScene();
  contactScene();
};
