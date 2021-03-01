import styled from "styled-components";
import CustomButton from "../CustomButton";

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
    position: relative;
    margin-bottom: 30px;
`;

export const ImageContainer = styled.img`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
    margin-bottom: 5px;

    ${CollectionItemContainer}:hover & {
        opacity: 0.9;
    }
`;

export const CustomButtonContainer = styled(CustomButton)`
	opacity: 0.85;
	display: flex;
	width: 80%;
	opacity: 0.7;
	position: absolute;
    top: 255px;
    display: none;

    ${CollectionItemContainer}:hover & {
        opacity: 0.85;
		display: flex;
    }
`;
export const CollectionFooter = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const NameText = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const PriceText = styled.span`
	width: 10%;
`;
