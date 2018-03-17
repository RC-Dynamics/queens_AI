class ChessBoard {
    constructor(width, heigth){
        this.width = width;
        this.heigth = heigth;
    }

    draw(size) {
        this.size = size;
        this.square_width = this.width / size;
        this.square_heigth = this.heigth / size;
        
        var color = WHITE;

        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++){
                fill(color);
                rect(i * this.square_width, j * this.square_heigth, this.square_width, this.square_heigth);
                color = this.change_color(color);
            }
            color = this.change_color(color);
        }
    }
    
    change_color(color) {
        return (color == WHITE) ? BLACK : WHITE;
    }
}
