var active = document.querySelector('.stop');
var div = document.querySelector('.kor');
var hasAnimationPaused = false;
var animationPausedClass = 'paused'

div.className += ' circle';

active.addEventListener('click', function(e){
    var classNames = div.className.split(' ');
    if (!hasAnimationPaused){
        div.className += ' ' + animationPausedClass;
        hasAnimationPaused = true;
    } else {
        classNames.splice(classNames.indexOf(animationPausedClass), 1);

    div.className = classNames.join(' ');
    hasAnimationPaused = false;
    }
})

