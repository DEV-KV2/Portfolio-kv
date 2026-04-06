# Krishna Vishwakarma - AI Developer Portfolio

A modern, interactive portfolio website showcasing AI/ML projects and web development work. Features multiple viewing modes (Normal, Cleaned, Chaos) with smooth animations and responsive design.

## Features

### 🎨 Multiple Viewing Modes
- **Normal Mode** ☕ - Clean, professional white theme
- **Cleaned Mode** ✨ - Minimalist light gray aesthetic
- **Chaos Mode** 🌪️ - Bold black & white anime-inspired design with dynamic animations

### ✨ Interactive Elements
- **Smooth Mode Switching** - Toggle between three unique visual themes with LocalStorage persistence
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Decorative Animations** - Floating elements (sticky notes, notebooks, vinyl records, coffee cups, phones)
- **Scroll Animations** - Elements fade in and animate as you scroll through sections
- **3D Perspective Effects** - Hero card with depth and rotation transforms

### 📱 Sections
1. **Hero Section** - Introduction with animated hero card and decorative elements
2. **Currently Cooking** - Showcase active projects (RAG & Vector Systems)
3. **Recently Made** - List of 4 recent projects with descriptions
4. **Other Work** - Grid of 4 additional projects and learning initiatives
5. **About** - Bio, location, contact info, and language skills
6. **Contact** - Multiple ways to connect (Email, LinkedIn, GitHub, Phone)

## Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom properties (CSS variables), animations, gradients, flexbox
- **JavaScript ES6+** - Mode toggle system, LocalStorage API, Intersection Observer for animations
- **Fonts** - Space Mono (typography), Poppins (body text)

## File Structure

```
portfolio 5/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Mode toggle and interactivity
└── README.md       # This file
```

## Getting Started

### View Locally
1. Clone or download the repository
2. Open `index.html` in your web browser
3. Use the mode toggle button (☕) in the top-right to switch themes

### Deployment
This is a static site and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Color Schemes

### Normal Mode
- Background: White (#ffffff)
- Text: Dark Gray (#1a1a1a)
- Accents: Purple (#7c3aed)

### Cleaned Mode
- Background: Light Gray (#fafafa)
- Text: Dark Gray (#2a2a2a)
- Accents: Gray (#555555)

### Chaos Mode
- Background: Black (#000000)
- Text: White (#ffffff)
- Accents: White with glow effects
- Special: Anime-style entrance animations

## Animations & Effects

- **Card Float** - Subtle 3D floating animation on hero card
- **Pop-in** - Bounce entrance for character badges
- **Anime Pop** - Springy 3D rotation on chaos mode hero card
- **Text Glow** - Text shadow effects with dynamic glowing
- **Fade & Slide** - Smooth entrance animations for content sections
- **Bounce** - Scroll indicator bouncing animation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact & Links

- **Email**: kanha01212@gmail.com
- **Phone**: 9329866996
- **LinkedIn**: [krishna-vishwakarma-475ab1353](https://www.linkedin.com/in/krishna-vishwakarma-475ab1353)
- **GitHub**: [DEV-KV2](https://github.com/DEV-KV2)
- **Location**: Gwalior, Madhya Pradesh

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --bg-color: #ffffff;
    --text-dark: #1a1a1a;
    --text-light: #666666;
    --border-color: #e5e5e5;
    --accent: #7c3aed;
}
```

### Adding Projects
Edit the project items in `index.html`:
```html
<div class="project-item">
    <div class="project-icon">🚀</div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description</p>
    </div>
</div>
```

### Modifying Content
All content is directly editable in the HTML. Update:
- Personal information in the hero section
- Project descriptions and icons
- Skills and experience in the about section
- Contact details

## Performance

- Lightweight with no external dependencies
- CSS animations on GPU for smooth performance
- LocalStorage for instant mode preference loading
- Optimized animations with proper timing

## License

This project is open source and available for personal and educational use.

## Future Enhancements

- Add dark mode toggle
- Mobile menu optimization
- Project detail pages
- Blog section
- Resume download
- Theme customization panel

---

**Last Updated**: April 7, 2026
**Version**: 1.0
