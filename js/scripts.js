$(function() {
    // turns options into buttons
    $("select option").unwrap().each(function() {
        var btn = $(this).addClass("btn");
        // var btn = $('<option class="btn" value="$">'+$(this).text()+'</option>');
        if($(this).is(':checked')) $(this).addClass('on');
        $(this).replaceWith(btn);
        if($(this).prop('checked', false)) $(this).removeClass('on');
    //whichever box is checked (or has the class of "on"), get that value and use it
    });

    $(document).on('click', '.btn', function() {
        $('.btn').removeClass('on');
        $(this).addClass('on');
    });

    // $(document).ready(function() {
    //     $(".btn").removeClass('on');
    // });

    // changing options from select menu into buttons
    var selectTip = $('.tip-select').attr('name');

    $(".tip-select").unwrap().each(function() {
        var btn = $('<div class="btn">'+$(this).text()+'</div>');
        if($(this).is(':checked')) btn.addClass('on');
        $(this).replaceWith(btn);
    });

    var on = "";

    $(document).on('click', '.btn', function() {
        $('.btn').removeClass('on');
        $(this).addClass('on');
        var on = $("this, .on").val();
        // $('input[name="'+selectTip+'"]').val($(this).text());
    });


    console.log( $("#tip.on").val() );


    // calculating
    $(function(total_calc) {
        var bill = $("#bill input").val();
        var tip = $()

    });



    
});