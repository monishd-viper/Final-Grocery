$(document).ready(function(){
    if(localStorage.getItem("cartItem")!=null){
        let cart = localStorage.getItem("cartItem");
        if(cart.length>4){
            updateOrderSummary();
        }else{
            location.href = "home.html";
        }
        
    }else{
        location.href = "home.html";
    }

    function updateOrderSummary(){
        let cartItem = localStorage.getItem("cartItem");
        cartItem = JSON.parse(cartItem);
        let rowitem = "";
        let total = 0;
        let item = 0;
        cartItem.forEach((element) => {
            let price = (element.qty*element.price).toFixed(2);
            total+=element.qty*element.price;
            item+=1;

            rowitem+=`<div class="row-item">
                <div class="image">
                    <img src="./image/${element.image}" alt="" srcset="">
                </div>
                <div class="item-name">${element.title}</div>
                <div class="qty">${element.qty}</div>
                <div class="price">${price}</div></div>`;
        });

        $(".order-sumary-body .inner-container").html(rowitem);
        $(".order-summary-header .total-item").text(`(${item} items)`);
        $(".order-summary-footer .subtotal-amount").text('$'+total.toFixed(2))
        let tax = (total/100)*12;
        let shipping = (total/100)*5;
        $(".order-summary-footer .tax-amount").text('$'+tax.toFixed(2));
        $(".order-summary-footer .Shipping-amount").text('$'+shipping.toFixed(2))
        let grandTotal = total+tax+shipping;
        $(".order-summary-footer .grand-total-amount").text('$'+grandTotal.toFixed(2))
        

    }

    $(document).on("click","#payBtn",function(){
        let name = $("#name").val();
        let mail = $("#email").val();
        let filledDetail = {
            name:name,
            mail:mail
        }
        localStorage.setItem("filledDetail",JSON.stringify(filledDetail))
    })

    $(document).on("click","#confirmBtn",function(){
        let cartItem = localStorage.getItem("cartItem");
        localStorage.setItem("orderSuccessItem",cartItem);
        localStorage.removeItem("cartItem");
        if(localStorage.getItem("orderID")){
            let order = localStorage.getItem("orderID");
            order = parseInt(order)
            localStorage.setItem("orderID",order+1);
        }else{
            localStorage.setItem("orderID","101");
        }
        location.href = "order-success.html";
    })
})