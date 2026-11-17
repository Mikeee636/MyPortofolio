import SpideyCosmicBackground from "./components/SpideyCosmicBackground";
import SpideyNavbar from "./components/SpideyNavbar";
import SpideyWebRail from "./components/SpideyWebRail";
import SpideyHero from "./components/SpideyHero";
import SpideyIdentityScan from "./components/SpideyIdentityScan";
import SpideyMJWall from "./components/SpideyMJWall";
import ProjectShowcase from "./components/ProjectShowcase";
import SpideyFooter from "./components/SpideyFooter";
import SpideyBackToTop from "./components/SpideyBackToTop";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#050510",
        overflowX: "clip",
      }}
    >
      {/* Unified Cosmic Space & Meteor Background (inspired by alfari.my.id) */}
      <SpideyCosmicBackground />

      {/* Top Fixed Spider-Man Header */}
      <SpideyNavbar />

      {/* Right Fixed Vertical Web Rail Navigation & Scroll Hint */}
      <SpideyWebRail />

      <main id="main">
        {/* Section 01: Hero "Brand New Day" */}
        <SpideyHero />

        {/* Section 02: "Who Are You Under the Mask?" Find Your Identity */}
        <SpideyIdentityScan />

        {/* Section 03: "The MJ Wall" / Certificates */}
        <SpideyMJWall />

        {/* Section 04: "Project Showcase" 3D Coverflow Carousel */}
        <ProjectShowcase />
      </main>

      {/* Section 06 / Footer: Official Trailer Showcase & Columbia Credits */}
      <SpideyFooter />

      {/* Floating Bottom-Right Back to Top Button */}
      <SpideyBackToTop />
    </div>
  );
}
