const typeDefs = `#graphql
  type Query {
    hello: String
    products: [Product]
    product(productId: ID!): Product 
    categories: [Category]
    category(categoryId: ID!): Category
    reviews: [Review]
  }

  type Product {
    id: ID
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    categoryId: String
    category: Category
    reviews: [Review]
  }

  type Category{
    id: ID
    name: String
    products: [Product]
  }

  type Review{
    id: ID
    title: String
    comment: String
    rating: Float
    productId: ID
  }
`;

module.exports = typeDefs;