import React from 'react';
import { ViewStyle } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

interface AnimatedSectionProps {
    children: React.ReactNode;
    delay?: number;
    style?: ViewStyle | ViewStyle[];
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    delay = 0,
    style
}) => {
    return (
        <Animated.View
            entering={FadeInDown.delay(delay).duration(800).springify().damping(12)}
            style={[{ width: '100%' }, style]}
        >
            {children}
        </Animated.View>
    );
};
