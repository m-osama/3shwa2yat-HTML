let overlay = document.getElementById('overlay');
    let closeMenu = document.getElementById('close-menu');
    let close = document.getElementById('close');

    document.getElementById('open-menu').addEventListener('click', function(){
        overlay.classList.add('show-menu');
    });

    document.getElementById('close-menu').addEventListener('click', function(){
        overlay.classList.remove('show-menu');
    });

    document.getElementById('close').addEventListener('click', function(){
        overlay.classList.remove('show-menu');
    });

