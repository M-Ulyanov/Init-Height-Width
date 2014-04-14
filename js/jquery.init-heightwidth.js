(function($){

	$.fn.initHeightWidth = function(options){

		var defaults = $.extend({
	    oneHeight : true,
      realOneHeight : false,
      childElem : false,
   	 	}, options);

   	return this.each(function(){
		  if(defaults.oneHeight){

        var choiceChild = $(this).find(defaults.childElem);
        var allChild = $(this).children();
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

      function matchHeight(currentHeight){
        if(currentHeight > height){
            height = currentHeight; 
          };
        };
		});

	};

})(jQuery)
