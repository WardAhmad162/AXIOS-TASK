
const urlParam=new URLSearchParams(window.location.search)
let productID=urlParam.get('pId')

async function getProduct(){
    const response=await axios.get(`https://dummyjson.com/products/${productID}`)
    const data=response.data
    let product=data
    console.log(data)
    let {brand,images,title,price,rating}=product
    document.querySelector('.product').innerHTML=`
    <div>
    <h2>${title}</h2> 
    <span>${brand}</span>
    <img src="${images[0]}"/>
    <div class="more">
    <span>Price: ${price}$</span>
    <span>Rating: ${rating}</span>
    </div>
    </div>
    `
    
}


getProduct()

