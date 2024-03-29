import styled from 'styled-components';
import React from "react";


export const Aside = () => {
    return
    (
        <SidebarContainer>
            <ProfileSection></ProfileSection>
            <Languages></Languages>
            <Skills></Skills>
            <ExtraSkills></ExtraSkills>
            <DownloadCvButton></DownloadCvButton>

        </SidebarContainer>
    );
}
export const SidebarContainer = styled.div`
    // add your styles here
`;

export const ProfileSection = styled.div`
    // add your styles here
`;

export const Languages = styled.div`
    // add your styles here
`;

export const Skills = styled.div`
    // add your styles here
`;

export const ExtraSkills = styled.div`
    // add your styles here
`;

export const DownloadCvButton = styled.button`
    // add your styles here
`;