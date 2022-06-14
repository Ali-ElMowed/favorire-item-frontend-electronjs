let category_title = document.getElementsByClassName("category-brief-title")[0];
let signin = document.getElementsByClassName("signin-nav")[0];
let categories_brief = document.getElementById('categories-brief');
let category_brief = document.getElementById('category-brief');
let category_brief_items = document.getElementById('category-brief-items');
let category_brief_title = document.getElementById('category-brief-title');
let brief_item_card = document.getElementById("brief-item-card");
let brief_item_name = document.getElementById("brief-item-name");

// console.log("ahsahsh");
// console.log("ahsahsh"); 
for(let i=0 ; i<=3; i++){
    console.log("hahfhasf");

axios({
    method: 'get',
    url: 'http://localhost:8000/api/get-items/'+i,
}).then(function (response) {
    console.log(response.data.data);
    let cat_name = response.data.data.cat_name;
    let items = JSON.stringify(response.data.data.items);
    
    // category_brief_title.innerHTML = cat_name;;

    for(let i=0; i<response.data.data.items.length;i++){
        console.log(response.data.data.items[i].item_name)
        
         let item=`
         <hr>
         <div class="category-brief ">
           <div class="category-brief-title">${cat_name}</div>
           <div class="category-brief-items">
             <div class="brief-item-card">
               <img src="./assets/images/iphone.jpg" alt="">
               <div class="brief-item-name"> ${response.data.data.items[i].item_name}</div>
             </div>
        </div>




        
         `;
        category_brief_items.innerHTML+=item;

    }

})
}
