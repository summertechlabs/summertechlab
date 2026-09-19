import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowRight, Bot, CheckCircle2, Code2, ExternalLink, Globe2, Mail, MapPin, Menu, MessageCircle, Phone, Sparkles, X, Zap } from "lucide-react";
import "./styles.css";

const COMPANY = {
  name: "SummerTech Labs",
  email: "hello@summertechlabs.com",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "919876543210",
  location: "Gujarat, India",
};

const services = [
  {
    icon: Globe2,
    title: "Website Design & Development",
    text: "Modern, responsive websites designed to represent your brand and turn visitors into customers.",
    items: ["Business websites", "Landing pages", "Booking websites", "E-commerce"],
  },
  {
    icon: Code2,
    title: "Web Applications",
    text: "Custom web applications built around the way your business actually works.",
    items: ["Dashboards", "Customer portals", "Booking systems", "Business platforms"],
  },
  {
    icon: Bot,
    title: "AI Solutions",
    text: "Practical AI solutions that improve customer experiences and automate repetitive work.",
    items: ["AI assistants", "AI chatbots", "AI integrations", "Custom AI tools"],
  },
  {
    icon: Zap,
    title: "Business Automation",
    text: "Connect your tools and automate repetitive workflows so your team can focus on growth.",
    items: ["Workflow automation", "API integrations", "Notifications", "Internal tools"],
  },
];

const projects = [
  { tag: "Concept Project", title: "Premium Barber Studio", text: "A conversion-focused website with services, gallery, reviews, location and appointment CTAs." },
  { tag: "Concept Project", title: "Modern Manufacturing Company", text: "A professional B2B presence focused on products, capabilities, certifications and quote enquiries." },
  { tag: "Concept Project", title: "Interior Design Studio", text: "A visual portfolio experience designed to turn projects into consultation enquiries." },
];

const process = [
  ["01", "Discover", "Understand your business, audience, goals and requirements."],
  ["02", "Plan", "Define the structure, functionality and project roadmap."],
  ["03", "Design", "Create a visual direction and user experience around your brand."],
  ["04", "Build", "Develop, test and optimize the solution for real users."],
  ["05", "Launch", "Deploy the project and make sure everything works smoothly."],
  ["06", "Grow", "Continue improving and expanding your digital presence."],
];

function App() {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="site-shell">
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src="/logo.png" alt="SummerTech Labs logo" />
          <span>Summer<span>Tech</span>Labs</span>
        </a>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="mobile-cta" href={`mailto:${COMPANY.email}?subject=Project%20Enquiry`} onClick={closeMenu}>Start a Project</a>
        </nav>

        <a className="nav-cta" href={`mailto:${COMPANY.email}?subject=Project%20Enquiry`}>Start a Project <ArrowRight size={16} /></a>

        <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="grid-bg" />

          <div className="hero-content">
            <div className="eyebrow"><Sparkles size={15} /> WEB <i /> AI <i /> BUSINESS SOLUTIONS</div>
            <h1>Digital solutions built for businesses <span>ready to grow.</span></h1>
            <p>SummerTech Labs designs and develops modern websites, web applications and AI-powered solutions that help businesses build, improve and grow their digital presence.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">Start a Project <ArrowRight size={18} /></a>
              <a className="btn secondary" href="#work">View Our Work <ExternalLink size={17} /></a>
            </div>
            <div className="hero-trust">
              <span>Websites</span><b>•</b><span>Web Apps</span><b>•</b><span>AI Solutions</span><b>•</b><span>Automation</span>
            </div>
          </div>

          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring ring-a" />
            <div className="orbit-ring ring-b" />
            <div className="orbit-core">
              <div className="core-mark">S</div>
              <small>SUMMERTECH</small>
              <strong>LABS</strong>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-head">
            <div>
              <span className="section-kicker">WHAT WE BUILD</span>
              <h2>Technology designed around your business.</h2>
            </div>
            <p>From a high-converting business website to custom software and practical AI automation, we build digital solutions around real business needs.</p>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text, items }) => (
              <article className="service-card" key={title}>
                <div className="icon-box"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>{items.map((item) => <li key={item}><CheckCircle2 size={15} /> {item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section why-section">
          <div className="section-head centered">
            <span className="section-kicker">WHY SUMMERTECH LABS</span>
            <h2>Technology that works for your business.</h2>
          </div>
          <div className="why-grid">
            {[
              ["01", "Built Around Your Business", "Every solution starts with understanding your business, customers and goals."],
              ["02", "Modern by Design", "Fast, responsive and thoughtfully designed for today's users."],
              ["03", "Built to Grow", "Solutions are developed with scalability and future improvements in mind."],
              ["04", "From Idea to Launch", "We handle the journey from planning and design to development and deployment."],
            ].map(([num, title, text]) => (
              <div className="why-item" key={num}>
                <span>{num}</span><div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-head">
            <div>
              <span className="section-kicker">SELECTED WORK</span>
              <h2>What we can build.</h2>
            </div>
            <p>Concept projects below demonstrate the kinds of digital experiences SummerTech Labs can create. Replace them with real client case studies as your portfolio grows.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual visual-${index + 1}`}>
                  <div className="mock-window">
                    <div className="mock-bar"><span /><span /><span /></div>
                    <div className="mock-content">
                      <div className="mock-line wide" /><div className="mock-line" /><div className="mock-blocks"><i /><i /><i /></div>
                    </div>
                  </div>
                </div>
                <div className="project-copy">
                  <span>{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="section-head centered">
            <span className="section-kicker">OUR PROCESS</span>
            <h2>From idea to digital product.</h2>
          </div>
          <div className="process-grid">
            {process.map(([num, title, text]) => (
              <div className="process-card" key={num}>
                <span>{num}</span><h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-card">
            <div className="about-copy">
              <span className="section-kicker">ABOUT SUMMERTECH LABS</span>
              <h2>Built to make modern technology more accessible to businesses.</h2>
              <p>SummerTech Labs was founded with a simple idea: businesses of every size should be able to use modern technology to create better experiences for their customers.</p>
              <p>We combine thoughtful design, modern development and practical AI to turn business requirements into useful digital products.</p>
              <div className="founder">
                <div className="avatar">D</div>
                <div><strong>Divy Vaddoriya</strong><span>Founder & Developer</span></div>
              </div>
            </div>
            <div className="about-art">
              <div className="art-ring" /><div className="art-ring small" />
              <div className="art-logo">S</div>
            </div>
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="section-head centered">
            <span className="section-kicker">CLIENT FEEDBACK</span>
            <h2>What our clients say.</h2>
            <p>Real testimonials will be added here as SummerTech Labs completes client projects.</p>
          </div>
          <div className="testimonial-placeholder">
            <MessageCircle size={22} />
            <div><strong>Your first client story starts here.</strong><p>After a project is completed, add the client's genuine feedback, name and business here. Never publish fabricated testimonials.</p></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div className="contact-copy">
              <span className="section-kicker">LET'S TALK</span>
              <h2>Have an idea? <span>Let's build it.</span></h2>
              <p>Tell us what you're trying to build. We'll discuss your goals, requirements and the right digital solution for your business.</p>
              <div className="contact-list">
                <a href={`mailto:${COMPANY.email}`}><Mail size={18} /><span><small>Email</small>{COMPANY.email}</span></a>
                <a href={`tel:${COMPANY.phoneHref}`}><Phone size={18} /><span><small>Call</small>{COMPANY.phoneDisplay}</span></a>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small>Chat with us</span></a>
                <div><MapPin size={18} /><span><small>Location</small>{COMPANY.location}</span></div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Project enquiry from ${data.get("name")}`);
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nBusiness: ${data.get("business")}\n\nProject details:\n${data.get("message")}`
              );
              window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
            }}>
              <div className="form-row"><label>Name *<input name="name" required placeholder="Your name" /></label><label>Email *<input type="email" name="email" required placeholder="you@example.com" /></label></div>
              <div className="form-row"><label>Phone<input name="phone" placeholder="+91 ..." /></label><label>Business<input name="business" placeholder="Business name" /></label></div>
              <label>Project details *<textarea name="message" required rows="6" placeholder="Tell us what you'd like to build..." /></label>
              <button className="btn primary full" type="submit">Send Inquiry <ArrowRight size={18} /></button>
              <p className="form-note">The form opens your email client. You can later connect this to Resend, Formspree, or your own backend.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand"><img src="/logo.png" alt="SummerTech Labs logo" /><span>Summer<span>Tech</span>Labs</span></a>
            <p>Modern web, AI and business solutions for a digital-first world.</p>
          </div>
          <div><h4>Services</h4><a href="#services">Web Development</a><a href="#services">Web Applications</a><a href="#services">AI Solutions</a><a href="#services">Automation</a></div>
          <div><h4>Company</h4><a href="#about">About</a><a href="#work">Work</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
          <div><h4>Contact</h4><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a><a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phoneDisplay}</a><a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SummerTech Labs. All rights reserved.</span><div><a href="#">Privacy Policy</a><a href="#">Terms & Conditions</a></div></div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);