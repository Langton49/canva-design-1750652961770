// src/App.jsx
import React from 'react';
import './styles/index.css';
import Button from './components/Button';
import SpeakerCard from './components/SpeakerCard';

// Images used from Unsplash for demo/replacement.
// Replace with your own for more accurate customization.
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80';
// Office meeting, other angle
const CONTACT_IMAGE =
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80';
const SPEAKER1 =
  'https://randomuser.me/api/portraits/women/90.jpg';
const SPEAKER2 =
  'https://randomuser.me/api/portraits/men/20.jpg';
const SPEAKER3 =
  'https://randomuser.me/api/portraits/men/65.jpg';

function HeroSection() {
  return (
    <section className="hero-section" style={{ display: 'flex', minHeight: '520px', width: '100%', background: 'var(--primary-green)' }}>
      <div className="hero-left" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 32px 60px 60px', maxWidth: '650px' }}>
        <h1 className="hero-heading">Selling online is vital to business growth.</h1>
        <div className="hero-subheading" style={{ fontSize: 22, fontWeight: 500, marginBottom: 18, color: 'var(--main-white)' }}>
          2025 Grow Your e-Commerce Conference
        </div>
        <div className="hero-event-info" style={{ fontSize: 18, fontWeight: 400, color: 'var(--main-white)', marginBottom: 24, whiteSpace: 'pre-line' }}>
          September 16-18, 2025{ "\n" }Paragon One Plaza and Sky Garden
        </div>
        <Button>BOOK NOW FOR EARLY BIRD PRICES</Button>
      </div>
      <div className="hero-right" style={{ flex: 1, minHeight: 320, display: 'flex' }}>
        {/* Replace src with your own office/meeting banner if desired */}
        <img
          src={HERO_IMAGE}
          alt="Modern office meeting"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-section {
            flex-direction: column;
            min-height: unset;
          }
          .hero-left {
            padding: 36px 20px 28px 20px !important;
            max-width: 100%;
          }
          .hero-right {
            min-height: 180px;
            max-height: 220px;
          }
        }
        @media (max-width: 520px) {
          .hero-left {
            padding: 20px 10px 16px 10px !important;
          }
        }
      `}</style>
    </section>
  );
}

function SpeakersSection() {
  return (
    <section className="speakers-section" style={{ background: 'var(--accent-yellow)', color: 'var(--main-black)', padding: '48px 32px', width: '100%' }}>
      <div style={{ maxWidth: 1260, margin: '0 auto', width: '100%' }}>
        <h2 className="section-title" style={{ color: 'var(--main-black)' }}>
          Our 2025 Keynote Speakers
        </h2>
        <div className="speakers-group" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
          <SpeakerCard
            img={SPEAKER1}
            name="Leslie Boatwright"
            title="Head of Marketing"
            org="The Hobbibox"
            date="September 16"
          />
          <SpeakerCard
            img={SPEAKER2}
            name="Nicholas Newark"
            title="Director of Design"
            org="Studio Ralla"
            date="September 17"
          />
          <SpeakerCard
            img={SPEAKER3}
            name="Kin Gyun"
            title="Founder and CEO"
            org="The Treasurebox Online"
            date="September 18"
          />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .speakers-section {
            padding: 36px 10px !important;
          }
          .speakers-group {
            flex-direction: column;
            gap: 26px;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" style={{ background: 'var(--primary-green)', color: 'var(--main-white)', width: '100%', display: 'flex', minHeight: 380 }}>
      <div className="contact-left" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 32px 60px 60px', maxWidth: 560, boxSizing: 'border-box' }}>
        <h2 className="section-title" style={{ color: 'var(--main-white)', marginBottom: 24 }}>Reach Out</h2>
        <div className="contact-info" style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 14 }}>
          <div>Conference Secretariat<br/>
            163 Woodlands Place<br/>
            Algies Bay, Rodney 0920
          </div>
          <div style={{ margin: '18px 0 5px 0' }}>
            123-456-7890<br/>
            <a href="mailto:hello@reallygreatsite.com" className="text-link">hello@reallygreatsite.com</a><br/>
            <a href="https://instagram.com/reallygreatsite" className="text-link" target="_blank" rel="noopener noreferrer">@reallygreatsite</a>
          </div>
        </div>
        <Button>RESERVE YOUR SEAT</Button>
      </div>
      <div className="contact-right" style={{ flex: 1, display: 'flex' }}>
        {/* Replace with another office or conference photo if desired */}
        <img
          src={CONTACT_IMAGE}
          alt="Contact event meeting"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <style>{`
        @media (max-width: 900px) {
          .contact-section {
            flex-direction: column;
            min-height: unset;
          }
          .contact-left {
            padding: 36px 16px 24px 16px !important;
            max-width: 100%;
          }
          .contact-right {
            min-height: 200px;
            max-height: 240px;
          }
        }
        @media (max-width: 540px) {
          .contact-left {
            padding: 20px 10px 14px 10px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default function App() {
  return (
    <div style={{ background: 'var(--primary-green)' }}>
      <HeroSection />
      <SpeakersSection />
      <ContactSection />
    </div>
  );
}
