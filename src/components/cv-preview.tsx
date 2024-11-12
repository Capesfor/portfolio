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

export default function CvPreview({ data, targetRef }: { data: any, targetRef: any }) {

    return (
        <div ref={targetRef} className={'invisible xl:text-base text-xs transition-transform duration-1000 sm:invisible lg:visible h-full w-full bg-white rounded-sm'}>
            <HeaderPage />
            <BigBar />
            <HeaderDescription description={data.headerDescription} />
            <HeaderContainer title="Presentation" />
            <Description description={data.description} />
            <HeaderContainer title="Compétences" />
            <Competences data={data.competences} />
            <HeaderContainer title="Education" />
            <Education data={data.education} />
            <HeaderContainer title="Expérience Professionnel" />
            <ProExperience data={data.experience} />
            <HeaderContainer title="Divers" />
            <Divers data={data.divers} />
        </div>
    )
}
