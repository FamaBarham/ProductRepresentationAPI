const resolvers = {
    Query: {
        products: (_, __, { dataSources }) => {
            return dataSources.productDefAPI.getAllProducts();
        }
    }
};
export default resolvers;
