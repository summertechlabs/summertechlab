# SummerTech Labs Website

A professional static React website for SummerTech Labs, built with Vite, React, Lucide icons and plain CSS.

## 1. Requirements

Install:

- Node.js 20+ (Node.js 22 recommended)
- npm
- Docker (optional, for container deployment)

Check:

```bash
node -v
npm -v
```

## 2. Run locally

Extract/open the project folder:

```bash
cd summertech-labs
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Vite will show a local URL, normally:

```text
http://localhost:5173
```

## 3. Build for production

```bash
npm run build
```

The production files are generated in:

```text
dist/
```

Preview the production build:

```bash
npm run preview
```

## 4. Update your phone and email

Open:

```text
src/main.jsx
```

At the top you will find:

```js
const COMPANY = {
  name: "SummerTech Labs",
  email: "hello@summertechlabs.com",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "919876543210",
  location: "Gujarat, India",
};
```

Replace these values with your real business details.

IMPORTANT:
- `phoneDisplay` is what visitors see.
- `phoneHref` should contain the number in international format without spaces.
- `whatsapp` should contain your WhatsApp number with country code, without `+` or spaces.
- Replace the email with your real professional business email.

## 5. Replace the logo

The current project includes the supplied SummerTech Labs logo as:

```text
public/logo.png
```

To replace it, put your preferred logo at that exact path/name.

## 6. Contact form behavior

The current form is intentionally backend-free.

When the visitor submits the form, it opens their email client using a `mailto:` link and pre-fills an email addressed to your SummerTech Labs email.

For a production lead-generation website, you should eventually connect the form to a real form/email service such as Resend, Formspree, or your own backend so leads are captured even when the visitor does not have a local mail client configured.

## 7. Docker

Build the image:

```bash
docker build -t summertech-labs .
```

Run it:

```bash
docker run --rm -p 8080:80 summertech-labs
```

Open:

```text
http://localhost:8080
```

## 8. Deploying the Docker image

The image serves the compiled React app through Nginx on port 80.

For a VPS/EC2-style server:

```bash
docker build -t summertech-labs .
docker run -d --restart unless-stopped --name summertech-labs -p 80:80 summertech-labs
```

For HTTPS, put a reverse proxy/load balancer such as Caddy, Nginx, or a cloud load balancer in front of the container.

## 9. Deploy without Docker

You can also deploy the `dist/` folder directly to static hosting such as Vercel, Netlify, Cloudflare Pages, or an object-storage/static-site setup.

Build:

```bash
npm run build
```

Then deploy the generated `dist/` directory.

## 10. Before public launch

Replace:
- Phone number
- Email
- WhatsApp number
- Social links
- Concept projects with real work when available
- Privacy Policy
- Terms & Conditions

Do not publish fabricated client testimonials, awards, statistics, client logos or business claims.

## Project structure

```text
summertech-labs/
├── public/
│   └── logo.png
├── src/
│   ├── main.jsx
│   └── styles.css
├── .dockerignore
├── Dockerfile
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
