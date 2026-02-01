import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/colors';
import { CommonStyles } from '../constants/styles';

interface PhoneMockupProps {
    screenshot: ImageSourcePropType;
    borderColor: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ screenshot, borderColor }) => {
    return (
        <View style={[styles.container, CommonStyles.shadowLarge]}>
            <View style={[styles.phone, { borderColor }]}>
                {/* Phone notch */}
                <View style={styles.notch} />

                {/* Screenshot */}
                <Image
                    source={screenshot}
                    style={styles.screenshot}
                    resizeMode="cover"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    phone: {
        width: 280,
        height: 560,
        borderRadius: 40,
        borderWidth: 8,
        backgroundColor: Colors.background,
        overflow: 'hidden',
        position: 'relative',
    },
    notch: {
        position: 'absolute',
        top: 0,
        left: '50%',
        marginLeft: -60,
        width: 120,
        height: 30,
        backgroundColor: '#000',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        zIndex: 10,
    },
    screenshot: {
        width: '100%',
        height: '100%',
    },
});
