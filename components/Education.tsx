import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import { BorderRadius, Spacing, Typography } from '../constants/styles';

export const Education = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Education</Text>

            <View style={styles.card}>
                <View style={styles.iconContainer}>
                    <Ionicons name="school" size={24} color={Colors.primary} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.degree}>CSE (7.56 CGPA)</Text>
                    <Text style={styles.institution}>Government Engineering College Modasa</Text>
                    <View style={styles.metadata}>
                        <Ionicons name="location-outline" size={16} color={Colors.textMuted} />
                        <Text style={styles.location}>Modasa, Gujarat</Text>
                        <Text style={styles.separator}>•</Text>
                        <Ionicons name="calendar-outline" size={16} color={Colors.textMuted} />
                        <Text style={styles.year}>2023</Text>
                    </View>
                </View>
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
        backgroundColor: Colors.background,
        borderRadius: BorderRadius.lg,
        padding: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border,
        flexDirection: 'row',
        gap: Spacing.md,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.backgroundTertiary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    degree: {
        ...Typography.h4,
        marginBottom: Spacing.xs,
    },
    institution: {
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
    year: {
        ...Typography.caption,
        color: Colors.textMuted,
    },
});
