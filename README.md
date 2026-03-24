<div align="center">

  <h1>🚛 Janu Packers and Movers</h1>

  <p><b>Professional Packing & Moving Services across India</b><br/>
  Trusted relocation partner based in Tirupati — serving homes, offices, and vehicles Pan-India.</p>

  ![Website](https://img.shields.io/badge/Website-Live-brightgreen?style=flat-square&logo=google-chrome&logoColor=white)
  ![Location](https://img.shields.io/badge/Based%20In-Tirupati%2C%20India-orange?style=flat-square&logo=google-maps&logoColor=white)
  ![Support](https://img.shields.io/badge/Support-24%2F7-blue?style=flat-square&logo=whatsapp&logoColor=white)
  ![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

</div>

---

> 🌐 **Live Website:** [www.janupackersandmovers.com](https://www.janupackersandmovers.com)  
> 📞 **Customer Care:** [+91-9392108148](tel:+919392108148)  
> 🕐 **Available:** 7 days a week, round the clock

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Services Offered](#-services-offered)
- [Why Choose Us](#-why-choose-us)
- [Pricing Overview](#-pricing-overview)
- [Booking Guide](#-booking-guide)
- [Tech Stack](#️-tech-stack-website)
- [Project Structure](#-project-structure)
- [Local Development](#-local-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)

---

## 🌟 About the Project

**Janu Packers and Movers** is a globally recognised relocation company headquartered in **Tirupati, Andhra Pradesh**. This repository contains the source code for the official website at [janupackersandmovers.com](https://www.janupackersandmovers.com).

The website serves as the primary digital touchpoint for customers seeking packing and moving services — offering service discovery, quote requests, and customer support across all of India.

### Mission

> *"To deliver the best packing and moving experience through a customer-centric approach, affordable pricing, and a team that treats every move as if it were our own."*

---

## 📦 Services Offered

| Service | Description |
|---|---|
| 🏠 **Household Shifting** | Complete home relocation with premium packing materials |
| 🏢 **Office Relocation** | Minimal-downtime corporate moves with systematic planning |
| 🚗 **Car Transportation** | Safe vehicle transport with enclosed carriers across India |
| 🏍️ **Bike Transportation** | Specialized two-wheeler transport with custom crating |
| 📦 **Loading & Unloading** | Professional handling of household, office & industrial goods |
| 🏭 **Warehousing & Storage** | Secure short and long-term storage solutions |
| 🚪 **Door-to-Door Delivery** | End-to-end pickup and drop at your convenience |
| 📺 **Electronic Items Shifting** | Specialized packing for fragile electronics |
| ⚙️ **Machinery Moving** | Safe relocation of industrial equipment |
| 🏙️ **Local & Interstate Moves** | Same-day city moves + long-distance interstate relocations |

---

## ✨ Why Choose Us

- 🌍 **Pan-India Network** — offices and partner agents across 20+ locations
- 🕐 **7-Day Availability** — support and operations every day of the week
- 💰 **Transparent Pricing** — no hidden charges, free quotes upfront
- 🛡️ **Transit Insurance** — basic coverage included; comprehensive add-on available
- 📦 **Quality Packing Materials** — high-grade boxes, bubble wrap, and tape
- 🚛 **Large Fleet** — experienced drivers + on-time delivery guaranteed
- ⭐ **Customer-Centric Approach** — tailored solutions for every move

---

## 💰 Pricing Overview

> All prices are indicative. Contact us for a free, accurate quote based on your specific requirements.

| Move Type | Estimated Range |
|---|---|
| Local shifting (within city) | ₹3,000 – ₹15,000 |
| Interstate relocation | ₹15,000 – ₹1,50,000 |
| Vehicle transport | Contact for quote |
| Storage (per month) | Contact for quote |

### Booking Timeline Recommendations

- **Local moves** — Book 7–10 days in advance
- **Interstate moves** — Book 2–3 weeks in advance
- **Peak season** (May–July, year-end) — Book 3–4 weeks in advance
- **Last-minute moves** — Available based on capacity

---

## 📅 Booking Guide

1. **Visit the website** → [janupackersandmovers.com](https://www.janupackersandmovers.com)
2. **Fill the Quote Form** with your move details (from/to location, goods type, date)
3. **Get a Free Estimate** — our team calls back within hours
4. **Confirm the booking** with a nominal advance
5. **Relax** — our team handles packing, loading, transport, and unloading

---

## 🛠️ Tech Stack (Website)

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Styling | Bootstrap / Custom CSS |
| Backend (Forms) | PHP Mailer / Web3Forms |
| Hosting | cPanel Web Hosting |
| Maps | Google Maps Embed API |
| Analytics | Google Analytics |

---

## 📁 Project Structure

```
janupackersandmovers/
├── index.html                    # Home page
├── about-us.html                 # About the company
├── contact.html                  # Contact & quote request form
├── services/
│   ├── household-shifting.html
│   ├── office-relocation.html
│   ├── car-transportation.html
│   ├── bike-transportation.html
│   ├── warehousing-storage.html
│   └── loading-unloading.html
├── locations/                    # City-specific landing pages
│   ├── tirupati.html
│   ├── vijayawada.html
│   └── ...
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── sitemap.xml
└── robots.txt
```

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/janupackersandmovers/website.git
cd janupackersandmovers

# Open directly in browser (static site)
open index.html
```

For PHP-based contact forms, run a local server:

```bash
# Using PHP built-in server
php -S localhost:8000

# Or use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## 🚀 Deployment

This is a static website deployed via cPanel web hosting.

```bash
# Upload via FTP/SFTP (FileZilla or similar)
Host:     ftp.janupackersandmovers.com
Username: your-cpanel-username
Password: your-cpanel-password
Port:     21

# Or deploy via rsync
rsync -avz --delete ./ user@server:/public_html/
```

### Pre-Deployment Checklist

- [ ] Test all contact forms end-to-end
- [ ] Verify Google Analytics tracking ID
- [ ] Check mobile responsiveness on multiple screen sizes
- [ ] Validate sitemap.xml is up to date
- [ ] Run Lighthouse audit (target score > 85)
- [ ] Test page load speed (target < 3 seconds)

---

## 🤝 Contributing

Contributions to improve the website are welcome!

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/whatsapp-chat-button
   ```
3. Commit your changes
   ```bash
   git commit -m 'feat: add WhatsApp click-to-chat floating button'
   ```
4. Push to the branch
   ```bash
   git push origin feature/whatsapp-chat-button
   ```
5. Open a Pull Request describing your changes

---

## 📞 Contact

| Channel | Details |
|---|---|
| 📱 Phone / WhatsApp | [+91-9392108148](tel:+919392108148) |
| 🌐 Website | [www.janupackersandmovers.com](https://www.janupackersandmovers.com) |
| 📍 Head Office | Tirupati, Andhra Pradesh, India |
| 🕐 Working Hours | 7 days a week · 24×7 Support |

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>© 2025 Janu Packers and Movers. All rights reserved.</p>
  <p><i>Making every move stress-free — one family at a time. 🏠</i></p>
  <br/>
  <a href="https://www.janupackersandmovers.com">🌐 Website</a> &nbsp;·&nbsp;
  <a href="tel:+919392108148">📞 Call Us</a> &nbsp;·&nbsp;
  <a href="https://www.janupackersandmovers.com/contact.html">📋 Get a Free Quote</a>
</div>
