import React from "react";
import { PageWrapper } from "~/comps/layout/PageWrapper";
import { Heading } from "~/comps/shared/Heading";
import { WorksList } from "./molecules/WorksList";

export const Works = () => (
  <PageWrapper>
    <Heading sub="works" emoji="✨">
      作ったもの
    </Heading>
    <WorksList />
  </PageWrapper>
);
