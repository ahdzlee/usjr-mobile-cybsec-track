# Flutter Specialization Track - Slide Presentation

A stunning reveal.js presentation for the Mobile Applications Development: Flutter Specialization Track course syllabus.

## Features

- **Modern Design**: Clean, professional aesthetic with Flutter brand colors
- **Light/Dark Theme**: Toggle between themes with the button in the top-right corner
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Interactive**: Smooth animations and fragment transitions
- **Speaker Notes**: Comprehensive notes for each slide (press `S` to view)
- **PDF Export**: Print-ready with proper page breaks

## Quick Start

### Option 1: Open Directly
Simply open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Local Server (Recommended)
For the best experience, serve the files with a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `↑` / `↓` | Navigate vertical slides |
| `Esc` / `O` | Overview mode |
| `S` | Speaker notes view |
| `F` | Fullscreen |
| `B` / `.` | Pause (black screen) |
| `?` | Show keyboard shortcuts |

## Presentation Structure

1. **Hero/Title Slide** - Course introduction
2. **Why Choose Flutter?** - Key benefits and industry adoption
3. **3-Semester Journey** - Program timeline overview
4. **Semester 1: Foundations** - UI/UX, State Management, Testing
5. **Semester 1: Code Sample** - What students will build
6. **Semester 2: Backend Integration** - APIs, Auth, Databases
7. **Backend Architecture** - System design diagram
8. **Semester 3: Advanced Topics** - ML/AI, Architecture, DevOps
9. **Clean Architecture** - Design patterns diagram
10. **CI/CD Pipeline** - Deployment workflow
11. **Learning Outcomes** - 10 key competencies
12. **Tools & Technologies** - Tech stack overview
13. **Assessment Structure** - Grading breakdown
14. **What You'll Build** - Project showcase
15. **Career Pathways** - Job progression and salaries
16. **Hands-On Learning** - Course format
17. **Prerequisites** - Entry requirements
18. **Capstone Project** - Final project details
19. **Resources & Support** - Learning materials
20. **Call to Action** - Enrollment encouragement
21. **Q&A** - Questions and contact info

## Customization

### Changing Colors
Edit the CSS variables in `styles/custom.css`:

```css
:root, [data-theme="light"] {
    --primary: #0468D7;      /* Flutter Blue */
    --secondary: #13B9FD;    /* Flutter Light Blue */
    --accent: #FFD700;       /* Golden Yellow */
    /* ... */
}

[data-theme="dark"] {
    --primary: #13B9FD;
    --secondary: #0468D7;
    --accent: #FFB84D;
    /* ... */
}
```

### Adding Slides
Add new `<section>` elements inside the `.slides` container:

```html
<section data-transition="slide">
    <h2 class="section-title">New Slide Title</h2>
    <p>Content here...</p>
    <aside class="notes">
        Speaker notes here...
    </aside>
</section>
```

### Modifying Transitions
Change the `data-transition` attribute on sections:
- `slide` - Slide in from the right
- `fade` - Fade in/out
- `zoom` - Zoom in
- `convex` - Slide with 3D effect
- `concave` - Opposite of convex
- `none` - No transition

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Dependencies

All dependencies are loaded from CDN:
- [Reveal.js 4.6.1](https://revealjs.com/)
- [Lucide Icons](https://lucide.dev/)
- [Prism.js](https://prismjs.com/) (for code highlighting)
- [Inter Font](https://fonts.google.com/specimen/Inter)
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## PDF Export

1. Open the presentation in Chrome
2. Add `?print-pdf` to the URL: `index.html?print-pdf`
3. Open Print dialog (Ctrl/Cmd + P)
4. Select "Save as PDF"
5. Set margins to "None"
6. Enable "Background graphics"

## License

This presentation is created for educational purposes for the Mobile Applications Development course.

---

**Last Updated:** November 2024
