import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import { BorderRadius, Spacing, Typography } from '../constants/styles';

export const WorkExperience = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Work Experience</Text>

            <View style={styles.card}>
                <LinearGradient
                    colors={['#6366F1', '#8B5CF6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientBorder}
                >
                    <View style={styles.cardContent}>
                        <View style={styles.header}>
                            <View style={styles.iconContainer}>
                                <Ionicons name="briefcase" size={24} color={Colors.primary} />
                            </View>

                            <View style={styles.headerContent}>
                                <Text style={styles.role}>iOS Application Developer</Text>
                                <Text style={styles.company}>Webcodegenie Technology Pvt Ltd</Text>
                                <View style={styles.metadata}>
                                    <Ionicons name="location-outline" size={16} color={Colors.textMuted} />
                                    <Text style={styles.location}>Ahmedabad, Gujarat</Text>
                                    <Text style={styles.separator}>•</Text>
                                    <Ionicons name="calendar-outline" size={16} color={Colors.textMuted} />
                                    <Text style={styles.duration}>Jan 2023 - Nov 2025</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.achievements}>
                            <Text style={styles.achievementsTitle}>Key Achievements:</Text>
                            <View style={styles.achievementItem}>
                                <Ionicons name="checkmark-circle" size={18} color={Colors.success} />
                                <Text style={styles.achievementText}>
                                    Built and shipped scalable iOS applications with strong focus on performance and stability
                                </Text>
                            </View>
                            <View style={styles.achievementItem}>
                                <Ionicons name="checkmark-circle" size={18} color={Colors.success} />
                                <Text style={styles.achievementText}>
                                    Implemented MVVM and clean architecture to improve maintainability and delivery speed
                                </Text>
                            </View>
                            <View style={styles.achievementItem}>
                                <Ionicons name="checkmark-circle" size={18} color={Colors.success} />
                                <Text style={styles.achievementText}>
                                    Wrote unit tests using XCTest and applied effective memory management practices
                                </Text>
                            </View>
                            <View style={styles.achievementItem}>
                                <Ionicons name="checkmark-circle" size={18} color={Colors.success} />
                                <Text style={styles.achievementText}>
                                    Owned key product features and collaborated with product, backend, and QA teams
                                </Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: Spacing.xxxl,
    },
    sectionTitle: {
        ...Typography.h2,
        marginBottom: Spacing.lg,
    },
    card: {
        borderRadius: BorderRadius.lg,
    },
    gradientBorder: {
        padding: 2,
        borderRadius: BorderRadius.lg,
    },
    cardContent: {
        backgroundColor: Colors.background,
        borderRadius: BorderRadius.lg,
        padding: Spacing.lg,
    },
    header: {
        flexDirection: 'row',
        gap: Spacing.md,
        marginBottom: Spacing.lg,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.backgroundTertiary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContent: {
        flex: 1,
    },
    role: {
        ...Typography.h4,
        marginBottom: Spacing.xs,
    },
    company: {
        ...Typography.body,
        color: Colors.textSecondary,
        marginBottom: Spacing.sm,
    },
    metadata: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xs,
        flexWrap: 'wrap',
    },
    location: {
        ...Typography.caption,
        color: Colors.textMuted,
    },
    separator: {
        ...Typography.caption,
        color: Colors.textMuted,
        marginHorizontal: Spacing.xs,
    },
    duration: {
        ...Typography.caption,
        color: Colors.textMuted,
    },
    achievements: {
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        paddingTop: Spacing.md,
    },
    achievementsTitle: {
        ...Typography.body,
        fontWeight: '600',
        marginBottom: Spacing.md,
        color: Colors.text,
    },
    achievementItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: Spacing.sm,
        marginBottom: Spacing.sm,
    },
    achievementText: {
        ...Typography.body,
        flex: 1,
        lineHeight: 22,
    },
});
