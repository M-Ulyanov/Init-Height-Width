(function($){

	$.fn.initHeightWidth = function(options){

		var defaults = $.extend({
	    oneHeight : false,
      oneWidth : true,
      childElem : null,
   	 	}, options);

   	return this.each(function(){

        var choiceChild = $(this).find(defaults.childElem);
        var allChild = $(this).children();

		  if(defaults.oneHeight){
        var height = 0;

        if(!defaults.childElem){
          $(allChild).each(function(){
            var thisHeight = $(this).height();
            matchHeight(thisHeight);
        });
        }
        else{
          $(choiceChild).each(function(){
            var thisHeight = $(this).height();
            matchHeight(thisHeight);
        });
        }

        if(!defaults.childElem){
          $(allChild).css({
          'height': height,
          }); 
        }
        else{
          $(choiceChild).css({
          'height': height,
          });
        }
      }
      if(defaults.oneWidth){
        var width = 0;
      }

      if(!defaults.childElem){
          $(allChild).each(function(){
            var thisWidth = $(this).width();
            matchWidth(thisWidth);
        });
        }

        else{
          $(choiceChild).each(function(){
            var thisWidth = $(this).width();
            matchWidth(thisWidth);
        });
        }

        if(!defaults.childElem){
          $(allChild).css({
          'width': width,
          }); 
        }
        else{
          $(choiceChild).css({
          'width': width,
          });
        }

      if(!defaults.oneHeight && !defaults.oneWidth){
        alert('Сообщение плагина: initHeightWidth\nВозникла ошибка!\nНеобходимо указать хотя бы один из параметров в true!')
      }

      function matchHeight(currentHeight){
        if(currentHeight > height){
            height = currentHeight; 
          };
        };

      function matchWidth(currentWidth){
        if(currentWidth > width){
            width = currentWidth; 
          };
        };
		});

	};

})(jQuery)


//Ну вроде работает!
