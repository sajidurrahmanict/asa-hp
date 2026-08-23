import Header from './components/Header';
import Hero from './components/Hero';
import AboutBrief from './components/AboutBrief';
import Founder from './components/Founder';
import Management from './components/Management';
import Organogram from './components/Organogram';
import MissionVision from './components/MissionVision';
import Programs from './components/Programs';
import NoticeBoard from './components/NoticeBoard';
import NewsUpdates from './components/NewsUpdates';
import Downloads from './components/Downloads';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';

export default function App() {
  const isAdmin =
    typeof window !== 'undefined' &&
    (window.location.pathname === '/admin' || window.location.hash === '#admin' || window.location.hash === '#/admin');

  return (
    <div className="min-h-screen bg-sand-50">
      <Header />
      <main>
        {isAdmin ? (
          <Admin />
        ) : (
          <>
            <Hero />
            <AboutBrief />
            <Founder />
            <Management />
            <Organogram />
            <MissionVision />
            <Programs />
            <NoticeBoard />
            <NewsUpdates />
            <Downloads />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
