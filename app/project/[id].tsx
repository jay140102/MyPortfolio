import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MediaGallery } from '../../components/MediaGallery';
import { ProjectHeader } from '../../components/ProjectHeader';
import { ProjectLinks } from '../../components/ProjectLinks';
import { Colors } from '../../constants/colors';
import { BorderRadius, Spacing, Typography } from '../../constants/styles';
import { projects } from '../../data/projectsData';

export default function ProjectDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();

    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <View style={styles.container}>
                <View style={styles.centered}>
                    <Text style={Typography.h3}>Project not found</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Back Button */}
                <Pressable
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Ionicons name="arrow-back" size={24} color={Colors.text} />
                </Pressable>

                {/* Header */}
                <ProjectHeader project={project} />

                {/* Content */}
                <View style={styles.content}>
                    {/* Technologies */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Technologies</Text>
                        <View style={styles.techStack}>
                            {project.technologies.map((tech, index) => (
                                <View key={index} style={styles.techTag}>
                                    <Text style={styles.techText}>{tech}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Description */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>About</Text>
                        <Text style={styles.description}>{project.longDescription}</Text>
                    </View>

                    {/* Features */}
                    {project.features.length > 0 && (
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Key Features</Text>
                            {project.features.map((feature, index) => (
                                <View key={index} style={styles.featureItem}>
                                    <Ionicons
                                        name="checkmark-circle"
                                        size={20}
                                        color={project.color}
                                    />
                                    <Text style={styles.featureText}>{feature}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {/* Media Gallery */}
                    <MediaGallery assets={project.assets} />

                    {/* Links */}
                    <ProjectLinks links={project.links} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: Spacing.lg,
        zIndex: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: Spacing.lg,
    },
    section: {
        marginBottom: Spacing.xl,
    },
    sectionTitle: {
        ...Typography.h4,
        marginBottom: Spacing.md,
    },
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.sm,
    },
    techTag: {
        backgroundColor: Colors.backgroundTertiary,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.sm,
        borderRadius: BorderRadius.sm,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    techText: {
        ...Typography.caption,
        color: Colors.text,
        fontWeight: '600',
    },
    description: {
        ...Typography.body,
        lineHeight: 26,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: Spacing.md,
        gap: Spacing.md,
    },
    featureText: {
        ...Typography.body,
        flex: 1,
    },
});
