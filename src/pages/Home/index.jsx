import styled from "styled-components";
import HomeIllustration from "../../assets/home-illustration.svg";
import { StyledLink } from "../../utils/styles/Atoms";
import colors from "../../utils/styles/colors";
import { useTheme } from "../../utils/hooks";

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const HomeContainer = styled.div`
    display: flex;
    margin: 30px;
    padding: 60px 90px;
    flex-direction: row;
    max-width: 1200px;
    background: ${({ theme }) =>
        theme === "light" ? colors.backgroundLight : colors.backgroundDark};
`;

const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    ${StyledLink} {
        max-width: 250px;
    }
`;

const StyledTitle = styled.h2`
    padding-bottom: 30px;
    max-width: 280px;
    line-height: 50px;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
`;

const Illustration = styled.img`
    flex: 1;
`;

function Home() {
    const { theme } = useTheme();
    return (
        <HomeWrapper>
            <HomeContainer theme={theme}>
                <LeftCol>
                    <StyledTitle theme={theme}>
                        Repérez vos besoins, on s’occupe du reste, avec les
                        meilleurs talents
                    </StyledTitle>
                    <StyledLink to="/survey/1" $isFullLink>
                        Faire le test
                    </StyledLink>
                </LeftCol>
                <Illustration src={HomeIllustration} />
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Home;
