import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollectionItem from '../CollectionItem';
import * as productsActions from '../../store/products';

const HomePage = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products.products);
  // console.log(products);

	useEffect(() => {
		dispatch(productsActions.selectAllProducts());
	}, [dispatch]);

	return isLoaded && (
		<div>
			<h2 className='title'>
				Shop betsy and support independent sellers
			</h2>
			<div className='items'>
				{products.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
