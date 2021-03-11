$(document).ready(function() {
    $('#page').fadeIn(2000);
    $('.carousel').carousel({
       //interval:false
   }); 
 
   new WOW().init();
   
   
 
   $('#toggleMenu').on('click', function () {
    $("#cu-overlay").toggleClass("overlay-visible");

       if ($(this).hasClass('js-open')) {
        
           $('#headermainav > ul > li:not(#toggleMenu)').removeClass('js-showElement');
           $(this).removeClass('js-open');
 
           $(this).attr('aria-expanded', false);
 
       } else {
            $('.levelone-dropdown').css('display','none');
            $('.leveltwo-dropdown').css('display','none');
            $('.menu-item').removeClass('js-openSubMenu');
           $('#headermainav > ul > li:not(#toggleMenu)').addClass('js-showElement');
           $(this).addClass('js-open');
 
           $(this).attr('aria-expanded', true);


 
       }
 
       return false;
   });
 
 
   if ($(window).width() <= 767) {
    
   $('.leveltwo-dropdown').addClass('menushows');

     $('li:has("ul") > a').append('<span class="moreicon"></span>');
   
     $('li:has("ul")').on('click', function (e) {
        
        if ($(this).children('a').hasClass('menu-item')) {
            
            $(this).children('a').addClass('js-openSubMenu');

            $(this).children('.levelone-dropdown').slideToggle('js-showElement'); 
            $(this).children('.leveltwo-dropdown').css('display','block');  
        } 
        
     
        else if ($(this).children('a').hasClass('childmenu-item')){
            
            $(this).parent('.levelone-dropdown').slideToggle('js-showElement');   

            $(this).children('.leveltwo-dropdown').css('display','block');
        }

      


    });

    $('.menu-item').on('click', function (e) {
        $(this).parent().siblings().children('a').removeClass('js-openSubMenu');
        $(this).parent().siblings().children('a').removeClass('arrow');
        $(this).parent().siblings().children('.levelone-dropdown').css('display','none');
     
        $(this).addClass('js-openSubMenu');
        $(this).toggleClass('arrow');
    });

    $("#cu-overlay").click(function() {
       
        $(this).removeClass("overlay-visible");
        $('#headermainav > ul > li:not(#toggleMenu)').removeClass('js-showElement');
        $('#toggleMenu').removeClass('js-open');

        $('#toggleMenu').attr('aria-expanded', false);
      });
 
    
   }
   
  
   if ($(window).width() > 768) {
   
     $('li:has("ul")').on('mouseover  mouseleave', function (e) {
 
         if (e.keyCode === 9 | e.type === 'mouseover') {
   
             $(this).children('ul').removeClass('js-hideElement');
             $(this).children('ul').addClass('js-showElement');
         }
   
   
         if (e.type === 'mouseleave') {
   
             $(this).children('ul').removeClass('js-showElement');
             $(this).children('ul').addClass('js-hideElement');
         }
   
     });
   
     
   }
 
 
 
   // $('li > ul > li:last-child > a').on('keydown', function (e) {
   //     if ((e.keyCode == 9) && $(this).parent('li').children('ul').length == 0) {
 
   //         $(this).parent('li').parent('ul').removeClass('js-showElement');
   //         $(this).parent('li').parent('ul').addClass('js-hideElement');
 
   //         if ($(this).parent('li').parent('ul').parent('li').parent('ul').parent('li').children('ul').length > 0
   //             && $(this).parent('li').parent('ul').parent('li').is(':last-child')) {
 
   //             $(this).parent('li').parent('ul').parent('li').parent('ul').removeClass('js-showElement');
   //             $(this).parent('li').parent('ul').parent('li').parent('ul').addClass('js-hideElement');
   //         }
 
   //     }
 
   // });
 
  $(".lazyloadimg").removeAttr("src");
   const targets = document.querySelectorAll('.lazyloadimg');
   
 
 const lazyLoad = target => {
     const io = new IntersectionObserver((entries, observer) => {
         //console.log(entries)
         entries.forEach(entry => {
             
 
             if (entry.isIntersecting) {
                 const img = entry.target;
                 const src = img.getAttribute('data-lazy');
 
                 img.setAttribute('src', src);
                 img.classList.add('fade');
 
                 observer.disconnect();
             }
         });
     });
 
     io.observe(target)
 };
 
 targets.forEach(lazyLoad);
 
  if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
     $(".lazyloadimg").attr("src");
  }
 
 
  
   $(".ogfarm-main.smartsgriculture .tabsmainsecs button.menus").click(function(){
     $(".ogfarm-main.smartsgriculture .tabsmainsecs ul.nav.nav-tabs").toggleClass("open");;
   });

   $('header li .menu-item').click(function(){
       console.log("clicked");
    $(this).addClass('highlight');
  })

  
  function pageLoad() {
    var loc = window.location.href.split('/');
    var page = loc[loc.length - 1];
    $('header ul  a').each(function (i) {
        var href = $(this).attr('href');
        if (href.indexOf(page) !== -1) {
            $('ul  li.menu-active').removeClass('menu-active');
            $(this).parent().addClass('menu-active');

        }
    });

    $('header ul  li ul li.menu-active').each(function (i) {
            $(this).parent().addClass('active-ul').parent().addClass("menu-active").siblings().removeClass("menu-active");
    });

    $('header li.menu-active .leveltwo-dropdown').each(function (i) {
        $(this).parent().parent().parent().addClass("menu-active").siblings().removeClass("menu-active");
    });

}
pageLoad();
// http://jsfiddle.net/L94N6/4/

// $('#menu').find('li').click(function(){
  
//     // //removing the previous selected menu state
//     // $('#menu').find('li.menu-active').removeClass('menu-active');

//      //is this element from the second level menu?
//      if($(this).closest('ul').hasClass('levelone-dropdown')){
        
//           $(this).parents('li').addClass('menu-active');

//      //this is a parent element
//      }else{
//           $(this).addClass('menu-active');
//      }
//  });



 });


 $(window).on('load', function(){
  
$('header .navbar').find('.active').removeClass('active');

});


