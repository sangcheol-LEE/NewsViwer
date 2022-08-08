import React from "react";
import styled from "styled-components";
import Category from "./Category";
import { useParams } from "react-router-dom";
const ItemBox = styled.div`
    display: flex;
    margin-bottom : 2rem;
    .thumnail {
        a{
            img {
                width:180px;
                height:100%;
                object-fit:cover;
            }
        }
    }
`;

const NewsItem = ({article}) => {
    const params = useParams()
    const {title, description, url, urlToImage} = article

    console.log("good",params)
    return (
        <>
        {params && <Category />}
        <ItemBox>
            <div className="thumnail">
                <a href={url}>
                    <img src={urlToImage} alt="" />
                </a>
            </div>
            <div className="contents">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </ItemBox>
        </>
    )

}

export default NewsItem