import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          My name's Marks <br />
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm a Full-Stack Web developer with great experience in a wide range of different commercial projects. Here you can find more information about my skills, experience and contact information.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;