import React from 'react';
import {PageWrapper} from '~/comps/layout/PageWrapper';
import {LogoImage} from '~/comps/shared/LogoImage';

import styles from "./Logo.module.scss";

export const LogoPage = () => (
  <PageWrapper>
    <LogoImage className={styles.logoImage}/>
  </PageWrapper>
)
