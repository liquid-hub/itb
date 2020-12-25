$(document).ready(function() {
  EventBus.subscribe(['order_ready:insales:cart', 'add_items:insales:cart:light'], function(cart) {
    $(".js-dynamic_basket").html(templateLodashRender(cart, "dynamic_basket"));
    // инициализация items
    InSalesUI.bindUpdateCart($(".js-dynamic_basket [data-cart-form]"));
  });

  EventBus.subscribe('update_items:insales:cart:light', function (cart) {
    if (cart.order_lines.length == 0) {
      $(".js-dynamic_basket").html(templateLodashRender(cart, "dynamic_basket"));
    }else{
      $.each(cart.order_lines, function(index, line) {
        $('[data-item-id="'+line.id+'"]').find('[data-cart-item-quantity-text]').text(line.quantity);
      });
    }
  });

  EventBus.subscribe('change_quantity:insales:item', function (data) {
    if (data.action.quantity.current) {
      $('[name="cart[quantity]['+data.id+']"]').val(data.action.quantity.current)
    }
  });
});
