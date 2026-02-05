$(document).ready(function() {
    // ১. বাটনে ক্লিক করলে কার্ড আসবে
    $('#btn__letter').click(function() {
        $('#mailBox').css('display', 'flex').hide().fadeIn();
    });

    // ২. কার্ডে ক্লিক করলে ৩ডি ওপেন হবে
    $('#openCard').click(function() {
        $(this).toggleClass('open');
    });

    // ৩. এক্স (X) এ ক্লিক করলে কার্ড বন্ধ হয়ে কেক আসবে
    $('#closeMail').click(function() {
        $('#mailBox').fadeOut(500, function() {
            $('#main-content').fadeOut(500, function() {
                $('#cake-section').removeClass('hidden').fadeIn();
                startCountdown();
            });
        });
    });

    function startCountdown() {
        let count = 5;
        let timer = setInterval(function() {
            count--;
            if (count > 0) {
                $('#countdown').text(count);
            } else {
                clearInterval(timer);
                $('#countdown').fadeOut();
            }
        }, 1000);
    }

    // ৪. ফু দিলে উইশ আসবে
    $('#flame').click(function() {
        $(this).hide();
        $('.instr').text('Happy Birthday, Mim! 🎂');
        setTimeout(function() {
            $('#cake-section').fadeOut(500, function() {
                $('#final-wish').removeClass('hidden').fadeIn();
            });
        }, 2000);
    });
});
