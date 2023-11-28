$(document).ready(function(){
    if(localStorage.getItem("cartItem")==null){
        localStorage.setItem("cartItem","")
    }else{
        updateCartPopup();
    }
    $(document).on("click",".add-cart",function(){
        let cartItem = localStorage.getItem("cartItem");
        if(cartItem==""){
            cartItem = [];
        }else{
            cartItem = JSON.parse(cartItem)
        }
        let item ={
            image:"",
            title:"",
            qty:0,
            price:0
        }
        item.image= $(this).parents(".product-details").find(".img-src").val();
        item.title =  $(this).parents(".product-details").find(".product-title").text();
        item.qty = 1;
        let amount= $(this).parents(".product-details").find(".price-amount").text();
        item.price  = parseFloat(amount);

        let cartUpdated = false;
        cartItem.forEach((ele)=>{
            if(ele.title == item.title){
                ele.qty = ele.qty+1;
                cartUpdated = true;
            }
        })
        if(!cartUpdated){
            cartItem.push(item);
        }
        localStorage.setItem("cartItem",JSON.stringify(cartItem));
        updateCartPopup();

    })

    $(document).on("click",".search-add-to-cart",function(){
        let cartItem = localStorage.getItem("cartItem");
        if(cartItem==""){
            cartItem = [];
        }else{
            cartItem = JSON.parse(cartItem)
        }
        let item ={
            image:"",
            title:"",
            qty:0,
            price:0
        }
        item.image= $(this).parents(".row-item").find(".img-src").val();
        item.title =  $(this).parents(".row-item").find(".product-title").text();
        item.qty = 1;
        let amount= $(this).parents(".row-item").find(".price-amount").text();
        item.price  = parseFloat(amount);

        let cartUpdated = false;
        cartItem.forEach((ele)=>{
            if(ele.title == item.title){
                ele.qty = ele.qty+1;
                cartUpdated = true;
            }
        })
        if(!cartUpdated){
            cartItem.push(item);
        }
        localStorage.setItem("cartItem",JSON.stringify(cartItem));
        updateCartPopup();

    })

    $(document).on("click",".delete",function(){
        let cartItem = localStorage.getItem("cartItem");
        cartItem = JSON.parse(cartItem);
        tempCartItem = [];
        let title = $(this).parents(".row-item").find(".title").text();
        title = title.trim();
        cartItem.forEach((ele)=>{
            if(ele.title != title){
                tempCartItem.push(ele); 
            }
        })
        localStorage.setItem("cartItem",JSON.stringify(tempCartItem));
        $(this).parents(".row-item").remove();
        updateCartPopup(); 
    })

    function updateCartPopup(){
        let cartItem = localStorage.getItem("cartItem");
        if(cartItem!=""){
            cartItem = JSON.parse(cartItem);
            if(cartItem.length>0){
                let cartContent = "";
                let total = 0;
                let totalQty = 0;
                cartItem.forEach((ele)=>{
                    total = total+(ele.qty*ele.price);
                    totalQty = totalQty+ele.qty;
                    cartContent+=`<div class="row-item"> 
                        <div class="image">
                            <img src="image/${ele.image}" alt="" srcset="">
                        </div>
                        <div class="title">
                            ${ele.title}
                        </div>
                        <div class="qty">
                            ${ele.qty}
                        </div>
                        <div>$${(ele.qty*ele.price).toFixed(2)}</div>
                        <span class="delete">x</span>
                    </div>`
                })
                $(".cart-qty").text(totalQty)
                $("#cartBucket").html(cartContent)
                $(".total-container").html(`<div>total</div><div class="price-text">$${total.toFixed(2)}</div>`);
                $("#checkoutBtn").css({"opacity":"1","pointer-events": "all"})
                $(".shopping-cart .content").css({"display":"none"})
                $(".total-container").css({"display":"flex"})
            }else{
                $(".cart-qty").text(0)
                $("#checkoutBtn").css({"opacity":"0.5","pointer-events": "none"})
                $(".shopping-cart .content").css({"display":"block"})
                $(".total-container").css({"display":"none"})
            }
           
        }
    } 

    $(document).on("click","#checkoutBtn",function(){
        location.href = "payment.html"
    })

    $(document).on("keyup","#search-box",function(){
       let input = $(this).val().toLowerCase();
       let output = "";
       $(".product-card").each(function(){
            let ele = $(this).find(".product-details");
            let image = $(ele).find(".img-src").val();
            let title = $(ele).find(".product-title").text().toLowerCase();
            let pricehtml = $(ele).find(".product-price").html();
            let htmlContent = $(ele).html()
            if(title.includes(input)){
                output+=`<div class="row-item">
                <div class="image">
                    <img src="./image/${image}" alt="" srcset="">
                </div>
                <input type="hidden" class="img-src" value="${image}">
                <div class="product-title">${title}</div>
                <div class="price">${pricehtml}</div>
                <div class="search-add-to-cart btn">+</div>
                </div>`;
            }
           
            console.log("debug ",$(ele).html());
            
       });
       $(".search-container-inner").html(output)
    })
    console.log("debug hello")
})