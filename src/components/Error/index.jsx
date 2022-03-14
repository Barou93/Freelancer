import React from "react";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import Error404 from "../../assets/404.svg";
import { useTheme } from "../../utils/hooks";

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) =>
        theme === "light" ? colors.backgroundLight : colors.backgroundDark};
    align-items: center;
`;

const ErrorImage = styled.img`
    max-width: 800px;
`;

const PageErrorTitle = styled.h1`
    color: ${({ theme }) => (theme === "light" ? colors.secondary : "#ffffff")};
    font-weight: 300;
`;

const PageErrorSubTitle = styled.h2`
    font-weight: 300;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
`;

const Error = () => {
    const { theme } = useTheme();
    return (
        <ErrorWrapper>
            <PageErrorTitle theme={theme}>Oups...</PageErrorTitle>
            <ErrorImage src={Error404} />
            <PageErrorSubTitle theme={theme}>
                Il semblerait qu'il y ait un problème
            </PageErrorSubTitle>
        </ErrorWrapper>
    );
};

export default Error;
