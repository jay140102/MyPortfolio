export interface ProjectLink {
    type: 'github' | 'appStore' | 'playStore' | 'website' | 'download';
    url: string;
    label: string;
}

export interface ProjectAsset {
    type: 'image' | 'video';
    path: any; // Using any to support require() for React Native images
    thumbnail?: any;
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    technologies: string[];
    platform: 'iOS' | 'Android' | 'Cross-Platform';
    role: string;
    duration: string;
    features: string[];
    links: ProjectLink[];
    assets: ProjectAsset[];
    thumbnail: any; // Using any to support require() for React Native images
    color: string;
    gradient: string[];
}
