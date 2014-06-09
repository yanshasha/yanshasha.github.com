/**
 * @author yanshasha
 */
$('.show-en').on('click',function(){
    if($('.show-en').hasClass('active')){
        $('.en').hide();
        $('.show-en').html("中英对照").removeClass('active');
    }else{
        $('.en').show();
        $('.show-en').html("隐藏英文").addClass('active');        
    }
    
});

// $('.show-ch').on('click',function(){
    // $('.en').hide();
    // $('.ch').show();
    // $('.show-en').removeClass('active');
    // $('.show-both').removeClass('active');
    // $(this).addClass('active');
// });
// 
// $('.show-both').on('click',function(){
    // $('.ch').show();
    // $('.en').show();
    // $('.show-en').removeClass('active');
    // $('.show-both').removeClass('active');
    // $(this).addClass('active');
// });