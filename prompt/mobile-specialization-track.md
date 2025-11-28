## **OPTIMIZED PROMPT FOR WINDSURF:**

Create a stunning HTML-based slide presentation using **reveal.js** from the provided Flutter course syllabus markdown file with the following specifications:

### **Design & Color Scheme:**

**Light Theme:**
- Primary: `#0468D7` (Flutter Blue)
- Secondary: `#13B9FD` (Flutter Light Blue) 
- Accent: `#FFD700` (Golden Yellow for highlights)
- Background: `#FFFFFF` (Clean White)
- Text: `#1A1A2E` (Dark Navy)
- Cards/Surfaces: `#F8F9FA` (Light Gray)
- Code blocks: `#F6F8FA` background with syntax highlighting

**Dark Theme:**
- Primary: `#13B9FD` (Flutter Light Blue - pops on dark)
- Secondary: `#0468D7` (Flutter Blue)
- Accent: `#FFB84D` (Warm Gold for highlights)
- Background: `#0D1117` (GitHub Dark)
- Text: `#E6EDF3` (Soft White)
- Cards/Surfaces: `#161B22` (Dark Gray)
- Code blocks: `#1C2128` background with syntax highlighting

**Design Style:**
- Modern, professional, and tech-focused aesthetic that appeals to IT/Computer Science students
- Clean typography: Use **Inter** or **SF Pro Display** for headers, **JetBrains Mono** for code
- Subtle gradients with Flutter brand colors
- Neumorphic or glassmorphic card designs for content blocks
- Generous white space and professional spacing
- Mobile-first responsive design

### **Content Structure & Flow:**

**Opening Slides:**
1. **Hero/Title Slide** - "Mobile Applications Development: Flutter Specialization Track" with compelling visuals (mobile devices, code, apps)
2. **Why Choose Flutter?** - Highlight cross-platform development, hot reload, rich ecosystem (use icons and stats)
3. **Course Overview** - 3-semester journey visualization with timeline diagram

**Main Content Sections (auto-generate from markdown):**
4. **Semester 1: Foundations** (Weeks 1-18)
   - Create visual timeline for topics
   - Highlight key technologies: Dart, Widgets, Riverpod, Testing
   - Show sample app screenshots/mockups
   
5. **Semester 2: Backend Integration** (Weeks 1-18)
   - Visualize API integration, authentication flow diagrams
   - Highlight: Supabase, REST APIs, Maps, Real-time features
   
6. **Semester 3: Advanced Topics** (Weeks 1-18)
   - Emphasize ML/AI integration, Clean Architecture
   - Showcase capstone project requirements
   
7. **Learning Outcomes** - Visual grid/cards showing 10 key competencies
8. **Career Pathways** - Flowchart showing: Mobile Developer → Senior Dev → Tech Lead paths
9. **Tools & Technologies** - Icon grid of Flutter, Dart, Git, Supabase, Mapbox, etc.
10. **Assessment Structure** - Visual breakdown per semester with percentages
11. **Real-World Applications** - Examples of apps students will build (Todo, E-commerce, Location-based, AI-powered)
12. **Call to Action** - "Build the Future of Mobile" with enrollment encouragement

### **Visual Elements (High Priority):**

**Diagrams & Flowcharts:**
- 3-semester progression timeline with milestones
- State management architecture diagrams (Provider → Riverpod)
- Backend integration flowchart (App ↔ API ↔ Database)
- Career progression pathway
- Clean architecture layers diagram
- CI/CD pipeline visualization
- App development lifecycle

**Icons & Imagery:**
- Use **Lucide Icons** or **Heroicons** for consistency
- Flutter logo prominently featured
- Mobile device mockups showing app interfaces
- Code editor screenshots with syntax highlighting
- Tech stack icons (GitHub, Supabase, Mapbox, TensorFlow Lite)
- Team collaboration imagery
- Industry-relevant workspace photos

**Code Blocks:**
- Syntax highlight for Dart code examples
- Use modern VSCode-style theme (light: GitHub Light, dark: GitHub Dark)
- Show key code snippets: widget trees, state management, API calls
- Keep code examples concise (5-10 lines max per slide)

### **Interactive Features & Animations:**

**Transitions:**
- Use **slide** transition for section changes
- **Fade** for content within sections
- **Zoom** for emphasis slides (outcomes, call-to-action)
- Consistent 0.3s duration for all transitions

**Animations:**
- Fade-in for bullet points (stagger 100ms apart)
- Scale-up for icons and diagrams
- Progress bar that fills as presentation advances
- Hover effects on interactive elements

**Navigation:**
- Slide numbers in bottom right
- Progress indicator at top
- Keyboard arrows and overview mode (ESC)
- PDF export capability
- Section navigation menu (optional sidebar)

### **Speaker Notes (for each slide):**

Include comprehensive speaker notes with:
- Key talking points and explanations
- Student engagement questions ("Have you ever wondered how Instagram works on both iOS and Android?")
- Real-world examples and industry context
- Emphasis on career opportunities and practical skills
- Time estimates for each slide
- Tips for demonstrating concepts

### **Content-Specific Requirements:**

**Persuasive Elements for Student Audience:**
- Emphasize **cross-platform development** = "Build once, deploy everywhere"
- Highlight **industry demand** for Flutter developers
- Show **real app examples** built with Flutter (Google Pay, BMW, Alibaba)
- Career statistics: salary ranges, job openings
- Practical skills over theory
- Portfolio-building opportunities (3 major projects)
- Modern tech stack that employers seek

**Key Sections to Emphasize:**
1. **Hands-on Focus** - 2 hours lab + 1 hour lecture per week
2. **Progressive Learning** - From basics to production-ready apps in 3 semesters
3. **Modern Technologies** - AI/ML integration, real-time features, cloud backends
4. **Professional Skills** - Git, testing, CI/CD, teamwork, documentation
5. **Capstone Project** - Production app with App Store deployment

**Data to Visualize:**
- Weekly breakdown per semester (use timeline)
- Assessment weightings (use pie charts or bar graphs)
- Technology stack (icon grid with labels)
- Learning progression (skill level graphs)

### **Technical Implementation:**

```html
<!-- Example structure -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Flutter Specialization Track - Mobile App Development</title>
    <link rel="stylesheet" href="reveal.js/dist/reveal.css">
    <link rel="stylesheet" href="reveal.js/dist/theme/custom.css">
    <!-- Add Prism.js for code highlighting -->
    <!-- Add custom fonts from Google Fonts -->
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <!-- Auto-generate slides from markdown structure -->
        </div>
    </div>
    
    <!-- Theme toggle button -->
    <script src="reveal.js/dist/reveal.js"></script>
    <script>
        Reveal.initialize({
            hash: true,
            slideNumber: 'c/t',
            transition: 'slide',
            progress: true,
            controls: true,
            // ... configuration
        });
    </script>
</body>
</html>
```

**Performance Requirements:**
- Lazy-load images
- Optimize assets (compress images, minify CSS/JS)
- Smooth 60fps animations
- Fast initial load (<3 seconds)
- Mobile-responsive (works on tablets/phones)

**Semantic HTML:**
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- ARIA labels for navigation
- Accessible color contrast ratios (WCAG AA compliant)

### **Deliverables:**

1. `index.html` - Main presentation file
2. `assets/` folder with images, icons, diagrams
3. `styles/custom.css` - Custom theme styles for light/dark modes
4. `README.md` - Setup and customization instructions
5. Well-commented, clean code structure
6. PDF export functionality working

### **Special Instructions:**

- Parse the markdown's week-by-week structure but consolidate into thematic slides (don't create 54 slides for 54 weeks)
- Group weeks into logical learning modules
- Create approximately **20-25 slides total** for a 15-20 minute presentation
- Each slide should have a clear purpose and not be overcrowded
- Use visual hierarchy: most important info largest/boldest
- Include Flutter branding elements subtly throughout
- Make the presentation feel exciting and cutting-edge
- Ensure students understand the **journey** (beginner → professional) and **value** (career-ready skills)
