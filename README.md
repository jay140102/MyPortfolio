# MyPortfolio - Mobile Developer Portfolio

A modern, cross-platform portfolio application built with React Native and Expo, showcasing mobile development projects, work experience, and professional achievements. The app runs seamlessly on iOS, Android, and Web platforms.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and web viewing
- **Project Showcase**: Interactive gallery of mobile applications with detailed case studies
- **Work Experience Timeline**: Professional experience with company details and achievements
- **Education Section**: Academic background and qualifications
- **Smooth Animations**: Polished UI with animated sections and transitions
- **Media Gallery**: Support for images and videos in project presentations
- **Direct Contact**: Email integration and resume download functionality
- **Social Links**: GitHub and LinkedIn profile integration
- **Dark/Light Mode Support**: Automatic theme based on system preferences

## 🛠️ Tech Stack

- **Framework**: [Expo](https://expo.dev) ~54.0.33
- **Language**: TypeScript
- **UI Library**: React Native 0.81.5
- **Navigation**: Expo Router (file-based routing)
- **Animations**: React Native Reanimated
- **Icons**: Expo Vector Icons
- **Media**: Expo Image, Expo AV (for video playback)
- **Styling**: React Native StyleSheet with custom design system

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher ([Download](https://nodejs.org/))
- **npm** or **pnpm**: Package manager (comes with Node.js)
- **Git**: For version control ([Download](https://git-scm.com/))

### Platform-Specific Requirements

#### For iOS Development:
- **macOS**: Required for iOS development
- **Xcode**: Latest version from the Mac App Store
- **Xcode Command Line Tools**: Install via `xcode-select --install`
- **CocoaPods**: Install via `sudo gem install cocoapods`
- **iOS Simulator**: Included with Xcode

#### For Android Development:
- **Android Studio**: [Download](https://developer.android.com/studio)
- **Android SDK**: Installed via Android Studio
- **Android Emulator**: Set up via Android Studio AVD Manager

#### For Web Development:
- Any modern web browser (Chrome, Safari, Firefox, Edge)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/jay140102/MyPortfolio.git
cd MyPortfolio
```

### 2. Install Dependencies

```bash
npm install
```

Or if you're using pnpm:

```bash
pnpm install
```

### 3. Start the Development Server

```bash
npm start
```

This will start the Expo development server and display a QR code in your terminal.

## 📱 Running on Different Platforms

### iOS (Simulator)

> **📱 How to Open in iOS Simulator**
> 
> To run this app on the iOS Simulator, you need to have **Xcode installed** on your Mac. The iOS Simulator comes bundled with Xcode and allows you to test the app without a physical device.
> 
> **Complete Steps:**
> 1. **Install Xcode** from the Mac App Store (if not already installed)
> 2. **Open Xcode** at least once to complete the setup and accept the license agreement
> 3. **Install Command Line Tools** by running: `xcode-select --install` in Terminal
> 4. **Choose one of the methods below** to launch the app in the simulator
> 
> The simulator will automatically open and install the app. You'll see the app running just like it would on a real iPhone!

#### Option 1: Using Expo CLI (Recommended)

```bash
npm run ios
```

This command will:
- Start the Metro bundler
- Build the app
- Launch the iOS Simulator automatically
- Install and run the app

#### Option 2: Manual Launch

1. Start the development server:
   ```bash
   npm start
   ```

2. Press `i` in the terminal to open iOS Simulator

#### Option 3: Using Expo Go (Quick Testing)

1. Install [Expo Go](https://apps.apple.com/app/expo-go/id982107779) from the App Store on your iPhone
2. Start the development server:
   ```bash
   npm start
   ```
3. Scan the QR code with your iPhone camera
4. The app will open in Expo Go

#### Troubleshooting iOS:

- **Simulator not found**: Open Xcode → Preferences → Locations → ensure Command Line Tools is set
- **Build fails**: Try clearing cache with `npx expo start -c`
- **Module not found**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Android (Emulator)

```bash
npm run android
```

Or press `a` in the terminal after running `npm start`

### Web

```bash
npm run web
```

Or press `w` in the terminal after running `npm start`

The app will open in your default browser at `http://localhost:8081`

## 📁 Project Structure

```
MyPortfolio/
├── app/                      # Main application screens (Expo Router)
│   ├── index.tsx            # Home/Portfolio screen
│   ├── _layout.tsx          # Root layout
│   └── project/             # Project detail screens
│       └── [id].tsx         # Dynamic project detail page
├── assets/                   # Images, videos, and media files
│   ├── images/              # App icons, splash screens, profile photo
│   ├── easyr/               # Easyr project assets
│   ├── ifirst/              # IFirst project assets
│   ├── mario/               # Marios Towing project assets
│   ├── genyogi/             # GenyOgi project assets
│   └── yallah/              # Yallah Chiacka project assets
├── components/               # Reusable React components
│   ├── AnimatedSection.tsx  # Animated scroll sections
│   ├── Education.tsx        # Education timeline
│   ├── MediaGallery.tsx     # Image/video gallery
│   ├── PhoneMockup.tsx      # Mobile device mockup
│   ├── ProjectCard.tsx      # Project card component
│   ├── ProjectSection.tsx   # Project showcase section
│   └── WorkExperience.tsx   # Work experience timeline
├── constants/                # App-wide constants
│   ├── colors.ts            # Color palette
│   └── styles.ts            # Typography and spacing
├── data/                     # Static data
│   └── projectsData.ts      # Project information and metadata
├── types/                    # TypeScript type definitions
│   └── index.ts             # Shared types
├── app.json                  # Expo configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🎨 Customization

### Adding Your Own Projects

Edit `data/projectsData.ts` to add or modify projects:

```typescript
{
  id: 'your-project-id',
  title: 'Project Name',
  subtitle: 'Project Type',
  description: 'Short description',
  longDescription: 'Detailed description',
  technologies: ['Tech1', 'Tech2'],
  platform: 'iOS' | 'Android' | 'Cross-Platform',
  role: 'Your Role',
  duration: 'Time Period',
  features: ['Feature 1', 'Feature 2'],
  links: [{ type: 'appStore', url: '...', label: '...' }],
  assets: [{ type: 'image', path: require('...') }],
  thumbnail: require('...'),
  color: '#HEX',
  gradient: ['#HEX1', '#HEX2']
}
```

### Updating Personal Information

Edit `app/index.tsx` to update:
- Name and title
- Contact information (email, phone, location)
- Social media links
- Resume link

### Modifying Colors and Styles

- **Colors**: Edit `constants/colors.ts`
- **Typography & Spacing**: Edit `constants/styles.ts`

## 📦 Available Scripts

- `npm start` - Start the Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint for code quality
- `npm run predeploy` - Build web version for deployment
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

### Web Deployment (GitHub Pages)

The project is configured for GitHub Pages deployment:

```bash
npm run predeploy  # Build the web version
npm run deploy     # Deploy to GitHub Pages
```

The app will be available at: `https://yourusername.github.io/MyPortfolio`

### Mobile App Deployment

For iOS and Android app store deployment, refer to:
- [Expo Build Documentation](https://docs.expo.dev/build/introduction/)
- [iOS App Store Submission](https://docs.expo.dev/submit/ios/)
- [Android Play Store Submission](https://docs.expo.dev/submit/android/)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

**Jay Pratap Singh**
- 📧 Email: jpratap581@gmail.com
- 📱 Phone: +91 9316169871
- 📍 Location: Ahmedabad
- 💼 LinkedIn: [jay-pratap-singh](https://www.linkedin.com/in/jay-pratap-singh-08477a212)
- 🐙 GitHub: [@jay140102](https://github.com/jay140102)

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Icons by [Expo Vector Icons](https://icons.expo.fyi)
- Inspired by modern portfolio designs

---

**Built with ❤️ using React Native & Expo**
