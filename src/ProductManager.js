class ProductManager {
    constructor() {
      // Inicializa la lista de productos con algunos datos de ejemplo
      this.products = [
        { id: 1, name: 'Producto 1', price: 10.99 },
        { id: 2, name: 'Producto 2', price: 19.99 },
        { id: 3, name: 'Producto 3', price: 7.49 },
        
      ];
    }
  
    async getAllProducts(limit) {
      // Devuelve todos los productos o un número limitado de productos si se especifica "limit"
      if (limit) {
        return this.products.slice(0, limit);
      }
      return this.products;
    }
  
    async getProductById(productId) {
      // Busca un producto por su ID y lo devuelve, o null si no se encuentra
      const product = this.products.find((p) => p.id === parseInt(productId));
      return product || null;
    }
  }
  
  module.exports = ProductManager;
  