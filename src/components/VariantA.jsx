import React from 'react';
import portfolioData from '../data/portfolio.json';
const { PORTFOLIO_DATA, I18N } = portfolioData;
import { primaryBtnStyle, chipStyle } from '../utils/styles';
import EffectsBackground from './atoms/EffectsBackground';
import ScrambleText from './atoms/ScrambleText';
import LangToggle from './atoms/LangToggle';
import CornerTicks from './atoms/CornerTicks';
import ProjectModal from './atoms/ProjectModal';
import Divider from './layout/Divider';
import SectionHeader from './layout/SectionHeader';
import KeyVal from './layout/KeyVal';
import ExperienceRow from './layout/ExperienceRow';
import ProjectCard from './layout/ProjectCard';
import CertRow from './layout/CertRow';
import ContactRow from './layout/ContactRow';

const ACCENT = '#7ab8ff';

function sectionStyle() {
  return { position: 'relative', maxWidth: 1180, margin: '0 auto', zIndex: 1 };
}

export default function VariantA({ effectsIntensity = 0.5 }) {
  const [lang, setLang] = React.useState('es');
  const [projectFilter, setProjectFilter] = React.useState('all');
  const [activeProject, setActiveProject] = React.useState(null);

  const D = PORTFOLIO_DATA;
  const t = I18N[lang];
  const accent = ACCENT;

  const allTags = React.useMemo(() => {
    const s = new Set();
    D.projects.forEach((p) => p.tags.forEach((tag) => s.add(tag)));
    return ['all', ...Array.from(s)];
  }, [D]);

  const filteredProjects =
    projectFilter === 'all' ? D.projects : D.projects.filter((p) => p.tags.includes(projectFilter));

  return (
    <div
      style={{
        background: '#06070a',
        color: '#cfd3d8',
        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
        minHeight: 1600,
        position: 'relative',
        overflow: 'clip',
        width: '100%',
      }}
    >
      <EffectsBackground intensity={effectsIntensity} accent={accent} />

      {/* TOP BAR */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(6,7,10,0.82)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid #14171c',
        }}
      >
        <div className="resp-header-inner">
          <nav className="resp-nav">
            {[
              ['#about', t.nav_about],
              ['#experience', t.nav_experience],
              ['#skills', t.nav_skills],
              ['#projects', t.nav_projects],
              ['#certs', t.nav_certs],
              ['#education', t.nav_education],
              ['#contact', t.nav_contact],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                style={{ color: 'inherit', textDecoration: 'none', letterSpacing: '0.06em' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#8a929c')}
              >
                <ScrambleText text={label} duration={300} />
              </a>
            ))}
          </nav>
          <LangToggle lang={lang} setLang={setLang} accent={accent} />
        </div>
      </header>

      {/* HERO */}
      <section id="about" className="resp-hero-section">
        <div className="resp-hero-grid">
          <div>
            <div style={{ fontSize: 11, color: accent, letterSpacing: '0.24em', marginBottom: 20 }}>
              [01] // {lang === 'es' ? 'PERFIL' : 'PROFILE'}
            </div>
            <h1 className="resp-hero-title">
              <ScrambleText text={D.identity.name} duration={700} trigger="mount" />
            </h1>
            <div style={{ fontSize: 18, color: '#8a929c', marginTop: 18, letterSpacing: '0.02em' }}>
              {lang === 'es' ? D.identity.role_es : D.identity.role_en} ·{' '}
              <span style={{ color: accent }}>aka {D.identity.handle}</span>
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: '#bfc4cb',
                marginTop: 36,
                maxWidth: 620,
                textWrap: 'pretty',
              }}
            >
              {lang === 'es' ? D.bio_es : D.bio_en}
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
              <a href="#contact" style={primaryBtnStyle(accent)}>
                {t.send_message}  →
              </a>
              <a
                href="/cv.pdf"
                download="CV_MiguelRobledoFernandez.pdf"
                style={{
                  fontFamily: 'inherit',
                  fontSize: 12,
                  letterSpacing: '0.14em',
                  color: '#cfd3d8',
                  border: '1px solid #2a2e36',
                  padding: '10px 16px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                ↓ {t.download_cv}
              </a>
            </div>
          </div>

          {/* status card */}
          <div
            style={{
              border: '1px solid #2a2e36',
              padding: '20px 22px',
              background: 'rgba(15,17,21,0.6)',
              position: 'relative',
            }}
          >
            <CornerTicks color={accent} />
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <img
                src="/avatar.png"
                alt="Miguel Robledo"
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: '50%',
                  border: `2px solid ${accent}`,
                  objectFit: 'cover',
                  filter: 'grayscale(20%)',
                }}
              />
            </div>
            <KeyVal k={t.role} v={lang === 'es' ? D.identity.role_es : D.identity.role_en} />
            <KeyVal k={t.location} v={lang === 'es' ? D.identity.location_es : D.identity.location_en} />
            <KeyVal k={t.status} v={lang === 'es' ? D.identity.status_es : D.identity.status_en} accent={accent} />
            <div style={{ borderTop: '1px solid #1c1f25', marginTop: 16, paddingTop: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {D.metrics.map((m) => (
                  <div key={m.label_es}>
                    <div style={{ fontSize: 22, color: '#f4f5f7', fontWeight: 600 }}>{m.value}</div>
                    <div style={{ fontSize: 10, color: '#5a6168', letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 2 }}>
                      {lang === 'es' ? m.label_es : m.label_en}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider accent={accent} />

      {/* EXPERIENCE */}
      <section id="experience" className="resp-section" style={sectionStyle()}>
        <SectionHeader idx="02" label={t.section_experience} accent={accent} lang={lang} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 40 }}>
          {D.experience.map((e, i) => (
            <ExperienceRow key={i} item={e} lang={lang} accent={accent} last={i === D.experience.length - 1} />
          ))}
        </div>
      </section>

      <Divider accent={accent} />

      {/* SKILLS */}
      <section id="skills" className="resp-section" style={sectionStyle()}>
        <SectionHeader idx="03" label={t.section_skills} accent={accent} lang={lang} />
        <div className="resp-grid-2" style={{ marginTop: 40 }}>
          {D.skills.map((s) => (
            <div
              key={s.group_es}
              style={{ border: '1px solid #1c1f25', padding: '20px 22px', position: 'relative' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2a2e36')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1c1f25')}
            >
              <div style={{ fontSize: 11, color: accent, letterSpacing: '0.18em', marginBottom: 14, textTransform: 'uppercase' }}>
                // {lang === 'es' ? s.group_es : s.group_en}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {s.items.map((it) => (
                  <span key={it} style={chipStyle()}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider accent={accent} />

      {/* PROJECTS */}
      <section id="projects" className="resp-section" style={sectionStyle()}>
        <SectionHeader idx="04" label={t.section_projects} accent={accent} lang={lang} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, color: '#5a6168', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {t.filter_by}:
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setProjectFilter(tag)}
              style={{
                fontFamily: 'inherit',
                fontSize: 11,
                letterSpacing: '0.06em',
                color: projectFilter === tag ? '#06070a' : '#cfd3d8',
                background: projectFilter === tag ? accent : 'transparent',
                border: `1px solid ${projectFilter === tag ? accent : '#2a2e36'}`,
                padding: '5px 12px',
                cursor: 'pointer',
                textTransform: tag === 'all' ? 'uppercase' : 'none',
              }}
            >
              {tag === 'all' ? t.all : tag}
            </button>
          ))}
        </div>
        <div className="resp-projects-grid" style={{ marginTop: 28 }}>
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} lang={lang} accent={accent} onOpen={() => setActiveProject(p)} />
          ))}
        </div>
      </section>

      <Divider accent={accent} />

      {/* CERTS */}
      <section id="certs" className="resp-section" style={sectionStyle()}>
        <SectionHeader idx="05" label={t.section_certs} accent={accent} lang={lang} />
        <div className="resp-cert-wrap">
        <div style={{ marginTop: 40, border: '1px solid #1c1f25', minWidth: 580 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 110px 1fr 200px 80px 100px',
              padding: '12px 20px',
              borderBottom: '1px solid #1c1f25',
              fontSize: 10,
              color: '#5a6168',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            <span>#</span>
            <span>code</span>
            <span>{lang === 'es' ? 'nombre' : 'name'}</span>
            <span>{t.issuer}</span>
            <span>{t.year}</span>
            <span style={{ textAlign: 'right' }}>{t.status}</span>
          </div>
          {D.certs.map((c, i) => (
            <CertRow key={c.id} cert={c} idx={i} accent={accent} lang={lang} t={t} />
          ))}
        </div>
        </div>
      </section>

      <Divider accent={accent} />

      {/* EDUCATION */}
      <section id="education" className="resp-section" style={sectionStyle()}>
        <SectionHeader idx="06" label={t.section_education} accent={accent} lang={lang} />
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {D.education.map((ed, i) => (
            <div key={i} className="resp-edu-row">
              <div style={{ fontSize: 11, color: accent, letterSpacing: '0.16em', paddingTop: 4 }}>{ed.period}</div>
              <div>
                <div style={{ fontSize: 16, color: '#f4f5f7', fontWeight: 500, marginBottom: 4 }}>
                  {lang === 'es' ? ed.title_es : ed.title_en}
                </div>
                <div style={{ fontSize: 12, color: '#8a929c' }}>{ed.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider accent={accent} />

      {/* CONTACT */}
      <section id="contact" className="resp-section" style={{ ...sectionStyle(), paddingBottom: 60 }}>
        <SectionHeader idx="08" label={t.section_contact} accent={accent} lang={lang} />
        <div className="resp-contact-grid" style={{ marginTop: 40 }}>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#bfc4cb', maxWidth: 460, textWrap: 'pretty' }}>
              {t.contact_intro}
            </p>
            <div style={{ marginTop: 24, fontSize: 11, color: '#5a6168', letterSpacing: '0.18em' }}>
              {t.encrypted.toUpperCase()}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ContactRow label="EMAIL"    value={D.identity.email}    href={`mailto:${D.identity.email}`}    accent={accent} />
            <ContactRow label="LINKEDIN" value={D.identity.linkedin} href={D.identity.linkedin_url}         accent={accent} />
            <ContactRow label="GITHUB"   value={`@${D.identity.github}`} href={D.identity.github_url}       accent={accent} />
          </div>
        </div>

        <div
          style={{
            marginTop: 80,
            paddingTop: 24,
            borderTop: '1px solid #14171c',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 10,
            color: '#5a6168',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          <span>MIGUEL ROBLEDO · {D.identity.handle}</span>
          <span>v1.0.0 — last build 2026.05</span>
        </div>
      </section>

      <ProjectModal project={activeProject} lang={lang} onClose={() => setActiveProject(null)} accent={accent} />
    </div>
  );
}
