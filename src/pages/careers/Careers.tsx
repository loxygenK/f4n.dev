import React from "react";
import { PageWrapper } from "~/comps/layout/PageWrapper";
import { Heading } from "~/comps/shared/Heading";
import { Timeline } from "./molecule/Timeline";

export const Careers = () => (
  <PageWrapper>
    <Heading sub="careers" emoji="🧑‍💼">
      実績
    </Heading>
    <Timeline />
  </PageWrapper>
);
