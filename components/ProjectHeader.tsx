import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import { Spacing, Typography } from '../constants/styles';
import { Project } from '../types';

interface ProjectHeaderProps {
    project: Project;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
    return (
        <LinearGradient
            colors={project.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.header}
        >
            <View style={styles.content}>
                <Text style={styles.title}>{project.title}</Text>
                <Text style={styles.subtitle}>{project.subtitle}</Text>
                <View style={styles.metadata}>
                    <View style={styles.metadataItem}>
                        <Text style={styles.metadataLabel}>Platform</Text>
                        <Text style={styles.metadataValue}>{project.platform}</Text>
                    </View>
                    <View style={styles.metadataItem}>
                        <Text style={styles.metadataLabel}>Role</Text>
                        <Text style={styles.metadataValue}>{project.role}</Text>
                    </View>
                    <View style={styles.metadataItem}>
                        <Text style={styles.metadataLabel}>Duration</Text>
                        <Text style={styles.metadataValue}>{project.duration}</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 60,
        paddingBottom: Spacing.xl,
        paddingHorizontal: Spacing.lg,
    },
    content: {
        alignItems: 'center',
    },
    title: {
        ...Typography.h1,
        textAlign: 'center',
        marginBottom: Spacing.xs,
    },
    subtitle: {
        ...Typography.bodyLarge,
        textAlign: 'center',
        color: Colors.textSecondary,
        marginBottom: Spacing.xl,
    },
    metadata: {
        flexDirection: 'row',
        gap: Spacing.xl,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    metadataItem: {
        alignItems: 'center',
    },
    metadataLabel: {
        ...Typography.caption,
        color: Colors.textSecondary,
        marginBottom: Spacing.xs,
    },
    metadataValue: {
        ...Typography.body,
        fontWeight: '600',
        color: Colors.text,
    },
});
