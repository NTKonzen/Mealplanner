$(document).ready(function () {

    let submitOne = false;
    let mood = null;

    $('.mood').click(function (event) {
        event.stopPropagation();
        mood = $(this).data('mood');
        console.log(mood);
    })

    $('#popup').dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        draggable: false,
        buttons: [
            {
                text: 'Submit your feedback',
                id: 'finalSubmitButton',
                class: 'btn green white-text',
                click: function () {
                    submitOne = true;
                    $('form').submit();
                }
            }
        ]
    })

    $('form').submit(function (event) {

        if (submitOne === false) {
            event.preventDefault()
            let name = $('#nameInput').val().trim()
            let email = $('#emailInput').val().trim()
            let message = $('#messageInput').val().trim()
            $('#nameSpan').text(name)
            $('#emailSpan').text(email)
            $('#messageSpan').text(message)
            if (name !== '' && email !== '' && message !== '') {
                $('#errorEl').addClass('hide')
                $('#popup').dialog('open')
            } else {
                $('#errorEl').removeClass('hide')
            }
        }



        // console.log($(this));

        // if (submitOne) $($(this)).submit()
    })

});