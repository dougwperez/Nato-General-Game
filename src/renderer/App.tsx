import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
import introVideo from './yt5s.com-Fulda Gap(360p).mp4';
import natoLogo from './pngwing.com.png';

const Hello = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={natoLogo} alt="nato-logo" className="nato-logo" />
        <h1>NATO GENERAL </h1>
        {/* <video
          loop
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            boxShadow: '0px 1.35948px 16.3137px rgba(0, 0, 0, 0.1)',
          }}
          width={1000}
          playsInline
          controls
          muted
          autoPlay
          src={introVideo}
          className="intro-video"
        /> */}
        <div class="menu-panel">
          <div class="btn" onclick="replace()">
            <div class="in_btn">Play Now</div>
          </div>
          <div
            class="btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://dougwperez.github.io/scenario-builder/';
            }}
          >
            <div class="in_btn">Map Editor</div>
          </div>
          <div class="btn" onclick="replace()">
            <div class="in_btn">Pick Scenario</div>
          </div>
          <div
            class="btn"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'https://nato-general-intel-reports.fandom.com/wiki/Nato_General_Intel_Reports_Wiki',
                '_blank'
              );
            }}
          >
            <div class="in_btn">Official Wiki</div>
            {/* TODO ADD PROFILE SECTION with unlockable badges, video reels, and game stats */}
            {/* <div class="btn" onclick="replace()">
              <div class="in_btn">Profile</div>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
