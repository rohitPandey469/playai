import { useEffect } from "react";
import { open as openEmbed } from "@play-ai/web-embed";

const webEmbedId = "new-web-embed-id-for-mickey"; // Change the web embed ID here

export default function MickeyVoice() {
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
    openEmbed(webEmbedId, { events, onEvent });
  }, []);

  // Inline styles for container, content, and title
  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #00aaff, #0055ff)', // Blue gradient for MickeyVoice
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
          Let's talk to Mickey Voice Assistant
        </div>
      </div>
    </div>
  );
}
