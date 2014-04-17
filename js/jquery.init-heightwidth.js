(function($){

$.fn.initHeightWidth = function(options){

    //Настройки по умолчанию
    var defaults = $.extend({
  	  oneHeight : true,
  	  oneWidth : null,
      childElem : null,
    }, options);

   return this.each(function(){

      //Определение переменных
      var param = 0;
      var choiceChild = $(this).find(defaults.childElem);
      var allChild = $(this).children();

      //Проверка параметров
      if(defaults.oneWidth){
        var width = 0; 
        param++;
      };
      if(defaults.oneHeight){
        var height = 0;
        param++;
      };

      //Вызов ошибки
      if(param < 1) errorMessage();

      //Ветка для всех потомков
      if(!defaults.childElem){
        if(defaults.oneWidth){
          $(allChild).each(function(){
            matchWidth($(this).width());
          })
          .css({
            'width': width,
          });
        };
        if(defaults.oneHeight){
            $(allChild).each(function(){
            matchHeight($(this).height());
        })
        .css({
          'height': height,
          }); 
        }; 
      }

      //Ветка только для выбранных
      else{      
        if(defaults.oneWidth){
          $(choiceChild).each(function(){
            matchWidth($(this).width());
          })
          .css({
            'width': width,
          });
        };
        if(defaults.oneHeight){
          $(choiceChild).each(function(){
          matchHeight($(this).height());
        })
        .css({
          'height': height,
          }); 
        }; 
      };

      //Функции плагина
      function errorMessage(){
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


