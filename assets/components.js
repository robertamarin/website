const isResourcePage = window.location.pathname.includes('/resources/');
const basePath = isResourcePage ? '../' : './';

const NAV_LINKS = [
  { href: `${basePath}solutions.html`, label: "Solutions" },
  { href: `${basePath}industries.html`, label: "Industries" },
  { href: `${basePath}how-it-works.html`, label: "How It Works" },
  { href: `${basePath}company.html`, label: "Company" },
  { href: `${basePath}resources/index.html`, label: "Resources" }
];

function createHeader(active) {
  const links = NAV_LINKS.map(link => {
    const activeClass = active === link.label.toLowerCase().replace(/\s+/g, '-') ? 'active' : '';
    return `<li><a class="${activeClass}" href="${link.href}">${link.label}</a></li>`;
  }).join('');

  return `
    <div class="nav-container">
      <a class="logo" href="${basePath}index.html" aria-label="OPC Warehouse Solutions home">
        <img src="${basePath}assets/WSlogo.svg" alt="Warehouse Solutions logo" loading="lazy">
        <div class="logo-lockup">
          <strong>OPC</strong>
          <span>Warehouse Solutions</span>
        </div>
      </a>
      <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="primary-nav">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="primary-nav">
        <ul>${links}</ul>
      </nav>
      <a class="cta-btn" href="${basePath}request-quote.html">Request a Quote</a>
    </div>
  `;
}

function createFooter() {
  return `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="${basePath}assets/LogoOnly.svg" alt="OPC Warehouse Solutions monogram" loading="lazy">
          <div>
            <strong>OPC Warehouse Solutions</strong>
            <p>Operations partner for inventory control, kitting, refurbishment, and logistics programs.</p>
          </div>
        </div>
        <p class="footer-meta">Based in Chula Vista, California — providing nationwide coverage<br>Safety, quality assurance, and visibility-first execution.</p>
        <div class="footer-badges">
          <span class="badge">On-time performance &gt;98%</span>
          <span class="badge">Visibility-first logistics</span>
          <span class="badge">Safety and quality-assurance discipline</span>
        </div>
      </div>
      <div class="footer-columns">
        <div>
          <h4>Programs</h4>
          <ul>
            <li><a href="${basePath}solutions.html">Solutions & Services</a></li>
            <li><a href="${basePath}industries.html">Industries & Use Cases</a></li>
            <li><a href="${basePath}how-it-works.html">How Engagement Works</a></li>
            <li><a href="${basePath}request-quote.html#contact">Schedule a Walkthrough</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="${basePath}company.html">About OPC</a></li>
            <li><a href="${basePath}resources/index.html">Resources</a></li>
            <li><a href="${basePath}sitemap.xml">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h4>Engage</h4>
          <ul>
            <li><a href="${basePath}request-quote.html">Request a quote</a></li>
            <li><a href="https://www.google.com/maps/dir/?api=1&destination=505+Main+St+Chula+Vista+CA+91911" target="_blank" rel="noopener">Visit Chula Vista HQ</a></li>
            <li><a href="${basePath}request-quote.html#contact">Schedule a walkthrough</a></li>
          </ul>
        </div>
        <div>
          <h4>Company & Resources</h4>
          <ul>
            <li><a href="${basePath}resources/index.html">Documentation & Insights</a></li>
            <li><a href="${basePath}how-it-works.html">Engagement SLAs</a></li>
            <li><a href="${basePath}request-quote.html">Service Intake Form</a></li>
            <li><a href="${basePath}resources/case-snapshot.html">Case snapshots</a></li>
            <li><a href="${basePath}resources/one-pager.html">Program one-pager</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} OPC Warehouse Solutions. Operations-first warehousing, refurbishment, and logistics programs.</span>
        <div class="footer-bottom-links">
          <a href="${basePath}solutions.html">Solutions</a>
          <a href="${basePath}request-quote.html">Engage</a>
          <a href="${basePath}resources/index.html">Resources</a>
        </div>
      </div>
    </div>
  `;
}

function createCTASection() {
  return `
    <section id="contact" class="section">
      <div class="contact">
        <div>
          <h2 style="color:white;">Request a quote</h2>
          <p style="color:#d8e8f7;">Tell us about your sites, SKUs, and pain points. We respond within one business day.</p>
          <div class="badge-row" style="margin-top:12px;">
            <span class="badge">Chula Vista HQ</span>
            <span class="badge">Dedicated launch teams</span>
            <span class="badge">QA & safety-first</span>
          </div>
          <div class="map-wrapper">
            <div class="map-header">Located in Chula Vista</div>
            <div class="map-frame">
              <iframe title="Chula Vista warehouse location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.342975260404!2d-117.09707112380133!3d32.5910312927105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94a10c5f4b08f%3A0x2d89f9971535f0a3!2s505%20Main%20St%2C%20Chula%20Vista%2C%20CA%2091911!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="map-actions">
              <span>Navigation opens in Google Maps</span>
              <a class="cta-btn secondary" href="https://www.google.com/maps/dir/?api=1&destination=505+Main+St+Chula+Vista+CA+91911" target="_blank" rel="noopener">Get directions</a>
            </div>
          </div>
        </div>
        <form>
          <label class="sr-only" for="contact-name">Name</label>
          <input id="contact-name" type="text" name="name" placeholder="Name" required>
          <label class="sr-only" for="contact-email">Work email</label>
          <input id="contact-email" type="email" name="email" placeholder="Work email" required>
          <label class="sr-only" for="contact-company">Company</label>
          <input id="contact-company" type="text" name="company" placeholder="Company" required>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(160px,1fr));gap:10px;">
            <label class="sr-only" for="contact-service">Service needed</label>
            <select id="contact-service" name="service" required>
              <option value="" disabled selected>Service needed</option>
              <option>Inventory & Storage</option>
              <option>Parts & Equipment Programs</option>
              <option>Refurbishment</option>
              <option>Shipping & Logistics</option>
              <option>Full program review</option>
            </select>
            <label class="sr-only" for="contact-scale">Scale</label>
            <select id="contact-scale" name="scale" required>
              <option value="" disabled selected>Scale</option>
              <option>Single site</option>
              <option>2-5 sites</option>
              <option>6-10 sites</option>
              <option>10+ sites</option>
            </select>
          </div>
          <label class="sr-only" for="contact-pain">Current pain points and timelines</label>
          <textarea id="contact-pain" name="pain" placeholder="Current pain points and timelines"></textarea>
          <button type="submit" class="cta-btn" style="width:100%;text-align:center;">Submit request</button>
          <p style="color:#d8e8f7;font-size:13px;">We’ll schedule a discovery call and share a tailored program sketch within 48 hours.</p>
        </form>
      </div>
    </section>
  `;
}

function injectCommon(active) {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  const cta = document.getElementById('site-cta');
  if (header) header.innerHTML = createHeader(active);
  if (footer) footer.innerHTML = createFooter();
  if (cta) cta.innerHTML = createCTASection();

  setupNavigation();
}

function setupNavigation() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const nav = header.querySelector('nav');
  const toggle = header.querySelector('.nav-toggle');
  if (!nav || !toggle) return;

  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('nav-open', isOpen);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      closeMenu();
    }
  });
}

// Accessibility helper
const srStyles = document.createElement('style');
srStyles.innerHTML = `.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0;}`;
document.head.appendChild(srStyles);
