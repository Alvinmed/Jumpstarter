# Creating a landing page for FrailtyLens
_Exported on 11/11/2025 at 10:46:09 GMT+8 from Cursor (2.0.69)_

---

**User**

i am now creating a landing page for my pompeition project .
@https://www.jumpstarter.hk/en/zpire 


idea about our solution

Frailty 
Problem 

1. Identifying the Wellness Challenge

Background and Significance
Frailty, a growing but often under-detected public health issue, is recognised in clinical practice due to its impact on outcomes such as falls, disability, hospitalisation, and mortality. However with Hong Kong’s rapid ageing population, the proportion of elderly persons aged 65 and over is projected to increase from 20.5% in 2021 to 36.0% in 2046 (Census and Statistic Department, 2023), increasing healthcare burden.

Clinical and Health System Impact
Early detection enables risk stratification and guides treatment decisions. As frailty is dynamic and potentially reversible, targeted interventions can reduce or slow its progression. Recognising frailty supports patient-centred care and helps optimise health care planning and resource allocation.
Current frailty screening tools (e.g., Clinical Frailty Scale, Fried criteria) are underused in busy primary care and community settings due to time constraints, stigma, and lack of continuous monitoring. Most cases are identified after complications have occurred, missing the critical window for early intervention.


FrailtyLens is a mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention.
 

Key Features
Biosocial framework : bio , social , psycho
 1. Biological Domain (Physical Health)
Frailty Scoring & Monitoring
Passive data collection using wearable sensors (e.g., Apple Watch) to track gait speed, activity level, tremor, and heart rate variability, which are key early indicators of physical frailty.
Active screening through digital frailty assessments (e.g., Clinical Frailty Scale, FRAIL questionnaire, timed-up-and-go test via phone camera). Integration with Clinical Frailty Scale (CFS). CFS serves as both a ground truth label for AI training and a clinician-facing indicator for triage and follow-up.
AI algorithms generate frailty risk scores and detect early changes, supporting early diagnosis and personalised intervention. It provides exercise recommendations (resistance training), nutritional advice, and progress tracking to help users reverse or slow frailty progression.
Health Parameter Integration
Optional linkage with Electronic Health Record (eHRSS) for relevant comorbidities (e.g., diabetes, cardiovascular disease), allowing the model to adjust risk prediction accordingly.


Psychological domain 
The psychological component of frailty is often overlooked, even though mental health changes and cognitive decline frequently precede or accelerate physical frailty. To address this, our app integrates a multilingual text- and voice-based chatbot that acts as a daily cognitive and emotional check-in companion for older adults.
This chatbot serves two main functions:
Early detection of cognitive and neurodegenerative changes (e.g., dementia, mild cognitive impairment).
Psychological support through regular mood monitoring, guided conversations, and early triage for mental health issues such as depression or anxiety.

1. Early Dementia and Neurodegenerative Detection
The chatbot engages users in short, natural conversations daily or several times a week, using both text and voice. The interaction is analysed using natural language processing (NLP) and speech analytics to detect early cognitive changes, such as:
Language markers: increased word-finding difficulty, shorter sentences, reduced vocabulary, semantic errors.
Speech features: slower speech, longer pauses, changes in pitch or fluency (often seen in early neurodegenerative diseases).
Memory prompts: the chatbot may ask the user to recall simple details from previous conversations or perform brief cognitive exercises (e.g., naming animals, recounting daily activities, orientation questions).
Inconsistencies over time: the AI tracks gradual decline across weeks or months, which may indicate early dementia or MCI before formal diagnosis.
These changes are flagged to clinicians or caregivers through the app’s dashboard, enabling earlier referral for cognitive assessment, such as MoCA or neuroimaging, when appropriate.

2.  Psychological Support and Mental Health Screening
Beyond cognition, the chatbot functions as a low-barrier mental health interface for older adults:
Daily mood check-ins using short structured or open-ended questions (e.g., “How are you feeling today?”), analysed for emotional tone, to detect early cognitive or emotional decline, which often overlaps with frailty progression
Validated screening integration: PHQ-9 (depression) and GAD-7 (anxiety) questionnaires can be administered conversationally, increasing comfort and reducing stigma.
Crisis detection: if the chatbot detects signs of significant distress (e.g., hopeless language, agitation), it can trigger alerts to caregivers or connect users to mental health helplines.
Cultural & linguistic adaptation: text and voice options in Cantonese, Mandarin, and English make it accessible to Hong Kong’s elderly population.
Screening for Undiagnosed Mental Illnesses
In-app brief mental health screening tools (e.g., PHQ-9 for depression, GAD-7 for anxiety) administered periodically.
AI models identify patterns of reduced activity, sleep disturbances, or behavioural changes that may indicate undiagnosed or worsening mental health conditions.
Users flagged at risk are prompted for follow-up with primary care or mental health services.

Social domain (Environment & Support)
Social Connectivity Mapping
Tracks social engagement levels through activity check-ins, community event participation, and interaction frequency within the app.
Identifies social isolation, a key driver of frailty progression.
Caregiver & Community Integration
Caregivers and NGOs can access a secure dashboard to monitor user progress, receive alerts, and coordinate community-based interventions (e.g., exercise programmes, fall-prevention classes).
Encourages social prescribing — linking users to community support resource



Reference 
https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061
Fried LP, Tangen CM, Walston J, et al. Frailty in older adults: evidence for a phenotype. J Gerontol A Biol Sci Med Sci 2001;56:M146-56.


---

**Cursor**

I'll start by scaffolding a small, mobile-first static site repo for your FrailtyLens landing page, plus the required chat.md and a README with GitHub Pages deploy steps. Then I’ll implement the sections and responsive styles.

---

**User**

@https://scale.com/  make the style of the page more cutting edge but at the same time the web and our solution are elderly related or longitnlty and live related so use the colour more brigth and show energtic but not dark theme colour .

---

**Cursor**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FrailtyLens | Active Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">FrailtyLens</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span className="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            FrailtyLens blends wearable biometrics, cognitive voice coaching, and social
            engagement signals to keep older adults in Hong Kong thriving—long before
            crisis strikes.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore FrailtyLens</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>Shortlisted · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="card card--status">
            <span class="card__label">Daily Vitality</span>
            <strong>78%</strong>
            <p>Improving from last week · keep up your mobility streak!</p>
          </div>
          <div class="card card--heatmap">
            <span class="card__label">Frailty Trajectory</span>
            <canvas id="trendChart" width="320" height="200" aria-hidden="true"></canvas>
          </div>
          <div class="card card--chat">
            <span class="card__label">Caring Companion</span>
            <p>
              “早晨！Ready for a 5-minute stretch by the harbour? I’ll track your balance
              and send feedback.”
            </p>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>FrailtyLens: a biosocial AI companion for proactive ageing</h2>
          </div>
          <p>
            We pair continuous wearable signals with cognitive conversation analytics and
            social engagement insights to deliver actionable, personalised care plans for
            older adults, caregivers, and clinicians.
          </p>
        </div>
        <div class="cards cards--grid">
          <article class="feature-card">
            <div class="feature-card__icon">🩺</div>
            <h3>Biological intelligence</h3>
            <p>
              Gait, tremor, heart-rate variability, and mobility streaks flow in from Apple
              Watch and other wearables. Digital CFS, timed-up-and-go, and FRAIL
              assessments refresh longitudinal baselines.
            </p>
          </article>
          <article class="feature-card">
            <div class="feature-card__icon">🧠</div>
            <h3>Psychological resilience</h3>
            <p>
              Multilingual voice and text conversations screen for cognition, memory
              retention, mood, and anxiety using PHQ-9, GAD-7, and custom prompts. NLP and
              speech analytics surface subtle decline.
            </p>
          </article>
          <article class="feature-card">
            <div class="feature-card__icon">🤝</div>
            <h3>Social vitality</h3>
            <p>
              Community check-ins, caregiver notes, and NGO programme attendance build a
              living map of support. Alerts nudge social prescribing when isolation rises.
            </p>
          </article>
          <article class="feature-card">
            <div class="feature-card__icon">📊</div>
            <h3>Clinician dashboard</h3>
            <p>
              Frailty trajectory scoring, risk heatmaps, and recommended interventions
              allow primary care to triage earlier and allocate resources effectively.
            </p>
          </article>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>

```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 20px;
}

.card {
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

.card__label {
  display: inline-block;
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 12px;
}

.card--status strong {
  font-size: 2.4rem;
  font-weight: 700;
  font-family: "Outfit", sans-serif;
}

.card--heatmap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card--chat p {
  font-size: 1rem;
  color: var(--text-muted);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: grid;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }
}

```

```javascript
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".nav-toggle__bar");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!expanded).toString());
    menu.classList.toggle("is-open");
    bars[0].style.transform = menu.classList.contains("is-open")
      ? "translateY(8px) rotate(45deg)"
      : "";
    bars[1].style.opacity = menu.classList.contains("is-open") ? "0" : "1";
    bars[2].style.transform = menu.classList.contains("is-open")
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        bars[0].style.transform = "";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "";
      }
    }
  });
});

// Mock chart render
const canvas = document.getElementById("trendChart");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, "rgba(93, 208, 255, 0.8)");
  gradient.addColorStop(1, "rgba(113, 242, 196, 0.1)");

  const points = [60, 58, 56, 53, 50, 48, 46, 44, 42, 40, 38];
  const stepX = canvas.width / (points.length - 1);

  ctx.lineWidth = 2.5;
  ctx.strokeStyle = "#1d86ff";
  ctx.fillStyle = gradient;

  ctx.beginPath();
  points.forEach((value, index) => {
    const x = index * stepX;
    const y = canvas.height - (value / 100) * canvas.height;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();
}

```

```markdown
# FrailtyLens Landing Page

FrailtyLens is our Jumpstarter ZPIRE wellness challenge concept: a biosocial AI companion that fuses wearable biometrics, cognitive voice coaching, and social engagement insights to detect frailty early and keep Hong Kong’s older adults thriving.

This repository hosts the static landing page required for the Vibe Coding Challenge submission.

## Project Structure

- `index.html` – single-page landing experience
- `styles.css` – global design system and responsive layout
- `main.js` – light interactivity (mobile nav, smooth scroll, hero chart)
- `chat.md` – documentation of AI collaboration per challenge rules

## Getting Started

### Run locally

```bash
# Option 1: use Python simple server
python -m http.server 3000

# Option 2: use Node http-server (install once globally)
npm install --global http-server
http-server -p 3000
```

Open `http://localhost:3000` to preview the site.

### Deploy on GitHub Pages

1. Commit and push to a GitHub repository.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from branch**.
4. Select your default branch and `/ (root)` directory, then save.
5. Wait for the deployment to finish; the hosted URL will appear on the Pages screen.

## License

Proprietary – FrailtyLens team, Jumpstarter ZPIRE 2025. Contact us for reuse requests.

```

```markdown
---
title: "FrailtyLens · AI Collaboration Log"
date: "2025-11-10"
team: "FrailtyLens"
challenge: "Jumpstarter ZPIRE · Vibe Coding Challenge"
---

## AI Interaction Overview

- **GPT-5 Codex (Cursor)** – primary coding partner for ideation-to-implementation of landing page structure, content, and responsive styling.
- **GPT-5 Codex (content drafting)** – refined messaging for wellness problem framing, solution narrative, and stakeholder impact.

## Prompting Details

1. *"Create a landing page for FrailtyLens frailty detection concept with sections on problem and biosocial solution."*  
   - Generated the initial scaffold and suggested modern information architecture.
2. *"Style the page with energetic yet elder-friendly palette similar to cutting-edge wellness brands."*  
   - Delivered the bright gradient theme, card components, and responsive layout aligned with Scale-style visual energy.
3. *"Add conversational AI, clinical references, and Hong Kong context."*  
   - Expanded the psychological domain, CFS integration, and regional statistics references.

## Project Evolution

- **Early iteration** focused on structuring hero, problem framing, solution pillars, and call-to-action for pilot partners.
- **Styling iteration** introduced vibrant gradients, glassmorphism cards, and mobile-first navigation inspired by contemporary AI landing pages.
- **AI ethics and impact section** aligned messaging with enterprise-grade governance signals, referencing responsible AI partners.
- **Final polish** added stat banners, team bios, and contact form to complete the Vibe Coding submission requirements.

## References

- Hong Kong Census and Statistics Department: projected ageing demographics (2023).  
- Fried et al. (2001) – Frailty phenotype framework informing risk scoring.
- Scale AI design language for modern, energetic AI brand cues.

```

## Summary
- Built a single-page `index.html` experience that spotlights the frailty challenge, the FrailtyLens biosocial solution, AI workflow, ecosystem impact, team, and pilot CTA while keeping content aligned with Jumpstarter ZPIRE wellness criteria ([Jumpstarter ZPIRE overview](https://www.jumpstarter.hk/en/zpire)).  
- Crafted an energetic yet elder-friendly design system in `styles.css` featuring bright gradients, glassmorphism cards, and responsive layouts inspired by contemporary enterprise AI aesthetics ([Scale AI design cues](https://scale.com/)).  
- Added lightweight interactivity in `main.js` for mobile navigation, smooth scrolling, and a hero trend visualization; documented collaboration and deployment guidance in `chat.md` and `README.md`.

## Testing
- Not run (static page – manual browser preview recommended).

---

**User**

run live preview using extentsion

---

**Cursor**

### Fastest: Live Server (VS Code/Cursor extension)
1. Open `index.html` in Cursor.
2. If you see “Go Live” in the status bar, click it. Otherwise:
   - Press Ctrl+Shift+X → search “Live Server (Ritwick Dey)” → Install.
   - Reload the window if prompted.
3. Click “Go Live” (bottom-right) → your browser opens at something like:
   - `http://127.0.0.1:5500/index.html` (auto-reloads on save).
4. To stop: click “Port: 5500” or “Stop Live Server” in the status bar.

### Alternative: Microsoft Live Preview
1. Ctrl+Shift+X → install “Live Preview (Microsoft)”.
2. With `index.html` focused: Ctrl+Shift+P → “Live Preview: Show Preview”.
3. Use the embedded browser tab; it hot-reloads on save.

Tip: If the page doesn’t refresh, ensure you’re previewing `index.html` in `C:\Users\User\OneDrive\桌面\Jumpstarter\` and not a cached tab.

---

**User**

make a mobile view that is fit and scale in both ios and andrid system

---

**Cursor**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FrailtyLens | Active Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">FrailtyLens</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            FrailtyLens blends wearable biometrics, cognitive voice coaching, and social
            engagement signals to keep older adults in Hong Kong thriving—long before
            crisis strikes.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore FrailtyLens</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>Shortlisted · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="card card--status">
            <span class="card__label">Daily Vitality</span>
            <strong>78%</strong>
            <p>Improving from last week · keep up your mobility streak!</p>
          </div>
          <div class="card card--heatmap">
            <span class="card__label">Frailty Trajectory</span>
            <canvas id="trendChart" width="320" height="200" aria-hidden="true"></canvas>
          </div>
          <div class="card card--chat">
            <span class="card__label">Caring Companion</span>
            <p>
              “早晨！Ready for a 5-minute stretch by the harbour? I’ll track your balance
              and send feedback.”
            </p>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>FrailtyLens: a biosocial AI companion for proactive ageing</h2>
          </div>
          <p>
            We pair continuous wearable signals with cognitive conversation analytics and
            social engagement insights to deliver actionable, personalised care plans for
            older adults, caregivers, and clinicians.
          </p>
        </div>
        <div class="cards cards--grid">
          <article class="feature-card">
            <div class="feature-card__icon">🩺</div>
            <h3>Biological intelligence</h3>
            <p>
              Gait, tremor, heart-rate variability, and mobility streaks flow in from Apple
              Watch and other wearables. Digital CFS, timed-up-and-go, and FRAIL
              assessments refresh longitudinal baselines.
            </p>
          </article>
          <article class="feature-card">
            <div class="feature-card__icon">🧠</div>
            <h3>Psychological resilience</h3>
            <p>
              Multilingual voice and text conversations screen for cognition, memory
              retention, mood, and anxiety using PHQ-9, GAD-7, and custom prompts. NLP and
              speech analytics surface subtle decline.
            </p>
          </article>
          <article class="feature-card">
            <div class="feature-card__icon">🤝</div>
            <h3>Social vitality</h3>
            <p>
              Community check-ins, caregiver notes, and NGO programme attendance build a
              living map of support. Alerts nudge social prescribing when isolation rises.
            </p>
          </article>
          <article class="feature-card">
            <div class="feature-card__icon">📊</div>
            <h3>Clinician dashboard</h3>
            <p>
              Frailty trajectory scoring, risk heatmaps, and recommended interventions
              allow primary care to triage earlier and allocate resources effectively.
            </p>
          </article>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 20px;
}

.card {
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

.card__label {
  display: inline-block;
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 12px;
}

.card--status strong {
  font-size: 2.4rem;
  font-weight: 700;
  font-family: "Outfit", sans-serif;
}

.card--heatmap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card--chat p {
  font-size: 1rem;
  color: var(--text-muted);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

## Summary
- Corrected the hero eyebrow class attribute to ensure styling applies on all devices.
- Tightened responsive styles: mobile nav now stays hidden until opened, sections/cards/padding scale smoothly, and typography/layout adapt across iOS/Android breakpoints down to 360 px.

## Testing
- Not run (static responsive updates; verify via browser/device simulator).

---

**User**

make the Our solution to 2 session that can select using a bar. For care giver and for patient and classify the solution to each specifc target

---

**Cursor**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FrailtyLens | Active Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">FrailtyLens</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            FrailtyLens blends wearable biometrics, cognitive voice coaching, and social
            engagement signals to keep older adults in Hong Kong thriving—long before
            crisis strikes.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore FrailtyLens</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>Shortlisted · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="card card--status">
            <span class="card__label">Daily Vitality</span>
            <strong>78%</strong>
            <p>Improving from last week · keep up your mobility streak!</p>
          </div>
          <div class="card card--heatmap">
            <span class="card__label">Frailty Trajectory</span>
            <canvas id="trendChart" width="320" height="200" aria-hidden="true"></canvas>
          </div>
          <div class="card card--chat">
            <span class="card__label">Caring Companion</span>
            <p>
              “早晨！Ready for a 5-minute stretch by the harbour? I’ll track your balance
              and send feedback.”
            </p>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>FrailtyLens adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="FrailtyLens audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="cards cards--grid">
              <article class="feature-card">
                <div class="feature-card__icon">🩺</div>
                <h3>Personal biosignal coach</h3>
                <p>
                  Passive Apple Watch and wearable streams track gait speed, tremor, heart-rate variability, and daily activity, translating them into clear vitality streaks and micro-goals.
                </p>
              </article>
              <article class="feature-card">
                <div class="feature-card__icon">🧠</div>
                <h3>Cognitive & mood companion</h3>
                <p>
                  Daily Cantonese, Mandarin, and English conversations quietly screen for memory lapses, tone shifts, and anxiety using PHQ-9, GAD-7, and adaptive recall prompts.
                </p>
              </article>
              <article class="feature-card">
                <div class="feature-card__icon">🥗</div>
                <h3>Guided longevity journeys</h3>
                <p>
                  AI-generated movement plans, nutrition nudges, and rest routines adjust to individual progress, with gentle reminders, celebratory badges, and caregiver sharing.
                </p>
              </article>
              <article class="feature-card">
                <div class="feature-card__icon">🤝</div>
                <h3>Social vitality map</h3>
                <p>
                  Community event check-ins, hobby clubs, and volunteer meetups are surfaced nearby, nudging participation and flagging isolation risks early.
                </p>
              </article>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="cards cards--grid">
              <article class="feature-card">
                <div class="feature-card__icon">📊</div>
                <h3>Clinician command centre</h3>
                <p>
                  Dynamic CFS-aligned scoring, fall risk heatmaps, and 30/90/180-day forecasts spotlight who needs proactive outreach, with EHRSS data enrichment.
                </p>
              </article>
              <article class="feature-card">
                <div class="feature-card__icon">⚡</div>
                <h3>Smart triage workflows</h3>
                <p>
                  Configurable alert thresholds escalate deterioration, sync visit notes, and schedule telehealth check-ins with one-click referrals to allied health teams.
                </p>
              </article>
              <article class="feature-card">
                <div class="feature-card__icon">📞</div>
                <h3>Caregiver collaboration</h3>
                <p>
                  Family members, domestic helpers, and NGOs share progress dashboards, upload observations, and co-sign intervention plans within consent-controlled spaces.
                </p>
              </article>
              <article class="feature-card">
                <div class="feature-card__icon">📈</div>
                <h3>Population insights</h3>
                <p>
                  Aggregated analytics reveal programme impact, resource demand, and social prescribing outcomes to guide budgeting and policy decisions across districts.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```css
*** Begin Patch
*** Update File: styles.css
@@
 .cards {
   display: grid;
   gap: 28px;
   max-width: var(--max-width);
   margin: 0 auto;
 }
 
+.tab-bar {
+  max-width: var(--max-width);
+  margin: 0 auto 32px;
+  padding: 6px;
+  background: rgba(255, 255, 255, 0.7);
+  border-radius: 999px;
+  border: 1px solid rgba(21, 36, 59, 0.1);
+  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
+  display: flex;
+  gap: 6px;
+  position: relative;
+  overflow: hidden;
+}
+
+.tab {
+  flex: 1;
+  border: none;
+  background: transparent;
+  padding: 14px 18px;
+  border-radius: 999px;
+  font: 600 0.98rem "DM Sans", sans-serif;
+  color: var(--text-muted);
+  cursor: pointer;
+  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
+}
+
+.tab:focus-visible {
+  outline: 2px solid rgba(29, 134, 255, 0.3);
+  outline-offset: 2px;
+}
+
+.tab.is-active {
+  background: var(--gradient);
+  color: #0f2d4f;
+  transform: translateY(-2px);
+}
+
+.tab-panels {
+  max-width: var(--max-width);
+  margin: 0 auto;
+}
+
+.tab-panel {
+  display: none;
+  animation: fadeIn 0.4s ease forwards;
+}
+
+.tab-panel.is-active {
+  display: block;
+}
+
+.tab-panel:not(.is-active) {
+  animation: none;
+}
+
+.cards--three {
   grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
 }
 
 .cards--grid {
   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
@@
 .info-card,
 .feature-card {
   background: var(--bg-light);
   padding: 28px;
   border-radius: var(--radius-md);
@@
 .feature-card__icon {
   font-size: 2rem;
   margin-bottom: 12px;
 }
 
+@keyframes fadeIn {
+  from {
+    opacity: 0;
+    transform: translateY(10px);
+  }
+  to {
+    opacity: 1;
+    transform: translateY(0);
+  }
+}
+
 .timeline {
   display: grid;
   gap: 36px;
   max-width: var(--max-width);
   margin: 0 auto;
@@
   .stat-banner {
     padding: 24px;
   }
+
+  .tab-bar {
+    flex-direction: column;
+    border-radius: 24px;
+    padding: 12px;
+  }
+
+  .tab {
+    width: 100%;
+    border-radius: 20px;
+  }
 }
 
 @media (max-width: 480px) {
*** End Patch
```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 20px;
}

.card {
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

.card__label {
  display: inline-block;
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 12px;
}

.card--status strong {
  font-size: 2.4rem;
  font-weight: 700;
  font-family: "Outfit", sans-serif;
}

.card--heatmap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card--chat p {
  font-size: 1rem;
  color: var(--text-muted);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 20px;
}

.card {
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

.card__label {
  display: inline-block;
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 12px;
}

.card--status strong {
  font-size: 2.4rem;
  font-weight: 700;
  font-family: "Outfit", sans-serif;
}

.card--heatmap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card--chat p {
  font-size: 1rem;
  color: var(--text-muted);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 20px;
}

.card {
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

.card__label {
  display: inline-block;
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 12px;
}

.card--status strong {
  font-size: 2.4rem;
  font-weight: 700;
  font-family: "Outfit", sans-serif;
}

.card--heatmap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card--chat p {
  font-size: 1rem;
  color: var(--text-muted);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

```javascript
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".nav-toggle__bar");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!expanded).toString());
    menu.classList.toggle("is-open");
    bars[0].style.transform = menu.classList.contains("is-open")
      ? "translateY(8px) rotate(45deg)"
      : "";
    bars[1].style.opacity = menu.classList.contains("is-open") ? "0" : "1";
    bars[2].style.transform = menu.classList.contains("is-open")
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        bars[0].style.transform = "";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "";
      }
    }
  });
});

// Mock chart render
const canvas = document.getElementById("trendChart");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, "rgba(93, 208, 255, 0.8)");
  gradient.addColorStop(1, "rgba(113, 242, 196, 0.1)");

  const points = [60, 58, 56, 53, 50, 48, 46, 44, 42, 40, 38];
  const stepX = canvas.width / (points.length - 1);

  ctx.lineWidth = 2.5;
  ctx.strokeStyle = "#1d86ff";
  ctx.fillStyle = gradient;

  ctx.beginPath();
  points.forEach((value, index) => {
    const x = index * stepX;
    const y = canvas.height - (value / 100) * canvas.height;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();
}

// Solution tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

if (tabs.length) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const panel = document.getElementById(targetId);

      if (!panel) return;

      tabs.forEach((btn) => {
        btn.classList.toggle("is-active", btn === tab);
        btn.setAttribute("aria-selected", btn === tab ? "true" : "false");
        btn.setAttribute("tabindex", btn === tab ? "0" : "-1");
      });

      panels.forEach((p) => {
        p.classList.toggle("is-active", p === panel);
        p.setAttribute("hidden", p !== panel);
      });
    });

    // keyboard navigation between tabs
    tab.addEventListener("keydown", (event) => {
      const currentIndex = Array.from(tabs).indexOf(tab);
      let newIndex = currentIndex;

      if (event.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else {
        return;
      }

      event.preventDefault();
      tabs[newIndex].focus();
      tabs[newIndex].click();
    });
  });

  panels.forEach((panel, index) => {
    if (!panel.classList.contains("is-active")) {
      panel.setAttribute("hidden", "true");
    } else {
      tabs[index].setAttribute("tabindex", "0");
    }
  });
}



```

```javascript
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".nav-toggle__bar");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!expanded).toString());
    menu.classList.toggle("is-open");
    bars[0].style.transform = menu.classList.contains("is-open")
      ? "translateY(8px) rotate(45deg)"
      : "";
    bars[1].style.opacity = menu.classList.contains("is-open") ? "0" : "1";
    bars[2].style.transform = menu.classList.contains("is-open")
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        bars[0].style.transform = "";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "";
      }
    }
  });
});

// Mock chart render
const canvas = document.getElementById("trendChart");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, "rgba(93, 208, 255, 0.8)");
  gradient.addColorStop(1, "rgba(113, 242, 196, 0.1)");

  const points = [60, 58, 56, 53, 50, 48, 46, 44, 42, 40, 38];
  const stepX = canvas.width / (points.length - 1);

  ctx.lineWidth = 2.5;
  ctx.strokeStyle = "#1d86ff";
  ctx.fillStyle = gradient;

  ctx.beginPath();
  points.forEach((value, index) => {
    const x = index * stepX;
    const y = canvas.height - (value / 100) * canvas.height;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();
}

// Solution tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

if (tabs.length) {
  tabs.forEach((tab) => {
    if (tab.classList.contains("is-active")) {
      tab.setAttribute("tabindex", "0");
    } else {
      tab.setAttribute("tabindex", "-1");
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const panel = document.getElementById(targetId);

      if (!panel) return;

      tabs.forEach((btn) => {
        btn.classList.toggle("is-active", btn === tab);
        btn.setAttribute("aria-selected", btn === tab ? "true" : "false");
        btn.setAttribute("tabindex", btn === tab ? "0" : "-1");
      });

      panels.forEach((p) => {
        p.classList.toggle("is-active", p === panel);
        p.setAttribute("hidden", p !== panel);
      });
    });

    // keyboard navigation between tabs
    tab.addEventListener("keydown", (event) => {
      const currentIndex = Array.from(tabs).indexOf(tab);
      let newIndex = currentIndex;

      if (event.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else {
        return;
      }

      event.preventDefault();
      tabs[newIndex].focus();
      tabs[newIndex].click();
    });
  });

  panels.forEach((panel, index) => {
    if (!panel.classList.contains("is-active")) {
      panel.setAttribute("hidden", "true");
    } else {
      tabs[index].setAttribute("tabindex", "0");
    }
  });
}



```

## Summary
- Reworked the `#solution` section into a two-tab layout so visitors can toggle between experiences tailored for older adults/families and for caregivers/clinicians.
- Added tab styling, fade-in animation, and responsive adjustments in `styles.css` to keep the selector bar usable on small screens.
- Extended `main.js` with accessible tab behavior (click + keyboard navigation, ARIA syncing, panel hiding).

## Testing
- Not run (static UI change; please open in browser and verify tab toggle on desktop + mobile).

---

**User**

 for the solution part i want to design the sytle like scale ai ( as shown in the image) the descrption in the left and the right is the 3D model for demostrate the idae of the descption on the left corresponddingly

---

**Cursor**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FrailtyLens | Active Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">FrailtyLens</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            Mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore FrailtyLens</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>Shortlisted · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="card card--status">
            <span class="card__label">Daily Vitality</span>
            <strong>78%</strong>
            <p>Improving from last week · keep up your mobility streak!</p>
          </div>
          <div class="card card--heatmap">
            <span class="card__label">Frailty Trajectory</span>
            <canvas id="trendChart" width="320" height="200" aria-hidden="true"></canvas>
          </div>
          <div class="card card--chat">
            <span class="card__label">Caring Companion</span>
            <p>
              “早晨！Ready for a 5-minute stretch by the harbour? I’ll track your balance
              and send feedback.”
            </p>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>FrailtyLens adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="FrailtyLens audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 20px;
}

.card {
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

.card__label {
  display: inline-block;
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 12px;
}

.card--status strong {
  font-size: 2.4rem;
  font-weight: 700;
  font-family: "Outfit", sans-serif;
}

.card--heatmap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card--chat p {
  font-size: 1rem;
  color: var(--text-muted);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.solution-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 56px);
  align-items: stretch;
}

.solution-copy {
  display: grid;
  gap: 18px;
}

.solution-item {
  text-align: left;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.45);
  border: 1px solid rgba(21, 36, 59, 0.08);
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
  font: inherit;
  color: inherit;
}

.solution-item__label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.solution-item__title {
  font-family: "Outfit", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
}

.solution-item__text {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.solution-item:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.35);
  outline-offset: 3px;
}

.solution-item.is-active {
  transform: translateY(-4px);
  border-color: rgba(29, 134, 255, 0.3);
  box-shadow: 0 28px 60px -34px rgba(13, 57, 107, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.solution-visual {
  position: relative;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 10% 20%, rgba(113, 242, 196, 0.1), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(95, 208, 255, 0.12), transparent 55%),
    #041427;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 45px 80px -40px rgba(3, 16, 35, 0.7);
  border: 1px solid rgba(99, 180, 255, 0.12);
  overflow: hidden;
}

.solution-visual__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.platform-base {
  position: relative;
  background: linear-gradient(135deg, #0b2345 0%, #102f5d 40%, #1d3c73 100%);
  border-radius: 18px;
  padding: 16px 20px;
  margin-top: auto;
  color: #d6e7ff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 -10px 30px -20px rgba(37, 112, 255, 0.8);
}

.pillar-group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 32px);
  padding: 0 8px 48px;
  position: relative;
}

.pillar {
  position: relative;
  width: clamp(60px, 10vw, 88px);
  height: var(--pillar-height, 200px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(113, 242, 196, 0.35) 100%);
  border-radius: 18px 18px 8px 8px;
  transform-origin: bottom center;
  transform: perspective(900px) rotateX(18deg);
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.pillar::before {
  content: "";
  position: absolute;
  inset: -14px -16px auto -16px;
  height: 14px;
  border-radius: 12px / 8px;
  background: rgba(26, 44, 78, 0.65);
  filter: blur(8px);
  transform: translateZ(-1px);
  z-index: -1;
}

.pillar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.35), transparent 70%);
  border-radius: inherit;
  opacity: 0.6;
  pointer-events: none;
}

.pillar__label {
  transform: rotateX(-18deg);
}

.pillar.is-active {
  transform: perspective(900px) rotateX(12deg) translateY(-12px) scale(1.05);
  box-shadow: 0 30px 70px -26px rgba(113, 242, 196, 0.6), 0 18px 65px -20px rgba(95, 208, 255, 0.75);
  filter: saturate(1.4);
}

.pillar--bio {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.35) 0%, rgba(147, 255, 181, 0.65) 100%);
}

.pillar--mind {
  background: linear-gradient(180deg, rgba(255, 141, 161, 0.35) 0%, rgba(147, 152, 255, 0.55) 100%);
}

.pillar--journey {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.45) 0%, rgba(113, 242, 196, 0.6) 100%);
}

.pillar--social {
  background: linear-gradient(180deg, rgba(147, 255, 181, 0.4) 0%, rgba(95, 208, 255, 0.6) 100%);
}

.pillar--command {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.45) 0%, rgba(59, 132, 255, 0.75) 100%);
}

.pillar--triage {
  background: linear-gradient(180deg, rgba(255, 162, 189, 0.4) 0%, rgba(204, 137, 255, 0.6) 100%);
}

.pillar--care {
  background: linear-gradient(180deg, rgba(113, 242, 196, 0.45) 0%, rgba(95, 208, 255, 0.65) 100%);
}

.pillar--insight {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.4) 0%, rgba(255, 141, 161, 0.55) 100%);
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }

  .solution-layout {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }

  .solution-item {
    padding: 20px 22px;
  }

  .pillar-group {
    padding-bottom: 32px;
  }

  .pillar {
    width: clamp(52px, 24vw, 72px);
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

```javascript
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".nav-toggle__bar");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!expanded).toString());
    menu.classList.toggle("is-open");
    bars[0].style.transform = menu.classList.contains("is-open")
      ? "translateY(8px) rotate(45deg)"
      : "";
    bars[1].style.opacity = menu.classList.contains("is-open") ? "0" : "1";
    bars[2].style.transform = menu.classList.contains("is-open")
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        bars[0].style.transform = "";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "";
      }
    }
  });
});

// Mock chart render
const canvas = document.getElementById("trendChart");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, "rgba(93, 208, 255, 0.8)");
  gradient.addColorStop(1, "rgba(113, 242, 196, 0.1)");

  const points = [60, 58, 56, 53, 50, 48, 46, 44, 42, 40, 38];
  const stepX = canvas.width / (points.length - 1);

  ctx.lineWidth = 2.5;
  ctx.strokeStyle = "#1d86ff";
  ctx.fillStyle = gradient;

  ctx.beginPath();
  points.forEach((value, index) => {
    const x = index * stepX;
    const y = canvas.height - (value / 100) * canvas.height;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();
}

// Solution tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

if (tabs.length) {
  tabs.forEach((tab) => {
    if (tab.classList.contains("is-active")) {
      tab.setAttribute("tabindex", "0");
    } else {
      tab.setAttribute("tabindex", "-1");
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const panel = document.getElementById(targetId);

      if (!panel) return;

      tabs.forEach((btn) => {
        btn.classList.toggle("is-active", btn === tab);
        btn.setAttribute("aria-selected", btn === tab ? "true" : "false");
        btn.setAttribute("tabindex", btn === tab ? "0" : "-1");
      });

      panels.forEach((p) => {
        p.classList.toggle("is-active", p === panel);
        p.setAttribute("hidden", p !== panel);
      });
    });

    // keyboard navigation between tabs
    tab.addEventListener("keydown", (event) => {
      const currentIndex = Array.from(tabs).indexOf(tab);
      let newIndex = currentIndex;

      if (event.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else {
        return;
      }

      event.preventDefault();
      tabs[newIndex].focus();
      tabs[newIndex].click();
    });
  });

  panels.forEach((panel, index) => {
    if (!panel.classList.contains("is-active")) {
      panel.setAttribute("hidden", "true");
    } else {
      tabs[index].setAttribute("tabindex", "0");
    }
  });
}

// Solution feature selectors
document.querySelectorAll(".solution-layout").forEach((layout) => {
  const items = layout.querySelectorAll(".solution-item");
  const pillars = layout.querySelectorAll(".pillar");

  const activate = (key) => {
    items.forEach((item) => {
      const isMatch = item.dataset.pillar === key;
      item.classList.toggle("is-active", isMatch);
      item.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    pillars.forEach((pillar) => {
      pillar.classList.toggle("is-active", pillar.dataset.pillar === key);
    });
  };

  items.forEach((item) => {
    item.addEventListener("click", () => activate(item.dataset.pillar));
    item.addEventListener("mouseenter", () => activate(item.dataset.pillar));
  });
});



```

```javascript
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".nav-toggle__bar");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!expanded).toString());
    menu.classList.toggle("is-open");
    bars[0].style.transform = menu.classList.contains("is-open")
      ? "translateY(8px) rotate(45deg)"
      : "";
    bars[1].style.opacity = menu.classList.contains("is-open") ? "0" : "1";
    bars[2].style.transform = menu.classList.contains("is-open")
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        bars[0].style.transform = "";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "";
      }
    }
  });
});

// Mock chart render
const canvas = document.getElementById("trendChart");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, "rgba(93, 208, 255, 0.8)");
  gradient.addColorStop(1, "rgba(113, 242, 196, 0.1)");

  const points = [60, 58, 56, 53, 50, 48, 46, 44, 42, 40, 38];
  const stepX = canvas.width / (points.length - 1);

  ctx.lineWidth = 2.5;
  ctx.strokeStyle = "#1d86ff";
  ctx.fillStyle = gradient;

  ctx.beginPath();
  points.forEach((value, index) => {
    const x = index * stepX;
    const y = canvas.height - (value / 100) * canvas.height;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();
}

// Solution tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

if (tabs.length) {
  tabs.forEach((tab) => {
    if (tab.classList.contains("is-active")) {
      tab.setAttribute("tabindex", "0");
    } else {
      tab.setAttribute("tabindex", "-1");
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const panel = document.getElementById(targetId);

      if (!panel) return;

      tabs.forEach((btn) => {
        btn.classList.toggle("is-active", btn === tab);
        btn.setAttribute("aria-selected", btn === tab ? "true" : "false");
        btn.setAttribute("tabindex", btn === tab ? "0" : "-1");
      });

      panels.forEach((p) => {
        p.classList.toggle("is-active", p === panel);
        p.setAttribute("hidden", p !== panel);
      });
    });

    // keyboard navigation between tabs
    tab.addEventListener("keydown", (event) => {
      const currentIndex = Array.from(tabs).indexOf(tab);
      let newIndex = currentIndex;

      if (event.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else {
        return;
      }

      event.preventDefault();
      tabs[newIndex].focus();
      tabs[newIndex].click();
    });
  });

  panels.forEach((panel, index) => {
    if (!panel.classList.contains("is-active")) {
      panel.setAttribute("hidden", "true");
    } else {
      tabs[index].setAttribute("tabindex", "0");
    }
  });
}

// Solution feature selectors
document.querySelectorAll(".solution-layout").forEach((layout) => {
  const items = layout.querySelectorAll(".solution-item");
  const pillars = layout.querySelectorAll(".pillar");

  const activate = (key) => {
    items.forEach((item) => {
      const isMatch = item.dataset.pillar === key;
      item.classList.toggle("is-active", isMatch);
      item.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    pillars.forEach((pillar) => {
      pillar.classList.toggle("is-active", pillar.dataset.pillar === key);
    });
  };

  items.forEach((item) => {
    item.addEventListener("click", () => activate(item.dataset.pillar));
    item.addEventListener("mouseenter", () => activate(item.dataset.pillar));
  });

  if (items.length) {
    activate(items[0].dataset.pillar);
  }
});



```

## Summary
- Reimagined the `Our Solution` section with a Scale AI–inspired split layout: descriptive selectors on the left and a 3D-styled pillar visualization on the right for both elder and caregiver views.
- Added new styling in `styles.css` for tabbed solution layouts, animated “pillars,” and responsive behavior down to small screens.
- Extended `main.js` to drive the new solution selectors, keeping interactions accessible and synced with the visual display.

## Testing
- Not run (static UI enhancement; please open the page in a browser to verify the new interaction and visuals).

---

**User**

design a 3D figure in 3d can be rotate 3d and have a animation that can show our aim longthen the live and early detection and joy aging more energic simple 3d shape ainimat replace the daily vitality and frality trajectory

---

**Cursor**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FrailtyLens | Active Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">FrailtyLens</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            Mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore FrailtyLens</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>Shortlisted · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
          <div class="hero-figure__legend">
            <p class="hero-figure__title">Longevity Flow Engine</p>
            <p class="hero-figure__caption">
              Rotating lifelines illustrate how FrailtyLens lengthens healthy years—outer
              rings represent proactive prevention, inner rings glow brighter as biosocial
              signals predict and slow frailty progression.
            </p>
            <ul>
              <li><span class="badge badge--detect"></span> Early detection momentum</li>
              <li><span class="badge badge--care"></span> Personalised care loops</li>
              <li><span class="badge badge--joy"></span> Active, joyful ageing</li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>FrailtyLens adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="FrailtyLens audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```css
*** Begin Patch
*** Update File: styles.css
@@
-.hero__visual {
-  display: grid;
-  gap: 20px;
-}
+.hero__visual {
+  display: grid;
+  gap: clamp(24px, 4vw, 36px);
+}
+
+.hero-figure {
+  position: relative;
+  width: min(420px, 100%);
+  aspect-ratio: 1;
+  margin: 0 auto;
+  background: radial-gradient(circle at 20% 15%, rgba(255, 255, 255, 0.12), transparent 55%),
+    radial-gradient(circle at 80% 45%, rgba(113, 242, 196, 0.08), transparent 50%),
+    rgba(4, 20, 39, 0.92);
+  border-radius: 34px;
+  border: 1px solid rgba(108, 190, 255, 0.25);
+  box-shadow: 0 70px 110px -60px rgba(4, 20, 39, 0.85);
+  overflow: hidden;
+  transform-style: preserve-3d;
+  perspective: 1200px;
+}
+
+.figure-glow {
+  position: absolute;
+  inset: -60% -30%;
+  background: radial-gradient(circle, rgba(95, 208, 255, 0.25), transparent 65%);
+  filter: blur(40px);
+  animation: pulseGlow 6s ease-in-out infinite;
+}
+
+.figure-core {
+  position: absolute;
+  inset: 14%;
+  transform-style: preserve-3d;
+  animation: rotateCore 18s linear infinite;
+}
+
+.orbit {
+  position: absolute;
+  inset: 0;
+  border-radius: 50%;
+  border: 2px solid transparent;
+  border-top-color: rgba(147, 255, 181, 0.8);
+  border-right-color: rgba(95, 208, 255, 0.7);
+  border-left-color: rgba(255, 141, 161, 0.55);
+  border-bottom-color: rgba(249, 196, 107, 0.4);
+  transform-style: preserve-3d;
+  box-shadow: 0 12px 30px -20px rgba(147, 255, 181, 0.6);
+}
+
+.orbit--outer {
+  transform: rotateX(64deg) rotateZ(12deg);
+}
+
+.orbit--middle {
+  inset: 18%;
+  transform: rotateX(70deg) rotateZ(-18deg);
+  animation: orbitPulse 8s ease-in-out infinite;
+}
+
+.orbit--inner {
+  inset: 36%;
+  transform: rotateX(76deg) rotateZ(24deg);
+  animation: orbitPulse 10s ease-in-out reverse infinite;
+}
+
+.orbit__label {
+  position: absolute;
+  top: -14px;
+  right: -36px;
+  font-size: 0.65rem;
+  letter-spacing: 0.14em;
+  text-transform: uppercase;
+  color: rgba(255, 255, 255, 0.8);
+  transform: rotateZ(-12deg);
+  font-weight: 700;
+}
+
+.figure-axis {
+  position: absolute;
+  inset: 50% 0;
+  height: 2px;
+  background: linear-gradient(90deg, transparent, rgba(115, 224, 255, 0.55), transparent);
+  transform-origin: center;
+}
+
+.figure-axis--x {
+  transform: translateY(-50%) rotateZ(45deg);
+}
+
+.figure-axis--y {
+  transform: translateY(-50%) rotateZ(-30deg);
+}
+
+.figure-axis--z {
+  transform: translateY(-50%) rotateX(90deg);
+}
+
+.figure-heartline {
+  position: absolute;
+  inset: 45% 18% 45% 18%;
+  background: linear-gradient(90deg, rgba(255, 141, 161, 0.7), rgba(113, 242, 196, 0.9));
+  border-radius: 999px;
+  filter: blur(0.8px);
+  animation: heartPulse 3.6s ease-in-out infinite;
+}
+
+.hero-figure__legend {
+  background: rgba(255, 255, 255, 0.85);
+  border-radius: var(--radius-md);
+  border: 1px solid rgba(21, 36, 59, 0.08);
+  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.4);
+  padding: 24px 28px;
+}
+
+.hero-figure__title {
+  font-family: "Outfit", sans-serif;
+  font-weight: 600;
+  font-size: 1.1rem;
+  margin: 0 0 8px;
+}
+
+.hero-figure__caption {
+  margin: 0 0 20px;
+  color: var(--text-muted);
+  font-size: 0.98rem;
+}
+
+.hero-figure__legend ul {
+  list-style: none;
+  padding: 0;
+  margin: 0;
+  display: grid;
+  gap: 10px;
+  color: var(--text-muted);
+  font-weight: 500;
+}
+
+.badge {
+  display: inline-flex;
+  width: 18px;
+  height: 18px;
+  border-radius: 6px;
+  margin-right: 8px;
+}
+
+.badge--detect {
+  background: linear-gradient(135deg, rgba(95, 208, 255, 0.7), rgba(147, 255, 181, 0.8));
+}
+
+.badge--care {
+  background: linear-gradient(135deg, rgba(255, 141, 161, 0.75), rgba(249, 196, 107, 0.7));
+}
+
+.badge--joy {
+  background: linear-gradient(135deg, rgba(113, 242, 196, 0.8), rgba(95, 208, 255, 0.65));
+}
+
 @media (max-width: 980px) {
   .nav-menu {
     position: absolute;
     top: 84px;
     right: clamp(24px, 4vw, 48px);
@@
   .hero__grid {
     grid-template-columns: 1fr;
   }
 
   .hero__visual {
-    order: -1;
+    order: -1;
   }
 
   .section__header--split {
     gap: 24px;
   }
@@
 @media (max-width: 640px) {
   .hero {
     padding-top: 24px;
     padding-bottom: 72px;
   }
@@
   .hero__actions {
     flex-direction: column;
     align-items: stretch;
   }
 
@@
   .card,
   .info-card,
   .feature-card {
     padding: 24px;
   }
+
+  .hero-figure__legend {
+    padding: 22px;
+  }
+
+  .hero-figure {
+    width: min(320px, 100%);
+  }
+
+  .orbit__label {
+    right: -22px;
+  }
 
   .timeline {
     gap: 28px;
   }
 
@@
   .stat-banner {
     padding: 24px;
   }
 
   .tab-bar {
@@
   .contact-form {
     padding: 24px 20px;
   }
 
   .form-grid {
@@
   .footer__grid {
     gap: 24px;
   }
 
   .solution-item {
     padding: 20px 22px;
   }
 
   .pillar-group {
     padding-bottom: 32px;
   }
 
   .pillar {
     width: clamp(52px, 24vw, 72px);
   }
+
+  .hero-figure {
+    width: min(280px, 100%);
+  }
+
+  .hero-figure__legend ul {
+    gap: 8px;
+    font-size: 0.92rem;
+  }
 }
 
 @media (max-width: 360px) {
   .hero {
     padding: 24px 18px 64px;
@@
   .card,
   .info-card,
   .feature-card {
     padding: 20px;
   }
+
+  .hero-figure {
+    width: min(240px, 100%);
+  }
 
   .hero__badge {
     padding: 10px 14px;
   }
 
@@
   .stat-banner {
     grid-template-columns: 1fr;
   }
 }
+
+@keyframes pulseGlow {
+  0%,
+  100% {
+    opacity: 0.5;
+    transform: scale(1);
+  }
+  50% {
+    opacity: 0.75;
+    transform: scale(1.05);
+  }
+}
+
+@keyframes rotateCore {
+  0% {
+    transform: rotateX(18deg) rotateY(0deg);
+  }
+  100% {
+    transform: rotateX(18deg) rotateY(360deg);
+  }
+}
+
+@keyframes heartPulse {
+  0%,
+  100% {
+    transform: scaleX(0.96);
+    opacity: 0.85;
+  }
+  50% {
+    transform: scaleX(1.04);
+    opacity: 1;
+  }
+}
+
+@keyframes orbitPulse {
+  0%,
+  100% {
+    filter: drop-shadow(0 14px 40px rgba(95, 208, 255, 0.35));
+  }
+  50% {
+    filter: drop-shadow(0 18px 60px rgba(147, 255, 181, 0.45));
+  }
+}
*** End Patch
```

---

**User**

Build an interactive 3D React scene called FrailtyLens Neural Core.
Use React Three Fiber + Drei + Framer Motion 3D.

Visual concept:

Create a dark gradient background.

At the center, render a breathing crystal sphere (AI Core) made of transparent refractive material, glowing softly.

Around it, place 4 energy nodes in orbit:

Each node emits particles and has unique colors and movement patterns.

Use shader materials with glowing, pulsating surfaces (energy-like).

Connect nodes to the core with dynamic curved light filaments.

The whole system should feel alive — pulsating, gently rotating, and reactive to user hover (light intensity increases when hovered).

Interactions:

Hover → subtle color bloom + label reveal (Biosignals, Mind, Journeys, Social).

Click → node expands and rotates the camera toward it.

Background particles flow inward and outward slowly (like breathing).

Physics & Animation:

Nodes orbit smoothly (use sin/cos time-based motion).

Add Framer Motion 3D spring animations for pulse cycles.

Glow intensity and node scale oscillate based on simulated “vitality” data updated every few seconds.

Lighting:

Use ambient + directional + point lights with warm tones.

Apply post-processing (Drei’s <EffectComposer> with <Bloom> and <DepthOfField>).

Bonus:

Include a faint audio-reactive pulse (optional, simulate with sine function if no mic).

Make camera auto-orbit but pause when mouse moves.

The final effect should feel like a living AI organism maintaining human vitality, not a graph.

---

**Cursor**

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 24px;
  justify-items: center;
}

.hero-figure {
  position: relative;
  width: clamp(260px, 40vw, 420px);
  height: clamp(260px, 40vw, 420px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 70%);
  box-shadow: 0 60px 140px -80px rgba(9, 52, 114, 0.9);
  overflow: visible;
}

.figure-glow {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, rgba(113, 242, 196, 0.3) 0%, rgba(95, 208, 255, 0.12) 45%, transparent 70%);
  filter: blur(40px);
  opacity: 0.8;
  animation: pulseGlow 6s ease-in-out infinite;
}

.figure-core {
  position: relative;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.85), rgba(147, 255, 181, 0.4) 55%, rgba(8, 24, 52, 0.35) 100%);
  box-shadow: inset 0 0 30px rgba(147, 255, 181, 0.25), 0 0 40px rgba(95, 208, 255, 0.35);
  transform-style: preserve-3d;
  animation: rotateSphere 20s linear infinite;
}

.orbit {
  position: absolute;
  inset: -16%;
  border-radius: 50%;
  border: 1.6px dashed rgba(95, 208, 255, 0.35);
  transform-style: preserve-3d;
  animation: orbitSpin 14s linear infinite;
}

.orbit--middle {
  inset: -30%;
  border-color: rgba(255, 141, 161, 0.4);
  animation-duration: 18s;
}

.orbit--outer {
  inset: -45%;
  border-color: rgba(249, 196, 107, 0.35);
  animation-duration: 22s;
}

.orbit__label {
  position: absolute;
  top: 8%;
  right: 8%;
  padding: 6px 12px;
  background: rgba(8, 24, 52, 0.8);
  color: rgba(255, 255, 255, 0.88);
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 12px 24px -18px rgba(0, 0, 0, 0.8);
}

.figure-axis {
  position: absolute;
  inset: 50% calc(50% - 1px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(95, 208, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
}

.figure-axis--x {
  transform: rotate(90deg);
}

.figure-axis--y {
  transform: rotate(45deg);
}

.figure-axis--z {
  transform: rotate(-45deg);
}

.figure-heartline {
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  border: 2px solid rgba(113, 242, 196, 0.6);
  box-shadow: 0 0 25px rgba(113, 242, 196, 0.35);
  animation: heartbeat 3.6s ease-in-out infinite;
}

.hero-figure__legend {
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  border: 1px solid rgba(21, 36, 59, 0.08);
  box-shadow: 0 24px 50px -36px rgba(13, 57, 107, 0.4);
  max-width: 360px;
}

.hero-figure__legend ul {
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 16px 0 0;
  color: var(--text-muted);
}

.hero-figure__legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-figure__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  margin: 0 0 6px;
}

.badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-flex;
  box-shadow: 0 0 10px currentColor;
}

.badge--detect {
  color: #5fd0ff;
  background: rgba(95, 208, 255, 0.9);
}

.badge--care {
  color: #f9c46b;
  background: rgba(249, 196, 107, 0.95);
}

.badge--joy {
  color: #71f2c4;
  background: rgba(113, 242, 196, 0.95);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.solution-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 56px);
  align-items: stretch;
}

.solution-copy {
  display: grid;
  gap: 18px;
}

.solution-item {
  text-align: left;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.45);
  border: 1px solid rgba(21, 36, 59, 0.08);
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
  font: inherit;
  color: inherit;
}

.solution-item__label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.solution-item__title {
  font-family: "Outfit", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
}

.solution-item__text {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.solution-item:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.35);
  outline-offset: 3px;
}

.solution-item.is-active {
  transform: translateY(-4px);
  border-color: rgba(29, 134, 255, 0.3);
  box-shadow: 0 28px 60px -34px rgba(13, 57, 107, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.solution-visual {
  position: relative;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 10% 20%, rgba(113, 242, 196, 0.1), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(95, 208, 255, 0.12), transparent 55%),
    #041427;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 45px 80px -40px rgba(3, 16, 35, 0.7);
  border: 1px solid rgba(99, 180, 255, 0.12);
  overflow: hidden;
}

.solution-visual__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.platform-base {
  position: relative;
  background: linear-gradient(135deg, #0b2345 0%, #102f5d 40%, #1d3c73 100%);
  border-radius: 18px;
  padding: 16px 20px;
  margin-top: auto;
  color: #d6e7ff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 -10px 30px -20px rgba(37, 112, 255, 0.8);
}

.pillar-group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 32px);
  padding: 0 8px 48px;
  position: relative;
}

.pillar {
  position: relative;
  width: clamp(60px, 10vw, 88px);
  height: var(--pillar-height, 200px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(113, 242, 196, 0.35) 100%);
  border-radius: 18px 18px 8px 8px;
  transform-origin: bottom center;
  transform: perspective(900px) rotateX(18deg);
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.pillar::before {
  content: "";
  position: absolute;
  inset: -14px -16px auto -16px;
  height: 14px;
  border-radius: 12px / 8px;
  background: rgba(26, 44, 78, 0.65);
  filter: blur(8px);
  transform: translateZ(-1px);
  z-index: -1;
}

.pillar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.35), transparent 70%);
  border-radius: inherit;
  opacity: 0.6;
  pointer-events: none;
}

.pillar__label {
  transform: rotateX(-18deg);
}

.pillar.is-active {
  transform: perspective(900px) rotateX(12deg) translateY(-12px) scale(1.05);
  box-shadow: 0 30px 70px -26px rgba(113, 242, 196, 0.6), 0 18px 65px -20px rgba(95, 208, 255, 0.75);
  filter: saturate(1.4);
}

.pillar--bio {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.35) 0%, rgba(147, 255, 181, 0.65) 100%);
}

.pillar--mind {
  background: linear-gradient(180deg, rgba(255, 141, 161, 0.35) 0%, rgba(147, 152, 255, 0.55) 100%);
}

.pillar--journey {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.45) 0%, rgba(113, 242, 196, 0.6) 100%);
}

.pillar--social {
  background: linear-gradient(180deg, rgba(147, 255, 181, 0.4) 0%, rgba(95, 208, 255, 0.6) 100%);
}

.pillar--command {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.45) 0%, rgba(59, 132, 255, 0.75) 100%);
}

.pillar--triage {
  background: linear-gradient(180deg, rgba(255, 162, 189, 0.4) 0%, rgba(204, 137, 255, 0.6) 100%);
}

.pillar--care {
  background: linear-gradient(180deg, rgba(113, 242, 196, 0.45) 0%, rgba(95, 208, 255, 0.65) 100%);
}

.pillar--insight {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.4) 0%, rgba(255, 141, 161, 0.55) 100%);
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }

  .solution-layout {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }

  .solution-item {
    padding: 20px 22px;
  }

  .pillar-group {
    padding-bottom: 32px;
  }

  .pillar {
    width: clamp(52px, 24vw, 72px);
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 24px;
  justify-items: center;
}

.hero-figure {
  position: relative;
  width: clamp(260px, 40vw, 420px);
  height: clamp(260px, 40vw, 420px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 70%);
  box-shadow: 0 60px 140px -80px rgba(9, 52, 114, 0.9);
  overflow: visible;
}

.figure-glow {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, rgba(113, 242, 196, 0.3) 0%, rgba(95, 208, 255, 0.12) 45%, transparent 70%);
  filter: blur(40px);
  opacity: 0.8;
  animation: pulseGlow 6s ease-in-out infinite;
}

.figure-core {
  position: relative;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.85), rgba(147, 255, 181, 0.4) 55%, rgba(8, 24, 52, 0.35) 100%);
  box-shadow: inset 0 0 30px rgba(147, 255, 181, 0.25), 0 0 40px rgba(95, 208, 255, 0.35);
  transform-style: preserve-3d;
  animation: rotateSphere 20s linear infinite;
}

.orbit {
  position: absolute;
  inset: -16%;
  border-radius: 50%;
  border: 1.6px dashed rgba(95, 208, 255, 0.35);
  transform-style: preserve-3d;
  animation: orbitSpin 14s linear infinite;
}

.orbit--middle {
  inset: -30%;
  border-color: rgba(255, 141, 161, 0.4);
  animation-duration: 18s;
}

.orbit--outer {
  inset: -45%;
  border-color: rgba(249, 196, 107, 0.35);
  animation-duration: 22s;
}

.orbit__label {
  position: absolute;
  top: 8%;
  right: 8%;
  padding: 6px 12px;
  background: rgba(8, 24, 52, 0.8);
  color: rgba(255, 255, 255, 0.88);
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 12px 24px -18px rgba(0, 0, 0, 0.8);
}

.figure-axis {
  position: absolute;
  inset: 50% calc(50% - 1px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(95, 208, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
}

.figure-axis--x {
  transform: rotate(90deg);
}

.figure-axis--y {
  transform: rotate(45deg);
}

.figure-axis--z {
  transform: rotate(-45deg);
}

.figure-heartline {
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  border: 2px solid rgba(113, 242, 196, 0.6);
  box-shadow: 0 0 25px rgba(113, 242, 196, 0.35);
  animation: heartbeat 3.6s ease-in-out infinite;
}

.hero-figure__legend {
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  border: 1px solid rgba(21, 36, 59, 0.08);
  box-shadow: 0 24px 50px -36px rgba(13, 57, 107, 0.4);
  max-width: 360px;
}

.hero-figure__legend ul {
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 16px 0 0;
  color: var(--text-muted);
}

.hero-figure__legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-figure__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  margin: 0 0 6px;
}

.badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-flex;
  box-shadow: 0 0 10px currentColor;
}

.badge--detect {
  color: #5fd0ff;
  background: rgba(95, 208, 255, 0.9);
}

.badge--care {
  color: #f9c46b;
  background: rgba(249, 196, 107, 0.95);
}

.badge--joy {
  color: #71f2c4;
  background: rgba(113, 242, 196, 0.95);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.solution-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 56px);
  align-items: stretch;
}

.solution-copy {
  display: grid;
  gap: 18px;
}

.solution-item {
  text-align: left;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.45);
  border: 1px solid rgba(21, 36, 59, 0.08);
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
  font: inherit;
  color: inherit;
}

.solution-item__label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.solution-item__title {
  font-family: "Outfit", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
}

.solution-item__text {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.solution-item:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.35);
  outline-offset: 3px;
}

.solution-item.is-active {
  transform: translateY(-4px);
  border-color: rgba(29, 134, 255, 0.3);
  box-shadow: 0 28px 60px -34px rgba(13, 57, 107, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.solution-visual {
  position: relative;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 10% 20%, rgba(113, 242, 196, 0.1), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(95, 208, 255, 0.12), transparent 55%),
    #041427;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 45px 80px -40px rgba(3, 16, 35, 0.7);
  border: 1px solid rgba(99, 180, 255, 0.12);
  overflow: hidden;
}

.solution-visual__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.platform-base {
  position: relative;
  background: linear-gradient(135deg, #0b2345 0%, #102f5d 40%, #1d3c73 100%);
  border-radius: 18px;
  padding: 16px 20px;
  margin-top: auto;
  color: #d6e7ff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 -10px 30px -20px rgba(37, 112, 255, 0.8);
}

.pillar-group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 32px);
  padding: 0 8px 48px;
  position: relative;
}

.pillar {
  position: relative;
  width: clamp(60px, 10vw, 88px);
  height: var(--pillar-height, 200px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(113, 242, 196, 0.35) 100%);
  border-radius: 18px 18px 8px 8px;
  transform-origin: bottom center;
  transform: perspective(900px) rotateX(18deg);
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.pillar::before {
  content: "";
  position: absolute;
  inset: -14px -16px auto -16px;
  height: 14px;
  border-radius: 12px / 8px;
  background: rgba(26, 44, 78, 0.65);
  filter: blur(8px);
  transform: translateZ(-1px);
  z-index: -1;
}

.pillar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.35), transparent 70%);
  border-radius: inherit;
  opacity: 0.6;
  pointer-events: none;
}

.pillar__label {
  transform: rotateX(-18deg);
}

.pillar.is-active {
  transform: perspective(900px) rotateX(12deg) translateY(-12px) scale(1.05);
  box-shadow: 0 30px 70px -26px rgba(113, 242, 196, 0.6), 0 18px 65px -20px rgba(95, 208, 255, 0.75);
  filter: saturate(1.4);
}

.pillar--bio {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.35) 0%, rgba(147, 255, 181, 0.65) 100%);
}

.pillar--mind {
  background: linear-gradient(180deg, rgba(255, 141, 161, 0.35) 0%, rgba(147, 152, 255, 0.55) 100%);
}

.pillar--journey {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.45) 0%, rgba(113, 242, 196, 0.6) 100%);
}

.pillar--social {
  background: linear-gradient(180deg, rgba(147, 255, 181, 0.4) 0%, rgba(95, 208, 255, 0.6) 100%);
}

.pillar--command {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.45) 0%, rgba(59, 132, 255, 0.75) 100%);
}

.pillar--triage {
  background: linear-gradient(180deg, rgba(255, 162, 189, 0.4) 0%, rgba(204, 137, 255, 0.6) 100%);
}

.pillar--care {
  background: linear-gradient(180deg, rgba(113, 242, 196, 0.45) 0%, rgba(95, 208, 255, 0.65) 100%);
}

.pillar--insight {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.4) 0%, rgba(255, 141, 161, 0.55) 100%);
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rotateSphere {
  from {
    transform: rotate3d(0.4, 0.8, 0.2, 0deg);
  }
  to {
    transform: rotate3d(0.4, 0.8, 0.2, 360deg);
  }
}

@keyframes orbitSpin {
  from {
    transform: rotate3d(0.2, 1, 0.4, 0deg);
  }
  to {
    transform: rotate3d(0.2, 1, 0.4, 360deg);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.96);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.08);
    opacity: 1;
  }
  60% {
    transform: scale(1.02);
    opacity: 0.75;
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }

  .solution-layout {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }

  .solution-item {
    padding: 20px 22px;
  }

  .pillar-group {
    padding-bottom: 32px;
  }

  .pillar {
    width: clamp(52px, 24vw, 72px);
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

```javascript
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".nav-toggle__bar");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!expanded).toString());
    menu.classList.toggle("is-open");
    bars[0].style.transform = menu.classList.contains("is-open")
      ? "translateY(8px) rotate(45deg)"
      : "";
    bars[1].style.opacity = menu.classList.contains("is-open") ? "0" : "1";
    bars[2].style.transform = menu.classList.contains("is-open")
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        bars[0].style.transform = "";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "";
      }
    }
  });
});

// Solution tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

if (tabs.length) {
  tabs.forEach((tab) => {
    if (tab.classList.contains("is-active")) {
      tab.setAttribute("tabindex", "0");
    } else {
      tab.setAttribute("tabindex", "-1");
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const panel = document.getElementById(targetId);

      if (!panel) return;

      tabs.forEach((btn) => {
        btn.classList.toggle("is-active", btn === tab);
        btn.setAttribute("aria-selected", btn === tab ? "true" : "false");
        btn.setAttribute("tabindex", btn === tab ? "0" : "-1");
      });

      panels.forEach((p) => {
        p.classList.toggle("is-active", p === panel);
        p.setAttribute("hidden", p !== panel);
      });
    });

    // keyboard navigation between tabs
    tab.addEventListener("keydown", (event) => {
      const currentIndex = Array.from(tabs).indexOf(tab);
      let newIndex = currentIndex;

      if (event.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else {
        return;
      }

      event.preventDefault();
      tabs[newIndex].focus();
      tabs[newIndex].click();
    });
  });

  panels.forEach((panel, index) => {
    if (!panel.classList.contains("is-active")) {
      panel.setAttribute("hidden", "true");
    } else {
      tabs[index].setAttribute("tabindex", "0");
    }
  });
}

// Solution feature selectors
document.querySelectorAll(".solution-layout").forEach((layout) => {
  const items = layout.querySelectorAll(".solution-item");
  const pillars = layout.querySelectorAll(".pillar");

  const activate = (key) => {
    items.forEach((item) => {
      const isMatch = item.dataset.pillar === key;
      item.classList.toggle("is-active", isMatch);
      item.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    pillars.forEach((pillar) => {
      pillar.classList.toggle("is-active", pillar.dataset.pillar === key);
    });
  };

  items.forEach((item) => {
    item.addEventListener("click", () => activate(item.dataset.pillar));
    item.addEventListener("mouseenter", () => activate(item.dataset.pillar));
  });

  if (items.length) {
    activate(items[0].dataset.pillar);
  }
});



```

```json
{
  "name": "frailtylens-neural-core",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-three/drei": "^9.87.2",
    "@react-three/fiber": "^8.15.12",
    "@react-three/postprocessing": "^2.15.11",
    "framer-motion": "^11.0.17",
    "framer-motion-3d": "^11.0.17",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.164.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.2.0"
  }
}

```

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FrailtyLens Neural Core</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

---

**User**

delete this word 
PreventionEarly DetectionJoyful Ageing
Longevity Flow Engine

Rotating lifelines illustrate how FrailtyLens lengthens healthy years—outer rings represent proactive prevention, inner rings glow brighter as biosocial signals predict and slow frailty progression.

Early detection momentum
Personalised care loops
Active, joyful ageing

---

**Cursor**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FrailtyLens | Active Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">FrailtyLens</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            Mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore FrailtyLens</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>Shortlisted · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <div class="orbit orbit--outer">
              </div>
              <div class="orbit orbit--middle">
              </div>
              <div class="orbit orbit--inner">
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>FrailtyLens adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="FrailtyLens audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

## Summary
- Removed the orbit text labels and the accompanying legend content from the hero visual to fulfill the request to delete the specified wording.

## Testing
- Not run (HTML change only).

---

**User**

change the  central plane to a sphere like this the image and use green and blue as te colour sytle

---

**Cursor**

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 24px;
  justify-items: center;
}

.hero-figure {
  position: relative;
  width: clamp(260px, 40vw, 420px);
  height: clamp(260px, 40vw, 420px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 70%);
  box-shadow: 0 60px 140px -80px rgba(9, 52, 114, 0.9);
  overflow: visible;
}

.figure-glow {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, rgba(113, 242, 196, 0.35) 0%, rgba(95, 208, 255, 0.18) 45%, transparent 70%);
  filter: blur(40px);
  opacity: 0.8;
  animation: pulseGlow 6s ease-in-out infinite;
}

.figure-core {
  position: relative;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(147, 255, 181, 0.35) 45%, rgba(8, 24, 52, 0.45) 100%),
    conic-gradient(from 0deg, rgba(95, 208, 255, 0.25), rgba(113, 242, 196, 0.25), rgba(95, 208, 255, 0.25));
  box-shadow:
    inset 0 0 28px rgba(95, 208, 255, 0.35),
    inset 0 0 48px rgba(113, 242, 196, 0.25),
    0 0 50px rgba(95, 208, 255, 0.35);
  transform-style: preserve-3d;
  animation: rotateSphere 20s linear infinite;
}

.orbit {
  position: absolute;
  inset: -16%;
  border-radius: 50%;
  border: 1.6px dashed rgba(95, 208, 255, 0.4);
  transform-style: preserve-3d;
  animation: orbitSpin 14s linear infinite;
}

.orbit--middle {
  inset: -30%;
  border-color: rgba(113, 242, 196, 0.45);
  animation-duration: 18s;
}

.orbit--outer {
  inset: -45%;
  border-color: rgba(95, 208, 255, 0.35);
  animation-duration: 22s;
}

.orbit__label {
  position: absolute;
  top: 8%;
  right: 8%;
  padding: 6px 12px;
  background: rgba(8, 24, 52, 0.8);
  color: rgba(255, 255, 255, 0.88);
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 12px 24px -18px rgba(0, 0, 0, 0.8);
}

.figure-axis {
  position: absolute;
  inset: 50% calc(50% - 1px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(95, 208, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
}

.figure-axis--x {
  transform: rotate(90deg);
}

.figure-axis--y {
  transform: rotate(45deg);
}

.figure-axis--z {
  transform: rotate(-45deg);
}

.figure-heartline {
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  border: 2px solid rgba(95, 208, 255, 0.8);
  box-shadow: 0 0 25px rgba(95, 208, 255, 0.45), 0 0 35px rgba(113, 242, 196, 0.35) inset;
  animation: heartbeat 3.6s ease-in-out infinite;
}

.hero-figure__legend {
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  border: 1px solid rgba(21, 36, 59, 0.08);
  box-shadow: 0 24px 50px -36px rgba(13, 57, 107, 0.4);
  max-width: 360px;
}

.hero-figure__legend ul {
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 16px 0 0;
  color: var(--text-muted);
}

.hero-figure__legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-figure__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  margin: 0 0 6px;
}

.badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-flex;
  box-shadow: 0 0 10px currentColor;
}

.badge--detect {
  color: #5fd0ff;
  background: rgba(95, 208, 255, 0.9);
}

.badge--care {
  color: #f9c46b;
  background: rgba(249, 196, 107, 0.95);
}

.badge--joy {
  color: #71f2c4;
  background: rgba(113, 242, 196, 0.95);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.solution-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 56px);
  align-items: stretch;
}

.solution-copy {
  display: grid;
  gap: 18px;
}

.solution-item {
  text-align: left;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.45);
  border: 1px solid rgba(21, 36, 59, 0.08);
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
  font: inherit;
  color: inherit;
}

.solution-item__label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.solution-item__title {
  font-family: "Outfit", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
}

.solution-item__text {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.solution-item:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.35);
  outline-offset: 3px;
}

.solution-item.is-active {
  transform: translateY(-4px);
  border-color: rgba(29, 134, 255, 0.3);
  box-shadow: 0 28px 60px -34px rgba(13, 57, 107, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.solution-visual {
  position: relative;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 10% 20%, rgba(113, 242, 196, 0.1), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(95, 208, 255, 0.12), transparent 55%),
    #041427;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 45px 80px -40px rgba(3, 16, 35, 0.7);
  border: 1px solid rgba(99, 180, 255, 0.12);
  overflow: hidden;
}

.solution-visual__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.platform-base {
  position: relative;
  background: linear-gradient(135deg, #0b2345 0%, #102f5d 40%, #1d3c73 100%);
  border-radius: 18px;
  padding: 16px 20px;
  margin-top: auto;
  color: #d6e7ff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 -10px 30px -20px rgba(37, 112, 255, 0.8);
}

.pillar-group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 32px);
  padding: 0 8px 48px;
  position: relative;
}

.pillar {
  position: relative;
  width: clamp(60px, 10vw, 88px);
  height: var(--pillar-height, 200px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(113, 242, 196, 0.35) 100%);
  border-radius: 18px 18px 8px 8px;
  transform-origin: bottom center;
  transform: perspective(900px) rotateX(18deg);
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.pillar::before {
  content: "";
  position: absolute;
  inset: -14px -16px auto -16px;
  height: 14px;
  border-radius: 12px / 8px;
  background: rgba(26, 44, 78, 0.65);
  filter: blur(8px);
  transform: translateZ(-1px);
  z-index: -1;
}

.pillar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.35), transparent 70%);
  border-radius: inherit;
  opacity: 0.6;
  pointer-events: none;
}

.pillar__label {
  transform: rotateX(-18deg);
}

.pillar.is-active {
  transform: perspective(900px) rotateX(12deg) translateY(-12px) scale(1.05);
  box-shadow: 0 30px 70px -26px rgba(113, 242, 196, 0.6), 0 18px 65px -20px rgba(95, 208, 255, 0.75);
  filter: saturate(1.4);
}

.pillar--bio {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.35) 0%, rgba(147, 255, 181, 0.65) 100%);
}

.pillar--mind {
  background: linear-gradient(180deg, rgba(255, 141, 161, 0.35) 0%, rgba(147, 152, 255, 0.55) 100%);
}

.pillar--journey {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.45) 0%, rgba(113, 242, 196, 0.6) 100%);
}

.pillar--social {
  background: linear-gradient(180deg, rgba(147, 255, 181, 0.4) 0%, rgba(95, 208, 255, 0.6) 100%);
}

.pillar--command {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.45) 0%, rgba(59, 132, 255, 0.75) 100%);
}

.pillar--triage {
  background: linear-gradient(180deg, rgba(255, 162, 189, 0.4) 0%, rgba(204, 137, 255, 0.6) 100%);
}

.pillar--care {
  background: linear-gradient(180deg, rgba(113, 242, 196, 0.45) 0%, rgba(95, 208, 255, 0.65) 100%);
}

.pillar--insight {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.4) 0%, rgba(255, 141, 161, 0.55) 100%);
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rotateSphere {
  from {
    transform: rotate3d(0.4, 0.8, 0.2, 0deg);
  }
  to {
    transform: rotate3d(0.4, 0.8, 0.2, 360deg);
  }
}

@keyframes orbitSpin {
  from {
    transform: rotate3d(0.2, 1, 0.4, 0deg);
  }
  to {
    transform: rotate3d(0.2, 1, 0.4, 360deg);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.96);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.08);
    opacity: 1;
  }
  60% {
    transform: scale(1.02);
    opacity: 0.75;
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }

  .solution-layout {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }

  .solution-item {
    padding: 20px 22px;
  }

  .pillar-group {
    padding-bottom: 32px;
  }

  .pillar {
    width: clamp(52px, 24vw, 72px);
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

- Updated the hero visual’s central element to a glowing sphere look with blue/green styling.
- Tweaked glow, heartline, and orbit colors to cyan/green; enhanced inner lighting and depth so it reads as a sphere.

Refresh the page to see the spherical effect.

---

**User**

keep the orbit word and the vistor can rotate it manuually

---

**Cursor**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FrailtyLens | Active Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">FrailtyLens</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            Mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore FrailtyLens</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>Shortlisted · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>FrailtyLens adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="FrailtyLens audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 24px;
  justify-items: center;
}

.hero-figure {
  position: relative;
  width: clamp(260px, 40vw, 420px);
  height: clamp(260px, 40vw, 420px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 70%);
  box-shadow: 0 60px 140px -80px rgba(9, 52, 114, 0.9);
  overflow: visible;
}

.figure-glow {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, rgba(113, 242, 196, 0.35) 0%, rgba(95, 208, 255, 0.18) 45%, transparent 70%);
  filter: blur(40px);
  opacity: 0.8;
  animation: pulseGlow 6s ease-in-out infinite;
}

.figure-core {
  position: relative;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(147, 255, 181, 0.35) 45%, rgba(8, 24, 52, 0.45) 100%),
    conic-gradient(from 0deg, rgba(95, 208, 255, 0.25), rgba(113, 242, 196, 0.25), rgba(95, 208, 255, 0.25));
  box-shadow:
    inset 0 0 28px rgba(95, 208, 255, 0.35),
    inset 0 0 48px rgba(113, 242, 196, 0.25),
    0 0 50px rgba(95, 208, 255, 0.35);
  transform-style: preserve-3d;
  --rotateX: 18deg;
  --rotateY: 32deg;
  transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
  transition: transform 0.6s ease;
}

.orbit {
  position: absolute;
  inset: -16%;
  border-radius: 50%;
  border: 1.6px dashed rgba(95, 208, 255, 0.4);
  transform-style: preserve-3d;
  animation: orbitSpin 14s linear infinite;
}

.orbit--middle {
  inset: -30%;
  border-color: rgba(113, 242, 196, 0.45);
  animation-duration: 18s;
}

.orbit--outer {
  inset: -45%;
  border-color: rgba(95, 208, 255, 0.35);
  animation-duration: 22s;
}

.orbit__label {
  position: absolute;
  top: 8%;
  right: 8%;
  padding: 6px 12px;
  background: rgba(2, 20, 38, 0.75);
  color: rgba(175, 251, 236, 0.95);
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 12px 24px -18px rgba(0, 0, 0, 0.8);
}

.figure-axis {
  position: absolute;
  inset: 50% calc(50% - 1px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(95, 208, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
}

.figure-axis--x {
  transform: rotate(90deg);
}

.figure-axis--y {
  transform: rotate(45deg);
}

.figure-axis--z {
  transform: rotate(-45deg);
}

.figure-heartline {
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  border: 2px solid rgba(95, 208, 255, 0.8);
  box-shadow: 0 0 25px rgba(95, 208, 255, 0.45), 0 0 35px rgba(113, 242, 196, 0.35) inset;
  animation: heartbeat 3.6s ease-in-out infinite;
}

.hero-figure__legend {
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  border: 1px solid rgba(21, 36, 59, 0.08);
  box-shadow: 0 24px 50px -36px rgba(13, 57, 107, 0.4);
  max-width: 360px;
}

.hero-figure__legend ul {
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 16px 0 0;
  color: var(--text-muted);
}

.hero-figure__legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-figure__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  margin: 0 0 6px;
}

.badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-flex;
  box-shadow: 0 0 10px currentColor;
}

.badge--detect {
  color: #5fd0ff;
  background: rgba(95, 208, 255, 0.9);
}

.badge--care {
  color: #f9c46b;
  background: rgba(249, 196, 107, 0.95);
}

.badge--joy {
  color: #71f2c4;
  background: rgba(113, 242, 196, 0.95);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.solution-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 56px);
  align-items: stretch;
}

.solution-copy {
  display: grid;
  gap: 18px;
}

.solution-item {
  text-align: left;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.45);
  border: 1px solid rgba(21, 36, 59, 0.08);
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
  font: inherit;
  color: inherit;
}

.solution-item__label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.solution-item__title {
  font-family: "Outfit", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
}

.solution-item__text {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.solution-item:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.35);
  outline-offset: 3px;
}

.solution-item.is-active {
  transform: translateY(-4px);
  border-color: rgba(29, 134, 255, 0.3);
  box-shadow: 0 28px 60px -34px rgba(13, 57, 107, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.solution-visual {
  position: relative;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 10% 20%, rgba(113, 242, 196, 0.1), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(95, 208, 255, 0.12), transparent 55%),
    #041427;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 45px 80px -40px rgba(3, 16, 35, 0.7);
  border: 1px solid rgba(99, 180, 255, 0.12);
  overflow: hidden;
}

.solution-visual__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.platform-base {
  position: relative;
  background: linear-gradient(135deg, #0b2345 0%, #102f5d 40%, #1d3c73 100%);
  border-radius: 18px;
  padding: 16px 20px;
  margin-top: auto;
  color: #d6e7ff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 -10px 30px -20px rgba(37, 112, 255, 0.8);
}

.pillar-group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 32px);
  padding: 0 8px 48px;
  position: relative;
}

.pillar {
  position: relative;
  width: clamp(60px, 10vw, 88px);
  height: var(--pillar-height, 200px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(113, 242, 196, 0.35) 100%);
  border-radius: 18px 18px 8px 8px;
  transform-origin: bottom center;
  transform: perspective(900px) rotateX(18deg);
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.pillar::before {
  content: "";
  position: absolute;
  inset: -14px -16px auto -16px;
  height: 14px;
  border-radius: 12px / 8px;
  background: rgba(26, 44, 78, 0.65);
  filter: blur(8px);
  transform: translateZ(-1px);
  z-index: -1;
}

.pillar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.35), transparent 70%);
  border-radius: inherit;
  opacity: 0.6;
  pointer-events: none;
}

.pillar__label {
  transform: rotateX(-18deg);
}

.pillar.is-active {
  transform: perspective(900px) rotateX(12deg) translateY(-12px) scale(1.05);
  box-shadow: 0 30px 70px -26px rgba(113, 242, 196, 0.6), 0 18px 65px -20px rgba(95, 208, 255, 0.75);
  filter: saturate(1.4);
}

.pillar--bio {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.35) 0%, rgba(147, 255, 181, 0.65) 100%);
}

.pillar--mind {
  background: linear-gradient(180deg, rgba(255, 141, 161, 0.35) 0%, rgba(147, 152, 255, 0.55) 100%);
}

.pillar--journey {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.45) 0%, rgba(113, 242, 196, 0.6) 100%);
}

.pillar--social {
  background: linear-gradient(180deg, rgba(147, 255, 181, 0.4) 0%, rgba(95, 208, 255, 0.6) 100%);
}

.pillar--command {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.45) 0%, rgba(59, 132, 255, 0.75) 100%);
}

.pillar--triage {
  background: linear-gradient(180deg, rgba(255, 162, 189, 0.4) 0%, rgba(204, 137, 255, 0.6) 100%);
}

.pillar--care {
  background: linear-gradient(180deg, rgba(113, 242, 196, 0.45) 0%, rgba(95, 208, 255, 0.65) 100%);
}

.pillar--insight {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.4) 0%, rgba(255, 141, 161, 0.55) 100%);
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes orbitSpin {
  from {
    transform: rotate3d(0.2, 1, 0.4, 0deg);
  }
  to {
    transform: rotate3d(0.2, 1, 0.4, 360deg);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.96);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.08);
    opacity: 1;
  }
  60% {
    transform: scale(1.02);
    opacity: 0.75;
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }

  .solution-layout {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }

  .solution-item {
    padding: 20px 22px;
  }

  .pillar-group {
    padding-bottom: 32px;
  }

  .pillar {
    width: clamp(52px, 24vw, 72px);
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

```javascript
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".nav-toggle__bar");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!expanded).toString());
    menu.classList.toggle("is-open");
    bars[0].style.transform = menu.classList.contains("is-open")
      ? "translateY(8px) rotate(45deg)"
      : "";
    bars[1].style.opacity = menu.classList.contains("is-open") ? "0" : "1";
    bars[2].style.transform = menu.classList.contains("is-open")
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        bars[0].style.transform = "";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "";
      }
    }
  });
});

// Solution tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

if (tabs.length) {
  tabs.forEach((tab) => {
    if (tab.classList.contains("is-active")) {
      tab.setAttribute("tabindex", "0");
    } else {
      tab.setAttribute("tabindex", "-1");
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const panel = document.getElementById(targetId);

      if (!panel) return;

      tabs.forEach((btn) => {
        btn.classList.toggle("is-active", btn === tab);
        btn.setAttribute("aria-selected", btn === tab ? "true" : "false");
     live   btn.setAttribute("tabindex", btn === tab ? "0" : "-1");
      });

      panels.forEach((p) => {
        p.classList.toggle("is-active", p === panel);
        p.setAttribute("hidden", p !== panel);
      });
    });

    // keyboard navigation between tabs
    tab.addEventListener("keydown", (event) => {
      const currentIndex = Array.from(tabs).indexOf(tab);
      let newIndex = currentIndex;

      if (event.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else {
        return;
      }

      event.preventDefault();
      tabs[newIndex].focus();
      tabs[newIndex].click();
    });
  });

  panels.forEach((panel, index) => {
    if (!panel.classList.contains("is-active")) {
      panel.setAttribute("hidden", "true");
    } else {
      tabs[index].setAttribute("tabindex", "0");
    }
  });
}

// Solution feature selectors
document.querySelectorAll(".solution-layout").forEach((layout) => {
  const items = layout.querySelectorAll(".solution-item");
  const pillars = layout.querySelectorAll(".pillar");

  const activate = (key) => {
    items.forEach((item) => {
      const isMatch = item.dataset.pillar === key;
      item.classList.toggle("is-active", isMatch);
      item.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    pillars.forEach((pillar) => {
      pillar.classList.toggle("is-active", pillar.dataset.pillar === key);
    });
  };

  items.forEach((item) => {
    item.addEventListener("click", () => activate(item.dataset.pillar));
    item.addEventListener("mouseenter", () => activate(item.dataset.pillar));
  });

  if (items.length) {
    activate(items[0].dataset.pillar);
  }
});

// Hero sphere rotation
const heroFigure = document.querySelector(".hero-figure");
const figureCore = heroFigure?.querySelector(".figure-core");

if (heroFigure && figureCore) {
  let isInteracting = false;
  let startX = 0;
  let startY = 0;
  let baseX = 18;
  let baseY = 32;
  let targetX = baseX;
  let targetY = baseY;

  const setRotation = (xDeg, yDeg) => {
    figureCore.style.setProperty("--rotateX", `${xDeg}deg`);
    figureCore.style.setProperty("--rotateY", `${yDeg}deg`);
  };

  const animate = () => {
    if (!isInteracting) {
      targetY += 0.02;
      targetX += Math.sin(performance.now() / 2000) * 0.002;
    }

    baseX += (targetX - baseX) * 0.08;
    baseY += (targetY - baseY) * 0.08;
    setRotation(baseX, baseY);

    requestAnimationFrame(animate);
  };

  heroFigure.addEventListener("pointerdown", (event) => {
    isInteracting = true;
    heroFigure.classList.add("is-interacting");
    heroFigure.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startY = event.clientY;
    baseX = targetX;
    baseY = targetY;
  });

  heroFigure.addEventListener("pointermove", (event) => {
    if (!isInteracting) return;
    const deltaX = (event.clientY - startY) * 0.2;
    const deltaY = (event.clientX - startX) * 0.25;
    targetX = Math.max(-20, Math.min(50, baseX - deltaX));
    targetY = baseY + deltaY;
  });

  const endInteraction = (event) => {
    if (!isInteracting) return;
    isInteracting = false;
    heroFigure.classList.remove("is-interacting");
    if (event.pointerId) {
      heroFigure.releasePointerCapture(event.pointerId);
    }
  };

  heroFigure.addEventListener("pointerup", endInteraction);
  heroFigure.addEventListener("pointerleave", endInteraction);

  heroFigure.addEventListener("mouseenter", () => {
    heroFigure.classList.add("is-hovered");
  });
  heroFigure.addEventListener("mouseleave", () => {
    heroFigure.classList.remove("is-hovered");
  });

  animate();
}


```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 24px;
  justify-items: center;
}

.hero-figure {
  position: relative;
  width: clamp(260px, 40vw, 420px);
  height: clamp(260px, 40vw, 420px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 70%);
  box-shadow: 0 60px 140px -80px rgba(9, 52, 114, 0.9);
  overflow: visible;
}

.figure-glow {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, rgba(113, 242, 196, 0.35) 0%, rgba(95, 208, 255, 0.18) 45%, transparent 70%);
  filter: blur(40px);
  opacity: 0.8;
  animation: pulseGlow 6s ease-in-out infinite;
}

.figure-core {
  position: relative;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(147, 255, 181, 0.35) 45%, rgba(8, 24, 52, 0.45) 100%),
    conic-gradient(from 0deg, rgba(95, 208, 255, 0.25), rgba(113, 242, 196, 0.25), rgba(95, 208, 255, 0.25));
  box-shadow:
    inset 0 0 28px rgba(95, 208, 255, 0.35),
    inset 0 0 48px rgba(113, 242, 196, 0.25),
    0 0 50px rgba(95, 208, 255, 0.35);
  transform-style: preserve-3d;
  --rotateX: 18deg;
  --rotateY: 32deg;
  transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
  transition: transform 0.6s ease;
}

.orbit {
  position: absolute;
  inset: -16%;
  border-radius: 50%;
  border: 1.6px dashed rgba(95, 208, 255, 0.4);
  transform-style: preserve-3d;
  animation: orbitSpin 14s linear infinite;
}

.orbit--middle {
  inset: -30%;
  border-color: rgba(113, 242, 196, 0.45);
  animation-duration: 18s;
}

.orbit--outer {
  inset: -45%;
  border-color: rgba(95, 208, 255, 0.35);
  animation-duration: 22s;
}

.orbit__label {
  position: absolute;
  top: 8%;
  right: 8%;
  padding: 6px 12px;
  background: rgba(2, 20, 38, 0.75);
  color: rgba(175, 251, 236, 0.95);
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 12px 24px -18px rgba(0, 0, 0, 0.8);
}

.figure-axis {
  position: absolute;
  inset: 50% calc(50% - 1px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(95, 208, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
}

.figure-axis--x {
  transform: rotate(90deg);
}

.figure-axis--y {
  transform: rotate(45deg);
}

.figure-axis--z {
  transform: rotate(-45deg);
}

.figure-heartline {
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  border: 2px solid rgba(95, 208, 255, 0.8);
  box-shadow: 0 0 25px rgba(95, 208, 255, 0.45), 0 0 35px rgba(113, 242, 196, 0.35) inset;
  animation: heartbeat 3.6s ease-in-out infinite;
}

.hero-figure.is-hovered .figure-core,
.hero-figure.is-interacting .figure-core {
  box-shadow:
    inset 0 0 34px rgba(95, 208, 255, 0.45),
    inset 0 0 56px rgba(113, 242, 196, 0.35),
    0 0 80px rgba(95, 208, 255, 0.45);
  transition: transform 0.12s ease, box-shadow 0.3s ease;
}

.hero-figure__legend {
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  border: 1px solid rgba(21, 36, 59, 0.08);
  box-shadow: 0 24px 50px -36px rgba(13, 57, 107, 0.4);
  max-width: 360px;
}

.hero-figure__legend ul {
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 16px 0 0;
  color: var(--text-muted);
}

.hero-figure__legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-figure__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  margin: 0 0 6px;
}

.badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-flex;
  box-shadow: 0 0 10px currentColor;
}

.badge--detect {
  color: #5fd0ff;
  background: rgba(95, 208, 255, 0.9);
}

.badge--care {
  color: #f9c46b;
  background: rgba(249, 196, 107, 0.95);
}

.badge--joy {
  color: #71f2c4;
  background: rgba(113, 242, 196, 0.95);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.solution-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 56px);
  align-items: stretch;
}

.solution-copy {
  display: grid;
  gap: 18px;
}

.solution-item {
  text-align: left;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.45);
  border: 1px solid rgba(21, 36, 59, 0.08);
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
  font: inherit;
  color: inherit;
}

.solution-item__label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.solution-item__title {
  font-family: "Outfit", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
}

.solution-item__text {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.solution-item:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.35);
  outline-offset: 3px;
}

.solution-item.is-active {
  transform: translateY(-4px);
  border-color: rgba(29, 134, 255, 0.3);
  box-shadow: 0 28px 60px -34px rgba(13, 57, 107, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.solution-visual {
  position: relative;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 10% 20%, rgba(113, 242, 196, 0.1), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(95, 208, 255, 0.12), transparent 55%),
    #041427;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 45px 80px -40px rgba(3, 16, 35, 0.7);
  border: 1px solid rgba(99, 180, 255, 0.12);
  overflow: hidden;
}

.solution-visual__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.platform-base {
  position: relative;
  background: linear-gradient(135deg, #0b2345 0%, #102f5d 40%, #1d3c73 100%);
  border-radius: 18px;
  padding: 16px 20px;
  margin-top: auto;
  color: #d6e7ff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 -10px 30px -20px rgba(37, 112, 255, 0.8);
}

.pillar-group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 32px);
  padding: 0 8px 48px;
  position: relative;
}

.pillar {
  position: relative;
  width: clamp(60px, 10vw, 88px);
  height: var(--pillar-height, 200px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(113, 242, 196, 0.35) 100%);
  border-radius: 18px 18px 8px 8px;
  transform-origin: bottom center;
  transform: perspective(900px) rotateX(18deg);
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.pillar::before {
  content: "";
  position: absolute;
  inset: -14px -16px auto -16px;
  height: 14px;
  border-radius: 12px / 8px;
  background: rgba(26, 44, 78, 0.65);
  filter: blur(8px);
  transform: translateZ(-1px);
  z-index: -1;
}

.pillar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.35), transparent 70%);
  border-radius: inherit;
  opacity: 0.6;
  pointer-events: none;
}

.pillar__label {
  transform: rotateX(-18deg);
}

.pillar.is-active {
  transform: perspective(900px) rotateX(12deg) translateY(-12px) scale(1.05);
  box-shadow: 0 30px 70px -26px rgba(113, 242, 196, 0.6), 0 18px 65px -20px rgba(95, 208, 255, 0.75);
  filter: saturate(1.4);
}

.pillar--bio {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.35) 0%, rgba(147, 255, 181, 0.65) 100%);
}

.pillar--mind {
  background: linear-gradient(180deg, rgba(255, 141, 161, 0.35) 0%, rgba(147, 152, 255, 0.55) 100%);
}

.pillar--journey {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.45) 0%, rgba(113, 242, 196, 0.6) 100%);
}

.pillar--social {
  background: linear-gradient(180deg, rgba(147, 255, 181, 0.4) 0%, rgba(95, 208, 255, 0.6) 100%);
}

.pillar--command {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.45) 0%, rgba(59, 132, 255, 0.75) 100%);
}

.pillar--triage {
  background: linear-gradient(180deg, rgba(255, 162, 189, 0.4) 0%, rgba(204, 137, 255, 0.6) 100%);
}

.pillar--care {
  background: linear-gradient(180deg, rgba(113, 242, 196, 0.45) 0%, rgba(95, 208, 255, 0.65) 100%);
}

.pillar--insight {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.4) 0%, rgba(255, 141, 161, 0.55) 100%);
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes orbitSpin {
  from {
    transform: rotate3d(0.2, 1, 0.4, 0deg);
  }
  to {
    transform: rotate3d(0.2, 1, 0.4, 360deg);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.96);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.08);
    opacity: 1;
  }
  60% {
    transform: scale(1.02);
    opacity: 0.75;
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }

  .solution-layout {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }

  .solution-item {
    padding: 20px 22px;
  }

  .pillar-group {
    padding-bottom: 32px;
  }

  .pillar {
    width: clamp(52px, 24vw, 72px);
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

```javascript
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".nav-toggle__bar");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!expanded).toString());
    menu.classList.toggle("is-open");
    bars[0].style.transform = menu.classList.contains("is-open")
      ? "translateY(8px) rotate(45deg)"
      : "";
    bars[1].style.opacity = menu.classList.contains("is-open") ? "0" : "1";
    bars[2].style.transform = menu.classList.contains("is-open")
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        bars[0].style.transform = "";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "";
      }
    }
  });
});

// Solution tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

if (tabs.length) {
  tabs.forEach((tab) => {
    if (tab.classList.contains("is-active")) {
      tab.setAttribute("tabindex", "0");
    } else {
      tab.setAttribute("tabindex", "-1");
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const panel = document.getElementById(targetId);

      if (!panel) return;

      tabs.forEach((btn) => {
        btn.classList.toggle("is-active", btn === tab);
        btn.setAttribute("aria-selected", btn === tab ? "true" : "false");
     live   btn.setAttribute("tabindex", btn === tab ? "0" : "-1");
      });

      panels.forEach((p) => {
        p.classList.toggle("is-active", p === panel);
        p.setAttribute("hidden", p !== panel);
      });
    });

    // keyboard navigation between tabs
    tab.addEventListener("keydown", (event) => {
      const currentIndex = Array.from(tabs).indexOf(tab);
      let newIndex = currentIndex;

      if (event.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else {
        return;
      }

      event.preventDefault();
      tabs[newIndex].focus();
      tabs[newIndex].click();
    });
  });

  panels.forEach((panel, index) => {
    if (!panel.classList.contains("is-active")) {
      panel.setAttribute("hidden", "true");
    } else {
      tabs[index].setAttribute("tabindex", "0");
    }
  });
}

// Solution feature selectors
document.querySelectorAll(".solution-layout").forEach((layout) => {
  const items = layout.querySelectorAll(".solution-item");
  const pillars = layout.querySelectorAll(".pillar");

  const activate = (key) => {
    items.forEach((item) => {
      const isMatch = item.dataset.pillar === key;
      item.classList.toggle("is-active", isMatch);
      item.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    pillars.forEach((pillar) => {
      pillar.classList.toggle("is-active", pillar.dataset.pillar === key);
    });
  };

  items.forEach((item) => {
    item.addEventListener("click", () => activate(item.dataset.pillar));
    item.addEventListener("mouseenter", () => activate(item.dataset.pillar));
  });

  if (items.length) {
    activate(items[0].dataset.pillar);
  }
});

// Hero sphere rotation
const heroFigure = document.querySelector(".hero-figure");
const figureCore = heroFigure?.querySelector(".figure-core");

if (heroFigure && figureCore) {
  let isInteracting = false;
  let startX = 0;
  let startY = 0;
  let baseX = 18;
  let baseY = 32;
  let targetX = baseX;
  let targetY = baseY;

  const setRotation = (xDeg, yDeg) => {
    figureCore.style.setProperty("--rotateX", `${xDeg}deg`);
    figureCore.style.setProperty("--rotateY", `${yDeg}deg`);
  };

  const animate = () => {
    if (!isInteracting) {
      targetY += 0.02;
      targetX += Math.sin(performance.now() / 2000) * 0.002;
    }

    baseX += (targetX - baseX) * 0.08;
    baseY += (targetY - baseY) * 0.08;
    setRotation(baseX, baseY);

    requestAnimationFrame(animate);
  };

  heroFigure.addEventListener("pointerdown", (event) => {
    isInteracting = true;
    heroFigure.classList.add("is-interacting");
    heroFigure.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startY = event.clientY;
    baseX = targetX;
    baseY = targetY;
  });

  heroFigure.addEventListener("pointermove", (event) => {
    if (!isInteracting) return;
    const deltaX = (event.clientY - startY) * 0.2;
    const deltaY = (event.clientX - startX) * 0.25;
    targetX = Math.max(-20, Math.min(50, baseX - deltaX));
    targetY = baseY + deltaY;
  });

  const endInteraction = (event) => {
    if (!isInteracting) return;
    isInteracting = false;
    heroFigure.classList.remove("is-interacting");
    if (typeof event.pointerId === "number") {
      heroFigure.releasePointerCapture(event.pointerId);
    }
  };

  heroFigure.addEventListener("pointerup", endInteraction);
  heroFigure.addEventListener("pointerleave", endInteraction);

  heroFigure.addEventListener("mouseenter", () => {
    heroFigure.classList.add("is-hovered");
  });
  heroFigure.addEventListener("mouseleave", () => {
    heroFigure.classList.remove("is-hovered");
  });

  animate();
}


```

## Summary
- Restored the orbit labels around the hero visualization and introduced an interactive sphere experience: visitors can click-drag to rotate it, with hover/drag glow feedback.
- Updated styles so the core sphere uses blue/green lighting, responds to hover/interact states, and keeps labels readable.
- Added JavaScript to drive gentle auto-rotation, handle pointer controls, and update CSS variables for smooth transforms.

## Testing
- Not run (interactive front-end changes; please refresh the page and drag the hero sphere to verify rotation and hover effects).

---

**User**

At the center, render a breathing crystal sphere (AI Core) made of transparent refractive material, glowing softly

make it like the image

---

**Cursor**

I’m going to enhance the central sphere to look like a breathing, refractive, glowing crystal using an inline SVG with animated turbulence, masks, and gradient strokes. This will be fully interactive with your existing rotation logic.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FrailtyLens | Active Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">FrailtyLens</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            Mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore FrailtyLens</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>Shortlisted · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <svg class="neon-sphere" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="glassGrad" cx="35%" cy="35%" r="70%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.9)"/>
                    <stop offset="45%" stop-color="rgba(147,255,181,0.25)"/>
                    <stop offset="100%" stop-color="rgba(8,24,52,0.5)"/>
                  </radialGradient>
                  <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#71f2c4"/>
                    <stop offset="50%" stop-color="#5fd0ff"/>
                    <stop offset="100%" stop-color="#71f2c4"/>
                  </linearGradient>
                  <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3">
                      <animate attributeName="baseFrequency" values="0.9;0.6;0.9" dur="8s" repeatCount="indefinite"/>
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="12"/>
                  </filter>
                  <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="3" result="blur1"/>
                    <feGaussianBlur stdDeviation="8" in="SourceGraphic" result="blur2"/>
                    <feMerge>
                      <feMergeNode in="blur1"/>
                      <feMergeNode in="blur2"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <mask id="noiseMask">
                    <rect width="100%" height="100%" fill="white"/>
                    <g filter="url(#noise)">
                      <circle cx="100" cy="100" r="92" fill="black" opacity="0.4"/>
                    </g>
                  </mask>
                </defs>
                <circle cx="100" cy="100" r="82" fill="url(#glassGrad)" mask="url(#noiseMask)" filter="url(#softGlow)"/>
                <circle cx="100" cy="100" r="88" fill="none" stroke="url(#edgeGrad)" stroke-width="3.6" opacity="0.95" stroke-linecap="round" stroke-dasharray="8 10">
                  <animate attributeName="stroke-dashoffset" values="0;180;0" dur="18s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="100" r="92" fill="none" stroke="url(#edgeGrad)" stroke-width="1.4" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="28s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>FrailtyLens adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="FrailtyLens audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 24px;
  justify-items: center;
}

.hero-figure {
  position: relative;
  width: clamp(260px, 40vw, 420px);
  height: clamp(260px, 40vw, 420px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 70%);
  box-shadow: 0 60px 140px -80px rgba(9, 52, 114, 0.9);
  overflow: visible;
}

.figure-glow {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, rgba(113, 242, 196, 0.35) 0%, rgba(95, 208, 255, 0.18) 45%, transparent 70%);
  filter: blur(40px);
  opacity: 0.8;
  animation: pulseGlow 6s ease-in-out infinite;
}

.figure-core {
  position: relative;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background: transparent;
  box-shadow:
    inset 0 0 28px rgba(95, 208, 255, 0.18),
    inset 0 0 48px rgba(113, 242, 196, 0.12),
    0 0 36px rgba(95, 208, 255, 0.28);
  transform-style: preserve-3d;
  --rotateX: 18deg;
  --rotateY: 32deg;
  transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
  transition: transform 0.6s ease;
}

.neon-sphere {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  overflow: visible;
}

.orbit {
  position: absolute;
  inset: -16%;
  border-radius: 50%;
  border: 1.6px dashed rgba(95, 208, 255, 0.4);
  transform-style: preserve-3d;
  animation: orbitSpin 14s linear infinite;
}

.orbit--middle {
  inset: -30%;
  border-color: rgba(113, 242, 196, 0.45);
  animation-duration: 18s;
}

.orbit--outer {
  inset: -45%;
  border-color: rgba(95, 208, 255, 0.35);
  animation-duration: 22s;
}

.orbit__label {
  position: absolute;
  top: 8%;
  right: 8%;
  padding: 6px 12px;
  background: rgba(2, 20, 38, 0.75);
  color: rgba(175, 251, 236, 0.95);
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 12px 24px -18px rgba(0, 0, 0, 0.8);
}

.figure-axis {
  position: absolute;
  inset: 50% calc(50% - 1px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(95, 208, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
}

.figure-axis--x {
  transform: rotate(90deg);
}

.figure-axis--y {
  transform: rotate(45deg);
}

.figure-axis--z {
  transform: rotate(-45deg);
}

.figure-heartline {
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  border: 2px solid rgba(95, 208, 255, 0.8);
  box-shadow: 0 0 25px rgba(95, 208, 255, 0.45), 0 0 35px rgba(113, 242, 196, 0.35) inset;
  animation: heartbeat 3.6s ease-in-out infinite;
}

.hero-figure.is-hovered .figure-core,
.hero-figure.is-interacting .figure-core {
  box-shadow:
    inset 0 0 34px rgba(95, 208, 255, 0.45),
    inset 0 0 56px rgba(113, 242, 196, 0.35),
    0 0 80px rgba(95, 208, 255, 0.45);
  transition: transform 0.12s ease, box-shadow 0.3s ease;
}

.hero-figure__legend {
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  border: 1px solid rgba(21, 36, 59, 0.08);
  box-shadow: 0 24px 50px -36px rgba(13, 57, 107, 0.4);
  max-width: 360px;
}

.hero-figure__legend ul {
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 16px 0 0;
  color: var(--text-muted);
}

.hero-figure__legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-figure__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  margin: 0 0 6px;
}

.badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-flex;
  box-shadow: 0 0 10px currentColor;
}

.badge--detect {
  color: #5fd0ff;
  background: rgba(95, 208, 255, 0.9);
}

.badge--care {
  color: #f9c46b;
  background: rgba(249, 196, 107, 0.95);
}

.badge--joy {
  color: #71f2c4;
  background: rgba(113, 242, 196, 0.95);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.solution-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 56px);
  align-items: stretch;
}

.solution-copy {
  display: grid;
  gap: 18px;
}

.solution-item {
  text-align: left;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.45);
  border: 1px solid rgba(21, 36, 59, 0.08);
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
  font: inherit;
  color: inherit;
}

.solution-item__label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.solution-item__title {
  font-family: "Outfit", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
}

.solution-item__text {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.solution-item:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.35);
  outline-offset: 3px;
}

.solution-item.is-active {
  transform: translateY(-4px);
  border-color: rgba(29, 134, 255, 0.3);
  box-shadow: 0 28px 60px -34px rgba(13, 57, 107, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.solution-visual {
  position: relative;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 10% 20%, rgba(113, 242, 196, 0.1), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(95, 208, 255, 0.12), transparent 55%),
    #041427;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 45px 80px -40px rgba(3, 16, 35, 0.7);
  border: 1px solid rgba(99, 180, 255, 0.12);
  overflow: hidden;
}

.solution-visual__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.platform-base {
  position: relative;
  background: linear-gradient(135deg, #0b2345 0%, #102f5d 40%, #1d3c73 100%);
  border-radius: 18px;
  padding: 16px 20px;
  margin-top: auto;
  color: #d6e7ff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 -10px 30px -20px rgba(37, 112, 255, 0.8);
}

.pillar-group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 32px);
  padding: 0 8px 48px;
  position: relative;
}

.pillar {
  position: relative;
  width: clamp(60px, 10vw, 88px);
  height: var(--pillar-height, 200px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(113, 242, 196, 0.35) 100%);
  border-radius: 18px 18px 8px 8px;
  transform-origin: bottom center;
  transform: perspective(900px) rotateX(18deg);
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.pillar::before {
  content: "";
  position: absolute;
  inset: -14px -16px auto -16px;
  height: 14px;
  border-radius: 12px / 8px;
  background: rgba(26, 44, 78, 0.65);
  filter: blur(8px);
  transform: translateZ(-1px);
  z-index: -1;
}

.pillar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.35), transparent 70%);
  border-radius: inherit;
  opacity: 0.6;
  pointer-events: none;
}

.pillar__label {
  transform: rotateX(-18deg);
}

.pillar.is-active {
  transform: perspective(900px) rotateX(12deg) translateY(-12px) scale(1.05);
  box-shadow: 0 30px 70px -26px rgba(113, 242, 196, 0.6), 0 18px 65px -20px rgba(95, 208, 255, 0.75);
  filter: saturate(1.4);
}

.pillar--bio {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.35) 0%, rgba(147, 255, 181, 0.65) 100%);
}

.pillar--mind {
  background: linear-gradient(180deg, rgba(255, 141, 161, 0.35) 0%, rgba(147, 152, 255, 0.55) 100%);
}

.pillar--journey {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.45) 0%, rgba(113, 242, 196, 0.6) 100%);
}

.pillar--social {
  background: linear-gradient(180deg, rgba(147, 255, 181, 0.4) 0%, rgba(95, 208, 255, 0.6) 100%);
}

.pillar--command {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.45) 0%, rgba(59, 132, 255, 0.75) 100%);
}

.pillar--triage {
  background: linear-gradient(180deg, rgba(255, 162, 189, 0.4) 0%, rgba(204, 137, 255, 0.6) 100%);
}

.pillar--care {
  background: linear-gradient(180deg, rgba(113, 242, 196, 0.45) 0%, rgba(95, 208, 255, 0.65) 100%);
}

.pillar--insight {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.4) 0%, rgba(255, 141, 161, 0.55) 100%);
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes orbitSpin {
  from {
    transform: rotate3d(0.2, 1, 0.4, 0deg);
  }
  to {
    transform: rotate3d(0.2, 1, 0.4, 360deg);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.96);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.08);
    opacity: 1;
  }
  60% {
    transform: scale(1.02);
    opacity: 0.75;
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }

  .solution-layout {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }

  .solution-item {
    padding: 20px 22px;
  }

  .pillar-group {
    padding-bottom: 32px;
  }

  .pillar {
    width: clamp(52px, 24vw, 72px);
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

- Implemented a breathing, refractive “crystal” sphere at the hero center using an animated SVG: turbulence-driven inner motion, gradient glass fill, and neon blue/green edge glow to match your reference.
- Kept orbit labels and your drag-to-rotate interaction; the SVG sits inside `.figure-core` and rotates with it.

Reload to see the glowing sphere; drag to rotate.

---

**User**

make it as a A 3D luminous energy sphere with intertwining blue and greenlight waves, giving off a holographic or digital aura.

---

**Cursor**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FrailtyLens | Active Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">FrailtyLens</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            Mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore FrailtyLens</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>Shortlisted · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <svg class="neon-sphere" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="coreGlow" cx="32%" cy="30%" r="70%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                    <stop offset="40%" stop-color="rgba(147,255,181,0.35)"/>
                    <stop offset="75%" stop-color="rgba(4,38,57,0.35)"/>
                    <stop offset="100%" stop-color="rgba(1,12,26,0.7)"/>
                  </radialGradient>
                  <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="rgba(113,242,196,0.8)"/>
                    <stop offset="55%" stop-color="rgba(95,208,255,0.35)"/>
                    <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
                  </radialGradient>
                  <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#5fd0ff"/>
                    <stop offset="35%" stop-color="#71f2c4"/>
                    <stop offset="70%" stop-color="#4dd7ff"/>
                    <stop offset="100%" stop-color="#71f2c4"/>
                  </linearGradient>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(95,208,255,0)"/>
                    <stop offset="40%" stop-color="rgba(95,208,255,0.9)"/>
                    <stop offset="60%" stop-color="rgba(113,242,196,0.9)"/>
                    <stop offset="100%" stop-color="rgba(113,242,196,0)"/>
                  </linearGradient>
                  <filter id="sphereNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="12">
                      <animate attributeName="baseFrequency" values="0.7;0.4;0.7" dur="9s" repeatCount="indefinite"/>
                    </feTurbulence>
                    <feGaussianBlur stdDeviation="6"/>
                  </filter>
                  <filter id="waveBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4"/>
                  </filter>
                  <mask id="sphereMask">
                    <circle cx="100" cy="100" r="82" fill="white"/>
                    <circle cx="100" cy="100" r="82" fill="url(#haloGlow)" opacity="0.6"/>
                  </mask>
                </defs>

                <circle cx="100" cy="100" r="82" fill="url(#coreGlow)" opacity="0.95"/>

                <g mask="url(#sphereMask)" style="mix-blend-mode: screen;">
                  <circle cx="100" cy="100" r="86" fill="url(#haloGlow)" opacity="0.85">
                    <animate attributeName="opacity" values="0.65;0.9;0.65" dur="5s" repeatCount="indefinite"/>
                  </circle>
                  <g filter="url(#sphereNoise)" opacity="0.55">
                    <circle cx="100" cy="100" r="90" fill="url(#haloGlow)">
                      <animate attributeName="r" values="84;90;84" dur="6.2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </g>

                <g class="sphere-waves" stroke="url(#waveGradient)" stroke-width="2.6" fill="none" stroke-linecap="round" filter="url(#waveBlur)">
                  <path d="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110;
                              M20 90 C60 120, 100 80, 140 110 S 190 120, 180 80;
                              M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110"/>
                  </path>
                  <path d="M20 70 C60 40, 120 60, 160 40" opacity="0.7">
                    <animate attributeName="d" dur="7s" repeatCount="indefinite"
                      values="M20 70 C60 40, 120 60, 160 40;
                              M25 60 C80 20, 140 50, 170 70;
                              M20 70 C60 40, 120 60, 160 40"/>
                  </path>
                  <path d="M30 140 C80 160, 120 140, 170 160" opacity="0.6">
                    <animate attributeName="d" dur="6s" repeatCount="indefinite"
                      values="M30 140 C80 160, 120 140, 170 160;
                              M40 150 C90 170, 130 150, 170 140;
                              M30 140 C80 160, 120 140, 170 160"/>
                  </path>
                </g>

                <circle cx="100" cy="100" r="88" fill="none" stroke="url(#edgeGradient)" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="18 14" opacity="0.92">
                  <animate attributeName="stroke-dashoffset" values="0;220;0" dur="16s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="100" r="94" fill="none" stroke="url(#edgeGradient)" stroke-width="1.3" opacity="0.75">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="24s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>FrailtyLens adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="FrailtyLens audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 24px;
  justify-items: center;
}

.hero-figure {
  position: relative;
  width: clamp(260px, 40vw, 420px);
  height: clamp(260px, 40vw, 420px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 70%);
  box-shadow: 0 60px 140px -80px rgba(9, 52, 114, 0.9);
  overflow: visible;
}

.figure-glow {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, rgba(113, 242, 196, 0.35) 0%, rgba(95, 208, 255, 0.18) 45%, transparent 70%);
  filter: blur(40px);
  opacity: 0.8;
  animation: pulseGlow 6s ease-in-out infinite;
}

.figure-core {
  position: relative;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85), rgba(113, 242, 196, 0.2) 50%, rgba(5, 33, 53, 0.4) 100%),
    radial-gradient(circle at 70% 75%, rgba(95, 208, 255, 0.25), rgba(0, 0, 0, 0) 70%);
  box-shadow:
    inset 0 0 28px rgba(95, 208, 255, 0.18),
    inset 0 0 48px rgba(113, 242, 196, 0.12),
    0 0 36px rgba(95, 208, 255, 0.28);
  transform-style: preserve-3d;
  --rotateX: 18deg;
  --rotateY: 32deg;
  transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
  transition: transform 0.6s ease;
}

.neon-sphere {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  overflow: visible;
  mix-blend-mode: screen;
  pointer-events: none;
}

.orbit {
  position: absolute;
  inset: -16%;
  border-radius: 50%;
  border: 1.6px dashed rgba(95, 208, 255, 0.4);
  transform-style: preserve-3d;
  animation: orbitSpin 14s linear infinite;
}

.orbit--middle {
  inset: -30%;
  border-color: rgba(113, 242, 196, 0.45);
  animation-duration: 18s;
}

.orbit--outer {
  inset: -45%;
  border-color: rgba(95, 208, 255, 0.35);
  animation-duration: 22s;
}

.orbit__label {
  position: absolute;
  top: 8%;
  right: 8%;
  padding: 6px 12px;
  background: rgba(2, 20, 38, 0.75);
  color: rgba(175, 251, 236, 0.95);
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 12px 24px -18px rgba(0, 0, 0, 0.8);
}

.figure-axis {
  position: absolute;
  inset: 50% calc(50% - 1px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(95, 208, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
}

.figure-axis--x {
  transform: rotate(90deg);
}

.figure-axis--y {
  transform: rotate(45deg);
}

.figure-axis--z {
  transform: rotate(-45deg);
}

.figure-heartline {
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  border: 2px solid rgba(95, 208, 255, 0.8);
  box-shadow: 0 0 25px rgba(95, 208, 255, 0.45), 0 0 35px rgba(113, 242, 196, 0.35) inset;
  animation: heartbeat 3.6s ease-in-out infinite;
}

.hero-figure.is-hovered .figure-core,
.hero-figure.is-interacting .figure-core {
  box-shadow:
    inset 0 0 34px rgba(95, 208, 255, 0.45),
    inset 0 0 56px rgba(113, 242, 196, 0.35),
    0 0 80px rgba(95, 208, 255, 0.45);
  transition: transform 0.12s ease, box-shadow 0.3s ease;
}

.hero-figure__legend {
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  border: 1px solid rgba(21, 36, 59, 0.08);
  box-shadow: 0 24px 50px -36px rgba(13, 57, 107, 0.4);
  max-width: 360px;
}

.hero-figure__legend ul {
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 16px 0 0;
  color: var(--text-muted);
}

.hero-figure__legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-figure__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  margin: 0 0 6px;
}

.badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-flex;
  box-shadow: 0 0 10px currentColor;
}

.badge--detect {
  color: #5fd0ff;
  background: rgba(95, 208, 255, 0.9);
}

.badge--care {
  color: #f9c46b;
  background: rgba(249, 196, 107, 0.95);
}

.badge--joy {
  color: #71f2c4;
  background: rgba(113, 242, 196, 0.95);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.solution-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 56px);
  align-items: stretch;
}

.solution-copy {
  display: grid;
  gap: 18px;
}

.solution-item {
  text-align: left;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.45);
  border: 1px solid rgba(21, 36, 59, 0.08);
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
  font: inherit;
  color: inherit;
}

.solution-item__label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.solution-item__title {
  font-family: "Outfit", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
}

.solution-item__text {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.solution-item:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.35);
  outline-offset: 3px;
}

.solution-item.is-active {
  transform: translateY(-4px);
  border-color: rgba(29, 134, 255, 0.3);
  box-shadow: 0 28px 60px -34px rgba(13, 57, 107, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.solution-visual {
  position: relative;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 10% 20%, rgba(113, 242, 196, 0.1), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(95, 208, 255, 0.12), transparent 55%),
    #041427;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 45px 80px -40px rgba(3, 16, 35, 0.7);
  border: 1px solid rgba(99, 180, 255, 0.12);
  overflow: hidden;
}

.solution-visual__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.platform-base {
  position: relative;
  background: linear-gradient(135deg, #0b2345 0%, #102f5d 40%, #1d3c73 100%);
  border-radius: 18px;
  padding: 16px 20px;
  margin-top: auto;
  color: #d6e7ff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 -10px 30px -20px rgba(37, 112, 255, 0.8);
}

.pillar-group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 32px);
  padding: 0 8px 48px;
  position: relative;
}

.pillar {
  position: relative;
  width: clamp(60px, 10vw, 88px);
  height: var(--pillar-height, 200px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(113, 242, 196, 0.35) 100%);
  border-radius: 18px 18px 8px 8px;
  transform-origin: bottom center;
  transform: perspective(900px) rotateX(18deg);
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.pillar::before {
  content: "";
  position: absolute;
  inset: -14px -16px auto -16px;
  height: 14px;
  border-radius: 12px / 8px;
  background: rgba(26, 44, 78, 0.65);
  filter: blur(8px);
  transform: translateZ(-1px);
  z-index: -1;
}

.pillar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.35), transparent 70%);
  border-radius: inherit;
  opacity: 0.6;
  pointer-events: none;
}

.pillar__label {
  transform: rotateX(-18deg);
}

.pillar.is-active {
  transform: perspective(900px) rotateX(12deg) translateY(-12px) scale(1.05);
  box-shadow: 0 30px 70px -26px rgba(113, 242, 196, 0.6), 0 18px 65px -20px rgba(95, 208, 255, 0.75);
  filter: saturate(1.4);
}

.pillar--bio {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.35) 0%, rgba(147, 255, 181, 0.65) 100%);
}

.pillar--mind {
  background: linear-gradient(180deg, rgba(255, 141, 161, 0.35) 0%, rgba(147, 152, 255, 0.55) 100%);
}

.pillar--journey {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.45) 0%, rgba(113, 242, 196, 0.6) 100%);
}

.pillar--social {
  background: linear-gradient(180deg, rgba(147, 255, 181, 0.4) 0%, rgba(95, 208, 255, 0.6) 100%);
}

.pillar--command {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.45) 0%, rgba(59, 132, 255, 0.75) 100%);
}

.pillar--triage {
  background: linear-gradient(180deg, rgba(255, 162, 189, 0.4) 0%, rgba(204, 137, 255, 0.6) 100%);
}

.pillar--care {
  background: linear-gradient(180deg, rgba(113, 242, 196, 0.45) 0%, rgba(95, 208, 255, 0.65) 100%);
}

.pillar--insight {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.4) 0%, rgba(255, 141, 161, 0.55) 100%);
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes orbitSpin {
  from {
    transform: rotate3d(0.2, 1, 0.4, 0deg);
  }
  to {
    transform: rotate3d(0.2, 1, 0.4, 360deg);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.96);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.08);
    opacity: 1;
  }
  60% {
    transform: scale(1.02);
    opacity: 0.75;
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }

  .solution-layout {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }

  .solution-item {
    padding: 20px 22px;
  }

  .pillar-group {
    padding-bottom: 32px;
  }

  .pillar {
    width: clamp(52px, 24vw, 72px);
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 24px;
  justify-items: center;
}

.hero-figure {
  position: relative;
  width: clamp(260px, 40vw, 420px);
  height: clamp(260px, 40vw, 420px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 70%);
  box-shadow: 0 60px 140px -80px rgba(9, 52, 114, 0.9);
  overflow: visible;
}

.figure-glow {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, rgba(113, 242, 196, 0.35) 0%, rgba(95, 208, 255, 0.18) 45%, transparent 70%);
  filter: blur(40px);
  opacity: 0.8;
  animation: pulseGlow 6s ease-in-out infinite;
}

.figure-core {
  position: relative;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85), rgba(113, 242, 196, 0.2) 50%, rgba(5, 33, 53, 0.4) 100%),
    radial-gradient(circle at 70% 75%, rgba(95, 208, 255, 0.25), rgba(0, 0, 0, 0) 70%);
  box-shadow:
    inset 0 0 28px rgba(95, 208, 255, 0.18),
    inset 0 0 48px rgba(113, 242, 196, 0.12),
    0 0 36px rgba(95, 208, 255, 0.28);
  transform-style: preserve-3d;
  --rotateX: 18deg;
  --rotateY: 32deg;
  transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
  transition: transform 0.6s ease;
}

.neon-sphere {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  overflow: visible;
  mix-blend-mode: screen;
  pointer-events: none;
}

.neon-sphere .sphere-waves path {
  filter: drop-shadow(0 0 12px rgba(95, 208, 255, 0.5));
}

.orbit {
  position: absolute;
  inset: -16%;
  border-radius: 50%;
  border: 1.6px dashed rgba(95, 208, 255, 0.4);
  transform-style: preserve-3d;
  animation: orbitSpin 14s linear infinite;
}

.orbit--middle {
  inset: -30%;
  border-color: rgba(113, 242, 196, 0.45);
  animation-duration: 18s;
}

.orbit--outer {
  inset: -45%;
  border-color: rgba(95, 208, 255, 0.35);
  animation-duration: 22s;
}

.orbit__label {
  position: absolute;
  top: 8%;
  right: 8%;
  padding: 6px 12px;
  background: rgba(2, 20, 38, 0.75);
  color: rgba(175, 251, 236, 0.95);
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 12px 24px -18px rgba(0, 0, 0, 0.8);
}

.figure-axis {
  position: absolute;
  inset: 50% calc(50% - 1px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(95, 208, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
}

.figure-axis--x {
  transform: rotate(90deg);
}

.figure-axis--y {
  transform: rotate(45deg);
}

.figure-axis--z {
  transform: rotate(-45deg);
}

.figure-heartline {
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  border: 2px solid rgba(95, 208, 255, 0.8);
  box-shadow: 0 0 25px rgba(95, 208, 255, 0.45), 0 0 35px rgba(113, 242, 196, 0.35) inset;
  animation: heartbeat 3.6s ease-in-out infinite;
}

.hero-figure.is-hovered .figure-core,
.hero-figure.is-interacting .figure-core {
  box-shadow:
    inset 0 0 34px rgba(95, 208, 255, 0.45),
    inset 0 0 56px rgba(113, 242, 196, 0.35),
    0 0 80px rgba(95, 208, 255, 0.45);
  transition: transform 0.12s ease, box-shadow 0.3s ease;
}

.hero-figure__legend {
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  border: 1px solid rgba(21, 36, 59, 0.08);
  box-shadow: 0 24px 50px -36px rgba(13, 57, 107, 0.4);
  max-width: 360px;
}

.hero-figure__legend ul {
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 16px 0 0;
  color: var(--text-muted);
}

.hero-figure__legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-figure__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  margin: 0 0 6px;
}

.badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-flex;
  box-shadow: 0 0 10px currentColor;
}

.badge--detect {
  color: #5fd0ff;
  background: rgba(95, 208, 255, 0.9);
}

.badge--care {
  color: #f9c46b;
  background: rgba(249, 196, 107, 0.95);
}

.badge--joy {
  color: #71f2c4;
  background: rgba(113, 242, 196, 0.95);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.solution-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 56px);
  align-items: stretch;
}

.solution-copy {
  display: grid;
  gap: 18px;
}

.solution-item {
  text-align: left;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.45);
  border: 1px solid rgba(21, 36, 59, 0.08);
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
  font: inherit;
  color: inherit;
}

.solution-item__label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.solution-item__title {
  font-family: "Outfit", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
}

.solution-item__text {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.solution-item:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.35);
  outline-offset: 3px;
}

.solution-item.is-active {
  transform: translateY(-4px);
  border-color: rgba(29, 134, 255, 0.3);
  box-shadow: 0 28px 60px -34px rgba(13, 57, 107, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.solution-visual {
  position: relative;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 10% 20%, rgba(113, 242, 196, 0.1), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(95, 208, 255, 0.12), transparent 55%),
    #041427;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 45px 80px -40px rgba(3, 16, 35, 0.7);
  border: 1px solid rgba(99, 180, 255, 0.12);
  overflow: hidden;
}

.solution-visual__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.platform-base {
  position: relative;
  background: linear-gradient(135deg, #0b2345 0%, #102f5d 40%, #1d3c73 100%);
  border-radius: 18px;
  padding: 16px 20px;
  margin-top: auto;
  color: #d6e7ff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 -10px 30px -20px rgba(37, 112, 255, 0.8);
}

.pillar-group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 32px);
  padding: 0 8px 48px;
  position: relative;
}

.pillar {
  position: relative;
  width: clamp(60px, 10vw, 88px);
  height: var(--pillar-height, 200px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(113, 242, 196, 0.35) 100%);
  border-radius: 18px 18px 8px 8px;
  transform-origin: bottom center;
  transform: perspective(900px) rotateX(18deg);
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.pillar::before {
  content: "";
  position: absolute;
  inset: -14px -16px auto -16px;
  height: 14px;
  border-radius: 12px / 8px;
  background: rgba(26, 44, 78, 0.65);
  filter: blur(8px);
  transform: translateZ(-1px);
  z-index: -1;
}

.pillar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.35), transparent 70%);
  border-radius: inherit;
  opacity: 0.6;
  pointer-events: none;
}

.pillar__label {
  transform: rotateX(-18deg);
}

.pillar.is-active {
  transform: perspective(900px) rotateX(12deg) translateY(-12px) scale(1.05);
  box-shadow: 0 30px 70px -26px rgba(113, 242, 196, 0.6), 0 18px 65px -20px rgba(95, 208, 255, 0.75);
  filter: saturate(1.4);
}

.pillar--bio {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.35) 0%, rgba(147, 255, 181, 0.65) 100%);
}

.pillar--mind {
  background: linear-gradient(180deg, rgba(255, 141, 161, 0.35) 0%, rgba(147, 152, 255, 0.55) 100%);
}

.pillar--journey {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.45) 0%, rgba(113, 242, 196, 0.6) 100%);
}

.pillar--social {
  background: linear-gradient(180deg, rgba(147, 255, 181, 0.4) 0%, rgba(95, 208, 255, 0.6) 100%);
}

.pillar--command {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.45) 0%, rgba(59, 132, 255, 0.75) 100%);
}

.pillar--triage {
  background: linear-gradient(180deg, rgba(255, 162, 189, 0.4) 0%, rgba(204, 137, 255, 0.6) 100%);
}

.pillar--care {
  background: linear-gradient(180deg, rgba(113, 242, 196, 0.45) 0%, rgba(95, 208, 255, 0.65) 100%);
}

.pillar--insight {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.4) 0%, rgba(255, 141, 161, 0.55) 100%);
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes orbitSpin {
  from {
    transform: rotate3d(0.2, 1, 0.4, 0deg);
  }
  to {
    transform: rotate3d(0.2, 1, 0.4, 360deg);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.96);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.08);
    opacity: 1;
  }
  60% {
    transform: scale(1.02);
    opacity: 0.75;
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }

  .solution-layout {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }

  .solution-item {
    padding: 20px 22px;
  }

  .pillar-group {
    padding-bottom: 32px;
  }

  .pillar {
    width: clamp(52px, 24vw, 72px);
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

## Summary
- Rebuilt the hero’s AI core as a holographic, blue-green energy sphere with animated waves: added layered gradients, turbulence masks, and neon outlines to mimic intertwining light ribbons.
- Enhanced `figure-core` styling so the sphere sits in a luminous glass shell, with SVG wave paths emitting subtle drop-shadow glows while still supporting drag rotation.
- Updated CSS to blend the sphere’s colors, boost glow intensity, and keep interactions responsive.

## Testing
- Not run (visual/animation updates only; refresh in browser to review the new luminous energy sphere).

---

**User**

redesign the 3d figure.   make it as a A 3D luminous energy sphere with intertwining blue and purple light waves, giving off a holographic or digital aura. with orbit show prevention joyful ageing early detection surrounding the energy ball

---

**Cursor**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FrailtyLens | Active Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">FrailtyLens</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            Mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore FrailtyLens</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>Shortlisted · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <svg class="neon-sphere" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="coreGlow" cx="32%" cy="30%" r="70%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                    <stop offset="35%" stop-color="rgba(181,138,255,0.35)"/>
                    <stop offset="70%" stop-color="rgba(32,18,64,0.45)"/>
                    <stop offset="100%" stop-color="rgba(2,12,30,0.75)"/>
                  </radialGradient>
                  <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="rgba(146,122,255,0.85)"/>
                    <stop offset="55%" stop-color="rgba(95,208,255,0.4)"/>
                    <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
                  </radialGradient>
                  <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#5fd0ff"/>
                    <stop offset="40%" stop-color="#b48cff"/>
                    <stop offset="75%" stop-color="#6d8bff"/>
                    <stop offset="100%" stop-color="#a06bff"/>
                  </linearGradient>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(95,208,255,0)"/>
                    <stop offset="35%" stop-color="rgba(95,208,255,0.95)"/>
                    <stop offset="65%" stop-color="rgba(180,120,255,0.95)"/>
                    <stop offset="100%" stop-color="rgba(180,120,255,0)"/>
                  </linearGradient>
                  <filter id="sphereNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="12">
                      <animate attributeName="baseFrequency" values="0.7;0.4;0.7" dur="9s" repeatCount="indefinite"/>
                    </feTurbulence>
                    <feGaussianBlur stdDeviation="6"/>
                  </filter>
                  <filter id="waveBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4"/>
                  </filter>
                  <mask id="sphereMask">
                    <circle cx="100" cy="100" r="82" fill="white"/>
                    <circle cx="100" cy="100" r="82" fill="url(#haloGlow)" opacity="0.6"/>
                  </mask>
                </defs>

                <circle cx="100" cy="100" r="82" fill="url(#coreGlow)" opacity="0.97"/>

                <g mask="url(#sphereMask)" style="mix-blend-mode: screen;">
                  <circle cx="100" cy="100" r="86" fill="url(#haloGlow)" opacity="0.85">
                    <animate attributeName="opacity" values="0.65;0.9;0.65" dur="5s" repeatCount="indefinite"/>
                  </circle>
                  <g filter="url(#sphereNoise)" opacity="0.55">
                    <circle cx="100" cy="100" r="90" fill="url(#haloGlow)">
                      <animate attributeName="r" values="84;90;84" dur="6.2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </g>

                <g class="sphere-waves" stroke="url(#waveGradient)" stroke-width="2.6" fill="none" stroke-linecap="round" filter="url(#waveBlur)">
                  <path d="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110;
                              M20 90 C60 120, 100 80, 140 110 S 190 120, 180 80;
                              M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110"/>
                  </path>
                  <path d="M20 70 C60 40, 120 60, 160 40" opacity="0.7">
                    <animate attributeName="d" dur="7s" repeatCount="indefinite"
                      values="M20 70 C60 40, 120 60, 160 40;
                              M25 60 C80 20, 140 50, 170 70;
                              M20 70 C60 40, 120 60, 160 40"/>
                  </path>
                  <path d="M30 140 C80 160, 120 140, 170 160" opacity="0.6">
                    <animate attributeName="d" dur="6s" repeatCount="indefinite"
                      values="M30 140 C80 160, 120 140, 170 160;
                              M40 150 C90 170, 130 150, 170 140;
                              M30 140 C80 160, 120 140, 170 160"/>
                  </path>
                </g>

                <circle cx="100" cy="100" r="88" fill="none" stroke="url(#edgeGradient)" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="18 14" opacity="0.92">
                  <animate attributeName="stroke-dashoffset" values="0;220;0" dur="16s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="100" r="94" fill="none" stroke="url(#edgeGradient)" stroke-width="1.3" opacity="0.75">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="24s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>FrailtyLens adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="FrailtyLens audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```css
*** Begin Patch
*** Update File: styles.css
@@
-.figure-glow {
+.figure-glow {
   position: absolute;
   inset: -30%;
-  background: radial-gradient(circle, rgba(113, 242, 196, 0.35) 0%, rgba(95, 208, 255, 0.18) 45%, transparent 70%);
+  background: radial-gradient(circle, rgba(181, 138, 255, 0.4) 0%, rgba(95, 208, 255, 0.2) 45%, transparent 70%);
   filter: blur(40px);
   opacity: 0.8;
   animation: pulseGlow 6s ease-in-out infinite;
 }
 
 .figure-core {
   position: relative;
   width: 70%;
   height: 70%;
   border-radius: 50%;
   background:
-    radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85), rgba(113, 242, 196, 0.2) 50%, rgba(5, 33, 53, 0.4) 100%),
-    radial-gradient(circle at 70% 75%, rgba(95, 208, 255, 0.25), rgba(0, 0, 0, 0) 70%);
+    radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85), rgba(181, 138, 255, 0.22) 55%, rgba(12, 24, 52, 0.45) 100%),
+    radial-gradient(circle at 70% 75%, rgba(95, 208, 255, 0.28), rgba(0, 0, 0, 0) 70%);
   box-shadow:
-    inset 0 0 28px rgba(95, 208, 255, 0.18),
-    inset 0 0 48px rgba(113, 242, 196, 0.12),
-    0 0 36px rgba(95, 208, 255, 0.28);
+    inset 0 0 28px rgba(95, 208, 255, 0.18),
+    inset 0 0 48px rgba(181, 138, 255, 0.16),
+    0 0 42px rgba(121, 150, 255, 0.32);
   transform-style: preserve-3d;
   --rotateX: 18deg;
   --rotateY: 32deg;
   transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
   transition: transform 0.6s ease;
@@
 .orbit {
   position: absolute;
   inset: -16%;
   border-radius: 50%;
-  border: 1.6px dashed rgba(95, 208, 255, 0.4);
+  border: 1.6px dashed rgba(122, 174, 255, 0.45);
   transform-style: preserve-3d;
   animation: orbitSpin 14s linear infinite;
 }
 
 .orbit--middle {
   inset: -30%;
-  border-color: rgba(113, 242, 196, 0.45);
+  border-color: rgba(181, 138, 255, 0.5);
   animation-duration: 18s;
 }
 
 .orbit--outer {
   inset: -45%;
-  border-color: rgba(95, 208, 255, 0.35);
+  border-color: rgba(95, 208, 255, 0.38);
   animation-duration: 22s;
 }
@@
 .figure-heartline {
   position: absolute;
   inset: 35%;
   border-radius: 50%;
-  border: 2px solid rgba(95, 208, 255, 0.8);
-  box-shadow: 0 0 25px rgba(95, 208, 255, 0.45), 0 0 35px rgba(113, 242, 196, 0.35) inset;
+  border: 2px solid rgba(148, 130, 255, 0.82);
+  box-shadow: 0 0 28px rgba(130, 124, 255, 0.48), 0 0 32px rgba(95, 208, 255, 0.35) inset;
   animation: heartbeat 3.6s ease-in-out infinite;
 }
 
 .hero-figure.is-hovered .figure-core,
 .hero-figure.is-interacting .figure-core {
   box-shadow:
-    inset 0 0 34px rgba(95, 208, 255, 0.45),
-    inset 0 0 56px rgba(113, 242, 196, 0.35),
-    0 0 80px rgba(95, 208, 255, 0.45);
+    inset 0 0 34px rgba(95, 208, 255, 0.48),
+    inset 0 0 56px rgba(181, 138, 255, 0.42),
+    0 0 86px rgba(125, 141, 255, 0.5);
   transition: transform 0.12s ease, box-shadow 0.3s ease;
 }
 
 .neon-sphere {
   width: 100%;
@@
 .neon-sphere .sphere-waves path {
-  filter: drop-shadow(0 0 12px rgba(95, 208, 255, 0.5));
+  filter: drop-shadow(0 0 14px rgba(95, 208, 255, 0.55));
 }
*** End Patch
```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 24px;
  justify-items: center;
}

.hero-figure {
  position: relative;
  width: clamp(260px, 40vw, 420px);
  height: clamp(260px, 40vw, 420px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 70%);
  box-shadow: 0 60px 140px -80px rgba(9, 52, 114, 0.9);
  overflow: visible;
}

.figure-glow {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, rgba(181, 138, 255, 0.4) 0%, rgba(95, 208, 255, 0.22) 45%, transparent 70%);
  filter: blur(40px);
  opacity: 0.8;
  animation: pulseGlow 6s ease-in-out infinite;
}

.figure-core {
  position: relative;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85), rgba(181, 138, 255, 0.24) 55%, rgba(12, 24, 52, 0.45) 100%),
    radial-gradient(circle at 70% 75%, rgba(95, 208, 255, 0.3), rgba(0, 0, 0, 0) 70%);
  box-shadow:
    inset 0 0 28px rgba(95, 208, 255, 0.2),
    inset 0 0 48px rgba(181, 138, 255, 0.18),
    0 0 42px rgba(124, 146, 255, 0.32);
  transform-style: preserve-3d;
  --rotateX: 18deg;
  --rotateY: 32deg;
  transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
  transition: transform 0.6s ease;
}

.neon-sphere {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  overflow: visible;
  mix-blend-mode: screen;
  pointer-events: none;
}

.neon-sphere .sphere-waves path {
  filter: drop-shadow(0 0 14px rgba(137, 143, 255, 0.55));
}

.orbit {
  position: absolute;
  inset: -16%;
  border-radius: 50%;
  border: 1.6px dashed rgba(112, 154, 255, 0.46);
  transform-style: preserve-3d;
  animation: orbitSpin 14s linear infinite;
}

.orbit--middle {
  inset: -30%;
  border-color: rgba(181, 138, 255, 0.52);
  animation-duration: 18s;
}

.orbit--outer {
  inset: -45%;
  border-color: rgba(95, 208, 255, 0.38);
  animation-duration: 22s;
}

.orbit__label {
  position: absolute;
  top: 8%;
  right: 8%;
  padding: 6px 12px;
  background: rgba(2, 20, 38, 0.75);
  color: rgba(175, 251, 236, 0.95);
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 12px 24px -18px rgba(0, 0, 0, 0.8);
}

.figure-axis {
  position: absolute;
  inset: 50% calc(50% - 1px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(95, 208, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
}

.figure-axis--x {
  transform: rotate(90deg);
}

.figure-axis--y {
  transform: rotate(45deg);
}

.figure-axis--z {
  transform: rotate(-45deg);
}

.figure-heartline {
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  border: 2px solid rgba(156, 138, 255, 0.82);
  box-shadow: 0 0 28px rgba(131, 124, 255, 0.5), 0 0 34px rgba(95, 208, 255, 0.36) inset;
  animation: heartbeat 3.6s ease-in-out infinite;
}

.hero-figure.is-hovered .figure-core,
.hero-figure.is-interacting .figure-core {
  box-shadow:
    inset 0 0 34px rgba(95, 208, 255, 0.5),
    inset 0 0 56px rgba(181, 138, 255, 0.42),
    0 0 86px rgba(134, 144, 255, 0.5);
  transition: transform 0.12s ease, box-shadow 0.3s ease;
}

.hero-figure__legend {
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  border: 1px solid rgba(21, 36, 59, 0.08);
  box-shadow: 0 24px 50px -36px rgba(13, 57, 107, 0.4);
  max-width: 360px;
}

.hero-figure__legend ul {
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 16px 0 0;
  color: var(--text-muted);
}

.hero-figure__legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-figure__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  margin: 0 0 6px;
}

.badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-flex;
  box-shadow: 0 0 10px currentColor;
}

.badge--detect {
  color: #5fd0ff;
  background: rgba(95, 208, 255, 0.9);
}

.badge--care {
  color: #f9c46b;
  background: rgba(249, 196, 107, 0.95);
}

.badge--joy {
  color: #71f2c4;
  background: rgba(113, 242, 196, 0.95);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.solution-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 56px);
  align-items: stretch;
}

.solution-copy {
  display: grid;
  gap: 18px;
}

.solution-item {
  text-align: left;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.45);
  border: 1px solid rgba(21, 36, 59, 0.08);
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
  font: inherit;
  color: inherit;
}

.solution-item__label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.solution-item__title {
  font-family: "Outfit", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
}

.solution-item__text {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.solution-item:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.35);
  outline-offset: 3px;
}

.solution-item.is-active {
  transform: translateY(-4px);
  border-color: rgba(29, 134, 255, 0.3);
  box-shadow: 0 28px 60px -34px rgba(13, 57, 107, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.solution-visual {
  position: relative;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 10% 20%, rgba(113, 242, 196, 0.1), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(95, 208, 255, 0.12), transparent 55%),
    #041427;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 45px 80px -40px rgba(3, 16, 35, 0.7);
  border: 1px solid rgba(99, 180, 255, 0.12);
  overflow: hidden;
}

.solution-visual__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.platform-base {
  position: relative;
  background: linear-gradient(135deg, #0b2345 0%, #102f5d 40%, #1d3c73 100%);
  border-radius: 18px;
  padding: 16px 20px;
  margin-top: auto;
  color: #d6e7ff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 -10px 30px -20px rgba(37, 112, 255, 0.8);
}

.pillar-group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 32px);
  padding: 0 8px 48px;
  position: relative;
}

.pillar {
  position: relative;
  width: clamp(60px, 10vw, 88px);
  height: var(--pillar-height, 200px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(113, 242, 196, 0.35) 100%);
  border-radius: 18px 18px 8px 8px;
  transform-origin: bottom center;
  transform: perspective(900px) rotateX(18deg);
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.pillar::before {
  content: "";
  position: absolute;
  inset: -14px -16px auto -16px;
  height: 14px;
  border-radius: 12px / 8px;
  background: rgba(26, 44, 78, 0.65);
  filter: blur(8px);
  transform: translateZ(-1px);
  z-index: -1;
}

.pillar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.35), transparent 70%);
  border-radius: inherit;
  opacity: 0.6;
  pointer-events: none;
}

.pillar__label {
  transform: rotateX(-18deg);
}

.pillar.is-active {
  transform: perspective(900px) rotateX(12deg) translateY(-12px) scale(1.05);
  box-shadow: 0 30px 70px -26px rgba(113, 242, 196, 0.6), 0 18px 65px -20px rgba(95, 208, 255, 0.75);
  filter: saturate(1.4);
}

.pillar--bio {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.35) 0%, rgba(147, 255, 181, 0.65) 100%);
}

.pillar--mind {
  background: linear-gradient(180deg, rgba(255, 141, 161, 0.35) 0%, rgba(147, 152, 255, 0.55) 100%);
}

.pillar--journey {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.45) 0%, rgba(113, 242, 196, 0.6) 100%);
}

.pillar--social {
  background: linear-gradient(180deg, rgba(147, 255, 181, 0.4) 0%, rgba(95, 208, 255, 0.6) 100%);
}

.pillar--command {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.45) 0%, rgba(59, 132, 255, 0.75) 100%);
}

.pillar--triage {
  background: linear-gradient(180deg, rgba(255, 162, 189, 0.4) 0%, rgba(204, 137, 255, 0.6) 100%);
}

.pillar--care {
  background: linear-gradient(180deg, rgba(113, 242, 196, 0.45) 0%, rgba(95, 208, 255, 0.65) 100%);
}

.pillar--insight {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.4) 0%, rgba(255, 141, 161, 0.55) 100%);
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes orbitSpin {
  from {
    transform: rotate3d(0.2, 1, 0.4, 0deg);
  }
  to {
    transform: rotate3d(0.2, 1, 0.4, 360deg);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.96);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.08);
    opacity: 1;
  }
  60% {
    transform: scale(1.02);
    opacity: 0.75;
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }

  .solution-layout {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }

  .solution-item {
    padding: 20px 22px;
  }

  .pillar-group {
    padding-bottom: 32px;
  }

  .pillar {
    width: clamp(52px, 24vw, 72px);
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

## Summary
- Reimagined the hero “Neural Core” as a holographic energy sphere with intertwined blue‑purple light ribbons: updated SVG gradients and animated wave paths to create the glowing aura.
- Re-tuned surrounding halo, heartline, and orbit colors in `styles.css` so the prevention / early detection / joyful ageing rings now shimmer in coordinated blue–violet tones.

## Testing
- Not run (visual update only; view in browser to confirm the new luminous sphere and orbit labels).

---

**User**

let the user can rotate it mannually if the user can move it make it defalt roatation speed

---

**Cursor**

```javascript
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".nav-toggle__bar");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!expanded).toString());
    menu.classList.toggle("is-open");
    bars[0].style.transform = menu.classList.contains("is-open")
      ? "translateY(8px) rotate(45deg)"
      : "";
    bars[1].style.opacity = menu.classList.contains("is-open") ? "0" : "1";
    bars[2].style.transform = menu.classList.contains("is-open")
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        bars[0].style.transform = "";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "";
      }
    }
  });
});

// Solution tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

if (tabs.length) {
  tabs.forEach((tab) => {
    if (tab.classList.contains("is-active")) {
      tab.setAttribute("tabindex", "0");
    } else {
      tab.setAttribute("tabindex", "-1");
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const panel = document.getElementById(targetId);

      if (!panel) return;

      tabs.forEach((btn) => {
        btn.classList.toggle("is-active", btn === tab);
        btn.setAttribute("aria-selected", btn === tab ? "true" : "false");
     live   btn.setAttribute("tabindex", btn === tab ? "0" : "-1");
      });

      panels.forEach((p) => {
        p.classList.toggle("is-active", p === panel);
        p.setAttribute("hidden", p !== panel);
      });
    });

    // keyboard navigation between tabs
    tab.addEventListener("keydown", (event) => {
      const currentIndex = Array.from(tabs).indexOf(tab);
      let newIndex = currentIndex;

      if (event.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else {
        return;
      }

      event.preventDefault();
      tabs[newIndex].focus();
      tabs[newIndex].click();
    });
  });

  panels.forEach((panel, index) => {
    if (!panel.classList.contains("is-active")) {
      panel.setAttribute("hidden", "true");
    } else {
      tabs[index].setAttribute("tabindex", "0");
    }
  });
}

// Solution feature selectors
document.querySelectorAll(".solution-layout").forEach((layout) => {
  const items = layout.querySelectorAll(".solution-item");
  const pillars = layout.querySelectorAll(".pillar");

  const activate = (key) => {
    items.forEach((item) => {
      const isMatch = item.dataset.pillar === key;
      item.classList.toggle("is-active", isMatch);
      item.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    pillars.forEach((pillar) => {
      pillar.classList.toggle("is-active", pillar.dataset.pillar === key);
    });
  };

  items.forEach((item) => {
    item.addEventListener("click", () => activate(item.dataset.pillar));
    item.addEventListener("mouseenter", () => activate(item.dataset.pillar));
  });

  if (items.length) {
    activate(items[0].dataset.pillar);
  }
});

// Hero sphere rotation
const heroFigure = document.querySelector(".hero-figure");
const figureCore = heroFigure?.querySelector(".figure-core");

if (heroFigure && figureCore) {
  let isInteracting = false;
  let startX = 0;
  let startY = 0;
  const defaultRotation = { x: 18, y: 32 };
  let baseX = defaultRotation.x;
  let baseY = defaultRotation.y;
  let targetX = baseX;
  let targetY = baseY;
  let autoAngle = 0;
  const autoSpeed = 0.015;

  const setRotation = (xDeg, yDeg) => {
    figureCore.style.setProperty("--rotateX", `${xDeg}deg`);
    figureCore.style.setProperty("--rotateY", `${yDeg}deg`);
  };

  const animate = () => {
    if (!isInteracting) {
      autoAngle += autoSpeed;
      const autoX = defaultRotation.x + Math.sin(autoAngle) * 4;
      const autoY = defaultRotation.y + Math.cos(autoAngle * 0.8) * 6 + autoAngle * 0.3;
      targetX += (autoX - targetX) * 0.05;
      targetY += (autoY - targetY) * 0.05;
    }

    baseX += (targetX - baseX) * 0.12;
    baseY += (targetY - baseY) * 0.12;
    setRotation(baseX, baseY);

    requestAnimationFrame(animate);
  };

  heroFigure.addEventListener("pointerdown", (event) => {
    isInteracting = true;
    heroFigure.classList.add("is-interacting");
    heroFigure.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startY = event.clientY;
    baseX = targetX;
    baseY = targetY;
    autoAngle = 0;
  });

  heroFigure.addEventListener("pointermove", (event) => {
    if (!isInteracting) return;
    const deltaX = (event.clientY - startY) * 0.2;
    const deltaY = (event.clientX - startX) * 0.25;
    targetX = Math.max(-20, Math.min(50, baseX - deltaX));
    targetY = baseY + deltaY;
  });

  const endInteraction = (event) => {
    if (!isInteracting) return;
    isInteracting = false;
    heroFigure.classList.remove("is-interacting");
    if (typeof event.pointerId === "number") {
      heroFigure.releasePointerCapture(event.pointerId);
    }
    // Ease targets back toward default so auto-rotation resumes smoothly
    targetX += (defaultRotation.x - targetX) * 0.3;
    targetY += (defaultRotation.y - targetY) * 0.3;
  };

  heroFigure.addEventListener("pointerup", endInteraction);
  heroFigure.addEventListener("pointerleave", endInteraction);
  heroFigure.addEventListener("pointercancel", endInteraction);

  heroFigure.addEventListener("mouseenter", () => {
    heroFigure.classList.add("is-hovered");
  });
  heroFigure.addEventListener("mouseleave", () => {
    heroFigure.classList.remove("is-hovered");
  });

  animate();
}


```

```javascript
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".nav-toggle__bar");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!expanded).toString());
    menu.classList.toggle("is-open");
    bars[0].style.transform = menu.classList.contains("is-open")
      ? "translateY(8px) rotate(45deg)"
      : "";
    bars[1].style.opacity = menu.classList.contains("is-open") ? "0" : "1";
    bars[2].style.transform = menu.classList.contains("is-open")
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        bars[0].style.transform = "";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "";
      }
    }
  });
});

// Solution tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

if (tabs.length) {
  tabs.forEach((tab) => {
    if (tab.classList.contains("is-active")) {
      tab.setAttribute("tabindex", "0");
    } else {
      tab.setAttribute("tabindex", "-1");
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const panel = document.getElementById(targetId);

      if (!panel) return;

      tabs.forEach((btn) => {
        btn.classList.toggle("is-active", btn === tab);
        btn.setAttribute("aria-selected", btn === tab ? "true" : "false");
     live   btn.setAttribute("tabindex", btn === tab ? "0" : "-1");
      });

      panels.forEach((p) => {
        p.classList.toggle("is-active", p === panel);
        p.setAttribute("hidden", p !== panel);
      });
    });

    // keyboard navigation between tabs
    tab.addEventListener("keydown", (event) => {
      const currentIndex = Array.from(tabs).indexOf(tab);
      let newIndex = currentIndex;

      if (event.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else {
        return;
      }

      event.preventDefault();
      tabs[newIndex].focus();
      tabs[newIndex].click();
    });
  });

  panels.forEach((panel, index) => {
    if (!panel.classList.contains("is-active")) {
      panel.setAttribute("hidden", "true");
    } else {
      tabs[index].setAttribute("tabindex", "0");
    }
  });
}

// Solution feature selectors
document.querySelectorAll(".solution-layout").forEach((layout) => {
  const items = layout.querySelectorAll(".solution-item");
  const pillars = layout.querySelectorAll(".pillar");

  const activate = (key) => {
    items.forEach((item) => {
      const isMatch = item.dataset.pillar === key;
      item.classList.toggle("is-active", isMatch);
      item.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    pillars.forEach((pillar) => {
      pillar.classList.toggle("is-active", pillar.dataset.pillar === key);
    });
  };

  items.forEach((item) => {
    item.addEventListener("click", () => activate(item.dataset.pillar));
    item.addEventListener("mouseenter", () => activate(item.dataset.pillar));
  });

  if (items.length) {
    activate(items[0].dataset.pillar);
  }
});

// Hero sphere rotation
const heroFigure = document.querySelector(".hero-figure");
const figureCore = heroFigure?.querySelector(".figure-core");

if (heroFigure && figureCore) {
  let isInteracting = false;
  let startX = 0;
  let startY = 0;
  const defaultRotation = { x: 18, y: 32 };
  let baseX = defaultRotation.x;
  let baseY = defaultRotation.y;
  let targetX = baseX;
  let targetY = baseY;
  let autoAngle = 0;
  const autoSpeed = 0.015;

  const setRotation = (xDeg, yDeg) => {
    figureCore.style.setProperty("--rotateX", `${xDeg}deg`);
    figureCore.style.setProperty("--rotateY", `${yDeg}deg`);
  };

  const animate = () => {
    if (!isInteracting) {
      autoAngle += autoSpeed;
      const autoX = defaultRotation.x + Math.sin(autoAngle) * 4;
      const autoY = defaultRotation.y + Math.sin(autoAngle * 0.7) * 10;
      targetX += (autoX - targetX) * 0.05;
      targetY += (autoY - targetY) * 0.05;
    }

    baseX += (targetX - baseX) * 0.12;
    baseY += (targetY - baseY) * 0.12;
    setRotation(baseX, baseY);

    requestAnimationFrame(animate);
  };

  heroFigure.addEventListener("pointerdown", (event) => {
    isInteracting = true;
    heroFigure.classList.add("is-interacting");
    heroFigure.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startY = event.clientY;
    baseX = targetX;
    baseY = targetY;
    autoAngle = 0;
  });

  heroFigure.addEventListener("pointermove", (event) => {
    if (!isInteracting) return;
    const deltaX = (event.clientY - startY) * 0.2;
    const deltaY = (event.clientX - startX) * 0.25;
    targetX = Math.max(-20, Math.min(50, baseX - deltaX));
    targetY = baseY + deltaY;
  });

  const endInteraction = (event) => {
    if (!isInteracting) return;
    isInteracting = false;
    heroFigure.classList.remove("is-interacting");
    if (typeof event.pointerId === "number") {
      heroFigure.releasePointerCapture(event.pointerId);
    }
    // Ease targets back toward default so auto-rotation resumes smoothly
    targetX += (defaultRotation.x - targetX) * 0.3;
    targetY += (defaultRotation.y - targetY) * 0.3;
  };

  heroFigure.addEventListener("pointerup", endInteraction);
  heroFigure.addEventListener("pointerleave", endInteraction);
  heroFigure.addEventListener("pointercancel", endInteraction);

  heroFigure.addEventListener("mouseenter", () => {
    heroFigure.classList.add("is-hovered");
  });
  heroFigure.addEventListener("mouseleave", () => {
    heroFigure.classList.remove("is-hovered");
  });

  animate();
}


```

## Summary
- Kept the new blue–purple holographic sphere and orbits.
- Updated `main.js` so the core slowly auto-rotates at a fixed default speed, while allowing users to click/drag to rotate manually.
- When the user releases, the sphere smoothly eases back to the default auto-rotation, keeping the motion consistent.

## Testing
- Not run (front-end interaction change); please refresh in the browser and drag the hero sphere to verify manual control and automatic rotation.

---

**User**

our compnay name Vitaris
our product name ResiliSense

---

**Cursor**

```html
*** Begin Patch
*** Update File: index.html
@@
-    <title>FrailtyLens | Active Wellness Intelligence</title>
+    <title>ResiliSense | Vitaris Wellness Intelligence</title>
@@
-        <a class="logo" href="#top">FrailtyLens</a>
+        <a class="logo" href="#top">Vitaris</a>
@@
-            FrailtyLens blends wearable biometrics, cognitive voice coaching, and social
+            ResiliSense blends wearable biometrics, cognitive voice coaching, and social
@@
-            <a class="btn btn--primary" href="#solution">Explore FrailtyLens</a>
+            <a class="btn btn--primary" href="#solution">Explore ResiliSense</a>
@@
-            <p>Shortlisted · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
+            <p>ResiliSense by Vitaris · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
*** End Patch
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ResiliSense | Vitaris Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">Vitaris</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            ResiliSense is our mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention from Vitaris.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore ResiliSense</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>ResiliSense by Vitaris · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <svg class="neon-sphere" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="coreGlow" cx="32%" cy="30%" r="70%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                    <stop offset="35%" stop-color="rgba(181,138,255,0.35)"/>
                    <stop offset="70%" stop-color="rgba(32,18,64,0.45)"/>
                    <stop offset="100%" stop-color="rgba(2,12,30,0.75)"/>
                  </radialGradient>
                  <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="rgba(146,122,255,0.85)"/>
                    <stop offset="55%" stop-color="rgba(95,208,255,0.4)"/>
                    <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
                  </radialGradient>
                  <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#5fd0ff"/>
                    <stop offset="40%" stop-color="#b48cff"/>
                    <stop offset="75%" stop-color="#6d8bff"/>
                    <stop offset="100%" stop-color="#a06bff"/>
                  </linearGradient>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(95,208,255,0)"/>
                    <stop offset="35%" stop-color="rgba(95,208,255,0.95)"/>
                    <stop offset="65%" stop-color="rgba(180,120,255,0.95)"/>
                    <stop offset="100%" stop-color="rgba(180,120,255,0)"/>
                  </linearGradient>
                  <filter id="sphereNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="12">
                      <animate attributeName="baseFrequency" values="0.7;0.4;0.7" dur="9s" repeatCount="indefinite"/>
                    </feTurbulence>
                    <feGaussianBlur stdDeviation="6"/>
                  </filter>
                  <filter id="waveBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4"/>
                  </filter>
                  <mask id="sphereMask">
                    <circle cx="100" cy="100" r="82" fill="white"/>
                    <circle cx="100" cy="100" r="82" fill="url(#haloGlow)" opacity="0.6"/>
                  </mask>
                </defs>

                <circle cx="100" cy="100" r="82" fill="url(#coreGlow)" opacity="0.97"/>

                <g mask="url(#sphereMask)" style="mix-blend-mode: screen;">
                  <circle cx="100" cy="100" r="86" fill="url(#haloGlow)" opacity="0.85">
                    <animate attributeName="opacity" values="0.65;0.9;0.65" dur="5s" repeatCount="indefinite"/>
                  </circle>
                  <g filter="url(#sphereNoise)" opacity="0.55">
                    <circle cx="100" cy="100" r="90" fill="url(#haloGlow)">
                      <animate attributeName="r" values="84;90;84" dur="6.2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </g>

                <g class="sphere-waves" stroke="url(#waveGradient)" stroke-width="2.6" fill="none" stroke-linecap="round" filter="url(#waveBlur)">
                  <path d="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110;
                              M20 90 C60 120, 100 80, 140 110 S 190 120, 180 80;
                              M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110"/>
                  </path>
                  <path d="M20 70 C60 40, 120 60, 160 40" opacity="0.7">
                    <animate attributeName="d" dur="7s" repeatCount="indefinite"
                      values="M20 70 C60 40, 120 60, 160 40;
                              M25 60 C80 20, 140 50, 170 70;
                              M20 70 C60 40, 120 60, 160 40"/>
                  </path>
                  <path d="M30 140 C80 160, 120 140, 170 160" opacity="0.6">
                    <animate attributeName="d" dur="6s" repeatCount="indefinite"
                      values="M30 140 C80 160, 120 140, 170 160;
                              M40 150 C90 170, 130 150, 170 140;
                              M30 140 C80 160, 120 140, 170 160"/>
                  </path>
                </g>

                <circle cx="100" cy="100" r="88" fill="none" stroke="url(#edgeGradient)" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="18 14" opacity="0.92">
                  <animate attributeName="stroke-dashoffset" values="0;220;0" dur="16s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="100" r="94" fill="none" stroke="url(#edgeGradient)" stroke-width="1.3" opacity="0.75">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="24s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>FrailtyLens adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="FrailtyLens audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>FrailtyLens · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ResiliSense | Vitaris Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">Vitaris</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            ResiliSense is our mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention from Vitaris.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore ResiliSense</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>ResiliSense by Vitaris · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <svg class="neon-sphere" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="coreGlow" cx="32%" cy="30%" r="70%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                    <stop offset="35%" stop-color="rgba(181,138,255,0.35)"/>
                    <stop offset="70%" stop-color="rgba(32,18,64,0.45)"/>
                    <stop offset="100%" stop-color="rgba(2,12,30,0.75)"/>
                  </radialGradient>
                  <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="rgba(146,122,255,0.85)"/>
                    <stop offset="55%" stop-color="rgba(95,208,255,0.4)"/>
                    <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
                  </radialGradient>
                  <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#5fd0ff"/>
                    <stop offset="40%" stop-color="#b48cff"/>
                    <stop offset="75%" stop-color="#6d8bff"/>
                    <stop offset="100%" stop-color="#a06bff"/>
                  </linearGradient>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(95,208,255,0)"/>
                    <stop offset="35%" stop-color="rgba(95,208,255,0.95)"/>
                    <stop offset="65%" stop-color="rgba(180,120,255,0.95)"/>
                    <stop offset="100%" stop-color="rgba(180,120,255,0)"/>
                  </linearGradient>
                  <filter id="sphereNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="12">
                      <animate attributeName="baseFrequency" values="0.7;0.4;0.7" dur="9s" repeatCount="indefinite"/>
                    </feTurbulence>
                    <feGaussianBlur stdDeviation="6"/>
                  </filter>
                  <filter id="waveBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4"/>
                  </filter>
                  <mask id="sphereMask">
                    <circle cx="100" cy="100" r="82" fill="white"/>
                    <circle cx="100" cy="100" r="82" fill="url(#haloGlow)" opacity="0.6"/>
                  </mask>
                </defs>

                <circle cx="100" cy="100" r="82" fill="url(#coreGlow)" opacity="0.97"/>

                <g mask="url(#sphereMask)" style="mix-blend-mode: screen;">
                  <circle cx="100" cy="100" r="86" fill="url(#haloGlow)" opacity="0.85">
                    <animate attributeName="opacity" values="0.65;0.9;0.65" dur="5s" repeatCount="indefinite"/>
                  </circle>
                  <g filter="url(#sphereNoise)" opacity="0.55">
                    <circle cx="100" cy="100" r="90" fill="url(#haloGlow)">
                      <animate attributeName="r" values="84;90;84" dur="6.2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </g>

                <g class="sphere-waves" stroke="url(#waveGradient)" stroke-width="2.6" fill="none" stroke-linecap="round" filter="url(#waveBlur)">
                  <path d="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110;
                              M20 90 C60 120, 100 80, 140 110 S 190 120, 180 80;
                              M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110"/>
                  </path>
                  <path d="M20 70 C60 40, 120 60, 160 40" opacity="0.7">
                    <animate attributeName="d" dur="7s" repeatCount="indefinite"
                      values="M20 70 C60 40, 120 60, 160 40;
                              M25 60 C80 20, 140 50, 170 70;
                              M20 70 C60 40, 120 60, 160 40"/>
                  </path>
                  <path d="M30 140 C80 160, 120 140, 170 160" opacity="0.6">
                    <animate attributeName="d" dur="6s" repeatCount="indefinite"
                      values="M30 140 C80 160, 120 140, 170 160;
                              M40 150 C90 170, 130 150, 170 140;
                              M30 140 C80 160, 120 140, 170 160"/>
                  </path>
                </g>

                <circle cx="100" cy="100" r="88" fill="none" stroke="url(#edgeGradient)" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="18 14" opacity="0.92">
                  <animate attributeName="stroke-dashoffset" values="0;220;0" dur="16s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="100" r="94" fill="none" stroke="url(#edgeGradient)" stroke-width="1.3" opacity="0.75">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="24s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>ResiliSense adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="ResiliSense audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            FrailtyLens unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ResiliSense | Vitaris Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">Vitaris</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            ResiliSense is our mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention from Vitaris.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore ResiliSense</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>ResiliSense by Vitaris · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <svg class="neon-sphere" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="coreGlow" cx="32%" cy="30%" r="70%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                    <stop offset="35%" stop-color="rgba(181,138,255,0.35)"/>
                    <stop offset="70%" stop-color="rgba(32,18,64,0.45)"/>
                    <stop offset="100%" stop-color="rgba(2,12,30,0.75)"/>
                  </radialGradient>
                  <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="rgba(146,122,255,0.85)"/>
                    <stop offset="55%" stop-color="rgba(95,208,255,0.4)"/>
                    <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
                  </radialGradient>
                  <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#5fd0ff"/>
                    <stop offset="40%" stop-color="#b48cff"/>
                    <stop offset="75%" stop-color="#6d8bff"/>
                    <stop offset="100%" stop-color="#a06bff"/>
                  </linearGradient>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(95,208,255,0)"/>
                    <stop offset="35%" stop-color="rgba(95,208,255,0.95)"/>
                    <stop offset="65%" stop-color="rgba(180,120,255,0.95)"/>
                    <stop offset="100%" stop-color="rgba(180,120,255,0)"/>
                  </linearGradient>
                  <filter id="sphereNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="12">
                      <animate attributeName="baseFrequency" values="0.7;0.4;0.7" dur="9s" repeatCount="indefinite"/>
                    </feTurbulence>
                    <feGaussianBlur stdDeviation="6"/>
                  </filter>
                  <filter id="waveBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4"/>
                  </filter>
                  <mask id="sphereMask">
                    <circle cx="100" cy="100" r="82" fill="white"/>
                    <circle cx="100" cy="100" r="82" fill="url(#haloGlow)" opacity="0.6"/>
                  </mask>
                </defs>

                <circle cx="100" cy="100" r="82" fill="url(#coreGlow)" opacity="0.97"/>

                <g mask="url(#sphereMask)" style="mix-blend-mode: screen;">
                  <circle cx="100" cy="100" r="86" fill="url(#haloGlow)" opacity="0.85">
                    <animate attributeName="opacity" values="0.65;0.9;0.65" dur="5s" repeatCount="indefinite"/>
                  </circle>
                  <g filter="url(#sphereNoise)" opacity="0.55">
                    <circle cx="100" cy="100" r="90" fill="url(#haloGlow)">
                      <animate attributeName="r" values="84;90;84" dur="6.2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </g>

                <g class="sphere-waves" stroke="url(#waveGradient)" stroke-width="2.6" fill="none" stroke-linecap="round" filter="url(#waveBlur)">
                  <path d="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110;
                              M20 90 C60 120, 100 80, 140 110 S 190 120, 180 80;
                              M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110"/>
                  </path>
                  <path d="M20 70 C60 40, 120 60, 160 40" opacity="0.7">
                    <animate attributeName="d" dur="7s" repeatCount="indefinite"
                      values="M20 70 C60 40, 120 60, 160 40;
                              M25 60 C80 20, 140 50, 170 70;
                              M20 70 C60 40, 120 60, 160 40"/>
                  </path>
                  <path d="M30 140 C80 160, 120 140, 170 160" opacity="0.6">
                    <animate attributeName="d" dur="6s" repeatCount="indefinite"
                      values="M30 140 C80 160, 120 140, 170 160;
                              M40 150 C90 170, 130 150, 170 140;
                              M30 140 C80 160, 120 140, 170 160"/>
                  </path>
                </g>

                <circle cx="100" cy="100" r="88" fill="none" stroke="url(#edgeGradient)" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="18 14" opacity="0.92">
                  <animate attributeName="stroke-dashoffset" values="0;220;0" dur="16s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="100" r="94" fill="none" stroke="url(#edgeGradient)" stroke-width="1.3" opacity="0.75">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="24s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>ResiliSense adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="ResiliSense audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            ResiliSense unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">FrailtyLens</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">FrailtyLens</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @FrailtyLens</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 FrailtyLens · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ResiliSense | Vitaris Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">Vitaris</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            ResiliSense is our mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention from Vitaris.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore ResiliSense</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>ResiliSense by Vitaris · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <svg class="neon-sphere" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="coreGlow" cx="32%" cy="30%" r="70%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                    <stop offset="35%" stop-color="rgba(181,138,255,0.35)"/>
                    <stop offset="70%" stop-color="rgba(32,18,64,0.45)"/>
                    <stop offset="100%" stop-color="rgba(2,12,30,0.75)"/>
                  </radialGradient>
                  <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="rgba(146,122,255,0.85)"/>
                    <stop offset="55%" stop-color="rgba(95,208,255,0.4)"/>
                    <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
                  </radialGradient>
                  <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#5fd0ff"/>
                    <stop offset="40%" stop-color="#b48cff"/>
                    <stop offset="75%" stop-color="#6d8bff"/>
                    <stop offset="100%" stop-color="#a06bff"/>
                  </linearGradient>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(95,208,255,0)"/>
                    <stop offset="35%" stop-color="rgba(95,208,255,0.95)"/>
                    <stop offset="65%" stop-color="rgba(180,120,255,0.95)"/>
                    <stop offset="100%" stop-color="rgba(180,120,255,0)"/>
                  </linearGradient>
                  <filter id="sphereNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="12">
                      <animate attributeName="baseFrequency" values="0.7;0.4;0.7" dur="9s" repeatCount="indefinite"/>
                    </feTurbulence>
                    <feGaussianBlur stdDeviation="6"/>
                  </filter>
                  <filter id="waveBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4"/>
                  </filter>
                  <mask id="sphereMask">
                    <circle cx="100" cy="100" r="82" fill="white"/>
                    <circle cx="100" cy="100" r="82" fill="url(#haloGlow)" opacity="0.6"/>
                  </mask>
                </defs>

                <circle cx="100" cy="100" r="82" fill="url(#coreGlow)" opacity="0.97"/>

                <g mask="url(#sphereMask)" style="mix-blend-mode: screen;">
                  <circle cx="100" cy="100" r="86" fill="url(#haloGlow)" opacity="0.85">
                    <animate attributeName="opacity" values="0.65;0.9;0.65" dur="5s" repeatCount="indefinite"/>
                  </circle>
                  <g filter="url(#sphereNoise)" opacity="0.55">
                    <circle cx="100" cy="100" r="90" fill="url(#haloGlow)">
                      <animate attributeName="r" values="84;90;84" dur="6.2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </g>

                <g class="sphere-waves" stroke="url(#waveGradient)" stroke-width="2.6" fill="none" stroke-linecap="round" filter="url(#waveBlur)">
                  <path d="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110;
                              M20 90 C60 120, 100 80, 140 110 S 190 120, 180 80;
                              M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110"/>
                  </path>
                  <path d="M20 70 C60 40, 120 60, 160 40" opacity="0.7">
                    <animate attributeName="d" dur="7s" repeatCount="indefinite"
                      values="M20 70 C60 40, 120 60, 160 40;
                              M25 60 C80 20, 140 50, 170 70;
                              M20 70 C60 40, 120 60, 160 40"/>
                  </path>
                  <path d="M30 140 C80 160, 120 140, 170 160" opacity="0.6">
                    <animate attributeName="d" dur="6s" repeatCount="indefinite"
                      values="M30 140 C80 160, 120 140, 170 160;
                              M40 150 C90 170, 130 150, 170 140;
                              M30 140 C80 160, 120 140, 170 160"/>
                  </path>
                </g>

                <circle cx="100" cy="100" r="88" fill="none" stroke="url(#edgeGradient)" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="18 14" opacity="0.92">
                  <animate attributeName="stroke-dashoffset" values="0;220;0" dur="16s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="100" r="94" fill="none" stroke="url(#edgeGradient)" stroke-width="1.3" opacity="0.75">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="24s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>ResiliSense adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="ResiliSense audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            ResiliSense unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">Vitaris</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">ResiliSense</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@frailtylens.ai">hello@frailtylens.ai</a></li>
            <li>LinkedIn · @ResiliSense</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 Vitaris · ResiliSense · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```markdown
# ResiliSense Landing Page

ResiliSense by Vitaris is our Jumpstarter ZPIRE wellness challenge concept: a biosocial AI companion that fuses wearable biometrics, cognitive voice coaching, and social engagement insights to detect frailty early and keep Hong Kong’s older adults thriving.

This repository hosts the static landing page required for the Vibe Coding Challenge submission.

## Project Structure

- `index.html` – single-page landing experience
- `styles.css` – global design system and responsive layout
- `main.js` – light interactivity (mobile nav, smooth scroll, hero chart)
- `chat.md` – documentation of AI collaboration per challenge rules

## Getting Started

### Run locally

```bash
# Option 1: use Python simple server
python -m http.server 3000

# Option 2: use Node http-server (install once globally)
npm install --global http-server
http-server -p 3000
```

Open `http://localhost:3000` to preview the site.

### Deploy on GitHub Pages

1. Commit and push to a GitHub repository.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from branch**.
4. Select your default branch and `/ (root)` directory, then save.
5. Wait for the deployment to finish; the hosted URL will appear on the Pages screen.

## License

Proprietary – Vitaris · ResiliSense team, Jumpstarter ZPIRE 2025. Contact us for reuse requests.



```

```markdown
---
title: "ResiliSense · AI Collaboration Log"
date: "2025-11-10"
team: "Vitaris"
challenge: "Jumpstarter ZPIRE · Vibe Coding Challenge"
---

## AI Interaction Overview

- **GPT-5 Codex (Cursor)** – primary coding partner for ideation-to-implementation of landing page structure, content, and responsive styling.
- **GPT-5 Codex (content drafting)** – refined messaging for wellness problem framing, solution narrative, and stakeholder impact.

## Prompting Details

1. *"Create a landing page for ResiliSense frailty detection concept with sections on problem and biosocial solution."*  
   - Generated the initial scaffold and suggested modern information architecture.
2. *"Style the page with energetic yet elder-friendly palette similar to cutting-edge wellness brands."*  
   - Delivered the bright gradient theme, card components, and responsive layout aligned with Scale-style visual energy.
3. *"Add conversational AI, clinical references, and Hong Kong context."*  
   - Expanded the psychological domain, CFS integration, and regional statistics references.

## Project Evolution

- **Early iteration** focused on structuring hero, problem framing, solution pillars, and call-to-action for pilot partners.
- **Styling iteration** introduced vibrant gradients, glassmorphism cards, and mobile-first navigation inspired by contemporary AI landing pages.
- **AI ethics and impact section** aligned messaging with enterprise-grade governance signals, referencing responsible AI partners.
- **Final polish** added stat banners, team bios, and contact form to complete the Vibe Coding submission requirements.

## References

- Hong Kong Census and Statistics Department: projected ageing demographics (2023).  
- Fried et al. (2001) – Frailty phenotype framework informing risk scoring.
- Scale AI design language for modern, energetic AI brand cues.



```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ResiliSense Neural Core</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ResiliSense | Vitaris Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">Vitaris</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            ResiliSense is our mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention from Vitaris.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore ResiliSense</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>ResiliSense by Vitaris · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <svg class="neon-sphere" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="coreGlow" cx="32%" cy="30%" r="70%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                    <stop offset="35%" stop-color="rgba(181,138,255,0.35)"/>
                    <stop offset="70%" stop-color="rgba(32,18,64,0.45)"/>
                    <stop offset="100%" stop-color="rgba(2,12,30,0.75)"/>
                  </radialGradient>
                  <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="rgba(146,122,255,0.85)"/>
                    <stop offset="55%" stop-color="rgba(95,208,255,0.4)"/>
                    <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
                  </radialGradient>
                  <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#5fd0ff"/>
                    <stop offset="40%" stop-color="#b48cff"/>
                    <stop offset="75%" stop-color="#6d8bff"/>
                    <stop offset="100%" stop-color="#a06bff"/>
                  </linearGradient>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(95,208,255,0)"/>
                    <stop offset="35%" stop-color="rgba(95,208,255,0.95)"/>
                    <stop offset="65%" stop-color="rgba(180,120,255,0.95)"/>
                    <stop offset="100%" stop-color="rgba(180,120,255,0)"/>
                  </linearGradient>
                  <filter id="sphereNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="12">
                      <animate attributeName="baseFrequency" values="0.7;0.4;0.7" dur="9s" repeatCount="indefinite"/>
                    </feTurbulence>
                    <feGaussianBlur stdDeviation="6"/>
                  </filter>
                  <filter id="waveBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4"/>
                  </filter>
                  <mask id="sphereMask">
                    <circle cx="100" cy="100" r="82" fill="white"/>
                    <circle cx="100" cy="100" r="82" fill="url(#haloGlow)" opacity="0.6"/>
                  </mask>
                </defs>

                <circle cx="100" cy="100" r="82" fill="url(#coreGlow)" opacity="0.97"/>

                <g mask="url(#sphereMask)" style="mix-blend-mode: screen;">
                  <circle cx="100" cy="100" r="86" fill="url(#haloGlow)" opacity="0.85">
                    <animate attributeName="opacity" values="0.65;0.9;0.65" dur="5s" repeatCount="indefinite"/>
                  </circle>
                  <g filter="url(#sphereNoise)" opacity="0.55">
                    <circle cx="100" cy="100" r="90" fill="url(#haloGlow)">
                      <animate attributeName="r" values="84;90;84" dur="6.2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </g>

                <g class="sphere-waves" stroke="url(#waveGradient)" stroke-width="2.6" fill="none" stroke-linecap="round" filter="url(#waveBlur)">
                  <path d="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110;
                              M20 90 C60 120, 100 80, 140 110 S 190 120, 180 80;
                              M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110"/>
                  </path>
                  <path d="M20 70 C60 40, 120 60, 160 40" opacity="0.7">
                    <animate attributeName="d" dur="7s" repeatCount="indefinite"
                      values="M20 70 C60 40, 120 60, 160 40;
                              M25 60 C80 20, 140 50, 170 70;
                              M20 70 C60 40, 120 60, 160 40"/>
                  </path>
                  <path d="M30 140 C80 160, 120 140, 170 160" opacity="0.6">
                    <animate attributeName="d" dur="6s" repeatCount="indefinite"
                      values="M30 140 C80 160, 120 140, 170 160;
                              M40 150 C90 170, 130 150, 170 140;
                              M30 140 C80 160, 120 140, 170 160"/>
                  </path>
                </g>

                <circle cx="100" cy="100" r="88" fill="none" stroke="url(#edgeGradient)" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="18 14" opacity="0.92">
                  <animate attributeName="stroke-dashoffset" values="0;220;0" dur="16s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="100" r="94" fill="none" stroke="url(#edgeGradient)" stroke-width="1.3" opacity="0.75">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="24s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>ResiliSense adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="ResiliSense audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            ResiliSense unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Interdisciplinary founders anchored in gerontology, AI, and community</h2>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Chloe Lam</h3>
            <p>Geriatric OT · leads clinical pathways & community pilots</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Adrian Ng</h3>
            <p>AI Engineer · builds biosignal fusion & predictive models</p>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="Portrait of cofounder" />
            <h3>Joyce Lee</h3>
            <p>Sociologist · designs caregiver engagement & service design</p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">Vitaris</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">ResiliSense</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@vitaris.ai">hello@vitaris.ai</a></li>
            <li>LinkedIn · @ResiliSense</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 Vitaris · ResiliSense · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

---

**User**

 our team 5th Year Medical Student
Lam wing Hei (renee)
Shom Man chun (kenneth)
Chan Leong Yin (Alvin)
5th Year Medical Student
2nd Year Medical Student

renee project manager for the product dvelopnment kenneth for presnetation alvin software and ai developer 

---

**Cursor**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ResiliSense | Vitaris Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">Vitaris</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            ResiliSense is our mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention from Vitaris.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore ResiliSense</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>ResiliSense by Vitaris · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <svg class="neon-sphere" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="coreGlow" cx="32%" cy="30%" r="70%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                    <stop offset="35%" stop-color="rgba(181,138,255,0.35)"/>
                    <stop offset="70%" stop-color="rgba(32,18,64,0.45)"/>
                    <stop offset="100%" stop-color="rgba(2,12,30,0.75)"/>
                  </radialGradient>
                  <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="rgba(146,122,255,0.85)"/>
                    <stop offset="55%" stop-color="rgba(95,208,255,0.4)"/>
                    <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
                  </radialGradient>
                  <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#5fd0ff"/>
                    <stop offset="40%" stop-color="#b48cff"/>
                    <stop offset="75%" stop-color="#6d8bff"/>
                    <stop offset="100%" stop-color="#a06bff"/>
                  </linearGradient>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(95,208,255,0)"/>
                    <stop offset="35%" stop-color="rgba(95,208,255,0.95)"/>
                    <stop offset="65%" stop-color="rgba(180,120,255,0.95)"/>
                    <stop offset="100%" stop-color="rgba(180,120,255,0)"/>
                  </linearGradient>
                  <filter id="sphereNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="12">
                      <animate attributeName="baseFrequency" values="0.7;0.4;0.7" dur="9s" repeatCount="indefinite"/>
                    </feTurbulence>
                    <feGaussianBlur stdDeviation="6"/>
                  </filter>
                  <filter id="waveBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4"/>
                  </filter>
                  <mask id="sphereMask">
                    <circle cx="100" cy="100" r="82" fill="white"/>
                    <circle cx="100" cy="100" r="82" fill="url(#haloGlow)" opacity="0.6"/>
                  </mask>
                </defs>

                <circle cx="100" cy="100" r="82" fill="url(#coreGlow)" opacity="0.97"/>

                <g mask="url(#sphereMask)" style="mix-blend-mode: screen;">
                  <circle cx="100" cy="100" r="86" fill="url(#haloGlow)" opacity="0.85">
                    <animate attributeName="opacity" values="0.65;0.9;0.65" dur="5s" repeatCount="indefinite"/>
                  </circle>
                  <g filter="url(#sphereNoise)" opacity="0.55">
                    <circle cx="100" cy="100" r="90" fill="url(#haloGlow)">
                      <animate attributeName="r" values="84;90;84" dur="6.2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </g>

                <g class="sphere-waves" stroke="url(#waveGradient)" stroke-width="2.6" fill="none" stroke-linecap="round" filter="url(#waveBlur)">
                  <path d="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110;
                              M20 90 C60 120, 100 80, 140 110 S 190 120, 180 80;
                              M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110"/>
                  </path>
                  <path d="M20 70 C60 40, 120 60, 160 40" opacity="0.7">
                    <animate attributeName="d" dur="7s" repeatCount="indefinite"
                      values="M20 70 C60 40, 120 60, 160 40;
                              M25 60 C80 20, 140 50, 170 70;
                              M20 70 C60 40, 120 60, 160 40"/>
                  </path>
                  <path d="M30 140 C80 160, 120 140, 170 160" opacity="0.6">
                    <animate attributeName="d" dur="6s" repeatCount="indefinite"
                      values="M30 140 C80 160, 120 140, 170 160;
                              M40 150 C90 170, 130 150, 170 140;
                              M30 140 C80 160, 120 140, 170 160"/>
                  </path>
                </g>

                <circle cx="100" cy="100" r="88" fill="none" stroke="url(#edgeGradient)" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="18 14" opacity="0.92">
                  <animate attributeName="stroke-dashoffset" values="0;220;0" dur="16s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="100" r="94" fill="none" stroke="url(#edgeGradient)" stroke-width="1.3" opacity="0.75">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="24s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>ResiliSense adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="ResiliSense audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            ResiliSense unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Vitaris ResiliSense clinical innovators</h2>
          <p>
            A multidisciplinary HKU Med trio combining product leadership, clinical storytelling,
            and AI development to bring proactive frailty care to life.
          </p>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="assets/team-renee.jpg" alt="Lam Wing Hei, Renee" />
            <h3>Lam Wing Hei (Renee)</h3>
            <p class="team-card__tag">5th Year Medical Student</p>
            <p class="team-card__role">Product & Clinical Implementation Lead</p>
            <p>
              Drives ResiliSense roadmap, aligning geriatric best practices with caregiver workflows
              and validating pilots across district health centres.
            </p>
          </article>
          <article class="team-card">
            <img src="assets/team-kenneth.jpg" alt="Shom Man Chun, Kenneth" />
            <h3>Shom Man Chun (Kenneth)</h3>
            <p class="team-card__tag">5th Year Medical Student</p>
            <p class="team-card__role">Narrative & Partnerships Lead</p>
            <p>
              Shapes clinical storytelling, investor decks, and partner engagements to articulate
              how ResiliSense elevates preventive care across Hong Kong.
            </p>
          </article>
          <article class="team-card">
            <img src="assets/team-alvin.jpg" alt="Chan Leong Yin, Alvin" />
            <h3>Chan Leong Yin (Alvin)</h3>
            <p class="team-card__tag">2nd Year Medical Student</p>
            <p class="team-card__role">Software & AI Engineer</p>
            <p>
              Builds the biosignal fusion stack, conversational AI, and caregiver dashboards powering
              ResiliSense’s predictive wellness intelligence.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">Vitaris</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">ResiliSense</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@vitaris.ai">hello@vitaris.ai</a></li>
            <li>LinkedIn · @ResiliSense</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 Vitaris · ResiliSense · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

```css
/* Color tokens */
:root {
  --bg: #f7fbff;
  --bg-accent: #edf6ff;
  --bg-light: #ffffff;
  --gradient: linear-gradient(135deg, #5fd0ff 0%, #93ffb5 50%, #f9c46b 100%);
  --primary: #1d86ff;
  --primary-dark: #0a5dc4;
  --secondary: #ff8da1;
  --accent: #71f2c4;
  --text: #15243b;
  --text-muted: rgba(21, 36, 59, 0.72);
  --border: rgba(21, 36, 59, 0.08);
  --shadow: 0 24px 60px -30px rgba(13, 57, 107, 0.35);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  min-height: 100vh;
}

img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  position: relative;
  padding: 32px clamp(24px, 4vw, 48px) 96px;
  background: radial-gradient(circle at top right, rgba(255, 207, 120, 0.4), transparent 45%),
    radial-gradient(circle at bottom left, rgba(143, 221, 255, 0.45), transparent 40%),
    linear-gradient(145deg, rgba(246, 253, 255, 0.95), rgba(241, 248, 255, 0.8));
  overflow: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.logo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.nav-menu a {
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s, transform 0.3s;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: rgba(29, 134, 255, 0.12);
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 6vw, 80px);
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
}

.hero__copy h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  line-height: 1.1;
  margin: 16px 0;
}

.hero__copy p {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 28px 0 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn--primary {
  background: var(--gradient);
  color: #0f2d4f;
  box-shadow: 0 16px 35px -18px rgba(19, 140, 255, 0.7);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(21, 36, 59, 0.12);
  backdrop-filter: blur(12px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.hero__badge {
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 24px;
  justify-items: center;
}

.hero-figure {
  position: relative;
  width: clamp(260px, 40vw, 420px);
  height: clamp(260px, 40vw, 420px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 70%);
  box-shadow: 0 60px 140px -80px rgba(9, 52, 114, 0.9);
  overflow: visible;
}

.figure-glow {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, rgba(181, 138, 255, 0.4) 0%, rgba(95, 208, 255, 0.22) 45%, transparent 70%);
  filter: blur(40px);
  opacity: 0.8;
  animation: pulseGlow 6s ease-in-out infinite;
}

.figure-core {
  position: relative;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85), rgba(181, 138, 255, 0.24) 55%, rgba(12, 24, 52, 0.45) 100%),
    radial-gradient(circle at 70% 75%, rgba(95, 208, 255, 0.3), rgba(0, 0, 0, 0) 70%);
  box-shadow:
    inset 0 0 28px rgba(95, 208, 255, 0.2),
    inset 0 0 48px rgba(181, 138, 255, 0.18),
    0 0 42px rgba(124, 146, 255, 0.32);
  transform-style: preserve-3d;
  --rotateX: 18deg;
  --rotateY: 32deg;
  transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
  transition: transform 0.6s ease;
}

.neon-sphere {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  overflow: visible;
  mix-blend-mode: screen;
  pointer-events: none;
}

.neon-sphere .sphere-waves path {
  filter: drop-shadow(0 0 14px rgba(137, 143, 255, 0.55));
}

.orbit {
  position: absolute;
  inset: -16%;
  border-radius: 50%;
  border: 1.6px dashed rgba(112, 154, 255, 0.46);
  transform-style: preserve-3d;
  animation: orbitSpin 14s linear infinite;
}

.orbit--middle {
  inset: -30%;
  border-color: rgba(181, 138, 255, 0.52);
  animation-duration: 18s;
}

.orbit--outer {
  inset: -45%;
  border-color: rgba(95, 208, 255, 0.38);
  animation-duration: 22s;
}

.orbit__label {
  position: absolute;
  top: 8%;
  right: 8%;
  padding: 6px 12px;
  background: rgba(2, 20, 38, 0.75);
  color: rgba(175, 251, 236, 0.95);
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 12px 24px -18px rgba(0, 0, 0, 0.8);
}

.figure-axis {
  position: absolute;
  inset: 50% calc(50% - 1px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(95, 208, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
}

.figure-axis--x {
  transform: rotate(90deg);
}

.figure-axis--y {
  transform: rotate(45deg);
}

.figure-axis--z {
  transform: rotate(-45deg);
}

.figure-heartline {
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  border: 2px solid rgba(156, 138, 255, 0.82);
  box-shadow: 0 0 28px rgba(131, 124, 255, 0.5), 0 0 34px rgba(95, 208, 255, 0.36) inset;
  animation: heartbeat 3.6s ease-in-out infinite;
}

.hero-figure.is-hovered .figure-core,
.hero-figure.is-interacting .figure-core {
  box-shadow:
    inset 0 0 34px rgba(95, 208, 255, 0.5),
    inset 0 0 56px rgba(181, 138, 255, 0.42),
    0 0 86px rgba(134, 144, 255, 0.5);
  transition: transform 0.12s ease, box-shadow 0.3s ease;
}

.hero-figure__legend {
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  border: 1px solid rgba(21, 36, 59, 0.08);
  box-shadow: 0 24px 50px -36px rgba(13, 57, 107, 0.4);
  max-width: 360px;
}

.hero-figure__legend ul {
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 16px 0 0;
  color: var(--text-muted);
}

.hero-figure__legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-figure__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  margin: 0 0 6px;
}

.badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-flex;
  box-shadow: 0 0 10px currentColor;
}

.badge--detect {
  color: #5fd0ff;
  background: rgba(95, 208, 255, 0.9);
}

.badge--care {
  color: #f9c46b;
  background: rgba(249, 196, 107, 0.95);
}

.badge--joy {
  color: #71f2c4;
  background: rgba(113, 242, 196, 0.95);
}

.section {
  padding: 96px clamp(24px, 4vw, 48px);
}

.section--accent {
  background: var(--bg-accent);
}

.section--light {
  background: rgba(255, 255, 255, 0.8);
}

.section__header {
  max-width: var(--max-width);
  margin: 0 auto 48px;
}

.section__header--split {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section__header--center {
  text-align: center;
}

.section__header h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  margin: 8px 0;
}

.section__header p {
  color: var(--text-muted);
  max-width: 760px;
}

.section__header--split p {
  margin-left: auto;
}

.cards {
  display: grid;
  gap: 28px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-bar {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(21, 36, 59, 0.1);
  box-shadow: 0 18px 40px -30px rgba(13, 57, 107, 0.35);
  display: flex;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 999px;
  font: 600 0.98rem "DM Sans", sans-serif;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.tab:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  outline-offset: 2px;
}

.tab.is-active {
  background: var(--gradient);
  color: #0f2d4f;
  transform: translateY(-2px);
}

.tab-panels {
  max-width: var(--max-width);
  margin: 0 auto;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.4s ease forwards;
}

.tab-panel.is-active {
  display: block;
}

.tab-panel:not(.is-active) {
  animation: none;
}

.solution-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 56px);
  align-items: stretch;
}

.solution-copy {
  display: grid;
  gap: 18px;
}

.solution-item {
  text-align: left;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-md);
  padding: 22px 26px;
  box-shadow: 0 20px 45px -34px rgba(13, 57, 107, 0.45);
  border: 1px solid rgba(21, 36, 59, 0.08);
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
  font: inherit;
  color: inherit;
}

.solution-item__label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.solution-item__title {
  font-family: "Outfit", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
}

.solution-item__text {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.solution-item:focus-visible {
  outline: 2px solid rgba(29, 134, 255, 0.35);
  outline-offset: 3px;
}

.solution-item.is-active {
  transform: translateY(-4px);
  border-color: rgba(29, 134, 255, 0.3);
  box-shadow: 0 28px 60px -34px rgba(13, 57, 107, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.solution-visual {
  position: relative;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 10% 20%, rgba(113, 242, 196, 0.1), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(95, 208, 255, 0.12), transparent 55%),
    #041427;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 45px 80px -40px rgba(3, 16, 35, 0.7);
  border: 1px solid rgba(99, 180, 255, 0.12);
  overflow: hidden;
}

.solution-visual__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.platform-base {
  position: relative;
  background: linear-gradient(135deg, #0b2345 0%, #102f5d 40%, #1d3c73 100%);
  border-radius: 18px;
  padding: 16px 20px;
  margin-top: auto;
  color: #d6e7ff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 -10px 30px -20px rgba(37, 112, 255, 0.8);
}

.pillar-group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 32px);
  padding: 0 8px 48px;
  position: relative;
}

.pillar {
  position: relative;
  width: clamp(60px, 10vw, 88px);
  height: var(--pillar-height, 200px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(113, 242, 196, 0.35) 100%);
  border-radius: 18px 18px 8px 8px;
  transform-origin: bottom center;
  transform: perspective(900px) rotateX(18deg);
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.pillar::before {
  content: "";
  position: absolute;
  inset: -14px -16px auto -16px;
  height: 14px;
  border-radius: 12px / 8px;
  background: rgba(26, 44, 78, 0.65);
  filter: blur(8px);
  transform: translateZ(-1px);
  z-index: -1;
}

.pillar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.35), transparent 70%);
  border-radius: inherit;
  opacity: 0.6;
  pointer-events: none;
}

.pillar__label {
  transform: rotateX(-18deg);
}

.pillar.is-active {
  transform: perspective(900px) rotateX(12deg) translateY(-12px) scale(1.05);
  box-shadow: 0 30px 70px -26px rgba(113, 242, 196, 0.6), 0 18px 65px -20px rgba(95, 208, 255, 0.75);
  filter: saturate(1.4);
}

.pillar--bio {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.35) 0%, rgba(147, 255, 181, 0.65) 100%);
}

.pillar--mind {
  background: linear-gradient(180deg, rgba(255, 141, 161, 0.35) 0%, rgba(147, 152, 255, 0.55) 100%);
}

.pillar--journey {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.45) 0%, rgba(113, 242, 196, 0.6) 100%);
}

.pillar--social {
  background: linear-gradient(180deg, rgba(147, 255, 181, 0.4) 0%, rgba(95, 208, 255, 0.6) 100%);
}

.pillar--command {
  background: linear-gradient(180deg, rgba(95, 208, 255, 0.45) 0%, rgba(59, 132, 255, 0.75) 100%);
}

.pillar--triage {
  background: linear-gradient(180deg, rgba(255, 162, 189, 0.4) 0%, rgba(204, 137, 255, 0.6) 100%);
}

.pillar--care {
  background: linear-gradient(180deg, rgba(113, 242, 196, 0.45) 0%, rgba(95, 208, 255, 0.65) 100%);
}

.pillar--insight {
  background: linear-gradient(180deg, rgba(249, 196, 107, 0.4) 0%, rgba(255, 141, 161, 0.55) 100%);
}

.cards--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cards--grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.info-card,
.feature-card {
  background: var(--bg-light);
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: 0 16px 40px -32px rgba(13, 57, 107, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px -30px rgba(13, 57, 107, 0.35);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes orbitSpin {
  from {
    transform: rotate3d(0.2, 1, 0.4, 0deg);
  }
  to {
    transform: rotate3d(0.2, 1, 0.4, 360deg);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.96);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.08);
    opacity: 1;
  }
  60% {
    transform: scale(1.02);
    opacity: 0.75;
  }
}

.timeline {
  display: grid;
  gap: 36px;
  max-width: var(--max-width);
  margin: 0 auto;
  border-left: 3px solid rgba(29, 134, 255, 0.2);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-left: 12px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -42px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid #fff;
}

.timeline__tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.grid--impact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid__column ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.grid__column ul li::before {
  content: "✶";
  color: var(--secondary);
  margin-right: 10px;
}

.stat-banner {
  margin: 56px auto 0;
  max-width: var(--max-width);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.stat-banner strong {
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  display: block;
}

.cards--team {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-md);
  padding: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -28px rgba(13, 57, 107, 0.3);
}

.team-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 14px;
}

.team-card p {
  margin: 6px 0;
  color: var(--text-muted);
}

.team-card__tag {
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.team-card__role {
  font-weight: 600;
  color: var(--text);
}

.contact-form {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 36px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  display: grid;
  gap: 20px;
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.form-grid label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-grid input,
.form-grid textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(21, 36, 59, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font: inherit;
  resize: vertical;
}

.form-grid__full {
  grid-column: 1 / -1;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: 2px solid rgba(29, 134, 255, 0.3);
  border-color: rgba(29, 134, 255, 0.4);
}

.footer {
  padding: 56px clamp(24px, 4vw, 48px);
  background: linear-gradient(145deg, rgba(29, 134, 255, 0.15), rgba(255, 241, 194, 0.2));
  color: var(--text);
}

.footer__grid {
  max-width: var(--max-width);
  margin: 0 auto 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__grid h4 {
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
}

.footer__grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--text-muted);
}

.footer__note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.to-top {
  display: block;
  text-align: center;
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
}

.source a {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 980px) {
  .nav-menu {
    position: absolute;
    top: 84px;
    right: clamp(24px, 4vw, 48px);
    background: rgba(255, 255, 255, 0.95);
    padding: 18px 24px;
    border-radius: 18px;
    border: 1px solid rgba(21, 36, 59, 0.1);
    box-shadow: var(--shadow);
    display: none;
    gap: 12px;
    transform: scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }

  .nav-menu.is-open {
    display: grid;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }

  .section__header--split {
    gap: 24px;
  }

  .section__header--split p {
    margin-left: 0;
  }

  .timeline {
    border-left: none;
    padding-left: 0;
  }

  .timeline__item::before {
    left: -14px;
  }

  .stat-banner {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 24px;
    padding-bottom: 72px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-form {
    padding: 28px 24px;
  }

  .section {
    padding: 72px 20px;
  }

  .section__header h2 {
    font-size: 2rem;
  }

  .cards {
    gap: 22px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 24px;
  }

  .timeline {
    gap: 28px;
  }

  .stat-banner {
    padding: 24px;
  }

  .tab-bar {
    flex-direction: column;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
  }

  .tab {
    width: 100%;
    border-radius: 20px;
    transform: none;
  }

  .tab.is-active {
    transform: none;
  }

  .solution-layout {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 0.98rem;
  }

  .hero__copy h1 {
    font-size: 2.2rem;
  }

  .hero__copy p {
    font-size: 1rem;
  }

  .hero__badge {
    font-size: 0.9rem;
  }

  .section__header p {
    font-size: 0.95rem;
  }

  .grid__column ul li::before {
    margin-right: 6px;
  }

  .stat-banner strong {
    font-size: 1.6rem;
  }

  .contact-form {
    padding: 24px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    gap: 24px;
  }

  .solution-item {
    padding: 20px 22px;
  }

  .pillar-group {
    padding-bottom: 32px;
  }

  .pillar {
    width: clamp(52px, 24vw, 72px);
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 24px 18px 64px;
  }

  .navbar {
    margin-bottom: 36px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .btn {
    padding: 12px 20px;
  }

  .card,
  .info-card,
  .feature-card {
    padding: 20px;
  }

  .hero__badge {
    padding: 10px 14px;
  }

  .stat-banner {
    grid-template-columns: 1fr;
  }
}



```

## Summary
- Rebranded the “Meet the Team” section around Vitaris’ ResiliSense team, highlighting each member’s year, role, and contribution.
- Pointed the cards to dedicated image slots (`assets/team-renee.jpg`, `team-kenneth.jpg`, `team-alvin.jpg`) and refreshed the team narrative to match the new structure.
- Added styling hooks (`team-card__tag`, `team-card__role`) so the new badges and role text render cleanly within each card.

## Testing
- Not run (HTML/CSS content change only; refresh the page to confirm the updated team section and replace the placeholder image paths with your actual photos).

---

**User**

use the photo i upload to me the icon image in the landing page

---

**Cursor**

Checking available image files and updating the team section to use the uploaded photos.


Checking for an assets folder and updating image references. If the images are elsewhere, we'll adjust the paths.


Creating the `assets` folder and updating image references. If your photos use different names or are in a different location, share the filenames/paths and I'll update them.


Checking for uploaded image files and updating references:


Created the `assets` folder. The HTML already references:
- `assets/team-renee.jpg` (Renee)
- `assets/team-kenneth.jpg` (Kenneth)
- `assets/team-alvin.jpg` (Alvin)

Place your team photos in the `assets` folder with these exact filenames. Updating the HTML to also accept `.png` and `.jpeg` as alternatives:


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ResiliSense | Vitaris Wellness Intelligence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="hero" id="top">
      <nav class="navbar">
        <a class="logo" href="#top">Vitaris</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="menu">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <ul class="nav-menu" id="menu">
          <li><a href="#problem">Why Frailty</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#ai">AI Approach</a></li>
          <li><a href="#ecosystem">Impact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="eyebrow">Wellness Track · Hong Kong</span>
          <h1>
            Detect frailty early.<br />
            Empower ageing joyfully.
          </h1>
          <p>
            ResiliSense is our mobile and wearable-integrated AI application designed for early detection of frailty and to slow disease progression through continuous monitoring and personalised intervention from Vitaris.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#solution">Explore ResiliSense</a>
            <a class="btn btn--ghost" href="#contact">Request Prototype Access</a>
          </div>
          <div class="hero__badge">
            <p>ResiliSense by Vitaris · Jumpstarter ZPIRE 2025 Wellness Challenge</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-figure" aria-hidden="true">
            <div class="figure-glow"></div>
            <div class="figure-core">
              <svg class="neon-sphere" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="coreGlow" cx="32%" cy="30%" r="70%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                    <stop offset="35%" stop-color="rgba(181,138,255,0.35)"/>
                    <stop offset="70%" stop-color="rgba(32,18,64,0.45)"/>
                    <stop offset="100%" stop-color="rgba(2,12,30,0.75)"/>
                  </radialGradient>
                  <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="rgba(146,122,255,0.85)"/>
                    <stop offset="55%" stop-color="rgba(95,208,255,0.4)"/>
                    <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
                  </radialGradient>
                  <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#5fd0ff"/>
                    <stop offset="40%" stop-color="#b48cff"/>
                    <stop offset="75%" stop-color="#6d8bff"/>
                    <stop offset="100%" stop-color="#a06bff"/>
                  </linearGradient>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(95,208,255,0)"/>
                    <stop offset="35%" stop-color="rgba(95,208,255,0.95)"/>
                    <stop offset="65%" stop-color="rgba(180,120,255,0.95)"/>
                    <stop offset="100%" stop-color="rgba(180,120,255,0)"/>
                  </linearGradient>
                  <filter id="sphereNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="12">
                      <animate attributeName="baseFrequency" values="0.7;0.4;0.7" dur="9s" repeatCount="indefinite"/>
                    </feTurbulence>
                    <feGaussianBlur stdDeviation="6"/>
                  </filter>
                  <filter id="waveBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4"/>
                  </filter>
                  <mask id="sphereMask">
                    <circle cx="100" cy="100" r="82" fill="white"/>
                    <circle cx="100" cy="100" r="82" fill="url(#haloGlow)" opacity="0.6"/>
                  </mask>
                </defs>

                <circle cx="100" cy="100" r="82" fill="url(#coreGlow)" opacity="0.97"/>

                <g mask="url(#sphereMask)" style="mix-blend-mode: screen;">
                  <circle cx="100" cy="100" r="86" fill="url(#haloGlow)" opacity="0.85">
                    <animate attributeName="opacity" values="0.65;0.9;0.65" dur="5s" repeatCount="indefinite"/>
                  </circle>
                  <g filter="url(#sphereNoise)" opacity="0.55">
                    <circle cx="100" cy="100" r="90" fill="url(#haloGlow)">
                      <animate attributeName="r" values="84;90;84" dur="6.2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </g>

                <g class="sphere-waves" stroke="url(#waveGradient)" stroke-width="2.6" fill="none" stroke-linecap="round" filter="url(#waveBlur)">
                  <path d="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110;
                              M20 90 C60 120, 100 80, 140 110 S 190 120, 180 80;
                              M30 110 C60 80, 90 130, 120 100 S 170 70, 190 110"/>
                  </path>
                  <path d="M20 70 C60 40, 120 60, 160 40" opacity="0.7">
                    <animate attributeName="d" dur="7s" repeatCount="indefinite"
                      values="M20 70 C60 40, 120 60, 160 40;
                              M25 60 C80 20, 140 50, 170 70;
                              M20 70 C60 40, 120 60, 160 40"/>
                  </path>
                  <path d="M30 140 C80 160, 120 140, 170 160" opacity="0.6">
                    <animate attributeName="d" dur="6s" repeatCount="indefinite"
                      values="M30 140 C80 160, 120 140, 170 160;
                              M40 150 C90 170, 130 150, 170 140;
                              M30 140 C80 160, 120 140, 170 160"/>
                  </path>
                </g>

                <circle cx="100" cy="100" r="88" fill="none" stroke="url(#edgeGradient)" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="18 14" opacity="0.92">
                  <animate attributeName="stroke-dashoffset" values="0;220;0" dur="16s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="100" r="94" fill="none" stroke="url(#edgeGradient)" stroke-width="1.3" opacity="0.75">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="24s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div class="orbit orbit--outer">
                <span class="orbit__label">Prevention</span>
              </div>
              <div class="orbit orbit--middle">
                <span class="orbit__label">Early Detection</span>
              </div>
              <div class="orbit orbit--inner">
                <span class="orbit__label">Joyful Ageing</span>
              </div>
              <div class="figure-axis figure-axis--x"></div>
              <div class="figure-axis figure-axis--y"></div>
              <div class="figure-axis figure-axis--z"></div>
              <div class="figure-heartline"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="problem">
        <div class="section__header">
          <span class="eyebrow">The Challenge</span>
          <h2>Frailty is accelerating across Hong Kong’s ageing population</h2>
          <p>
            Adults over 65 will make up 36% of Hong Kong by 2046, yet frailty screening
            remains reactive and fragmented, often happening only after falls,
            hospitalisations, or cognitive decline <span class="source">(<a href="https://www.censtatd.gov.hk/en/EIndexbySubject.html?scode=190&pcode=FA100061" target="_blank" rel="noreferrer">Census and Statistics Department, 2023</a>)</span>.
          </p>
        </div>
        <div class="cards cards--three">
          <article class="info-card">
            <h3>Under-detected risk</h3>
            <p>
              Clinical frailty tools like the CFS and Fried phenotype take time and can feel
              stigmatising. Busy primary care clinics lack continuous monitoring, leaving
              a silent progression window.
            </p>
          </article>
          <article class="info-card">
            <h3>Fragmented wellness data</h3>
            <p>
              Wearables, mood check-ins, and community participation data sit in silos.
              Without integration, clinicians and caregivers miss the holistic picture.
            </p>
          </article>
          <article class="info-card">
            <h3>Reversible—but missed</h3>
            <p>
              Frailty is dynamic and responsive to targeted interventions in strength,
              nutrition, and engagement. Catching decline sooner keeps elders independent.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="solution">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Our Solution</span>
            <h2>ResiliSense adapts to each person in the care circle</h2>
          </div>
          <p>
            A single biosocial intelligence layer powers distinct experiences for older
            adults and for caregivers & clinicians, meeting each group where they are while
            syncing data across the ecosystem.
          </p>
        </div>
        <div class="tab-bar" role="tablist" aria-label="ResiliSense audiences">
          <button class="tab is-active" role="tab" aria-selected="true" aria-controls="panel-patient" id="tab-patient" data-target="panel-patient">
            For Older Adults & Families
          </button>
          <button class="tab" role="tab" aria-selected="false" aria-controls="panel-caregiver" id="tab-caregiver" data-target="panel-caregiver">
            For Care Teams & Community
          </button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel is-active" id="panel-patient" role="tabpanel" aria-labelledby="tab-patient">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="bio">
                  <span class="solution-item__label">Biosignal Coach · 24/7</span>
                  <span class="solution-item__title">Personal vitality dashboard for older adults</span>
                  <span class="solution-item__text">
                    Passive Apple Watch and wearable data translate gait, tremor, HRV, and activity into intuitive streaks, recovery prompts, and gentle mobility nudges.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="mind">
                  <span class="solution-item__label">Cognitive Companion</span>
                  <span class="solution-item__title">Voice-first mental wellness check-ins</span>
                  <span class="solution-item__text">
                    Multilingual conversations run adaptive recall games, PHQ-9 / GAD-7 screens, and tone tracking to surface changes long before crisis hits.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="journey">
                  <span class="solution-item__label">Longevity Journeys</span>
                  <span class="solution-item__title">Hyper-personalised movement & nutrition plans</span>
                  <span class="solution-item__text">
                    AI co-designed with geriatricians calibrates strength, balance, and dietary goals—celebrating wins with badges sharable with family circles.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="social">
                  <span class="solution-item__label">Social Vitality</span>
                  <span class="solution-item__title">Community discovery & isolation alerts</span>
                  <span class="solution-item__text">
                    Local hobby meetups, district health centre events, and NGO programmes are surfaced with accessibility filters; isolation triggers prompt outreach.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Resident View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--bio is-active" data-pillar="bio" style="--pillar-height: 220px">
                      <span class="pillar__label">Biosignals</span>
                    </div>
                    <div class="pillar pillar--mind" data-pillar="mind" style="--pillar-height: 200px">
                      <span class="pillar__label">Mind</span>
                    </div>
                    <div class="pillar pillar--journey" data-pillar="journey" style="--pillar-height: 240px">
                      <span class="pillar__label">Journeys</span>
                    </div>
                    <div class="pillar pillar--social" data-pillar="social" style="--pillar-height: 180px">
                      <span class="pillar__label">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-panel" id="panel-caregiver" role="tabpanel" aria-labelledby="tab-caregiver">
            <div class="solution-layout">
              <div class="solution-copy" role="list">
                <button class="solution-item is-active" type="button" data-pillar="command">
                  <span class="solution-item__label">Command Centre</span>
                  <span class="solution-item__title">Dynamic frailty cockpit for clinicians</span>
                  <span class="solution-item__text">
                    Real-time CFS-aligned scoring, fall-risk heatmaps, and longitudinal progression charts integrate eHRSS data for targeted intervention planning.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="triage">
                  <span class="solution-item__label">Smart Triage</span>
                  <span class="solution-item__title">Automated escalation & workflow routing</span>
                  <span class="solution-item__text">
                    Configurable thresholds trigger telehealth invites, community nurse visits, or geriatric referrals with audit trails and compliance guardrails.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="care">
                  <span class="solution-item__label">Care Circles</span>
                  <span class="solution-item__title">Collaborative caregiver engagement hub</span>
                  <span class="solution-item__text">
                    Families, domestic helpers, and NGOs co-manage notes, exercise logs, and mood updates within consent-driven spaces to ensure aligned action.
                  </span>
                </button>
                <button class="solution-item" type="button" data-pillar="insight">
                  <span class="solution-item__label">Population Insights</span>
                  <span class="solution-item__title">District-level analytics & ROI reporting</span>
                  <span class="solution-item__text">
                    Aggregated de-identified trends reveal programme efficacy, capacity needs, and social prescribing impact to guide resource allocation.
                  </span>
                </button>
              </div>
              <div class="solution-visual" aria-hidden="true">
                <div class="solution-visual__inner">
                  <div class="platform-base">
                    <span>ResiliSense · Care Team View</span>
                  </div>
                  <div class="pillar-group">
                    <div class="pillar pillar--command is-active" data-pillar="command" style="--pillar-height: 240px">
                      <span class="pillar__label">Command</span>
                    </div>
                    <div class="pillar pillar--triage" data-pillar="triage" style="--pillar-height: 210px">
                      <span class="pillar__label">Triage</span>
                    </div>
                    <div class="pillar pillar--care" data-pillar="care" style="--pillar-height: 230px">
                      <span class="pillar__label">Care</span>
                    </div>
                    <div class="pillar pillar--insight" data-pillar="insight" style="--pillar-height: 200px">
                      <span class="pillar__label">Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="ai">
        <div class="section__header">
          <span class="eyebrow">AI Advantage</span>
          <h2>Responsible AI that adapts to each elder’s journey</h2>
        </div>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__tag">01 · Data Fusion</span>
            <h3>Biosocial signal lake</h3>
            <p>
              Normalises wearable, chatbot, and social inputs. Clinical Frailty Scale labels
              anchor supervised learning, supplemented by self-reported questionnaires.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">02 · Predict</span>
            <h3>Proactive risk scoring</h3>
            <p>
              Gradient boosting and sequential deep models forecast frailty change over 30,
              90, and 180 day windows, highlighting the most modifiable factors for each
              individual.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">03 · Coach</span>
            <h3>Personalised interventions</h3>
            <p>
              LLM-powered coaching co-designed with geriatricians offers progressive
              resistance plans, nutrition nudges, and social goals, while respecting
              cultural nuance.
            </p>
          </div>
          <div class="timeline__item">
            <span class="timeline__tag">04 · Safeguard</span>
            <h3>Ethical governance</h3>
            <p>
              Differential privacy, consent management, and human-in-the-loop review ensure
              transparency and safety, following guidelines from leading AI governance
              frameworks (<span class="source"><a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a></span>).
            </p>
          </div>
        </div>
      </section>

      <section class="section section--light" id="ecosystem">
        <div class="section__header section__header--split">
          <div>
            <span class="eyebrow">Ecosystem Impact</span>
            <h2>Reducing frailty burden across stakeholders</h2>
          </div>
          <p>
            ResiliSense unifies data silos and equips each partner to intervene earlier and
            more empathetically, shifting from treatment to prevention.
          </p>
        </div>
        <div class="grid grid--impact">
          <div class="grid__column">
            <h3>Older adults & families</h3>
            <ul>
              <li>Stay independent longer through daily nudges and positive reinforcement.</li>
              <li>Understand personal risk with accessible visualisations.</li>
              <li>Invite caregivers to co-manage goals and alerts.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Clinicians</h3>
            <ul>
              <li>Proactively triage using dynamic CFS-aligned risk scoring.</li>
              <li>Adjust care plans with wearable-contextualised insights.</li>
              <li>Streamline follow-up through telehealth-ready reporting.</li>
            </ul>
          </div>
          <div class="grid__column">
            <h3>Community partners</h3>
            <ul>
              <li>Target social prescribing to those experiencing isolation.</li>
              <li>Measure programme impact with aggregated, anonymised trends.</li>
              <li>Trigger crisis escalation workflows with configurable rules.</li>
            </ul>
          </div>
        </div>
        <div class="stat-banner">
          <div>
            <strong>25%</strong>
            <span>Potential reduction in falls through early frailty intervention</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>Increase in continuous monitoring touchpoints per elder</span>
          </div>
          <div>
            <strong>HK$8M</strong>
            <span>Projected savings per 1,000 seniors via avoided hospitalisations</span>
          </div>
        </div>
      </section>

      <section class="section" id="team">
        <div class="section__header">
          <span class="eyebrow">Our Team</span>
          <h2>Vitaris ResiliSense clinical innovators</h2>
          <p>
            A multidisciplinary HKU Med trio combining product leadership, clinical storytelling,
            and AI development to bring proactive frailty care to life.
          </p>
        </div>
        <div class="cards cards--team">
          <article class="team-card">
            <img src="assets/team-renee.jpg" alt="Lam Wing Hei, Renee" onerror="this.src='assets/team-renee.png'; this.onerror=null;" />
            <h3>Lam Wing Hei (Renee)</h3>
            <p class="team-card__tag">5th Year Medical Student</p>
            <p class="team-card__role">Product & Clinical Implementation Lead</p>
            <p>
              Drives ResiliSense roadmap, aligning geriatric best practices with caregiver workflows
              and validating pilots across district health centres.
            </p>
          </article>
          <article class="team-card">
            <img src="assets/team-kenneth.jpg" alt="Shom Man Chun, Kenneth" onerror="this.src='assets/team-kenneth.png'; this.onerror=null;" />
            <h3>Shom Man Chun (Kenneth)</h3>
            <p class="team-card__tag">5th Year Medical Student</p>
            <p class="team-card__role">Narrative & Partnerships Lead</p>
            <p>
              Shapes clinical storytelling, investor decks, and partner engagements to articulate
              how ResiliSense elevates preventive care across Hong Kong.
            </p>
          </article>
          <article class="team-card">
            <img src="assets/team-alvin.jpg" alt="Chan Leong Yin, Alvin" onerror="this.src='assets/team-alvin.png'; this.onerror=null;" />
            <h3>Chan Leong Yin (Alvin)</h3>
            <p class="team-card__tag">2nd Year Medical Student</p>
            <p class="team-card__role">Software & AI Engineer</p>
            <p>
              Builds the biosignal fusion stack, conversational AI, and caregiver dashboards powering
              ResiliSense’s predictive wellness intelligence.
            </p>
          </article>
        </div>
      </section>

      <section class="section section--accent" id="contact">
        <div class="section__header section__header--center">
          <span class="eyebrow">Get Involved</span>
          <h2>Join our pilot with Hong Kong’s active ageing communities</h2>
          <p>
            We’re partnering with district health centres, elder academies, and NGOs to co-create
            a resilient ageing experience. Let’s collaborate.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" required />
            </label>
            <label>
              <span>Organisation</span>
              <input type="text" placeholder="Hospital / NGO / Startup" />
            </label>
            <label>
              <span>Role</span>
              <input type="text" placeholder="Clinician, Caregiver, Investor..." />
            </label>
            <label class="form-grid__full">
              <span>How can we collaborate?</span>
              <textarea rows="3" placeholder="Share your ideas"></textarea>
            </label>
          </div>
          <button type="submit" class="btn btn--primary">Request a Demo</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <a class="logo" href="#top">Vitaris</a>
          <p>
            AI-powered biosocial screening to keep Hong Kong’s elders strong, connected, and
            confident.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#problem">Why Frailty</a></li>
            <li><a href="#solution">ResiliSense</a></li>
            <li><a href="#ai">AI Approach</a></li>
            <li><a href="#contact">Pilot With Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@vitaris.ai">hello@vitaris.ai</a></li>
            <li>LinkedIn · @ResiliSense</li>
            <li>Kowloon Tong · Hong Kong</li>
          </ul>
        </div>
      </div>
      <p class="footer__note">© 2025 Vitaris · ResiliSense · Built for Jumpstarter ZPIRE</p>
      <a class="to-top" href="#top">Back to top ↑</a>
    </footer>

    <script src="main.js"></script>
  </body>
</html>


```

Setup complete. The landing page is configured to use your team photos.

**To add your photos:**

1. Place your three team member photos in the `assets` folder with these exact filenames:
   - `team-renee.jpg` (or `.png`) — for Renee
   - `team-kenneth.jpg` (or `.png`) — for Kenneth  
   - `team-alvin.jpg` (or `.png`) — for Alvin

2. The HTML supports both `.jpg` and `.png` formats automatically.

**If your photos have different names**, tell me the filenames and I'll update the HTML to match.

The `assets` folder is ready. Once you add the images, they'll appear in the team section.

---

**User**

icon image for renee use this upload this 

fix the for care teams and community i cannot click on it

