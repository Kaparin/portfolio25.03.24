import {ContainerDescription} from "../../../components/ContainerDescription";
import {
    CardRecContainer,
    CardRecommendation,
    ContainerRecommendation
} from "../../../components/StylesForComponents/RecomendationStyles.ts";


export const Recommendation = () => {
    return (
        <ContainerRecommendation>
            <ContainerDescription>
                <h2>recommendations</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>
            </ContainerDescription>
            <CardRecContainer>
                <CardRecommendation>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </CardRecommendation>
                <CardRecommendation>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </CardRecommendation>
                <CardRecommendation>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </CardRecommendation>
            </CardRecContainer>
        </ContainerRecommendation>
    );
};

