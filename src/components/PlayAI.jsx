import { useEffect } from "react";
import { open as openEmbed } from "@play-ai/web-embed";
import { useLocation, useNavigate } from "react-router-dom";

const webEmbedId = "yA3sf6kuN75Kx7-6fbNaK";

export default function PlayAI() {
  const location = useLocation();
  const navigate = useNavigate();
  const events = [
    {
      name: "voice-response",
      when: "The user says what they want to know",
    },
  ];

  const onEvent = (event) => {
    console.log("onEvent: ", event);
  };

  useEffect(() => {
    console.log("Mic Loading start for PlayAI component...")
    openEmbed(webEmbedId, { events, onEvent });
    console.log("Mic loading ended for PlayAI component...")
  }, [location, navigate]);

  // Inline styles for container, content, and title
  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  };

  const titleStyle = {
    fontWeight: 600,
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={titleStyle}>
          Let's talk to the voice assistant
        </div>
      </div>
    </div>
  );
}
