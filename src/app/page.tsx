import Rise from "../components/home/Rise";
import Why from "../components/home/Why";
import Faq from "../components/home/Faq";
import TechStack from "../components/home/TechStack";
import Comparison from "../components/home/Comparison";
import Metrics from "../components/home/Metrics";
import VideoShowcase from "../components/home/VideoShowcase";
import Hero from "../components/home/Hero";
import StackStrip from "../components/home/StackStrip";
import Capabilities from "../components/home/Capabilities";
import ProofBand from "../components/home/ProofBand";
import Work from "../components/home/Work";
import Delivery from "../components/home/Delivery";
import Sectors from "../components/home/Sectors";
import Engagements from "../components/home/Engagements";
import CtaBand from "../components/home/CtaBand";
import Interactions from "../components/home/Interactions";
import { ProvenanceTrace } from "../components/provenance-trace";

export default function Page() {
  return (
    <>
      <Hero />
      <StackStrip />
      <ProvenanceTrace />
      <Rise>
        <Capabilities />
      </Rise>
      <Rise>
        <VideoShowcase />
      </Rise>
      <Rise>
        <ProofBand />
      </Rise>
      <Rise>
        <Why />
      </Rise>
      <Rise>
        <Metrics />
      </Rise>
      <Rise>
        <Delivery />
      </Rise>
      <Rise>
        <Sectors />
      </Rise>
      <Rise>
        <TechStack />
      </Rise>
      <Rise>
        <Engagements />
      </Rise>
      <Rise>
        <Comparison />
      </Rise>
      <Rise>
        <Faq />
      </Rise>
      <Rise>
        <CtaBand />
      </Rise>
      <Interactions />
    </>
  );
}








