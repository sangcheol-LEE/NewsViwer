import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const data = [
    {
        id:1,
        name:'all',
        text: "전체보기"
    },{
        id:2,
        name:'business',
        text: "비즈니스"
    },{
        id:3,
        name:'entertainment',
        text: "엔터테인먼트"
    },{
        id:4,
        name:'health',
        text: "건강"
    },{
        id:5,
        name:'science',
        text: "과학"
    },{
        id:6,
        name:'sports',
        text: "스포츠"
    },{
        id:7,
        name:'technology',
        text: "기술"
    },
]

const CategoryContainer = styled.ul`
    display: flex;
    font-weight: 600;

`;
const NavLinkItem = styled(NavLink)`
    margin-right: 1rem;
    text-decoration : none;
    color: black;
    &:hover {
        color: blue;
        text-decoration:underline;
    }
    &.selected {
        color : red;
    }
`;

const Category = () => {
    return (
        <CategoryContainer>
            {data.map((category) => (
                <NavLinkItem style={({isActive}) => ({color: isActive && "red"})} key={category.id} to={`/news/${category.name}`}>{category.text}</NavLinkItem>
            ))}
        </CategoryContainer>
    )
}

export default Category