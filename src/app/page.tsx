import Rise from "../components/home/Rise";
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
        <ProofBand />
      </Rise>
      <Rise>
        <Delivery />
      </Rise>
      <Rise>
        <Sectors />
      </Rise>
      <Rise>
        <Engagements />
      </Rise>
      <Rise>
        <CtaBand />
      </Rise>
      <Interactions />
    </>
  );
}


