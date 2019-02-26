jQuery(function(){ 
    var searchBar = $('.search-bar');
    var serch = $('.search');
    var arr = ['test','apple','garage']
    $('.checkbox').click(WhatIsSide);
    $('#search').click(OpnSearch);
    $('#close').click(CloseSearch);
   

   function OpnSearch () {
    serch.css({'top' : '0px'});
    searchBar.select();
   }
   function CloseSearch () {
    serch.css({'top' : '-100px'});
   }
   
    function WhatIsSide ()  {
    var side =  $('.checkbox').prop('checked');
    if ( side == false) {
         $('body').css({ 
            'color' : 'white',
            'background' : 'black'
             })
    }
    else 
    {
        $('body').css({ 
            'color' : 'black',
            'background' : 'white'
            }) 
    }};
 });