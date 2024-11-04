'use client';

import BigBar from "./bigBar";
import Competences from "./competences";
import Description from "./description";
import Divers from "./divers";
import Education from "./education";
import HeaderContainer from "./headerContainer";
import HeaderDescription from "./headerDescription";
import HeaderPage from "./headerPage";
import ProExperience from "./proExperience";

export default function CvPreview() {

    return (
        <div className='invisible transition-transform duration-1000 sm:invisible lg:visible h-full bg-white rounded-sm'>
        <HeaderPage/>
        <BigBar/>
        <HeaderDescription/>
        <HeaderContainer title="Presentation"/>
        <Description/>
        <HeaderContainer title="Compétences"/>
        <Competences/>
        <HeaderContainer title="Education"/>
        <Education/>
        <HeaderContainer title="Expérience Professionnel"/>
        <ProExperience/>
        <HeaderContainer title="Divers"/>
        <Divers/>
        </div>
    )
}
