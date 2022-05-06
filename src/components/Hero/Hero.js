import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        Another Portfolio
      </SectionTitle>

      <SectionText>
        The purpose of this project is to take my development skills to the next level and build awesome apps. 
      </SectionText>

      <Button onClick={() => window.location = 'https://github.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;