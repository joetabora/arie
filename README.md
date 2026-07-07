# Arie's Annual Ride for Autism Awareness & Advocacy

Informational website for [MKEinnerCityWeCare](https://github.com/joetabora/arie) — raising awareness, collecting donations, and recruiting sponsorship partners for Arie's Annual Ride in Milwaukee.

## Live Site

Deploy via [Vercel](https://vercel.com) connected to this GitHub repo. No build step required — it's a static site.

## Local Development

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Updating Content

### Donation Links

When GoFundMe and PayPal accounts are ready, update the `data-donate-url` attributes in `index.html`:

```html
<!-- GoFundMe -->
<a href="#" ... id="gofundme-link" data-donate-url="https://gofundme.com/your-campaign">

<!-- PayPal -->
<a href="#" ... id="paypal-link" data-donate-url="https://paypal.me/yourlink">
```

Once a URL is set, the button automatically becomes active (script.js handles this).

### Contact Form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form with notification email: `mkeinnercitywecare@gmail.com`
3. Replace `YOUR_FORM_ID` in the form `action` URL in `index.html`:

```html
<form ... action="https://formspree.io/f/abc123xyz" method="POST">
```

### Event Details

Edit the Event Details section in `index.html` (`#event`) — update date, route, registration link, and remove the "Coming Soon" badge when ready.

## Deploy to Vercel

1. Push this repo to GitHub (`github.com/joetabora/arie`)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `arie` repository
4. Leave build settings as default (no framework, no build command)
5. Deploy

Vercel will auto-deploy on every push to `main`.

## Project Structure

```
arie/
├── index.html      # Single-page site
├── styles.css      # All styles
├── script.js       # Nav, form, donation link logic
├── images/
│   ├── logo.png    # Brand logo (from boardroom PDF)
│   └── favicon.png
└── README.md
```

## Contact

**Russell Monroe**, President — MKEinnerCityWeCare  
Phone: 414-998-2324  
Email: mkeinnercitywecare@gmail.com
