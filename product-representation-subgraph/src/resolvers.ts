import { GraphQLError } from "graphql";

export const resolvers = {
    Query: {
      products: async(_, { id }, { dataSources }) => {
        const produits=  [{
          "id": 3,
          "attributes": {
              "Descriptif": "Promo Saint Valentin du 02 au 28 Février, les deux Nola XL sont à 68 900 Fcfa au lieu de 76 800 Fcfa et dans la limite du stock disponible.\n\n-     Ecran: 6,56 HD+;  Mémoire:  32Go de ROM et 2Go de Ram;  Batterie: 5000mAh; Camera: 5M+(8M+Q) ; \n-     Un séjour à Abidjan à gagner (1/4 de finale), des Smarts TV et des Maillots officiels de l'équipe nationale par tirage au sort.\n-     2 Coques de protection offertes dont 1 au couleur des lions\n-     1 Pass Internet de 4,5Go offerts: 2,5 Go puis 1Go/mois pendant 2 mois avec une validité de 7 jours, utilisable uniquement en 4G.\n\n",
              "Essentiel": "Découvrez le Smartphone Teranga aux couleurs des Lions avec son design exclusif et sa coque de protection customisée. Avec Android 12, 2 Go de Ram et 32 Go de mémoire interne, le Nola XL offrira aux clients des performances optimisées. Son large écran HD+ de 6,56 pouces et sa batterie de 5000 mA permettront aux clients de vivre une expérience unique. Un pass Internet de 4,5Go est offert aux clients prépayés : 2,5 Go puis 1Go/mois pendant 2 mois avec une validité de 7 jours, utilisable uniquement en 4G au #141#.",
              "Couleurs": "- blue\n- orange\n- green\n- red",
              "Images": "![nola-xl-promo-1.jpg](http://localhost:1337/uploads/nola_xl_promo_1_70e3bc267d.jpg)\n![nola-xl-promo-2_1.jpg](http://localhost:1337/uploads/nola_xl_promo_2_1_06f4c792e3.jpg)\n![nola-xl-vert-1.jpg](http://localhost:1337/uploads/nola_xl_vert_1_f42b19ad50.jpg)",
              "createdAt": "2024-02-15T10:57:21.671Z",
              "updatedAt": "2024-02-15T10:57:22.706Z",
              "publishedAt": "2024-02-15T10:57:22.700Z"
          }
      },
            ]
          //return dataSources.productsAPI.getProducts()
          return produits
      },
      productById: async(_, { id }, { dataSources }) =>{
          return dataSources.productsAPI.getProductsById(id)
      },
    },
   
};