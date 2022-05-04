import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
margin: 0 20px;
`;

export const Navigation = () => {
    return (
        <div>
            <CustomLink to="/" >Deal List</CustomLink>
            <CustomLink to="/form/:id" >Add new deal</CustomLink>
        </div>
    )
}