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

export default function IndexPage() {
  return (
    <>
      <Seo title="Justin Jamison | J² Web" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Blog Posts" sources={['Blog']} /> */}
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="skills" heading="My Skills" />
        <ProjectsSection sectionId="projects" heading="My Projects" />
        <ContactSection sectionId="github" heading="Contact Me" />
      </Page>
    </>
  );
}
