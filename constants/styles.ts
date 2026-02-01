import { Colors } from './colors';

export const Typography = {
    h1: {
        fontSize: 56,
        fontWeight: '900' as const,
        lineHeight: 64,
        color: Colors.text,
    },
    h2: {
        fontSize: 40,
        fontWeight: '700' as const,
        lineHeight: 48,
        color: Colors.text,
    },
    h3: {
        fontSize: 32,
        fontWeight: '700' as const,
        lineHeight: 40,
        color: Colors.text,
    },
    h4: {
        fontSize: 24,
        fontWeight: '600' as const,
        lineHeight: 32,
        color: Colors.text,
    },
    h5: {
        fontSize: 20,
        fontWeight: '600' as const,
        lineHeight: 28,
        color: Colors.text,
    },
    body: {
        fontSize: 16,
        fontWeight: '400' as const,
        lineHeight: 24,
        color: Colors.textSecondary,
    },
    bodyLarge: {
        fontSize: 18,
        fontWeight: '400' as const,
        lineHeight: 28,
        color: Colors.textSecondary,
    },
    caption: {
        fontSize: 14,
        fontWeight: '500' as const,
        lineHeight: 20,
        color: Colors.textTertiary,
    },
};

export const CommonStyles = {
    card: {
        backgroundColor: Colors.background,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 3,
    },
    shadowLarge: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.1,
        shadowRadius: 40,
        elevation: 8,
    },
};

export const Spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
};

export const BorderRadius = {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
};

export const Shadows = {
    sm: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    md: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    lg: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        elevation: 8,
    },
    xl: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.25,
        shadowRadius: 24,
        elevation: 12,
    },
    colored: (color: string) => ({
        shadowColor: color,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    }),
};
