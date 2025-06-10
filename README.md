# Modern Portfolio Website

A dark, futuristic portfolio website with a sleek glass-morphism design inspired by sci-fi interfaces. This project is a static website built with HTML, CSS, and JavaScript, designed to be hosted on GitHub Pages.

## Features

- **Modern Design**: Dark theme with cyan and magenta accents
- **Visual Effects**: Gradient text, floating shapes, glassmorphism
- **Dynamic Project Loading**: Projects loaded from JSON configuration
- **Animations**: Text typing effect, hover animations, smooth transitions
- **Responsive**: Mobile-friendly design with adaptive layouts
- **Performance Optimized**: Fast loading with minimal dependencies

## Project Structure

```
├── index.html       # Main HTML file
├── style.css        # CSS styles
├── script.js        # JavaScript functionality
├── projects.json    # Project configuration
└── README.md        # Documentation
```

## Setup Instructions

### Local Development

1. Clone this repository:
   ```
   git clone https://github.com/username/portfolio.git
   cd portfolio
   ```

2. Open the project in your favorite editor

3. To view the website locally, you can use any simple HTTP server:
   - With Python: `python -m http.server`
   - With Node.js: `npx serve`
   
4. Open your browser and navigate to `http://localhost:8000` (or the port shown in your terminal)

### Deployment to GitHub Pages

1. Push your changes to your GitHub repository:
   ```
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. Configure GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select the branch to deploy (usually `main`)
   - Save to trigger the deployment

3. Your site will be available at `https://username.github.io/repository-name/`

## Customization

### Modifying Projects

Edit the `projects.json` file to add, remove, or update projects:

```json
{
  "projects": [
    {
      "name": "Project Name",
      "description": "Project description text",
      "url": "https://project-url.com", 
      "status": "live",
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

### Changing Colors

The color scheme can be modified in the `:root` section of `style.css`:

```css
:root {
  --bg-primary: #050812;
  --bg-secondary: #0d1326;
  --accent-primary: #00f5ff;
  --accent-secondary: #ff00ff;
  /* other variables */
}
```

### Adding Content

The website is structured in sections. To add a new section:

1. Add the HTML markup in `index.html`
2. Add corresponding styles in `style.css`
3. If needed, add JavaScript functionality in `script.js`

## Browser Support

This website is designed for modern browsers and has been tested on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is available for personal use. Please contact the author for commercial use permissions.

---

Created by Sebastian Saavedra | [GitHub](https://github.com/username) | [Website](https://username.github.io)