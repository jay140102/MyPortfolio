import React from 'react';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
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
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    const isEven = index % 2 === 1;
    const screenshot = project.assets[0]?.path || project.thumbnail;

    return (
        <View style={[
            styles.container,
            isEven && styles.containerReverse,
            isMobile && styles.containerMobile
        ]}>
            {/* Phone Mockup */}
            <View style={styles.mockupContainer}>
                <PhoneMockup
                    screenshot={screenshot}
                    borderColor={project.color}
                />
            </View>

            {/* Content */}
            <View style={[styles.content, isMobile && styles.contentMobile]}>
                <Text style={[styles.title, isMobile && styles.titleMobile]}>{project.title}</Text>
                <Text style={[styles.subtitle, isMobile && styles.subtitleMobile]}>{project.subtitle}</Text>
                <Text style={[styles.description, isMobile && styles.descriptionMobile]} numberOfLines={3}>
                    {project.description}
                </Text>

                {/* Technology Tags */}
                <View style={[styles.tags, isMobile && styles.tagsMobile]}>
                    {project.technologies.slice(0, 4).map((tech, i) => (
                        <View key={i} style={styles.tag}>
                            <Text style={styles.tagText}>{tech}</Text>
                        </View>
                    ))}
                </View>

                {/* View Case Study Link */}
                <Pressable onPress={onPress} style={[styles.link, isMobile && styles.linkMobile]}>
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
    containerMobile: {
        flexDirection: 'column',
        gap: Spacing.xl,
        paddingVertical: Spacing.xl,
    },
    mockupContainer: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        gap: Spacing.md,
    },
    contentMobile: {
        alignItems: 'center',
        width: '100%',
    },
    title: {
        ...Typography.h3,
        marginBottom: Spacing.xs,
    },
    titleMobile: {
        textAlign: 'center',
        fontSize: 24,
    },
    subtitle: {
        ...Typography.body,
        color: Colors.textSecondary,
        marginBottom: Spacing.sm,
    },
    subtitleMobile: {
        textAlign: 'center',
    },
    description: {
        ...Typography.body,
        color: Colors.textTertiary,
        lineHeight: 24,
    },
    descriptionMobile: {
        textAlign: 'center',
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.sm,
        marginTop: Spacing.sm,
    },
    tagsMobile: {
        justifyContent: 'center',
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
    linkMobile: {
        alignSelf: 'center',
    },
    linkText: {
        ...Typography.body,
        color: Colors.primary,
        fontWeight: '600',
    },
});
