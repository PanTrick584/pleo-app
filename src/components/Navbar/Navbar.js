import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import { StyledNavbar } from '../../styled/styledNavbar/StyledNavbar';
import { StyledNavbarUl } from '../../styled/styledNavbar/styledNavbarUl/styledNavbarUl';
import { StyledNavbarLi } from '../../styled/styledNavbar/styledNavbarLi/StyledNavbarLi';
const Navbar = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate(ROUTES.START)
    },[])

    const handleRoute = route => {
        navigate(route);
    }

    return (
        <StyledNavbar>   
            <StyledNavbarUl>
                <StyledNavbarLi onClick={() => handleRoute(ROUTES.START)} >Strona główna</StyledNavbarLi>
                <StyledNavbarLi onClick={() => handleRoute(ROUTES.NEW)} >Dodaj notatkę</StyledNavbarLi>
                <StyledNavbarLi onClick={() => handleRoute(ROUTES.OLD)} >Ustawienia</StyledNavbarLi>
            </StyledNavbarUl>
        </StyledNavbar>
    )
}

export default Navbar