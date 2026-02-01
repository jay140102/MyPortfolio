import { Ionicons } from '@expo/vector-icons';
import { ResizeMode, Video } from 'expo-av';
import React, { useState } from 'react';
import { Dimensions, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import { BorderRadius, Spacing, Typography } from '../constants/styles';
import { ProjectAsset } from '../types';

interface MediaGalleryProps {
    assets: ProjectAsset[];
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const MediaGallery: React.FC<MediaGalleryProps> = ({ assets }) => {
    const [selectedAsset, setSelectedAsset] = useState<ProjectAsset | null>(null);

    if (assets.length === 0) {
        return null;
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Gallery</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.gallery}
                >
                    {assets.map((asset, index) => (
                        <Pressable
                            key={index}
                            style={styles.assetContainer}
                            onPress={() => setSelectedAsset(asset)}
                        >
                            {asset.type === 'image' ? (
                                <Image
                                    source={asset.path}
                                    style={styles.thumbnail}
                                    resizeMode="cover"
                                />
                            ) : (
                                <View style={styles.videoContainer}>
                                    {asset.thumbnail ? (
                                        <Image
                                            source={asset.thumbnail}
                                            style={styles.thumbnail}
                                            resizeMode="cover"
                                        />
                                    ) : (
                                        <Video
                                            source={asset.path}
                                            style={styles.thumbnail}
                                            resizeMode={ResizeMode.CONTAIN}
                                            shouldPlay={false}
                                        />
                                    )}
                                    <View style={styles.playButton}>
                                        <Ionicons name="play" size={32} color="#FFFFFF" />
                                    </View>
                                </View>
                            )}
                        </Pressable>
                    ))}
                </ScrollView>
            </View>

            <Modal
                visible={selectedAsset !== null}
                transparent
                animationType="fade"
                onRequestClose={() => setSelectedAsset(null)}
            >
                <View style={styles.modalContainer}>
                    <Pressable
                        style={styles.modalOverlay}
                        onPress={() => setSelectedAsset(null)}
                    />
                    <View style={styles.modalContent}>
                        <Pressable
                            style={styles.closeButton}
                            onPress={() => setSelectedAsset(null)}
                        >
                            <Ionicons name="close" size={32} color={Colors.text} />
                        </Pressable>

                        {selectedAsset?.type === 'image' ? (
                            <Image
                                source={selectedAsset.path}
                                style={styles.fullImage}
                                resizeMode="contain"
                            />
                        ) : selectedAsset?.type === 'video' ? (
                            <Video
                                source={selectedAsset.path}
                                style={styles.fullVideo}
                                useNativeControls
                                resizeMode={ResizeMode.CONTAIN}
                                shouldPlay
                            />
                        ) : null}
                    </View>
                </View>
            </Modal>
        </>
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
    gallery: {
        gap: Spacing.md,
        paddingRight: Spacing.lg,
    },
    assetContainer: {
        width: 200,
        height: 350,
        borderRadius: BorderRadius.md,
        overflow: 'hidden',
        backgroundColor: Colors.backgroundTertiary,
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    videoContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    playButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -30 }, { translateY: -30 }],
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
    },
    modalContent: {
        maxWidth: SCREEN_WIDTH * 0.9,
        maxHeight: SCREEN_HEIGHT * 0.8,
        width: '100%',
        aspectRatio: 9 / 16, // Phone aspect ratio
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: -60,
        right: 0,
        zIndex: 10,
        padding: Spacing.md,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
    },
    fullImage: {
        width: '100%',
        height: '100%',
    },
    fullVideo: {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});
