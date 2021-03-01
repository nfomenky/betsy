'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Products', [
			{
				name: 'Brown Brim',
				imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
				price: 25,
				sellerId: 2,
				category: 'Hats',
			},
			{
				name: 'Blue Beanie',
				imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
				price: 18,
				sellerId: 2,
				category: 'Hats',
			},
			{
				name: 'Brown Cowboy',
				imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
				price: 35,
				sellerId: 2,
				category: 'Hats',
			},
			{
				name: 'Grey Brim',
				imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
				price: 25,
				sellerId: 2,
				category: 'Hats',
			},
			{
				name: 'Green Beanie',
				imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
				price: 18,
				sellerId: 2,
				category: 'Hats',
			},
			{
				name: 'Palm Tree Cap',
				imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
				price: 14,
				sellerId: 2,
				category: 'Hats',
			},
			{
				name: 'Red Beanie',
				imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
				price: 18,
				sellerId: 2,
				category: 'Hats',
			},
			{
				name: 'Wolf Cap',
				imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
				price: 14,
				sellerId: 2,
				category: 'Hats',
			},
			{
				name: 'Blue Snapback',
				imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
				price: 16,
				sellerId: 3,
				category: 'Hats',
			},
			{
				name: 'Adidas NMD',
				imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
				price: 220,
				sellerId: 2,
				category: 'Shoes',
			},
			{
				name: 'Adidas Yeezy',
				imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
				price: 280,
				sellerId: 2,
				category: 'Shoes',
			},
			{
				name: 'Black Converse',
				imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
				price: 110,
				sellerId: 2,
				category: 'Shoes',
			},
			{
				name: 'Nike White AirForce',
				imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
				price: 160,
				sellerId: 2,
				category: 'Shoes',
			},
			{
				name: 'Nike Red High Tops',
				imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
				price: 160,
				sellerId: 2,
				category: 'Shoes',
			},
			{
				name: 'Nike Brown High Tops',
				imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
				price: 160,
				sellerId: 2,
				category: 'Shoes',
			},
			{
				name: 'Air Jordan Limited',
				imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
				price: 190,
				sellerId: 2,
				category: 'Shoes',
			},
			{
				name: 'Timberlands',
				imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
				price: 200,
				sellerId: 2,
				category: 'Shoes',
			},
			{
				name: 'Black Jean Shearling',
				imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
				price: 125,
				sellerId: 3,
				category: 'Jackets',
			},
			{
				name: 'Blue Jean Jacket',
				imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
				price: 90,
				sellerId: 3,
				category: 'Jackets',
			},
			{
				name: 'Grey Jean Jacket',
				imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
				price: 90,
				sellerId: 3,
				category: 'Jackets',
			},
			{
				name: 'Brown Shearling',
				imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
				price: 165,
				sellerId: 3,
				category: 'Jackets',
			},
			{
				name: 'Tan Trench',
				imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
				price: 185,
				sellerId: 3,
				category: 'Jackets',
			},
      {
				name: "Blue Tanktop",
				imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
				price: 25,
        sellerId: 3,
        category: 'Womens'
			},
			{
				name: "Floral Blouse",
				imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
				price: 20,
        sellerId: 3,
        category: 'Womens'
			},
			{
				name: "Floral Dress",
				imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
				price: 80,
        sellerId: 3,
        category: 'Womens'
			},
			{
				name: "Red Dots Dress",
				imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
				price: 80,
        sellerId: 3,
        category: 'Womens'
			},
			{
				name: "Striped Sweater",
				imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
				price: 45,
        sellerId: 3,
        category: 'Womens'
			},
			{
				name: "Yellow Track Suit",
				imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
				price: 135,
        sellerId: 3,
        category: 'Womens'
			},
			{
				name: "White Blouse",
				imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
				price: 20,
        sellerId: 3,
        category: 'Womens'
			},
      {
				name: "Camo Down Vest",
				imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
				price: 325,
        sellerId: 4,
        category: 'Mens'
			},
			{
				name: "Floral T-shirt",
				imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
				price: 20,
        sellerId: 4,
        category: 'Mens'
			},
			{
				name: "Black & White Longsleeve",
				imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
				price: 25,
        sellerId: 3,
        category: 'Mens'
			},
			{
				name: "Pink T-shirt",
				imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
				price: 25,
        sellerId: 4,
        category: 'Mens'
			},
			{
				name: "Jean Long Sleeve",
				imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
				price: 40,
        sellerId: 4,
        category: 'Mens'
			},
			{
				name: "Burgundy T-shirt",
				imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
				price: 25,
        sellerId: 4,
        category: 'Mens'
			},

		]);
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	},

	down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Products', null , {});
  }
};
