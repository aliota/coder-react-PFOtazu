import products from '../products/products.js';

const fetchApi = ()=>{
    const ran = (Math.random() * 800) +1;
    return new Promise((resolve, reject) => {
        setTimeout((()=>{resolve(products)}),ran);    
    })
}

export default fetchApi



  