import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { Colors } from '../constants/colors';
import { BorderRadius, Shadows, Spacing, Typography } from '../constants/styles';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    onPress: () => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPress }) => {
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: opacity.value,
    }));

    const handlePressIn = () => {
        scale.value = withSpring(0.95);
        opacity.value = withTiming(0.8);
    };

    const handlePressOut = () => {
        scale.value = withSpring(1);
        opacity.value = withTiming(1);
    };

    return (
        <AnimatedPressable
            style={[styles.card, animatedStyle]}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <LinearGradient
                colors={project.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={project.thumbnail}
                        style={styles.thumbnail}
                        resizeMode="cover"
                    />
                    <View style={styles.overlay} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>{project.title}</Text>
                    <Text style={styles.subtitle}>{project.subtitle}</Text>
                    <Text style={styles.description} numberOfLines={2}>
                        {project.description}
                    </Text>

                    <View style={styles.techStack}>
                        {project.technologies.slice(0, 3).map((tech, index) => (
                            <View key={index} style={styles.techTag}>
                                <Text style={styles.techText}>{tech}</Text>
                            </View>
                        ))}
                        {project.technologies.length > 3 && (
                            <View style={styles.techTag}>
                                <Text style={styles.techText}>+{project.technologies.length - 3}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </LinearGradient>
        </AnimatedPressable>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: Spacing.lg,
        borderRadius: BorderRadius.xl,
        overflow: 'hidden',
        ...Shadows.lg,
    },
    gradient: {
        borderRadius: BorderRadius.xl,
        overflow: 'hidden',
    },
    imageContainer: {
        height: 200,
        position: 'relative',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Colors.overlay,
    },
    content: {
        padding: Spacing.lg,
    },
    title: {
        ...Typography.h3,
        marginBottom: Spacing.xs,
    },
    subtitle: {
        ...Typography.caption,
        color: Colors.textSecondary,
        marginBottom: Spacing.md,
    },
    description: {
        ...Typography.body,
        marginBottom: Spacing.md,
        color: Colors.textSecondary,
    },
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.sm,
    },
    techTag: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.xs,
        borderRadius: BorderRadius.sm,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    techText: {
        ...Typography.caption,
        color: Colors.text,
        fontWeight: '600',
    },
});
