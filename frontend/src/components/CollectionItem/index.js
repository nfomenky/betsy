import {
	CustomButtonContainer,
	ImageContainer,
	CollectionItemContainer,
	CollectionFooter,
	NameText,
	PriceText,
} from "./collection-item.styles";

import {useSelector, useDispatch} from 'react-redux';

const CollectionItem = ({item}) => {
	const dispatch = useDispatch();

	const { name, price, imageUrl } = item;

	//TODO add to cart
	return (
		<CollectionItemContainer>
			<ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
			<CollectionFooter>
				<NameText>{name}</NameText>
				<PriceText>{price}</PriceText>
			</CollectionFooter>
			<CustomButtonContainer onClick={() => dispatch(item)} inverted >
				Add to Cart
			</CustomButtonContainer>
		</CollectionItemContainer>
	);
};

export default CollectionItem;
