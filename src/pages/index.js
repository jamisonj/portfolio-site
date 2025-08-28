import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import * as styles from "../css/ProjectsSection.module.css";

console.log('styles', styles.projects);

export default function IndexPage() {
  return (
    <>
      <Seo title="Justin Jamison | J² Web" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Blog Posts" sources={['Blog']} /> */}
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="skills" heading="My Skills" />
        <div className={styles.projects}>
          <ProjectsSection sectionId="projects" heading="My Projects" />
        </div>
        <ContactSection sectionId="github" heading="Contact Me" />
      </Page>
    </>
  );
}
