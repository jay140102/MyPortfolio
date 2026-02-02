import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, Pressable, ScrollView, StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { AnimatedSection } from '../components/AnimatedSection';
import { Education } from '../components/Education';
import { ProjectSection } from '../components/ProjectSection';
import { WorkExperience } from '../components/WorkExperience';
import { Colors } from '../constants/colors';
import { Spacing, Typography } from '../constants/styles';
import { projects } from '../data/projectsData';

export default function Index() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handleProjectPress = (id: string) => {
    router.push(`/project/${id}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <AnimatedSection delay={100} style={[styles.hero, isMobile && styles.heroMobile]}>
          <View style={[styles.heroContent, isMobile && styles.heroContentMobile]}>
            <View style={[styles.heroText, isMobile && styles.heroTextMobile]}>
              <Text style={[styles.heroTitle, isMobile && styles.heroTitleMobile]}>
                Building Digital{'\n'}
                Experiences that{'\n'}
                <Text style={styles.heroTitleAccent}>Matter.</Text>
              </Text>
              <Text style={[styles.heroSubtitle, isMobile && styles.heroSubtitleMobile]}>
                I'm a iOS & Mobile Developer specializing in Swift, UIKit, React Native, and Flutter.
                I build high-quality mobile applications with clean code and exceptional user experiences.
              </Text>

              {/* Contact Info */}
              <View style={[styles.heroMetadata, isMobile && styles.heroMetadataMobile]}>
                <Text style={styles.heroContact}>📍 Ahmedabad</Text>
                <Text style={styles.heroContact}>📧 jpratap581@gmail.com</Text>
                <Text style={styles.heroContact}>📱 +91 9316169871</Text>
              </View>

              {/* CTA Buttons */}
              <View style={[styles.ctaContainer, isMobile && styles.ctaContainerMobile]}>
                <Pressable
                  style={styles.ctaButton}
                  onPress={() => Linking.openURL('mailto:jpratap581@gmail.com')}
                >
                  <Text style={styles.ctaButtonText}>Get in touch</Text>
                </Pressable>

                <Pressable
                  style={styles.secondaryButton}
                  onPress={() => Linking.openURL('https://drive.google.com/file/d/1c0FAwVNVT58XuVvFf6he3S40w9QYuthG/view?usp=drivesdk')}
                >
                  <Text style={styles.secondaryButtonText}>Resume</Text>
                  <Ionicons name="download-outline" size={18} color={Colors.text} style={{ marginLeft: Spacing.xs }} />
                </Pressable>
              </View>

              {/* Social Links */}
              <View style={[styles.socialLinks, isMobile && styles.socialLinksMobile]}>
                <Pressable
                  style={styles.socialButton}
                  onPress={() => Linking.openURL('https://github.com/jay140102')}
                >
                  <Ionicons name="logo-github" size={20} color={Colors.textSecondary} />
                </Pressable>
                <Pressable
                  style={styles.socialButton}
                  onPress={() => Linking.openURL('https://www.linkedin.com/in/jay-pratap-singh-08477a212')}
                >
                  <Ionicons name="logo-linkedin" size={20} color={Colors.textSecondary} />
                </Pressable>
              </View>
            </View>

            {/* Profile Photo */}
            <View style={styles.heroImageContainer}>
              <Image
                source={require('../assets/images/profile.jpg')}
                style={[styles.profilePhoto, isMobile && styles.profilePhotoMobile]}
              />
            </View>
          </View>
        </AnimatedSection>

        {/* Projects Section */}
        <View style={styles.projectsSection}>
          <AnimatedSection delay={300}>
            <Text style={styles.sectionTitle}>Selected Projects</Text>
            <Text style={styles.sectionSubtitle}>
              A showcase of mobile applications I've built and contributed to
            </Text>
          </AnimatedSection>

          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={400 + (index * 100)}>
              <ProjectSection
                project={project}
                index={index}
                onPress={() => handleProjectPress(project.id)}
              />
            </AnimatedSection>
          ))}
        </View>

        {/* Work Experience Section */}
        <AnimatedSection delay={600} style={styles.contentSection}>
          <WorkExperience />
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection delay={700} style={styles.contentSection}>
          <Education />
        </AnimatedSection>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2026 Jay Pratap Singh. Built with React Native & Expo.
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  hero: {
    paddingTop: Spacing.xxxl * 2,
    paddingBottom: Spacing.xxxl * 2,
    paddingHorizontal: Spacing.lg,
    backgroundColor: Colors.backgroundSecondary,
  },
  heroMobile: {
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xxxl,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  heroContentMobile: {
    flexDirection: 'column-reverse',
    gap: Spacing.xl,
  },
  heroText: {
    flex: 1,
  },
  heroTextMobile: {
    alignItems: 'center',
    textAlign: 'center',
  },
  heroTitle: {
    ...Typography.h1,
    marginBottom: Spacing.lg,
    lineHeight: 68,
  },
  heroTitleMobile: {
    fontSize: 36,
    lineHeight: 44,
    textAlign: 'center',
  },
  heroTitleAccent: {
    color: Colors.primary,
  },
  heroSubtitle: {
    ...Typography.bodyLarge,
    marginBottom: Spacing.xl,
    maxWidth: 600,
  },
  heroSubtitleMobile: {
    textAlign: 'center',
    fontSize: 16,
  },
  heroMetadata: {
    gap: Spacing.sm,
    marginBottom: Spacing.xl,
  },
  heroMetadataMobile: {
    alignItems: 'center',
  },
  heroContact: {
    ...Typography.body,
    color: Colors.textSecondary,
  },
  ctaContainer: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  ctaContainerMobile: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: Spacing.md,
    width: '100%',
  },
  ctaButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 8,
  },
  ctaButtonMobile: {
    // Removed as it's handled by ctaContainerMobile
  },
  ctaButtonText: {
    ...Typography.body,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondaryButtonText: {
    ...Typography.body,
    color: Colors.text,
    fontWeight: '600',
  },
  socialLinks: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  socialLinksMobile: {
    justifyContent: 'center',
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  heroImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    width: 360,
    height: 360,
    borderRadius: 180,
    borderWidth: 6,
    borderColor: Colors.background,
  },
  profilePhotoMobile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
  },
  projectsSection: {
    paddingTop: Spacing.xxxl * 2,
    paddingBottom: Spacing.xxxl,
  },
  sectionTitle: {
    ...Typography.h2,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  sectionSubtitle: {
    ...Typography.body,
    textAlign: 'center',
    color: Colors.textSecondary,
    marginBottom: Spacing.xxxl,
    paddingHorizontal: Spacing.lg,
  },
  contentSection: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xxxl,
    backgroundColor: Colors.backgroundSecondary,
  },
  footer: {
    paddingVertical: Spacing.xxxl,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    backgroundColor: Colors.backgroundSecondary,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  footerText: {
    ...Typography.caption,
    color: Colors.textTertiary,
  },
});
