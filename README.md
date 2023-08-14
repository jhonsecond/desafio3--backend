tercer desafio de backend para el curso de Coderhouse

# Funcionalidades:

El propósito principal del código es proporcionar endpoints que permitan a los usuarios obtener información sobre productos desde un archivo JSON.

El servidor tiene dos endpoints principales:

1/products: Este endpoint permite a los usuarios obtener información sobre productos. Pueden solicitar todos los productos disponibles o limitar la cantidad de productos que se devuelven utilizando el parámetro de consulta limit. Si no se proporciona ningún valor de límite, se devolverán todos los productos disponibles.

2/products/:pid: Este endpoint permite a los usuarios obtener información sobre un producto específico según su ID. El ID del producto se proporciona como un parámetro en la URL. Si el producto con el ID dado existe en el archivo JSON, se devuelve la información de ese producto. Si no se encuentra el producto, se devuelve un mensaje de error.
