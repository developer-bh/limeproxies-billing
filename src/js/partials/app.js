$( document ).ready(function() {

    // Add amount active

    $('.add_amount a').on('click', function () {
        $('.add_amount a').removeClass('active');
        $(this).toggleClass('active');
    });

    // Saved cards active

    $('.saved_cards__title').on('click', function () {
        $(this).toggleClass('active');
        $('.new_cards__title').removeClass('active');
        $('.new_cards').find('.saved_info').slideUp();
        $(this).parent('.saved_cards').find('.saved_info').slideToggle();
        $('.saved_info__details').removeClass('active');
    });

    // New cards active

    $('.new_cards__title').on('click', function () {
        $(this).toggleClass('active');
        $('.saved_cards__title').removeClass('active');
        $('.saved_cards').find('.saved_info').slideUp();
        $(this).parent('.new_cards').find('.saved_info').slideToggle();
        $('.saved_info__details').removeClass('active');
    });

    // Saved info active

    $('.saved_info__details').on('click', function () {
        // $('.saved_info__details').removeClass('active');
        $(this).toggleClass('active');
    });

    // Cancel subscription active

    $('.modal_cancel__list a').on('click', function () {
       $(this).toggleClass('active');
    });

    // Update payment

    $('.saved_info a').on('click', function () {
       $('.update_list').hide();
       $('.update_edit').show();
    });

    $('.update_form__btns button').on('click', function () {
       $('.update_list').show();
       $('.update_edit').hide();
    });

    // Phone input

    var input = document.querySelector("#phone");
    window.intlTelInput(input);

});
