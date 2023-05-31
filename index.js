
async function fetchProducts(){
    try{
     let productResponse = await fetch("https://dummyjson.com/products")
     let fixedProductData = await productResponse.json(); 
console.log(fixedProductData)
     let actualProjectData = fixedProductData.products
     

   

     return actualProjectData;
    
     
   }catch(error){
        console.error(error)
    }
}
async function fetchPosts(){
    try{
        let postResponse = await fetch('https://dummyjson.com/posts')
        let fixedPostData = await postResponse.json()
     console.log(fixedPostData);
        let actualPostData = fixedPostData.posts
        return actualPostData;
    }catch(error){
        console.error(error);
    }
}


async function renderProductData(){
    let productContainer = document.getElementById('products-container')
    
    let myProducts = await fetchProducts();
    
    //  console.log(myProducts)
    for(let i = 0; i < myProducts.length; i++){
        let justProducts = myProducts[i]
    // console.log(justProducts)
        let newProductElement = document.createElement('p')
        newProductElement.innerText = justProducts.title;
        // newProductElement.innerText = justProducts.description;
        newProductElement.style.border = "2px solid black";
        

        productContainer.appendChild(newProductElement)
    }
}
async function renderPostsData(){
    let postsContainer = document.getElementById('posts-container')
    
    let myPosts = await fetchPosts();
    
    
    for(let i = 0; i < myPosts.length; i++){
        let justPosts = myPosts[i]
    
        let newPostsElement = document.createElement('p')
        newPostsElement.innerText = justPosts.title;
        // newProductElement.innerText = justProducts.description;
        newPostsElement.style.border = "2px solid blue";
        

        postsContainer.appendChild(newPostsElement)
    }
}

renderProductData();
renderPostsData();