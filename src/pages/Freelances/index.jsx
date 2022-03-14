import Card from "../../components/Card";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import { Loader } from "../../utils/styles/Atoms";
import { useFetch, useTheme } from "../../utils/hooks";

const PageTitle = styled.h1`
font-size:30px:
color: ${colors.secondary};
text-align:center;
padding-bottom:20px;
color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};

`;

const PageSubTitle = styled.h1`
font-size:20px:
color:  ${colors.secondary}
font-weight: 300;
text-align: center;
padding-bottom: 30px;
color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  

`;

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`;

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Freelances = () => {
    const { theme } = useTheme();
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/freelances/`
    );

    const freelancersList = data?.freelancersList;

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <div>
            <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
            <PageSubTitle theme={theme}>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubTitle>

            {isLoading ? (
                <LoaderWrapper>
                    <Loader theme={theme} data-testid="loader" />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                    {freelancersList.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            title={profile.name}
                            picture={profile.picture}
                        />
                    ))}
                </CardsContainer>
            )}
        </div>
    );
};

export default Freelances;
