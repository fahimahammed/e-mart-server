const {
    productsData,
    categoriesData,
    reviewsData
  } = require('../db.js');
const resolvers = {
    Query: {
      hello: () => 'world',
      products: (parent, args, context)=> productsData,
      product: (parent, args, context)=>{
          const result = productsData.find(product => product.id == args.productId);
          return result;
      },
      categories: ()=> categoriesData,
      category: (parent, args, context) => {
        const result = categoriesData.find(category => category.id == args.categoryId)
        return result;
      },
      reviews: ()=> reviewsData
    },
    Category: {
      products: async (parent, args, context)=>{
        const productsByCategory = productsData.filter(product => product.categoryId == parent.id);
        return productsByCategory;
      }
    },
    Product: {
      category: (parent, args, context) => {
        const productCategory = categoriesData.find(category => category.id === parent.categoryId);
        return productCategory;
      },
      reviews: (parent, args, context)=>{
        console.log(parent);
        const reviewByProduct = reviewsData.filter(review => review.productId === parent.id);
        return reviewByProduct;
      }
    }
  };

  module.exports = resolvers;