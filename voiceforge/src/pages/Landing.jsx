import { ArrowRight, Play, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { assistants } from "../data/assistants";
import "../styles/landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <main className="landing">
      <nav className="landing-nav">
        <div className="brand">
          <div className="brand-icon">
            <Mic size={20} />
          </div>

          <span>VoiceForge</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#use-cases">Use Cases</a>
          <a href="#pricing">Pricing</a>
        </div>

        <button
          className="primary-button"
          onClick={() => navigate("/dashboard")}
        >
          Get Started
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="powered">
          <Mic size={14} />
          Powered by Rime
        </div>

        <h1>
          One <span>Voice.</span>
          <br />
          Endless Possibilities.
        </h1>

        <p>
          A unified voice-native platform to shop, cook, learn,
          play, read and prepare — all through natural conversation.
        </p>

        <div className="hero-actions">
          <button
            className="primary-button large"
            onClick={() => navigate("/dashboard")}
          >
            Start Exploring
            <ArrowRight size={18} />
          </button>

          <button
            className="secondary-button large"
            onClick={() => navigate("/voice")}
          >
            <Play size={17} />
            Watch Demo
          </button>
        </div>

        <div className="voice-visual">
          <div className="wave wave-one"></div>
          <div className="wave wave-two"></div>

          <div className="voice-orb">
            <Mic size={35} />
          </div>
        </div>
      </section>

      <section className="assistant-strip" id="use-cases">
        {assistants.map((assistant) => {
          const Icon = assistant.icon;

          return (
            <div className="mini-assistant" key={assistant.id}>
              <div className="mini-icon">
                <Icon size={20} />
              </div>

              <strong>{assistant.title}</strong>

              <small>
                {assistant.description.split(".")[0]}.
              </small>
            </div>
          );
        })}
      </section>

      <footer>
        Built for real conversations. Powered by Rime.
      </footer>
    </main>
  );
}

export default Landing;
