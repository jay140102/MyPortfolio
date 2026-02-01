import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import { BorderRadius, Spacing, Typography } from '../constants/styles';
import { ProjectLink } from '../types';

interface ProjectLinksProps {
    links: ProjectLink[];
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => {
    const getIcon = (type: ProjectLink['type']) => {
        switch (type) {
            case 'github':
                return 'logo-github';
            case 'appStore':
                return 'logo-apple';
            case 'playStore':
                return 'logo-google-playstore';
            case 'website':
                return 'globe-outline';
            case 'download':
                return 'download-outline';
            default:
                return 'link-outline';
        }
    };

    const handlePress = async (url: string) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        }
    };

    if (links.length === 0) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Links</Text>
            <View style={styles.linksContainer}>
                {links.map((link, index) => (
                    <Pressable
                        key={index}
                        style={styles.linkButton}
                        onPress={() => handlePress(link.url)}
                    >
                        <Ionicons
                            name={getIcon(link.type) as any}
                            size={24}
                            color={Colors.primary}
                        />
                        <Text style={styles.linkText}>{link.label}</Text>
                        <Ionicons
                            name="chevron-forward"
                            size={20}
                            color={Colors.textMuted}
                        />
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: Spacing.xl,
    },
    title: {
        ...Typography.h4,
        marginBottom: Spacing.md,
    },
    linksContainer: {
        gap: Spacing.md,
    },
    linkButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.backgroundTertiary,
        padding: Spacing.md,
        borderRadius: BorderRadius.md,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    linkText: {
        ...Typography.body,
        flex: 1,
        marginLeft: Spacing.md,
        color: Colors.text,
    },
});
