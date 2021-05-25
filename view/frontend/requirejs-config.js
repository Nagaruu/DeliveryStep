var config = {
    'config': {
        'mixins': {
           'Magento_Checkout/js/view/shipping': {
               'AHT_AddStepLogin/js/view/shipping-payment-mixin': true
           },
           'Magento_Checkout/js/view/payment': {
               'AHT_AddStepLogin/js/view/shipping-payment-mixin': true
           }
       }
    }
}