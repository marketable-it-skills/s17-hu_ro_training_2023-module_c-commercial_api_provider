# How to develop and deploy the project?

1. Create a new GitHub repository using the [HTML and Vanilla JS template](https://github.com/new?template_name=mits-html-and-vanila-js-v1&template_owner=marketable-it-skills).
2. Place your solution code inside the `/src` folder.
3. Pushing to GitHub triggers GitHub Actions (see `.github/`) to:
   - Build a Docker image
   - Push it to GitHub Container Registry
4. In `docker-compose.yml`, update:
   `image: ghcr.io/<your-github-account>/<your-repo-name>:latest`
5. Run locally:
   ```bash
   docker compose up -d
   ```
6. Visit: [http://localhost](http://localhost)

## Development Setup

### Prerequisites

- Text editor or IDE
- Modern web browser (Chrome or Firefox recommended)
- Basic understanding of HTML5 and CSS3
- Optional: Node.js and npm (if using CSS preprocessors)

### Getting Started

1. Navigate to the provided project folder
2. Create your HTML structure in the `/src` folder
3. Organize your assets according to the provided folder structure
4. Use the content files in `/assets/content/` for page content
5. Follow the design files in `/assets/design/` for visual guidance
6. Use the provided images and icons from `/assets/DineEase Site Assets/`

### Development Guidelines

- Write semantic HTML5 markup
- Use CSS3 for styling and responsive design
- Implement responsive breakpoints for mobile (360×640), tablet (768×1024), and desktop (1920×1080)
- Ensure WCAG accessibility compliance
- Implement SEO best practices with proper meta tags
- Validate HTML and CSS using W3C validators

### Testing and Validation

- Test responsive design across all three specified viewports
- Validate HTML using [W3C HTML Validator](https://validator.w3.org/)
- Validate CSS using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Test accessibility using axe browser extension
- Check cross-browser compatibility on Chrome and Firefox
- Verify SEO implementation with browser dev tools