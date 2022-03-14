import Card from "../../components/Card";
import styled from "styled-components";
import { Loader } from "../../utils/styles/Atoms";
import { useFetch, useTheme } from "../../utils/hooks";
//import freelancers from "../Freelances";

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

export function getFreelance(id) {
    const freelance = [];
    //console.log(freelance);
    return freelance.find((freelancer) => freelancer.id === id);
}

function Freelance() {
    const { theme } = useTheme();
    const freelanceData = getFreelance();
    const freelanceId = freelanceData.id; // get the ID from data
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/profile/?id=${freelanceId}`
    );
    console.log(data);
    const freelanceProfil = data?.freelanceProfil;

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }
    return (
        <div>
            {isLoading ? (
                <LoaderWrapper>
                    <Loader theme={theme} data-testid="loader" />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                    {freelanceProfil.map((profile, index) => (
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
}

export default Freelance;

/*id*
name
job
skills
available
tjm

*/

/**id: '1',
		name: 'Julien Brun',
		job: 'Développeur mobile',
		picture: 'http://localhost:8000/images/4.jpeg',
		skills: ['React Native'],
		location: 'Lyon',
		available: true,
		tjm: 500 */
