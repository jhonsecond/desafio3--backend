const fs = require('fs').promises;

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async readProductsFromFile() {
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  async getProducts(limit) {
    const products = await this.readProductsFromFile();
    if (limit) {
      return products.slice(0, limit);
    }
    return products;
  }

  async getProductById(productId) {
    const products = await this.readProductsFromFile();
    return products.find(product => product.id === productId);
  }
}

module.exports = ProductManager;
