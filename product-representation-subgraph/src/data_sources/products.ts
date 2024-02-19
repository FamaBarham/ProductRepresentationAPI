import { RESTDataSource, AugmentedRequest } from '@apollo/datasource-rest';
import { Product } from '../model.js';

export class ProductsDataSource extends RESTDataSource {
  override baseURL = 'http://localhost:1337/api/';
  private token ="b881c5aabbef4eb1ed8282c5a9e75eefc332b5632f115da8dbcca2932b483b0ad799766394c1f1647d28327aad4d0fda973b7eeaf0106515d1adac15d6011c44dd7d3590eb13e9cd79c04c815108cb6e0bc099d24a7054d60368381ebc10bdd1054970ba1602c622325cbc6494522a2e5a9a91fe812234998d5ec0cc9bc565a9" ;

  async getProductById(id: number): Promise<Product> {
    return this.get<Product>(`products/${id}`);
  }

  async getProducts(): Promise<Product[]> {
    const data = await this.get('products',{
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }
    );
    return data.data;
  }
}