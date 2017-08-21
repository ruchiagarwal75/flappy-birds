$(function(){
    var speed= 10;
    var score = 0;
    var containerWidth = document.getElementsByClassName('container')[0].offsetWidth;
    var pole = $('.pole');
    var poleHeight = pole.height();
    var bird = $('#bird');
    var go_up = false;
    var up;

    var the_game = setInterval(function (){
       
        var poleLocation = parseInt(pole.css('right'));
        pole.css('right', poleLocation+speed);
        
        if(!go_up){
            bird.css('top', parseInt(bird.css('top'))+5); //this will push the bird down
        }
        if(poleLocation > containerWidth) {
            var newHeight = Math.random()*100;
            $('#pole_1').css('height', poleHeight + newHeight);
            $('#pole_2').css('height', poleHeight - newHeight);
            pole.css('right',-50);
            speed = speed + 1;
            score = score + 1;
            document.querySelector('.speed span').innerHTML = speed;
            document.querySelector('.score span').innerHTML = score;
        }
        if(bird.css('left')+bird.css('width')>pole.css('left')) {
            console.log('out');
        }
    }, 40);

    $(document).on('keydown', function(e) {
        if (e.keyCode == 32) {
            go_up = true;
            up = setInterval(function(){
                var birdPosition = parseInt(bird.css('top'));
                bird.css('top', birdPosition - 10);
            },50);
        }
    });
    $(document).on('keyup', function(e) {
        if(e.keyCode == 32 && go_up) {
            clearInterval(up);
            go_up = false;
        }
    });
});