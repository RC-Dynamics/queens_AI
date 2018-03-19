class GASettings {
    constructor(width, heigth, offset) {
        // Main div
        this.div = createDiv('');
        this.div.position(width + (2 * offset), (offset));
        this.div.addClass('configuration');

        // Header
        this.label = createElement('h1', 'Algorithm Settings');
        this.label.parent(this.div);

        // Play and restart button
        this.control_buttons = createDiv('');
        this.control_buttons.addClass('btn-group');
        this.control_buttons.addClass('button-config');
        this.control_buttons.parent(this.div);
        
        this.playButton = createButton('');
        this.playButton.addClass('btn');
        this.playButton.addClass('btn-lg');
        this.playButton.addClass('btn-default');
        this.playButton.parent(this.control_buttons);

        this.playButtonIcon = createSpan('');
        this.playButtonIcon.addClass('glyphicon');
        this.playButtonIcon.addClass('glyphicon-play');
        this.playButtonIcon.parent(this.playButton);

        this.restartButton = createButton('');
        this.restartButton.addClass('btn-lg');
        this.restartButton.addClass('btn');
        this.restartButton.addClass('btn-default');
        this.restartButton.parent(this.control_buttons);

        this.restartButtonIcon = createSpan('');
        this.restartButtonIcon.addClass('glyphicon');
        this.restartButtonIcon.addClass('glyphicon-repeat');
        this.restartButtonIcon.parent(this.restartButton);

        // Board size
        this.board_size = createDiv('');
        this.board_size.parent(this.div);

        this.board_size_label = createElement('h3', 'Board Size:');
        this.board_size_label.parent(this.board_size);

        this.board_size_buttons = createDiv('');
        this.board_size_buttons.addClass('button-config');
        this.board_size_buttons.addClass('btn-group');
        this.board_size_buttons.parent(this.board_size);

        this.eight = createButton('8');
        this.eight.addClass('btn');
        this.eight.addClass('btn-default');
        this.eight.addClass('button-text');
        this.eight.parent(this.board_size_buttons);
        
        this.sixteen = createButton('16');
        this.sixteen.addClass('btn');
        this.sixteen.addClass('btn-default');
        this.sixteen.addClass('button-text');
        this.sixteen.parent(this.board_size_buttons);
        
        this.thirty_two = createButton('32');
        this.thirty_two.addClass('btn');
        this.thirty_two.addClass('btn-default');
        this.thirty_two.addClass('button-text');
        this.thirty_two.parent(this.board_size_buttons);
        
        this.sixty_four = createButton('64');
        this.sixty_four.addClass('btn');
        this.sixty_four.addClass('btn-default');
        this.sixty_four.addClass('button-text');
        this.sixty_four.parent(this.board_size_buttons);

        // Genotype Enconding
        this.enconding = createDiv('');
        this.enconding.parent(this.div);

        this.enconding_label = createElement('h3', 'Genotype Enconding:');
        this.enconding_label.parent(this.enconding);

        this.enconding_select = createSelect();
        this.enconding_select.addClass('form-control');
        this.enconding_select.addClass('select-info');
        this.enconding_select.id('enconding-select');
        this.enconding_select.attribute('size', '2');
        this.enconding_select.parent(this.enconding);
        this.enconding_select.option('Permutation - Binary representation');

        // Crossover
        this.crossover = createDiv('');
        this.crossover.parent(this.div);

        this.crossover_label = createElement('h3', 'Crossover:');
        this.crossover_label.parent(this.crossover);

        this.crossover_method = createDiv('');
        this.crossover_method.parent(this.crossover);
        
        this.crossover_method_label = createElement('h4', 'Crossover Method:');
        this.crossover_method_label.parent(this.crossover_method);
        
        this.crossover_select = createSelect();
        this.crossover_select.addClass('form-control');
        this.crossover_select.addClass('select-info');
        this.crossover_select.id('crossover-select');
        this.crossover_select.attribute('size', '2');
        this.crossover_select.parent(this.crossover_method);
        this.crossover_select.option('Cut-and-crossfill');
        
        this.crossover_rate = createDiv('');
        this.crossover_rate.parent(this.crossover);

        // this.crossover_rate_label = createElement('h4', 'Crossover Rate:');
        // this.crossover_rate_label.parent(this.crossover_rate);

    }
}