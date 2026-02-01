import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Education } from '../components/Education';
import { ProjectSection } from '../components/ProjectSection';
import { WorkExperience } from '../components/WorkExperience';
import { Colors } from '../constants/colors';
import { Spacing, Typography } from '../constants/styles';
import { projects } from '../data/projectsData';

export default function Index() {
  const router = useRouter();

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
        <View style={styles.hero}>
          <View style={styles.heroContent}>
            <View style={styles.heroText}>
              <Text style={styles.heroTitle}>
                Building Digital{'\n'}
                Experiences that{'\n'}
                <Text style={styles.heroTitleAccent}>Matter.</Text>
              </Text>
              <Text style={styles.heroSubtitle}>
                I'm a iOS & Mobile Developer specializing in Swift, UIKit, React Native, and Flutter.
                I build high-quality mobile applications with clean code and exceptional user experiences.
              </Text>

              {/* Contact Info */}
              <View style={styles.heroMetadata}>
                <Text style={styles.heroContact}>📍 Ahmedabad</Text>
                <Text style={styles.heroContact}>📧 jpratap581@gmail.com</Text>
                <Text style={styles.heroContact}>📱 +91 9316169871</Text>
              </View>

              {/* CTA Button */}
              <Pressable
                style={styles.ctaButton}
                onPress={() => Linking.openURL('mailto:jpratap581@gmail.com')}
              >
                <Text style={styles.ctaButtonText}>Get in touch</Text>
              </Pressable>

              {/* Social Links */}
              <View style={styles.socialLinks}>
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
                style={styles.profilePhoto}
              />
            </View>
          </View>
        </View>

        {/* Projects Section */}
        <View style={styles.projectsSection}>
          <Text style={styles.sectionTitle}>Selected Projects</Text>
          <Text style={styles.sectionSubtitle}>
            A showcase of mobile applications I've built and contributed to
          </Text>

          {projects.map((project, index) => (
            <ProjectSection
              key={project.id}
              project={project}
              index={index}
              onPress={() => handleProjectPress(project.id)}
            />
          ))}
        </View>

        {/* Work Experience Section */}
        <View style={styles.contentSection}>
          <WorkExperience />
        </View>

        {/* Education Section */}
        <View style={styles.contentSection}>
          <Education />
        </View>

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
  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xxxl,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  heroText: {
    flex: 1,
  },
  heroTitle: {
    ...Typography.h1,
    marginBottom: Spacing.lg,
    lineHeight: 68,
  },
  heroTitleAccent: {
    color: Colors.primary,
  },
  heroSubtitle: {
    ...Typography.bodyLarge,
    marginBottom: Spacing.xl,
    maxWidth: 600,
  },
  heroMetadata: {
    gap: Spacing.sm,
    marginBottom: Spacing.xl,
  },
  heroContact: {
    ...Typography.body,
    color: Colors.textSecondary,
  },
  ctaButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: Spacing.lg,
  },
  ctaButtonText: {
    ...Typography.body,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  socialLinks: {
    flexDirection: 'row',
    gap: Spacing.md,
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
