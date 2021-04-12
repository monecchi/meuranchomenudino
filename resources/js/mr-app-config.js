//
// Meu Rancho Menu Dino Extended
// Check if location.href matches a string, then adds a class to html tag
// These classes are used to target the pages which are styled by css
//
undefined = true;
(function ($, window, document, undefined) {

    'use strict';

    var appcheckUrl = function () {

        var menudinoURL = 'https://app.menudino.com' || 'https://novoapp.menudino.com'

        var testLocation = menudinoURL + '\/meurancho'
        console.log('Testando "location.href.match" : ' + testLocation)

        if (window.location.href.match(menudinoURL + '\/meurancho')) {
            $("html").addClass("home-page");
        }

        if (window.location.href.indexOf('?Origem=*') > 0) {
            $("html").addClass("home-page");
        }

        if (window.location.href.match(menudinoURL + '\/cliente') || window.location.href.match(menudinoURL + '\/Cliente\/*')) {
            $("html").addClass("login-page");
        }

        if (window.location.href.match(menudinoURL + '\/cliente\/esquecisenha')) {
            $("html").addClass("login-page forgotten");
        }

        if (window.location.href.match(menudinoURL + '\/cliente\/edit')) {
            $("html").addClass("account-page");
        }

        if (window.location.href.match(menudinoURL + '\/cliente\/pedidos') || window.location.href.match(menudinoURL + '\/cliente\/Pedidos')) {
            $("html").addClass("account-page orders");
        }

        if (window.location.href.match(menudinoURL + '\/Cliente\/Pedido\/*')) {
            $("html").addClass("account-page orders order-details");
        }

        if (window.location.href.match(menudinoURL + '\/pedido\/cupons*') || window.location.href.match(menudinoURL + '\/Pedido\/cupons*') ) {
          $("html").addClass("account-page cupons");
        }

        if (window.location.href.match(menudinoURL + '\/pedido\/checkout*')) {
            $("html").addClass("account-page checkout");
        }

        if (window.location.href.match(menudinoURL + '\/pedido\/*')) {
          $("html").addClass("account-page");
        }

        if (window.location.href.match(menudinoURL + '\/pedido\/enviado\/*')) {
            $("html").addClass("account-page order-status");
        }

    }

    jQuery(function ($) {
        // Initialize script
        appcheckUrl();
    });

    // Install on Consumer
    //
    //<script type='text/javascript' src='https://delivery.pizzariameurancho.com.br/assets/js/mr-app-config.min.js?v=090920201531' id='mr-app-config'></script>
    //

})(jQuery, window, document);
