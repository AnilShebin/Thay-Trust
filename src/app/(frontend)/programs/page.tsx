import { generateMetadata } from '../[slug]/page'

import GalleryImage from "@/components/Programs/gallery-image";
import CallToAction from "@/components/Programs/call-to-action";
import ProgramsHero from "@/components/Programs/programs-hero";
import React from "react";

const Programs = () => {
  return (
    <div>
      <ProgramsHero />
      <GalleryImage />
      <CallToAction />
    </div>
  );
};

export default Programs;

export { generateMetadata }
