import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from "../../utils/styles/Atoms";
import LightLogo from "../../assets/light-logo.png";
import DarkLogo from "../../assets/dark-logo.png";
import { useTheme } from "../../utils/hooks";

const LogoType = styled.img`
    height: 70px;
`;

const NavContainer = styled.nav`
    padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`;

const Header = () => {
    const { theme } = useTheme();
    return (
        <NavContainer>
            <Link to="/">
                <LogoType src={theme === "light" ? DarkLogo : LightLogo} />
            </Link>
            <div>
                <StyledLink $theme={theme} to="/">
                    Accueil
                </StyledLink>
                <StyledLink $theme={theme} to="/freelances">
                    Profils
                </StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </NavContainer>
    );
};

export default Header;
