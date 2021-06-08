// reutilizar la misma funcionalidad

//clase padre
class Player {
    play(){ this.video.play();}
    duration(){ return this.video.duration / 100;}

}

//clases hijos
class Video extends Player{
    
    open() {this.redirectToVideo(this.video);}
}
class YouTube extends Player{
    
    open() {this.redirectToVideo(this.video);}
}

// heredar de clases q ya existen 

class CustomDate extends Date{}
class Colecction extends Array{}