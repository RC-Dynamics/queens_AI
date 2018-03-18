class ChessBoard {
    constructor (offset, width, heigth) {
        this.width = width;
        this.heigth = heigth;
        this.offset = offset;
        this.queen_image = loadImage('assets/queen.png');
    }

    draw (size) {
        this.size = size;
        this.square_width = this.width / size;
        this.square_heigth = this.heigth / size;
        
        var color = WHITE;

        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++){
                fill(color);
                rect((i * this.square_width) + this.offset, (j * this.square_heigth) + this.offset, this.square_width, this.square_heigth);
                color = this.change_color(color);
            }
            color = this.change_color(color);
        }
    }
    
    change_color (color) {
        return (color == WHITE) ? GRAY : WHITE;
    }

    insert_queens (positions){
        for (var i = 0; i< this.size; i++){
            this.draw_queen((i * this.square_width) + this.offset, ((positions[i] - 1) * this.square_heigth) + this.offset, this.square_width, this.square_heigth);
        }
    }

    draw_queen (x, y, width, height){
        image(this.queen_image, x + (width / 10), y + (height / 10), width - (2 * width / 10), height - (2 * height /10), 0, 0);
    }
}
