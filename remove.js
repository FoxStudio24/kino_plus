(function () {
    'use strict';


/* УДАЛЕНИЕ МУСОРА */

(function () {
    'use strict';

//Удаляем пункты левого меню и меняем порядок	
	function start() {
			$("[data-action=relise]").hide();
            $("[data-action=mytorrents]").hide();
		    $("[data-action=console]").hide();
			$("[data-action=about]").hide();
	}

//Удаляем пункты правого меню
Lampa.Settings.listener.follow('open', function (e) { 
if (e.name == 'main') { 
setTimeout(function() { 
$('div[data-component="parental_control"]').remove();
$('div[data-component="plugins"]').remove();
}, 5) } });

  
if(window.appready) start();
	else {
		Lampa.Listener.follow('app', function(e) {
			if(e.type == 'ready') {
				start();
			}
		});
	}

})();	
