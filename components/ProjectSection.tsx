import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import { Spacing, Typography } from '../constants/styles';
import { Project } from '../types';
import { PhoneMockup } from './PhoneMockup';

interface ProjectSectionProps {
    project: Project;
    index: number;
    onPress: () => void;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ project, index, onPress }) => {
    const isEven = index % 2 === 1;
    const screenshot = project.assets[0]?.path || project.thumbnail;

    return (
        <View style={[styles.container, isEven && styles.containerReverse]}>
            {/* Phone Mockup */}
            <View style={styles.mockupContainer}>
                <PhoneMockup
                    screenshot={screenshot}
                    borderColor={project.color}
                />
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.title}>{project.title}</Text>
                <Text style={styles.subtitle}>{project.subtitle}</Text>
                <Text style={styles.description} numberOfLines={3}>
                    {project.description}
                </Text>

                {/* Technology Tags */}
                <View style={styles.tags}>
                    {project.technologies.slice(0, 4).map((tech, i) => (
                        <View key={i} style={styles.tag}>
                            <Text style={styles.tagText}>{tech}</Text>
                        </View>
                    ))}
                </View>

                {/* View Case Study Link */}
                <Pressable onPress={onPress} style={styles.link}>
                    <Text style={styles.linkText}>View Case Study →</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Spacing.xxxl,
        paddingHorizontal: Spacing.lg,
        gap: Spacing.xxxl,
    },
    containerReverse: {
        flexDirection: 'row-reverse',
    },
    mockupContainer: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        gap: Spacing.md,
    },
    title: {
        ...Typography.h3,
        marginBottom: Spacing.xs,
    },
    subtitle: {
        ...Typography.body,
        color: Colors.textSecondary,
        marginBottom: Spacing.sm,
    },
    description: {
        ...Typography.body,
        color: Colors.textTertiary,
        lineHeight: 24,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.sm,
        marginTop: Spacing.sm,
    },
    tag: {
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.xs,
        backgroundColor: Colors.backgroundTertiary,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    tagText: {
        ...Typography.caption,
        color: Colors.textSecondary,
    },
    link: {
        marginTop: Spacing.md,
        alignSelf: 'flex-start',
    },
    linkText: {
        ...Typography.body,
        color: Colors.primary,
        fontWeight: '600',
    },
});
