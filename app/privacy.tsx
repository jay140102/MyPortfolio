import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Colors } from '../constants/colors';
import { Spacing, Typography } from '../constants/styles';

export default function PrivacyPolicy() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Header / Back Button */}
                <View style={styles.header}>
                    <Pressable
                        style={styles.backButton}
                        onPress={() => router.push('/')}
                    >
                        <Ionicons name="arrow-back" size={24} color={Colors.text} />
                        <Text style={styles.backText}>Back to Home</Text>
                    </Pressable>
                </View>

                <View style={[styles.content, isMobile && styles.contentMobile]}>
                    <Text style={styles.title}>Privacy Policy for QuickChat WA</Text>
                    <Text style={styles.lastUpdated}>Last Updated: March 2025</Text>

                    <Text style={styles.paragraph}>
                        Welcome to <Text style={styles.bold}>QuickChat WA</Text> ("we," "our," or "the App"). This Privacy Policy explains how we handle information when you use our mobile application. By using the App, you agree to the practices described in this policy.
                    </Text>

                    <View style={styles.divider} />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>1. Introduction</Text>
                        <Text style={styles.paragraph}>
                            QuickChat WA is designed to help you send WhatsApp messages to phone numbers without needing to save them as contacts. This application is built as an interface to interact with third-party services (WhatsApp).
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>2. Information We Do Not Collect</Text>
                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>QuickChat WA does not collect, store, or transmit any personally identifiable information (PII).</Text>
                        </Text>
                        <View style={styles.bulletList}>
                            <Text style={styles.bulletItem}>• We do not require account registration.</Text>
                            <Text style={styles.bulletItem}>• We do not store phone numbers on our servers.</Text>
                            <Text style={styles.bulletItem}>• We do not collect names, emails, or contact lists.</Text>
                            <Text style={styles.bulletItem}>• All data you enter (phone numbers and messages) is processed locally on your device.</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>3. Local Storage</Text>
                        <Text style={styles.paragraph}>
                            To provide the <Text style={styles.bold}>"Recent Numbers Logic"</Text> feature, the App stores phone numbers locally on your device using encrypted local storage (AsyncStorage).
                        </Text>
                        <View style={styles.bulletList}>
                            <Text style={styles.bulletItem}>• This data <Text style={styles.bold}>never leaves your device</Text>.</Text>
                            <Text style={styles.bulletItem}>• It is not accessible to us or any third party.</Text>
                            <Text style={styles.bulletItem}>• You can clear this data at any time within the app settings.</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>4. Advertising (Future Updates)</Text>
                        <Text style={styles.paragraph}>
                            The App may use Google AdMob in future updates to display advertisements. AdMob may collect certain device identifiers for the purpose of serving relevant ads. We configure AdMob to prioritize non-personalized ads where required. For more details, see Google's Privacy Policy.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>5. Third-Party Links & Services</Text>
                        <Text style={styles.paragraph}>
                            The App communicates with WhatsApp through publicly available official deep links (wa.me). When you tap "Open in WhatsApp," you are redirected to the official WhatsApp application. WhatsApp is subject to its own Privacy Policy and Terms of Service. We are not responsible for the data practices of WhatsApp.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>6. Children's Privacy</Text>
                        <Text style={styles.paragraph}>
                            The App is not directed to children under the age of 13. We do not knowingly collect any personal information from children.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>7. Changes to This Policy</Text>
                        <Text style={styles.paragraph}>
                            We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last Updated" date at the top of this document.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>8. Contact Us</Text>
                        <Text style={styles.paragraph}>
                            If you have questions about this Privacy Policy, please contact us at:
                        </Text>
                        <Text style={styles.contactInfo}><Text style={styles.bold}>Email:</Text> Jpratap581@gmail.com</Text>
                        <Text style={styles.contactInfo}><Text style={styles.bold}>Website:</Text> https://jaypratapsingh.vercel.app/</Text>
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        © 2026 Jay Pratap Singh. All rights reserved.
                    </Text>
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
    scrollContent: {
        flexGrow: 1,
    },
    header: {
        paddingTop: 60,
        paddingHorizontal: Spacing.lg,
        paddingBottom: Spacing.md,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
    },
    backText: {
        ...Typography.body,
        fontWeight: '600',
        color: Colors.text,
    },
    content: {
        maxWidth: 800,
        alignSelf: 'center',
        paddingHorizontal: Spacing.lg,
        paddingBottom: Spacing.xxxl,
    },
    contentMobile: {
        width: '100%',
    },
    title: {
        ...Typography.h2,
        marginBottom: Spacing.xs,
        fontSize: 32,
    },
    lastUpdated: {
        ...Typography.caption,
        color: Colors.textSecondary,
        marginBottom: Spacing.xl,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.border,
        marginVertical: Spacing.xl,
    },
    section: {
        marginBottom: Spacing.xl,
    },
    sectionTitle: {
        ...Typography.h5,
        marginBottom: Spacing.md,
        color: Colors.text,
        fontWeight: '700',
    },
    paragraph: {
        ...Typography.body,
        lineHeight: 24,
        color: Colors.textSecondary,
        marginBottom: Spacing.md,
    },
    bold: {
        fontWeight: 'bold',
        color: Colors.text,
    },
    bulletList: {
        paddingLeft: Spacing.md,
    },
    bulletItem: {
        ...Typography.body,
        lineHeight: 24,
        color: Colors.textSecondary,
        marginBottom: Spacing.xs,
    },
    contactInfo: {
        ...Typography.body,
        lineHeight: 24,
        color: Colors.textSecondary,
    },
    footer: {
        paddingVertical: Spacing.xxxl,
        paddingHorizontal: Spacing.lg,
        alignItems: 'center',
        backgroundColor: Colors.backgroundSecondary,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        marginTop: 'auto',
    },
    footerText: {
        ...Typography.caption,
        color: Colors.textTertiary,
    },
});
