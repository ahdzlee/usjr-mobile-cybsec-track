# Mobile Applications Development
## 3-Semester Flutter Course Syllabus

**Course Level:** 2nd Year BSIT  
**Total Duration:** 3 Semesters  
**Hours per Week:** 3 hours (2 hours lab, 1 hour lecture)  
**Prerequisites:** JavaScript programming, Object-Oriented Programming concepts

---

## Course Overview

This comprehensive three-semester program transforms students from beginners to professional Flutter developers. Students will master cross-platform mobile application development, building production-ready apps with modern state management, backend integration, and emerging technologies including AI and machine learning.

### Program Learning Outcomes

Upon completion of this three-semester program, students will be able to:

1. Design and develop cross-platform mobile applications using Flutter framework
2. Implement responsive, accessible, and visually appealing user interfaces
3. Apply state management patterns using Provider and Riverpod
4. Integrate backend services, APIs, authentication, and real-time databases
5. Incorporate location services and mapping functionality into applications
6. Implement machine learning and AI features in mobile applications
7. Apply clean architecture and design patterns for scalable applications
8. Utilize version control, testing frameworks, and CI/CD pipelines
9. Deploy production-ready applications to app stores
10. Collaborate effectively in development teams using industry-standard workflows

---

## SEMESTER 1: Foundations - UI/UX, Local State & Best Practices

**Focus:** Building beautiful, responsive UIs with solid architecture and testing fundamentals

### Week 1-3: Flutter Fundamentals

**Topics:**
- Course overview and Flutter ecosystem introduction
- Development environment setup (Flutter SDK, Android Studio/VS Code, emulators)
- Dart language fundamentals (leveraging JavaScript knowledge)
  - Variables, data types, null safety
  - Functions and arrow syntax
  - Asynchronous programming (async/await, Futures, Streams)
  - Collections (List, Set, Map)
- Widget tree concepts and composition
- Stateless vs Stateful widgets
- Hot reload and hot restart workflow
- Debugging tools and techniques

**Lab Project:**  
Build a profile card application with custom widgets demonstrating proper widget composition and Dart fundamentals

**Git Skills:**  
- Repository initialization
- Basic commits and commit messages
- .gitignore configuration for Flutter projects

**Learning Outcomes:**
- Set up a complete Flutter development environment
- Write clean Dart code following best practices
- Create basic Flutter widgets and understand the widget lifecycle
- Use debugging tools effectively

---

### Week 4-6: Layout & Responsive Design

**Topics:**
- Core layout widgets
  - Column, Row, Stack, Expanded, Flexible
  - Container, Padding, Margin, SizedBox
  - Align, Center, Positioned
- Flutter's constraint system ("Constraints go down, sizes go up, parent sets position")
- Responsive design principles
  - MediaQuery for screen dimensions
  - LayoutBuilder for adaptive layouts
  - AspectRatio and FractionallySizedBox
- Building adaptive UIs for different screen sizes (phones, tablets)
- Orientation handling
- Safe areas and platform-specific considerations

**Lab Project:**  
Responsive dashboard application that adapts to different screen sizes and orientations, featuring complex layouts with nested widgets

**Git Skills:**  
- Branching basics
- Creating feature branches
- Branch naming conventions

**Learning Outcomes:**
- Master Flutter's layout system and constraints
- Build responsive applications that work across devices
- Apply proper spacing and alignment principles
- Handle different screen orientations gracefully

---

### Week 7-9: Advanced UI Components

**Topics:**
- Scrollable widgets
  - ListView and ListView.builder
  - GridView and GridView.builder
  - CustomScrollView and Slivers
  - SingleChildScrollView
- Navigation and routing
  - Navigator 1.0 basics
  - Navigator 2.0 (declarative routing)
  - Named routes
  - Passing data between screens
  - Navigation arguments
- Forms and user input
  - TextField and TextFormField
  - Form widget and validation
  - Focus management
  - Input formatters
- Animations
  - Implicit animations (AnimatedContainer, AnimatedOpacity)
  - Explicit animations with AnimationController
  - Hero animations
  - Custom transitions

**Lab Project:**  
Multi-screen shopping application UI with smooth animations, form validation, and complex navigation patterns

**Git Skills:**  
- Handling merge conflicts
- Pull request workflow
- Code review basics

**Learning Outcomes:**
- Implement complex scrollable interfaces efficiently
- Create multi-screen applications with proper navigation
- Build forms with comprehensive validation
- Add engaging animations to enhance user experience

---

### Week 10-12: State Management - Provider

**Topics:**
- State management fundamentals
  - Ephemeral vs app state
  - Lifting state up
  - When to use which state solution
- Provider package introduction
  - ChangeNotifier pattern
  - Provider types (Provider, ChangeNotifierProvider, FutureProvider, StreamProvider)
  - Consumer widget
  - Provider.of vs context.watch/read
- Separation of concerns
  - Business logic vs UI logic
  - Model classes
  - State classes with ChangeNotifier
- Best practices for state management

**Lab Project:**  
Todo application with full CRUD operations (Create, Read, Update, Delete) using Provider for state management with in-memory data storage

**Individual Project:**  
Students begin planning their semester project:
- Project proposal
- Feature list and requirements
- Wireframes and mockups
- Git repository setup

**Learning Outcomes:**
- Understand different types of state in applications
- Implement state management using Provider
- Separate business logic from UI components
- Build interactive applications with complex state

---

### Week 13-15: Introduction to Riverpod & Testing

**Topics:**
- Why Riverpod? Advantages over Provider
  - Compile-time safety
  - Better testability
  - No context dependency
  - Better error handling
- Riverpod fundamentals
  - Provider types (Provider, StateProvider, StateNotifierProvider, FutureProvider, StreamProvider)
  - ConsumerWidget and ConsumerStatefulWidget
  - Reading providers (ref.watch, ref.read, ref.listen)
  - Provider modifiers (.family, .autoDispose)
- Dependency injection with Riverpod
- Unit testing fundamentals
  - Writing testable code
  - Test structure (Arrange, Act, Assert)
  - Testing state management logic
  - Mocking dependencies
- Widget testing
  - Testing UI components
  - Finding widgets in tests
  - Simulating user interactions
  - Verification of widget states

**Lab Project:**  
Convert the Todo app from Provider to Riverpod with comprehensive unit and widget tests

**Learning Outcomes:**
- Understand Riverpod's architecture and benefits
- Migrate applications from Provider to Riverpod
- Write unit tests for business logic
- Write widget tests for UI components
- Implement testable architecture patterns

---

### Week 16-18: Project Completion & Code Quality

**Topics:**
- Code organization best practices
  - Feature-based folder structure
  - Separation of concerns
  - File naming conventions
- Common Flutter pitfalls and solutions
  - Memory leaks
  - Unnecessary rebuilds
  - Performance optimization
- Code documentation
  - Inline comments
  - Documentation comments
  - README files
- Project presentation skills

**Individual Project Requirements:**
- Complete functional application using Riverpod
- Minimum 3-5 screens with navigation
- Form validation and user input handling
- Responsive design across devices
- Unit tests for business logic (minimum 70% coverage)
- Widget tests for critical UI components
- Well-organized Git history with meaningful commits
- Comprehensive README with setup instructions

**Assessment Criteria:**
- Code quality and organization (25%)
- UI/UX design and responsiveness (25%)
- State management implementation (20%)
- Test coverage and quality (15%)
- Git workflow and documentation (15%)

**Learning Outcomes:**
- Structure a complete Flutter application professionally
- Apply code quality and performance best practices
- Document code effectively for maintainability
- Present technical work professionally

---

## SEMESTER 2: Backend Integration & Real-World Features

**Focus:** APIs, authentication, databases, and location services

### Week 1-3: HTTP & REST APIs

**Topics:**
- HTTP fundamentals
  - Request methods (GET, POST, PUT, DELETE, PATCH)
  - Headers and authentication
  - Status codes
  - Request/response lifecycle
- REST API principles
  - Resource-based URLs
  - Stateless communication
  - Best practices
- JSON serialization and deserialization
  - Manual parsing
  - json_serializable package
  - Type-safe models
- HTTP packages in Flutter
  - http package basics
  - dio package for advanced features
  - Error handling and retries
  - Interceptors
- Freezed package
  - Immutable models
  - Union types
  - Copy with functionality
- API state management with Riverpod
  - AsyncValue for loading states
  - FutureProvider and StreamProvider
  - Error handling patterns
  - Refresh and invalidate

**Lab Project:**  
Weather application consuming a public weather API with proper error handling, loading states, and data caching

**Git Skills:**  
- Environment variables and secrets management
- .env files
- Keeping API keys secure

**Learning Outcomes:**
- Consume RESTful APIs from Flutter applications
- Handle asynchronous data fetching and errors
- Create type-safe data models
- Manage API state effectively with Riverpod

---

### Week 4-6: Supabase Fundamentals

**Topics:**
- Supabase overview and setup
  - PostgreSQL database in the cloud
  - Real-time subscriptions
  - Built-in authentication
  - Storage capabilities
- Supabase project configuration
  - Creating projects
  - API keys and security
  - Database schema design
- Database operations with Supabase client
  - CRUD operations (Create, Read, Update, Delete)
  - Querying with filters
  - Sorting and pagination
  - Relationships and joins
- Row Level Security (RLS)
  - RLS policies
  - Securing data access
  - User-based filtering
- Supabase integration with Riverpod

**Lab Project:**  
Notes application with full CRUD operations using Supabase as the backend, implementing proper data models and error handling

**Learning Outcomes:**
- Set up and configure Supabase projects
- Design database schemas for mobile applications
- Implement CRUD operations with Supabase
- Secure data with Row Level Security policies

---

### Week 7-9: Authentication & Authorization

**Topics:**
- Authentication fundamentals
  - Authentication vs authorization
  - Session management
  - Token-based auth
- Supabase Auth implementation
  - Email/password authentication
  - Magic link authentication
  - OAuth providers (Google, Apple, GitHub)
  - Password reset flows
- Managing authentication state with Riverpod
  - Auth state providers
  - Persisting auth state
  - Automatic token refresh
- Protected routes and navigation guards
  - Route guards based on auth state
  - Redirect logic
  - Deep linking with auth
- User profiles and metadata
  - Profile management
  - User data storage
  - Profile updates

**Lab Project:**  
Add complete authentication system to the notes app with user-specific data, profile management, and OAuth integration

**Learning Outcomes:**
- Implement various authentication methods
- Manage authentication state across the application
- Secure routes based on authentication status
- Handle user profiles and metadata

---

### Week 10-12: Storage & Advanced Database Features

**Topics:**
- Supabase Storage
  - Bucket configuration
  - File uploads and downloads
  - Image optimization
  - Public vs private files
  - Signed URLs
- Image handling in Flutter
  - Image picker
  - Camera integration
  - Image cropping and editing
  - Caching strategies
- Advanced database concepts
  - One-to-many relationships
  - Many-to-many relationships
  - Foreign keys and constraints
  - Complex queries with joins
  - Aggregations and grouping
- Real-time subscriptions
  - Listening to database changes
  - Real-time updates in UI
  - Managing subscriptions
  - Conflict resolution
- Offline-first strategies
  - Local caching with shared_preferences
  - Hive or SQLite for local storage
  - Sync strategies
  - Handling network connectivity

**Lab Project:**  
Social feed application with image uploads, user profiles, likes, comments, and real-time updates

**Learning Outcomes:**
- Implement file storage and image handling
- Design complex database relationships
- Build real-time collaborative features
- Implement offline-first architecture

---

### Week 13-15: Mapbox Integration

**Topics:**
- Mapbox setup and configuration
  - API keys and access tokens
  - Map styles and customization
  - Mapbox Studio basics
- Flutter map packages
  - flutter_map package
  - mapbox_gl package comparison
  - Choosing the right package
- Displaying maps
  - Map initialization
  - Camera controls
  - Zoom and pan gestures
  - Map interactions
- Markers and annotations
  - Custom markers
  - Marker clustering
  - Info windows
  - Marker animations
- Geolocation services
  - Getting user location
  - Location permissions
  - Continuous location tracking
  - Background location
- Geocoding
  - Address to coordinates
  - Coordinates to address
  - Place search and autocomplete
- Routes and directions
  - Drawing polylines
  - Navigation routes
  - Distance calculations
  - Multi-point routes

**Lab Project:**  
Location-based application (restaurant finder, delivery tracker, or event locator) with user location, markers, search, and routing

**Learning Outcomes:**
- Integrate Mapbox into Flutter applications
- Implement location services and permissions
- Display and customize maps with markers
- Calculate routes and distances
- Build location-based features

---

### Week 16-18: Group Project

**Project Requirements:**
Full-stack mobile application integrating:
- Supabase backend (authentication, database, storage)
- Mapbox integration with location features
- Real-time functionality
- Minimum 5-8 screens
- Complex data relationships
- Image upload and management
- Proper error handling and loading states
- Unit and widget tests
- Group Git workflow (branches, PRs, code reviews)

**Suggested Project Ideas:**
- Food delivery application
- Event discovery and management platform
- Ride-sharing or carpooling application
- Real estate finder with map view
- Task marketplace with location-based jobs

**Assessment Criteria:**
- Functionality and feature completeness (30%)
- Code quality and architecture (20%)
- UI/UX design (15%)
- Backend integration (15%)
- Teamwork and Git workflow (10%)
- Testing coverage (10%)

**Deliverables:**
- Working application
- Group presentation
- Technical documentation
- User guide
- Git repository with clean history

**Learning Outcomes:**
- Build complex full-stack applications
- Collaborate effectively in development teams
- Integrate multiple services and APIs
- Deliver production-quality code

---

## SEMESTER 3: Advanced Topics & Production-Ready Apps

**Focus:** ML/AI, architecture patterns, CI/CD, and deployment

### Week 1-3: Design Patterns & Clean Architecture

**Topics:**
- Software design principles
  - SOLID principles
  - DRY, KISS, YAGNI
  - Separation of concerns
- Clean Architecture overview
  - Layers: Presentation, Domain, Data
  - Dependency rule
  - Benefits and trade-offs
- Repository pattern
  - Abstracting data sources
  - Repository interfaces
  - Implementation classes
- Use cases (Interactors)
  - Business logic isolation
  - Single responsibility
  - Testable business rules
- Dependency injection at scale
  - Riverpod for DI
  - Provider organization
  - Testing with DI
- Project structure for large apps
  - Feature-based organization
  - Layer separation
  - File and folder conventions

**Lab Project:**  
Refactor a previous semester project to Clean Architecture, implementing proper layers, repositories, and use cases

**Learning Outcomes:**
- Apply SOLID principles to Flutter development
- Implement Clean Architecture in Flutter apps
- Separate business logic from presentation logic
- Build highly testable and maintainable code

---

### Week 4-6: Machine Learning - Image Recognition

**Topics:**
- Machine learning fundamentals
  - ML basics and terminology
  - Types of ML (supervised, unsupervised, reinforcement)
  - Neural networks overview
- TensorFlow Lite in Flutter
  - tflite_flutter package setup
  - Loading pre-trained models
  - Model optimization for mobile
- Pre-trained models
  - MobileNet for classification
  - YOLO for object detection
  - Model selection criteria
- Image classification
  - Using ImageNet models
  - Confidence scores
  - Multi-class classification
- Object detection
  - Bounding boxes
  - Real-time detection
  - Performance optimization
- Camera integration
  - CameraController
  - Real-time processing
  - Frame rate optimization
  - Image picker integration

**Lab Project:**  
Plant identifier or document scanner application using TensorFlow Lite with real-time camera detection or image upload

**Learning Outcomes:**
- Integrate TensorFlow Lite models into Flutter
- Implement image classification features
- Build object detection functionality
- Optimize ML performance on mobile devices

---

### Week 7-9: Machine Learning - Text & Custom Models

**Topics:**
- Google ML Kit integration
  - ML Kit overview
  - On-device vs cloud processing
  - Package setup
- Text recognition (OCR)
  - Text detection in images
  - Document scanning
  - Text block extraction
  - Language detection
- Barcode scanning
  - QR codes and barcodes
  - Format detection
  - Real-time scanning
- Language features
  - Language identification
  - Translation
  - Smart replies
- Sentiment analysis
  - Text sentiment detection
  - Entity extraction
  - Use cases
- Custom model training (introduction)
  - Teachable Machine
  - Model export
  - Integration process
- Data preprocessing and augmentation

**Lab Project:**  
Receipt scanner application with OCR for text extraction, data parsing, and structured information display

**Learning Outcomes:**
- Implement Google ML Kit features
- Build OCR functionality for documents
- Process and parse extracted text
- Create custom ML models for specific use cases

---

### Week 10-12: AI Integration - LLMs & Generative AI

**Topics:**
- Large Language Models (LLMs)
  - GPT models overview
  - API-based vs on-device
  - Use cases for mobile apps
- OpenAI API integration
  - API setup and authentication
  - Chat completions API
  - Streaming responses
  - Managing tokens and costs
- Building chat interfaces
  - Message UI patterns
  - Conversation history
  - Markdown rendering
  - Code syntax highlighting
- Prompt engineering
  - Effective prompt design
  - System prompts
  - Context management
  - Few-shot learning
- AI-powered features
  - Chatbots and virtual assistants
  - Content generation
  - Summarization
  - Code generation
  - Recommendation systems
- Image generation
  - DALL-E API integration
  - Stable Diffusion alternatives
  - Image prompts
  - Managing generated content
- Alternative AI services
  - Anthropic Claude
  - Google Gemini
  - Local LLMs (llama.cpp)

**Lab Project:**  
AI study assistant or recipe generator with chat interface, context management, and content generation features

**Learning Outcomes:**
- Integrate LLM APIs into mobile applications
- Build conversational AI interfaces
- Apply prompt engineering techniques
- Implement generative AI features responsibly

---

### Week 13-15: DevOps & Deployment

**Topics:**
- CI/CD fundamentals
  - Continuous Integration concepts
  - Continuous Deployment concepts
  - Benefits for mobile development
- GitHub Actions for Flutter
  - Workflow configuration
  - Build automation
  - Testing automation
  - Matrix builds for platforms
- Automated testing in pipelines
  - Running unit tests
  - Widget tests in CI
  - Integration tests
  - Test coverage reports
- Code quality tools
  - Linting with flutter_analyze
  - Code formatting
  - Static analysis
  - Code coverage thresholds
- App signing and certificates
  - Android keystore creation
  - iOS certificates and provisioning
  - Managing signing keys securely
- App Store deployment
  - Google Play Console setup
  - Internal testing tracks
  - Beta testing
  - Production release
- iOS App Store deployment
  - App Store Connect
  - TestFlight
  - App review guidelines
  - Release management
- Fastlane automation
  - Fastlane setup for Flutter
  - Screenshot automation
  - Metadata management
  - Automated submissions
- Monitoring and analytics
  - Firebase Crashlytics
  - Firebase Analytics
  - Custom event tracking
  - Error reporting
- App versioning
  - Semantic versioning
  - Build numbers
  - Version management
  - Release notes

**Lab Project:**  
Set up complete CI/CD pipeline for a previous project including automated testing, building, and deployment to internal testing

**Learning Outcomes:**
- Configure CI/CD pipelines for Flutter apps
- Automate testing and deployment processes
- Handle app signing for both platforms
- Deploy applications to app stores
- Monitor application health and usage

---

### Week 16-18: Capstone Project

**Project Overview:**  
Students work in groups to build a comprehensive, production-ready mobile application that demonstrates mastery of all three semesters' learning outcomes.

**Mandatory Requirements:**
- Clean Architecture implementation
- Supabase backend with authentication
- At least one ML/AI feature (image recognition, text processing, or LLM integration)
- Professional UI/UX design
- Comprehensive testing (unit, widget, integration)
- CI/CD pipeline configured
- Documentation (technical and user-facing)
- App store ready (metadata, screenshots, description)

**Optional Enhancements:**
- Mapbox integration for location features
- Push notifications
- Payment integration
- Multiple authentication providers
- Advanced AI features
- Accessibility features
- Internationalization

**Suggested Project Ideas:**
- AI-powered study planner with personalized recommendations
- Health diagnosis assistant with symptom checking and ML
- Smart inventory management system with image recognition
- Personalized news aggregator with AI summarization
- Real estate app with virtual staging using AI
- Fitness coach with form detection using ML
- Recipe app with ingredient recognition and AI meal planning
- Language learning app with speech recognition and AI conversation

**Project Phases:**

**Phase 1 (Weeks 16-17): Planning & Setup**
- Project proposal and requirements
- Architecture design
- Database schema design
- UI/UX mockups
- Task distribution
- Repository setup
- CI/CD pipeline configuration

**Phase 2 (Week 17-18): Development Sprint 1**
- Core features implementation
- Backend integration
- Basic UI development
- Initial testing

**Phase 3 (Week 18): Development Sprint 2**
- ML/AI features integration
- Advanced features
- UI polish
- Comprehensive testing

**Phase 4 (Week 18): Finalization**
- Bug fixes
- Performance optimization
- Documentation completion
- App store preparation
- Presentation rehearsal

**Deliverables:**
1. **Working Application**
   - Deployed to internal testing track
   - Fully functional on iOS and Android
   - Stable and bug-free

2. **Codebase**
   - Clean, well-organized code
   - Comprehensive comments
   - Git repository with proper history
   - Passing CI/CD pipeline

3. **Technical Documentation**
   - Architecture diagrams
   - API documentation
   - Database schema
   - Setup instructions
   - Deployment guide

4. **User Documentation**
   - User guide
   - Feature explanations
   - Troubleshooting guide

5. **Presentation Materials**
   - Slide deck
   - Live demo
   - Video demo (3-5 minutes)
   - Technical walkthrough

6. **App Store Assets**
   - App icon
   - Screenshots
   - App description
   - Feature graphics
   - Privacy policy

**Assessment Criteria:**
- **Technical Implementation (40%)**
  - Architecture quality
  - Code quality and organization
  - Feature completeness
  - ML/AI integration
  - Backend integration
  
- **Testing & DevOps (15%)**
  - Test coverage
  - CI/CD implementation
  - Build automation
  
- **UI/UX Design (15%)**
  - Visual design quality
  - User experience
  - Responsiveness
  - Accessibility
  
- **Documentation (10%)**
  - Technical documentation
  - User documentation
  - Code documentation
  
- **Presentation (10%)**
  - Demo quality
  - Technical explanation
  - Team coordination
  
- **Teamwork (10%)**
  - Git workflow
  - Task distribution
  - Collaboration
  - Code reviews

**Learning Outcomes:**
- Deliver production-ready mobile applications
- Work effectively in professional development teams
- Integrate multiple advanced technologies
- Document and present technical work professionally
- Understand the complete app development lifecycle

---

## Assessment Overview

### Semester 1

| Component | Weight | Description |
|-----------|--------|-------------|
| Weekly Labs | 20% | Hands-on coding exercises and mini-projects |
| Quizzes/Practical Exams | 15% | Technical knowledge and coding assessments |
| Individual Project | 40% | Complete Flutter app with Riverpod and tests |
| Code Reviews & Git | 10% | Git workflow and code quality |
| Final Exam | 15% | Comprehensive written and practical exam |

### Semester 2

| Component | Weight | Description |
|-----------|--------|-------------|
| Weekly Labs | 20% | Backend integration exercises |
| Quizzes/Practical Exams | 15% | API, database, and authentication assessments |
| Group Project | 40% | Full-stack app with Supabase and Mapbox |
| Code Reviews & Git | 10% | Collaborative workflow and code quality |
| Final Exam | 15% | Backend integration and services exam |

### Semester 3

| Component | Weight | Description |
|-----------|--------|-------------|
| Weekly Labs | 15% | Advanced topics exercises |
| Quizzes/Practical Exams | 10% | ML/AI and architecture assessments |
| Capstone Project | 50% | Production-ready app with advanced features |
| Technical Documentation | 10% | Project documentation quality |
| Final Presentation | 15% | Demo and technical presentation |

---

## Required Tools & Software

### Development Environment
- **Flutter SDK** (latest stable version)
- **Dart SDK** (bundled with Flutter)
- **IDE**: Android Studio or Visual Studio Code
- **Android Emulator** or physical Android device
- **Xcode** (Mac users for iOS development)
- **Git** version control

### Accounts & Services
- **GitHub** account (for version control and CI/CD)
- **Supabase** account (free tier)
- **Mapbox** account (free tier)
- **Firebase** account (free tier - Semester 3)
- **OpenAI API** credits (class resource - Semester 3)

### Packages & Dependencies

**Core Packages:**
- flutter_riverpod / riverpod
- freezed / freezed_annotation
- json_serializable / json_annotation
- dio (HTTP client)
- go_router (navigation)

**Supabase & Backend:**
- supabase_flutter
- shared_preferences
- hive / hive_flutter (local storage)

**UI/UX:**
- google_fonts
- flutter_svg
- cached_network_image
- shimmer (loading states)

**Maps & Location:**
- flutter_map / mapbox_gl
- geolocator
- geocoding
- location

**ML/AI:**
- tflite_flutter
- google_ml_kit
- camera
- image_picker

**Testing:**
- flutter_test
- mockito
- integration_test

**DevOps:**
- Very_good_analysis (linting)
- build_runner
- flutter_launcher_icons

---

## Grading Scale

| Grade | Percentage | Description |
|-------|------------|-------------|
| A | 90-100% | Excellent - Exceeds expectations |
| B | 80-89% | Very Good - Meets all requirements |
| C | 70-79% | Good - Meets most requirements |
| D | 60-69% | Satisfactory - Meets minimum requirements |
| F | Below 60% | Failing - Does not meet requirements |

---

## Academic Integrity

Students are expected to:
- Submit original work
- Properly attribute code from external sources
- Collaborate ethically in group projects
- Follow licensing requirements for packages and assets
- Use AI coding assistants responsibly (as learning aids, not replacements)

Violations of academic integrity will result in disciplinary action according to institutional policies.

---

## Resources & References

### Official Documentation
- [Flutter Documentation](https://flutter.dev/docs)
- [Dart Language Tour](https://dart.dev/guides/language/language-tour)
- [Riverpod Documentation](https://riverpod.dev)
- [Supabase Documentation](https://supabase.io/docs)
- [Mapbox Documentation](https://docs.mapbox.com)

### Learning Resources
- [Flutter YouTube Channel](https://www.youtube.com/c/flutterdev)
- [Reso Coder Flutter Tutorials](https://resocoder.com)
- [FilledStacks Flutter Architecture](https://www.filledstacks.com)
- [Flutter Community Medium](https://medium.com/flutter-community)

### Community
- [Flutter Discord](https://discord.gg/flutter)
- [r/FlutterDev Reddit](https://www.reddit.com/r/FlutterDev)
- [Flutter GitHub Discussions](https://github.com/flutter/flutter/discussions)
- [Stack Overflow - Flutter Tag](https://stackoverflow.com/questions/tagged/flutter)

---

## Instructor Information

**Instructor:** [Your Name]  
**Email:** [Your Email]  
**Office Hours:** [Your Schedule]  
**Consultation:** Available for technical questions during lab hours and by appointment

---

## Course Policies

### Attendance
- Regular attendance is mandatory for lab sessions
- Students are responsible for material covered during absences
- Excessive absences may result in grade penalties

### Late Submissions
- Labs: Accepted up to 1 week late with 10% penalty per day
- Projects: 20% penalty per day late, not accepted after 3 days
- Exams: No makeup exams without documented emergency

### Collaboration Policy
- Labs: Individual work required unless specified
- Group Projects: All team members must contribute equally
- Code sharing: Reference existing code properly with attribution

### Technology Requirements
- Students must have access to a computer capable of running Flutter
- Recommended: 8GB+ RAM, SSD storage
- Physical mobile device recommended but not required (emulators available)

---

## Course Schedule Notes

- Week counts are approximate and may be adjusted based on semester length
- Public holidays and institutional events may affect the schedule
- Project demonstrations may require extended lab sessions
- Guest speakers from industry may be invited for special sessions

---

## Revisions

This syllabus is subject to revision as needed. Students will be notified of any significant changes via official communication channels.

**Last Updated:** November 2025
**Version:** 1.0

---

*This syllabus represents a comprehensive plan for a 3-semester Flutter Mobile Applications Development course. It is designed to take students from foundational concepts to production-ready professional development capabilities.*