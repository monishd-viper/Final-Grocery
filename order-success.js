$(document).ready(function(){
    updateOrderSummary()
    fillOrderDetail()
    function updateOrderSummary(){
        let cartItem = localStorage.getItem("orderSuccessItem");
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

    function fillOrderDetail(){
        let detail = localStorage.getItem("filledDetail");
        if(detail){
            detail= JSON.parse(detail);
            $(".thanks-header .user-name").text(detail.name);
        }

        let order= localStorage.getItem("orderID");
        if(order){
            $(".order-number").text(" #"+order+" ")
        }

    }
    $(document).on("click","#continueShoping",function(){
        location.href = "home.html"
    })
})