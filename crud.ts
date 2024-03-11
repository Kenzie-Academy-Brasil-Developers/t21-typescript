interface Product{
    id: number;
    name: string;
    price: number;
}

let productList: Product[] = [];

let id = 1;

function addProduct(name: string, price: number){
    const newProduct: Product = { 
        id,
        name,
        price,
    }

    productList.push(newProduct);
    //productList = [...productList, newProduct];
}

function removeProduct(id: number){
    const index = productList.findIndex(product => product.id === id);

    productList.splice(index, 1);
}