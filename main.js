launchPong(function () {
    function colour_random() {
        var num = Math.floor(Math.random() * Math.pow(2, 24));
        return '#' + ('00000' + num.toString(16)).substr(-6);
    }
    
    
    pongSettings.ball.size = 190;
    pongSettings.ball.color = "#99CC00";
    pongSettings.ball.velocity[0] = 15;
    pongSettings.ball.velocity[1] = 15;
    
});