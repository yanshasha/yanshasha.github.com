/**
 * @author yanshasha
 */
$('.show-en').on('click',function(){
    $('.en').toggle();
    $(this).toggleClass('active');
});

$('.show-cn').on('click',function(){
    $('.cn').toggle();
    $(this).toggleClass('active');
});