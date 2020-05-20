import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2018',
        description: 'Leaf rake with 48-inch wooden handle',
        price: 19.95,
        starRating: 3.2,
        imageUrl: 'assets/images/leaf_rake.png',
        tags: ['rake', 'leaf', 'yard', 'home']
      },
      {
        id: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2018',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'assets/images/garden_cart.png'
      },
      {
        id: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2018',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4.8,
        imageUrl: 'assets/images/hammer.png',
        tags: ['tools', 'hammer', 'construction']
      },
      {
        id: 8,
        productName: 'Saw',
        productCode: 'TBX-0022',
        releaseDate: 'May 15, 2018',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        starRating: 3.7,
        imageUrl: 'assets/images/saw.png'
      },
      {
        id: 10,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2018',
        description: 'Standard two-button video game controller',
        price: 35.95,
        starRating: 4.6,
        imageUrl: 'assets/images/xbox-controller.png'
      },
      {
        id: 12,
        productName: 'Leaf Blower',
        productCode: 'GDN-0012',
        releaseDate: 'March 15, 2018',
        description: 'Leaf blower with 48-inch wooden handle',
        price: 29.95,
        starRating: 3.5,
        imageUrl: 'assets/images/leaf_rake.png',
        tags: ['blower', 'leaf', 'yard', 'home']
      },
      {
        id: 20,
        productName: 'Garden Tool',
        productCode: 'GDN-0032',
        releaseDate: 'March 2, 2019',
        description: 'Large Garden Tool ',
        price: 12.99,
        starRating: 4.2,
        imageUrl: 'assets/images/garden_cart.png'
      },
      {
        id: 51,
        productName: 'Screwdriver',
        productCode: 'TBX-1123',
        releaseDate: 'May 11, 2018',
        description: 'Real good screwdriver',
        price: 18.9,
        starRating: 4.8,
        imageUrl: 'assets/images/hammer.png',
        tags: ['tools', 'hammer', 'construction']
      },
      {
        id: 81,
        productName: 'Toothbrush',
        productCode: 'TBX-2344',
        releaseDate: 'May 1, 2015',
        description: '2-inch toothbrush',
        price: 1.55,
        starRating: 4.7,
        imageUrl: 'assets/images/saw.png'
      },
      {
        id: 100,
        productName: 'Video Game ',
        productCode: 'GMG-5546',
        releaseDate: 'October 5, 2014',
        description: 'New and exciting video game',
        price: 5.95,
        starRating: 1.6,
        imageUrl: 'assets/images/xbox-controller.png'
      }
    ];
    return { products };
  }
}

