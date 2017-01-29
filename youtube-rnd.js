// Playlist ID
    var list = 'PLz8JsiLUtVnD2t0qlJYDhXtyiCWTv37DA'
// Random number generator 
    var num = Math.floor(Math.random() * 200 + 1);
// Embed video code
    document.writeln('<iframe id="random-video" src="//www.youtube.com/embed/videoseries?list=' + list + '&index=' + num + '&autoplay=1&controls=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');

//Fullscreen stuff (optional)
    $(function(){
        $('#random-video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
        $(window).resize(function(){
          $('#random-video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
        });
    });
