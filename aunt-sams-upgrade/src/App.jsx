const prompts = [
  {
    title: '🎨 Draw Your Emotions',
    steps: [
      'Pause and notice how you feel right now.',
      'Choose 2–4 colors that match those feelings.',
      'Use lines, shapes, or patterns—nothing has to look realistic.',
      'Fill the page without judging it.'
    ],
    reflect: [
      'What emotions showed up while creating?',
      'Did anything shift while I was drawing?'
    ],
    goal: 'Increase emotional awareness and expression.'
  },
  {
    title: '🧩 Broken to Beautiful',
    steps: [
      'Take a piece of paper and tear it into pieces.',
      'Notice what it feels like to break something apart.',
      'Glue the pieces back together in a new way.',
      'Add color, words, or designs as you rebuild it.'
    ],
    reflect: [
      'What parts of my life feel broken?',
      'What does rebuilding look like for me?'
    ],
    goal: 'Explore healing, resilience, and restoration.'
  },
  {
    title: '🌿 Safe Place Art',
    steps: [
      'Close your eyes and imagine a place where you feel safe.',
      'Notice details like colors, sounds, and textures.',
      'Draw or paint this place.',
      'Add anything that brings comfort.'
    ],
    reflect: [
      'What makes this place feel safe?',
      'How can I bring parts of this into real life?'
    ],
    goal: 'Create a mental and emotional safe space.'
  },
  {
    title: '🖌️ Release It',
    steps: [
      'Think of something weighing on you.',
      'Use fast, messy strokes to express it.',
      'Press hard, go light—let your body lead.',
      'Keep going until you feel a release.'
    ],
    reflect: [
      'What did I release?',
      'How does my body feel now?'
    ],
    goal: 'Release stress and stored emotion.'
  },
  {
    title: '💭 Thought Dump',
    steps: [
      'Set a timer for 5–10 minutes.',
      'Fill the page with words, doodles, or scribbles.',
      'Do not stop or edit yourself.',
      'Let everything out freely.'
    ],
    reflect: [
      'What patterns or themes do I notice?',
      'What is taking up the most space in my mind?'
    ],
    goal: 'Clear mental clutter and increase self-awareness.'
  },
  {
    title: '✨ Hope Image',
    steps: [
      'Think about where you want to be emotionally or spiritually.',
      'Create an image that represents that hope.',
      'Use symbols, colors, or words.',
      'Make it something you can look back on.'
    ],
    reflect: [
      'What does hope look like for me?',
      'What small step can I take toward this?'
    ],
    goal: 'Build hope and future vision.'
  }
]

const benefits = [
  {
    icon: '🧠',
    title: 'Engages the Whole Brain',
    text: 'Art can help connect thoughts and feelings that may feel separate or overwhelming.'
  },
  {
    icon: '💭',
    title: 'Gives Expression Without Words',
    text: 'Deep emotions are not always easy to say out loud. Art gives them a safe place to come out.'
  },
  {
    icon: '🌿',
    title: 'Calms the Nervous System',
    text: 'Creative movement can reduce stress, lower anxiety, and help the body settle.'
  },
  {
    icon: '🔄',
    title: 'Supports New Thought Patterns',
    text: 'Creating new images and meaning can help support healing and fresh ways of thinking.'
  },
  {
    icon: '❤️',
    title: 'Releases Emotion Safely',
    text: 'Art provides a healthy outlet for grief, fear, anger, and pain.'
  },
  {
    icon: '✨',
    title: 'Builds Hope and Identity',
    text: 'Making something meaningful can rebuild confidence, purpose, and hope.'
  }
]

export default function App() {
  return (
    <div className="site-shell">
      <div className="bg-blob blob-left" />
      <div className="bg-blob blob-right" />

      <header className="hero section">
        <div className="hero-copy">
          <div className="brand-lockup">
            <div className="brand-icon">🎨</div>
            <div>
              <div className="brand-name">Aunt Sam&apos;s</div>
              <div className="brand-sub">Healing Strokes Studio</div>
            </div>
          </div>

          <div className="pill">Creative healing through art</div>
          <h1>A welcoming space for creativity, healing, reflection, and growth.</h1>
          <p className="lead">
            Join Aunt Sam&apos;s Healing Strokes Studio for art therapy opportunities, workshops,
            encouragement, and creative healing resources.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#signup">Join the Email List</a>
            <a className="button button-light" href="#about">Learn More</a>
          </div>
        </div>

        <div className="hero-cards">
          <article className="mini-card tilt-left">
            <div className="mini-icon">🎨</div>
            <h3>Creative Expression</h3>
            <p>Use art as a gentle way to process emotions, explore your story, and discover hope.</p>
          </article>
          <article className="mini-card tilt-right top-gap">
            <div className="mini-icon">🌿</div>
            <h3>Healing Space</h3>
            <p>Opportunities designed to support reflection, coping skills, mindfulness, and wellness.</p>
          </article>
          <article className="mini-card tilt-right">
            <div className="mini-icon">🤝</div>
            <h3>Community Connection</h3>
            <p>Gather with others in meaningful experiences that build support and belonging.</p>
          </article>
          <article className="mini-card tilt-left top-gap">
            <div className="mini-icon">💌</div>
            <h3>Stay Updated</h3>
            <p>Sign up for future emails so you never miss a group, class, or special opportunity.</p>
          </article>
        </div>
      </header>

      <main>
        <section id="about" className="section about-grid">
          <div>
            <p className="eyebrow">About Art Therapy</p>
            <h2>Art can open the door to healing.</h2>
            <p>
              Art therapy offers creative experiences that help people slow down, reflect, and connect
              with their emotions in a meaningful way. Through hands-on projects and guided activities,
              participants can explore healing, self-expression, and personal growth.
            </p>
            <p>
              Whether someone is brand new to art or already loves creating, these opportunities are
              designed to be welcoming, accessible, and encouraging.
            </p>
          </div>

          <aside className="card email-card">
            <h3>What future emails may include</h3>
            <ul>
              <li>Upcoming art therapy groups and classes</li>
              <li>Special community events and creative workshops</li>
              <li>Supplies or registration details for new opportunities</li>
              <li>Encouragement and updates about art therapy opportunities</li>
            </ul>
          </aside>
        </section>

        <section className="section story-section">
          <p className="eyebrow teal">Meet Sam</p>
          <h2>My story of healing and purpose</h2>
          <div className="story-copy">
            <p>
              My journey into art therapy is deeply personal. I have walked through trauma, addiction,
              and difficult seasons that shaped who I am today. For a long time, I was just trying to
              survive—but everything began to change when I found God. He met me in my brokenness,
              restored me, and began leading me into a new season of healing and purpose.
            </p>
            <p>
              Art has always been something I loved, but I didn&apos;t fully understand its power until I
              began using it to help my best friend who lives with dissociative identity disorder. As I
              learned more, I saw how art could gently reach places words cannot. That experience led me
              to pursue my art therapy certification.
            </p>
            <p>
              Now, my heart is to use both my past experiences and what I&apos;ve learned to help others find
              healing. I want to create safe, welcoming spaces where people can process, express, and
              begin to feel hope again.
            </p>
            <p>
              God saved my life, and I am choosing to follow where He leads—using art as a way to walk
              alongside others in their healing journey.
            </p>
          </div>
        </section>

        <section className="section features-row-wrap">
          <div className="feature-card">
            <div className="mini-icon">🖌️</div>
            <h3>No art experience needed</h3>
            <p>Opportunities are designed to be approachable and supportive for all skill levels.</p>
          </div>
          <div className="feature-card">
            <div className="mini-icon">🧠</div>
            <h3>Mindful and meaningful</h3>
            <p>Sessions can encourage emotional awareness, grounding, reflection, and coping skills.</p>
          </div>
          <div className="feature-card">
            <div className="mini-icon">✨</div>
            <h3>Hope-filled creativity</h3>
            <p>Each event invites people to create something beautiful while making space for healing.</p>
          </div>
        </section>

        <section className="section">
          <div className="center-head">
            <p className="eyebrow">Try at Home</p>
            <h2>Simple art therapy you can do anywhere</h2>
            <p>Open a card to explore steps, reflection questions, and goals.</p>
          </div>

          <div className="prompt-grid">
            {prompts.map((item) => (
              <details key={item.title} className="prompt-card">
                <summary>
                  <span>{item.title}</span>
                  <span className="chevron">⌄</span>
                </summary>
                <div className="prompt-body">
                  <div className="prompt-box rose-box">
                    <h4>Steps</h4>
                    <ul>
                      {item.steps.map((step) => <li key={step}>{step}</li>)}
                    </ul>
                  </div>
                  <div className="prompt-box teal-box">
                    <h4>Reflect</h4>
                    <ul>
                      {item.reflect.map((question) => <li key={question}>{question}</li>)}
                    </ul>
                  </div>
                  <div className="prompt-box amber-box">
                    <h4>Goal</h4>
                    <p>{item.goal}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="section science-section">
          <div className="center-head narrow">
            <p className="eyebrow teal">Why Art Therapy Works</p>
            <h2>The science behind healing through art</h2>
            <p>
              Art therapy is more than just creativity—it supports how the brain processes stress,
              emotion, and healing.
            </p>
          </div>

          <div className="benefit-grid">
            {benefits.map((item) => (
              <article key={item.title} className="benefit-card">
                <div className="mini-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <p className="science-note">
            When you create art, your brain begins to slow down, process, and reorganize what feels
            overwhelming. Over time, this can support deeper healing, clearer thinking, and a greater
            sense of peace.
          </p>
        </section>

        <section id="signup" className="section">
          <div className="signup-panel">
            <p className="eyebrow light">Email Sign-Up</p>
            <h2>Be the first to hear about new opportunities</h2>
            <p>
              Join the email list for future art therapy opportunities, workshops, and updates from Aunt
              Sam&apos;s Healing Strokes Studio.
            </p>
            <a
              className="button button-bright"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeuf--RklDakIYFPFSGgGaGvJv2HgTqbmmVJreq0CqoXEZG5g/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Sign Up Here
            </a>
            <p className="signup-note">
              This button opens the sign-up form for Aunt Sam&apos;s Healing Strokes Studio.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Aunt Sam&apos;s Healing Strokes Studio</p>
        <p>Creative healing • Community • Hope</p>
      </footer>
    </div>
  )
}
