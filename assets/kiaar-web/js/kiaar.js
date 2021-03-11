$(document).ready(function() {
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

  

$("div#accordion .dropdown-toggle").click(function(){
    $("div#accordion ul.dropdown-menu").css("display", "block");
  });  

 
  $(".ogfarm-main.smartsgriculture .tabsmainsecs button.menus").click(function(){
    $(".ogfarm-main.smartsgriculture .tabsmainsecs ul.nav.nav-tabs").toggleClass("open");;
  });


});

//  $(window).on('load', function(){
//     $('header').children().removeClass('menu-active');

// });


$(function()
 {
   $('#headermainav ul li a').filter(function(){return this.href==location.href}).parent().addClass('highlight').siblings().removeClass('highlight')
   $('#headermainav ul li a').click(function(){
   
     $(this).parent().addClass('highlight').siblings().removeClass('highlight')  
   })
   $('#headermainav ul li ul li.highlight a').parents().each(function(){
     if ($(this).is('li'))
     {
       $(this).addClass("highlight");
     }                            
   });
 });


