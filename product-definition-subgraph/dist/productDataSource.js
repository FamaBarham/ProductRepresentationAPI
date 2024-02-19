import { RESTDataSource } from "@apollo/datasource-rest";
class ProductAPI extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "https://b8cf1dbb-dc3a-43b1-89f4-8ff59bb4f891.mock.pstmn.io/";
    }
    async getAllProducts() {
        const result = await this.get('');
        return result.data;
    }
}
export default ProductAPI;
