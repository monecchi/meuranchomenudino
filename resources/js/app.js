/**
 * 
 * Meu Rancho Menu Dino Exntended
 * Adiciona funcionalidades ao MenuDino, basicamente ajustes.
 * Usado em conjunto com /resources/js/mr-app-config.js
 * 
*/
(function($) {
	
	'use strict';

		function MrCardapio() {
            var self = this;
            
            // Dino wrapper
            self.$dinoWrap = $('#main-wrapper');
        
			// Initialize scripts
		    self.init();
		    self.app_init();
        };

		MrCardapio.prototype = {

            // 
            // Initialize
            //
            init: function() {
                var self = this;
                // Initialize important stuff
            },

            //
            // Initialize scripts
            //
			app_init: function() {
			    var self = this;
                
                // Cardapio main wrapper
                self.$cardapioWrap = $('#cardapio');
                
                self.cardapioRemoveNumbersInit();
                self.cardapioChangeDinoLogo();
                self.cardapioMoveNavArrows();
                self.cardapioMoveAlerts();
            },

            //
            // Remove numeração das categorias do Cardápio no site
            // No Consumer, a numeração das categorias ajuda a estabelecer a ordem das mesmas
            // @param {string} selector - collection of items to loop
            //
            cardapioRemoveNumbers: function(selector) {
                var navItems = Array.from(document.querySelectorAll(selector));
                for (var i = 0, max = navItems.length; i < max; i++) {
                    navItems[i].innerHTML = navItems[i].innerHTML.replace(/\d[-]+/g, '');
                }
            },

            cardapioRemoveNumbersInit: function () {
                var self = this;
       
                // Init cardapioRemoveNumbers()
                var itemsNav = document.querySelectorAll('.nav-categorias li a');

                if (itemsNav.length) {
                    self.cardapioRemoveNumbers('.nav-categorias li a');
                    self.cardapioRemoveNumbers('.panel-title a');
                }
            },

            cardapioChangeDinoLogo: function() { 
                var self = this;

                var dinoLogo = document.querySelectorAll("img[src='/Content/Images/logo-vermelha.png']");
                //console.log(dinoLogo);
    
                if (dinoLogo.length) {
                    dinoLogo[0].src = 'https://pizzariameurancho.com.br/wp-content/uploads/2018/09/mr-icon-simple.svg';
                    dinoLogo[0].alt = 'Pizzaria Meu Rancho';
                    dinoLogo[0].className = 'meurancho-logo center-block img-responsive'; 
                }
            },

            cardapioMoveNavArrows: function() { 
                var self = this;

                var $arrowRight = $('#btn-categories-right');
                var $navCategories = $('.nav-categorias');
                
                if ($arrowRight.length) {
                    // Set nav-categorias right arrow as last element
                    $arrowRight.insertAfter($navCategories);
                }
            },

            cardapioMoveAlerts: function() { 
                var self = this;

                var $alert = $('.alert');
    
                if ($alert.length) {
                    // Append (move) each and every alert to body
                    $alert.each(function(index){
                        $(this).appendTo($('body'));
                    });                    
                }
            },
		};

        // Add core script to $.nmTheme so it can be extended
        $.mrCardapio = MrCardapio.prototype;


        jQuery(function() {
            // Initialize script
            new MrCardapio();
        });

})(jQuery);
