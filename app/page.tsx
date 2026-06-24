export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <span className="nav-logo">⚡ NextTest</span>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <span className="hero-tag">Next.js + Cloudflare Pages</span>
        <h1>Build fast.<br /><span>Deploy faster.</span></h1>
        <p>
          A minimal Next.js test site to explore the workflow: write code locally,
          push to GitHub, and let Cloudflare Pages handle the rest.
        </p>
        <div className="btn-group">
          <a href="#features" className="btn-primary">Explore Features</a>
          <a href="https://github.com" className="btn-secondary">View on GitHub →</a>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <p className="section-label">Why this stack</p>
        <h2 className="section-title">Everything you need to ship</h2>
        <div className="cards">
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>Instant Deploys</h3>
            <p>Push to GitHub and Cloudflare Pages auto-builds and deploys your site in under a minute.</p>
          </div>
          <div className="card">
            <div className="card-icon">🌍</div>
            <h3>Global Edge Network</h3>
            <p>Your site runs on Cloudflare's edge — served from the nearest location to every visitor worldwide.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔒</div>
            <h3>Free SSL & Domain</h3>
            <p>Every deployment gets a free `.pages.dev` URL with HTTPS — connect your own domain in one click.</p>
          </div>
          <div className="card">
            <div className="card-icon">📁</div>
            <h3>File-Based Routing</h3>
            <p>Create a file, get a route. Next.js App Router makes navigation structure as simple as your folder tree.</p>
          </div>
          <div className="card">
            <div className="card-icon">🛠️</div>
            <h3>API Routes Built-In</h3>
            <p>No separate backend needed. Write server logic directly inside your Next.js project using Route Handlers.</p>
          </div>
          <div className="card">
            <div className="card-icon">🆓</div>
            <h3>Generous Free Tier</h3>
            <p>Cloudflare Pages is free for unlimited sites and 500 builds/month — more than enough to get started.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Built with Next.js · Deployed on Cloudflare Pages · {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
