


let calendar = $('calendar');



$(document).ready(function(){
    $(".calendar").focus(function(){
        $(this).css("background-color", "#7D9E41");
        $(this).css("color", "white");
    });
    $(".calendar").focusout(function(){
        $(this).css("background-color", "white");
        $(this).css("color", "#737583");
    });



    
    $(".circleBtn").focus(function(){
        $(this).css("background-color", "#7D9E41");
     
    });
    $(".circleBtn").focusout(function(){
        $(this).css("background-color", "#C0BEBE");
      
    });

   
        $('.colorSizeBtn').click(function(){
            $(this).toggleClass("borderBtn"),
            $(this).children().toggleClass("checked")

        })

       
    $(".searchButton").focus(function(){
        $('.hiddenInput').css("display", "inline-flex");
        $('.hiddenInput').focus();
        $('.searchButton').css("display", "none");
     
    });
    $(".hiddenInput").focusout(function(){
        $('.hiddenInput').css("display", "none");
        $('.searchButton').css("display", "block");
      
    });

 
    
    

    let count = 0;
   
    
    $('.button').click(function(){
      if(count <= 3){
        count +=1;
      }
        
        if(count == 1){
              $('.one').css({'background':'#7D9E41'})
        }
       else if(count == 2){
            $('.two').css({'background':'#7D9E41'})
      }
      else if(count == 3){
        $('.three').css({'background':'#7D9E41'})
  }
  else if(count == 4){
    $('.four').css({'background':'#7D9E41'})
}
 
   console.log(count)
 

    })
   

    $('.clear').click(function(){
      
      if(count >=1){
        count --;
      }
      
        if(count == 3){
            $('.four').css({'background':'#D8D8D8'})
        }
        else if(count == 2){
            $('.three').css({'background':'#D8D8D8'})
        }
        else if(count == 1){
            $('.two').css({'background':'#D8D8D8'})
        }
        else if(count == 0){
            $('.one').css({'background':'#D8D8D8'})
        }
        console.log(count)
    })

    
});






$(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3
  });


  
$(".regular2").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3
  });



  
  
$(".regular3").slick({
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3
  });
  
 

   
$(".regular4").slick({
     dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3
  });

  

// table
  