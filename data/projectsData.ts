import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'easyr',
        title: 'Easyr',
        subtitle: 'iOS Delivery Platform',
        description: 'A comprehensive iOS platform designed for multiple vendors with smooth user experience',
        longDescription: `Easyr is a sophisticated iOS delivery platform that I managed and led the development of. The application is designed to handle multiple vendors and provide a seamless experience for users ordering various services.

Key achievements include implementing MVVM and clean architecture to improve maintainability and delivery speed, utilizing localization techniques to support English, Danish, and Arabic languages, and incorporating a reward system to incentivize users.

The app features integrated maps for user navigation, enhanced user communication through push notification systems, and was built with a strong focus on performance and stability.`,
        technologies: ['Swift', 'UIKit', 'Apple Maps', 'Localization', 'Push Notifications', 'MVVM'],
        platform: 'iOS',
        role: 'iOS Developer',
        duration: 'Jan 2023 - Nov 2025',
        features: [
            'Multi-vendor platform support',
            'MVVM and clean architecture implementation',
            'Multi-language support (English, Danish, Arabic)',
            'QR verification system for security',
            'Reward system for user incentivization',
            'Integrated maps for navigation',
            'Push notification system',
        ],
        links: [
            {
                type: 'appStore',
                url: 'https://apps.apple.com/in/app/easyr-catch/id6504001247',
                label: 'View on App Store',
            },
            // Add GitHub link when available
            // {
            //   type: 'github',
            //   url: 'YOUR_GITHUB_URL',
            //   label: 'View Source Code',
            // },
        ],
        assets: [
            {
                type: 'image',
                path: require('../assets/easyr/screenshot1.png'),
            },
        ],
        thumbnail: require('../assets/easyr/screenshot1.png'),
        color: '#6366F1',
        gradient: ['#6366F1', '#8B5CF6'],
    },
    {
        id: 'ifirst',
        title: 'IFirst',
        subtitle: 'React Native Application',
        description: 'Cross-platform mobile application built with React Native',
        longDescription: `IFirst is a cross-platform mobile application developed using React Native, showcasing modern mobile development practices and smooth user experiences across both iOS and Android platforms.

The application demonstrates proficiency in React Native development, state management, and creating responsive user interfaces that work seamlessly on multiple devices.`,
        technologies: ['React Native', 'JavaScript', 'Cross-Platform'],
        platform: 'Cross-Platform',
        role: 'React Native Developer',
        duration: '2024',
        features: [
            'Cross-platform compatibility (iOS & Android)',
            'Modern React Native architecture',
            'Responsive UI design',
            'Smooth animations and transitions',
        ],
        links: [
            {
                type: 'github',
                url: 'https://github.com/jay140102/DemoPortfolio',
                label: 'View Source Code',
            },
        ],
        assets: [
            {
                type: 'image',
                path: require('../assets/ifirst/Screenshot_2026-01-31-01-20-31-41_f73b71075b1de7323614b647fe394240.jpg'),
            },
            {
                type: 'image',
                path: require('../assets/ifirst/Screenshot_2026-01-31-01-21-00-17_f73b71075b1de7323614b647fe394240.jpg'),
            },
            {
                type: 'image',
                path: require('../assets/ifirst/Screenshot_2026-01-31-01-21-18-09_f73b71075b1de7323614b647fe394240.jpg'),
            },
            {
                type: 'image',
                path: require('../assets/ifirst/Screenshot_2026-01-31-01-21-37-17_f73b71075b1de7323614b647fe394240.jpg'),
            },
            {
                type: 'image',
                path: require('../assets/ifirst/Screenshot_2026-01-31-01-22-00-15_f73b71075b1de7323614b647fe394240.jpg'),
            },
            {
                type: 'image',
                path: require('../assets/ifirst/Screenshot_2026-01-31-01-22-19-42_f73b71075b1de7323614b647fe394240.jpg'),
            },
            {
                type: 'video',
                path: require('../assets/ifirst/Record_2026-01-31-01-55-24_f73b71075b1de7323614b647fe394240.mp4'),
                thumbnail: require('../assets/ifirst/Screenshot_2026-01-31-01-20-31-41_f73b71075b1de7323614b647fe394240.jpg'),
            },
            {
                type: 'video',
                path: require('../assets/ifirst/Record_2026-01-31-01-56-32_f73b71075b1de7323614b647fe394240.mp4'),
                thumbnail: require('../assets/ifirst/Screenshot_2026-01-31-01-21-00-17_f73b71075b1de7323614b647fe394240.jpg'),
            },
        ],
        thumbnail: require('../assets/ifirst/Screenshot_2026-01-31-01-20-31-41_f73b71075b1de7323614b647fe394240.jpg'),
        color: '#EC4899',
        gradient: ['#EC4899', '#F43F5E'],
    },
    {
        id: 'mario',
        title: 'Marios Towing',
        subtitle: 'iOS Driver Application',
        description: 'Driver-focused iOS application for towing services with optimized payment and navigation',
        longDescription: `Marios Towing is an iOS application specifically designed for towing service drivers. The app focuses on improving driver efficiency and compensation through innovative features.

Key implementations include a driver tipping feature for improved driver compensation and incentives, a streamlined payout process for efficient and timely payment, and graphics optimization techniques to enhance map path rendering for smoother navigation experience.

The application demonstrates expertise in Swift development, UIKit, and Apple Maps integration.`,
        technologies: ['Swift', 'UIKit', 'Apple Maps', 'Graphics Optimization'],
        platform: 'iOS',
        role: 'iOS Developer',
        duration: '2024',
        features: [
            'Driver tipping system for improved compensation',
            'Streamlined payout process',
            'Optimized map path rendering',
            'Smooth navigation experience',
            'Real-time location tracking',
        ],
        links: [
            {
                type: 'appStore',
                url: 'https://apps.apple.com/in/app/marios-towing-customer-app/id6477570869',
                label: 'View on App Store',
            },
        ],
        assets: [
            {
                type: 'image',
                path: require('../assets/mario/screenshot1.png'),
            },
        ],
        thumbnail: require('../assets/mario/screenshot1.png'),
        color: '#F97316',
        gradient: ['#F97316', '#FB923C'],
    },
    {
        id: 'genyogi',
        title: 'GenyOgi',
        subtitle: 'Flutter Application',
        description: 'Cross-platform application built with Flutter',
        longDescription: `GenyOgi is a cross-platform mobile application developed using Flutter, demonstrating proficiency in modern mobile development frameworks and creating beautiful, performant user interfaces.

The application showcases expertise in Flutter development, state management, and creating responsive designs that work seamlessly across iOS and Android platforms.`,
        technologies: ['Flutter', 'Dart', 'Cross-Platform'],
        platform: 'Cross-Platform',
        role: 'Flutter Developer',
        duration: '2024',
        features: [
            'Cross-platform compatibility (iOS & Android)',
            'Modern Flutter architecture',
            'Responsive UI design',
            'Smooth animations and transitions',
        ],
        links: [
            {
                type: 'download',
                url: 'https://www.mediafire.com/file/b19kza7kq8tp7wk/zenyogi.apk/file',
                label: 'Download APK',
            },
        ],
        assets: [
            {
                type: 'image',
                path: require('../assets/genyogi/Screenshot_2026-02-02-02-00-02-68_06a01bd059a4d50fb19df68aa1384fbc.jpg'),
            },
            {
                type: 'image',
                path: require('../assets/genyogi/Screenshot_2026-02-02-02-00-41-69_06a01bd059a4d50fb19df68aa1384fbc.jpg'),
            },
            {
                type: 'image',
                path: require('../assets/genyogi/Screenshot_2026-02-02-02-00-47-00_06a01bd059a4d50fb19df68aa1384fbc.jpg'),
            },
            {
                type: 'image',
                path: require('../assets/genyogi/Screenshot_2026-02-02-02-00-55-24_06a01bd059a4d50fb19df68aa1384fbc.jpg'),
            },
            {
                type: 'image',
                path: require('../assets/genyogi/Screenshot_2026-02-02-02-01-05-26_06a01bd059a4d50fb19df68aa1384fbc.jpg'),
            },
        ],
        thumbnail: require('../assets/genyogi/Screenshot_2026-02-02-02-00-02-68_06a01bd059a4d50fb19df68aa1384fbc.jpg'),
        color: '#10B981',
        gradient: ['#10B981', '#14B8A6'],
    },
    {
        id: 'yallah-chiacka',
        title: 'Yallah Chiacka',
        subtitle: 'iOS Luxury MVP',
        description: 'Managed 4 iOS developers and delivered a luxury MVP in just 7 days',
        longDescription: `Yallah Chiacka was a high-pressure project where I managed a team of 4 iOS developers to deliver a luxury MVP application in an incredibly tight timeline of just 7 days.

This project showcased exceptional project management, team coordination, and rapid development capabilities. Despite the compressed timeline, we maintained high code quality and delivered a polished product that met all client requirements.

Key achievements include defining architecture and coding standards for the project, ensuring the team delivered on time without compromising quality, and successfully managing the development process from concept to deployment.

The application was built using Swift and UIKit, demonstrating our team's proficiency in iOS development and ability to work under pressure while maintaining professional standards.`,
        technologies: ['Swift', 'UIKit', 'iOS Development', 'Team Management'],
        platform: 'iOS',
        role: 'iOS Developer & Team Lead',
        duration: '2024',
        features: [
            'Managed team of 4 iOS developers',
            'Delivered luxury MVP in 7 days',
            'Defined architecture and coding standards',
            'Ensured on-time delivery with high quality',
            'Rapid development without compromising standards',
        ],
        links: [
            // Add App Store link when available
            // {
            //   type: 'appStore',
            //   url: 'YOUR_APP_STORE_URL',
            //   label: 'View on App Store',
            // },
        ],
        assets: [
            {
                type: 'image',
                path: require('../assets/yallah/placeholder.png'),
            },
        ],
        thumbnail: require('../assets/yallah/placeholder.png'),
        color: '#A855F7',
        gradient: ['#A855F7', '#C084FC'],
    },
];
