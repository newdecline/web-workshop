import React from 'react';
import {Theme} from "./Theme";
import 'rc-slider/assets/index.css';
import "./css/index.css";
import {Normalize} from "styled-normalize";
import {GlobalStyle} from "./GlobalStyle";
import {Header} from "./components/Header/Header";
import {ProfileSection} from "./components/ProfileSection/ProfileSection";
import {PersonalInformationSection} from "./components/PersonalInformationSection/PersonalInformationSection";
import {ExperienceSection} from "./components/ExperienceSection/ExperienceSection";
import {LevelOwnershipSection} from "./components/LevelOwnershipSection/LevelOwnershipSection";
import {AboutSection} from "./components/AboutSection/AboutSection";

export const App = () => {
  return <Theme>
    <Normalize/>
    <GlobalStyle/>
    <Header/>
    <ProfileSection/>
    <PersonalInformationSection/>
    <ExperienceSection/>
    <LevelOwnershipSection/>
    <AboutSection/>
  </Theme>
};
