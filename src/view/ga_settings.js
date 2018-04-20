class GASettings {
    constructor(width, heigth, offset) {
        // Main div
        this.div = createDiv('');
        this.div.position(width + (2 * offset), (offset));
        this.div.addClass('configuration');

        // Header
        this.label = createElement('h1', 'Algorithm Settings');
        this.label.parent(this.div);

        // Left collumn
        this.left_col = createDiv('');
        this.left_col.parent(this.div);
        this.left_col.addClass('div-col');
        
        // Right collumn
        this.right_col = createDiv('');
        this.right_col.parent(this.div);
        this.right_col.addClass('div-col');
        
        // Play and restart button
        this.control_buttons = createDiv('');
        this.control_buttons.addClass('btn-group');
        this.control_buttons.addClass('button-config');
        this.control_buttons.id('control-buttons');
        this.control_buttons.parent(this.left_col);
        
        this.playButton = createButton('');
        this.playButton.addClass('btn');
        this.playButton.addClass('btn-lg');
        this.playButton.addClass('btn-default');
        this.playButton.id('play_button');
        this.playButton.parent(this.control_buttons);

        this.playButtonIcon = createSpan('');
        this.playButtonIcon.addClass('glyphicon');
        this.playButtonIcon.addClass('glyphicon-play');
        this.playButtonIcon.parent(this.playButton);

        this.restartButton = createButton('');
        this.restartButton.addClass('btn-lg');
        this.restartButton.addClass('btn');
        this.restartButton.addClass('btn-default');
        this.restartButton.id('restart_button');
        this.restartButton.parent(this.control_buttons);

        this.restartButtonIcon = createSpan('');
        this.restartButtonIcon.addClass('glyphicon');
        this.restartButtonIcon.addClass('glyphicon-repeat');
        this.restartButtonIcon.parent(this.restartButton);

        // Board size
        this.board_size = createDiv('');
        this.board_size.parent(this.left_col);

        this.board_size_label = createElement('h3', 'Board Size:');
        this.board_size_label.parent(this.board_size);

        this.board_size_buttons = createDiv('');
        this.board_size_buttons.addClass('button-config');
        this.board_size_buttons.addClass('btn-group');
        this.board_size_buttons.id('board_size');
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
        this.enconding.parent(this.left_col);

        this.enconding_label = createElement('h3', 'Genotype Enconding:');
        this.enconding_label.parent(this.enconding);

        this.enconding_select = createSelect();
        this.enconding_select.addClass('form-control');
        this.enconding_select.addClass('select-info');
        this.enconding_select.id('enconding-select');
        this.enconding_select.attribute('size', '2');
        this.enconding_select.parent(this.enconding);
        this.enconding_select.option('Permutation - Binary representation');
        $('#enconding-select').val(($('#enconding-select option:first').val()));

        // Crossover
        this.crossover = createDiv('');
        this.crossover.parent(this.left_col);

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
        this.crossover_select.option(_cut_crossfill);
        $('#crossover-select').val(($('#crossover-select option:first').val()));
        
        this.crossover_rate = createDiv('');
        this.crossover_rate.parent(this.crossover);

        this.crossover_rate_label = createElement('h4', 'Crossover Rate:');
        this.crossover_rate_label.parent(this.crossover_rate);

        this.crossover_rate_input = createInput('0.9');
        this.crossover_rate_input.parent(this.crossover_rate);
        this.crossover_rate_input.attribute('type', 'number');
        this.crossover_rate_input.attribute('step', '0.05');
        this.crossover_rate_input.attribute('min', '0');
        this.crossover_rate_input.attribute('max', '1');
        this.crossover_rate_input.id('crossover-rate');
        this.crossover_rate_input.addClass('form-control');

        // Mutation
        this.mutation = createDiv('');
        this.mutation.parent(this.left_col);

        this.mutation_label = createElement('h3', 'Mutation:');
        this.mutation_label.parent(this.mutation);

        this.mutation_method = createDiv('');
        this.mutation_method.parent(this.mutation);

        this.mutation_method_label = createElement('h4', 'Mutation Method:');
        this.mutation_method_label.parent(this.mutation_method);

        this.mutation_select = createSelect();
        this.mutation_select.addClass('form-control');
        this.mutation_select.addClass('select-info');
        this.mutation_select.id('mutation-select');
        this.mutation_select.attribute('size', '2');
        this.mutation_select.parent(this.mutation_method);
        this.mutation_select.option(_gene_swap);
        $('#mutation-select').val(($('#mutation-select option:first').val()));

        this.mutation_rate = createDiv('');
        this.mutation_rate.parent(this.mutation);

        this.mutation_rate_label = createElement('h4', 'Mutation Rate:');
        this.mutation_rate_label.parent(this.mutation_rate);

        this.mutation_rate_input = createInput('0.4');
        this.mutation_rate_input.parent(this.mutation_rate);
        this.mutation_rate_input.attribute('type', 'number');
        this.mutation_rate_input.attribute('step', '0.05');
        this.mutation_rate_input.attribute('min', '0');
        this.mutation_rate_input.attribute('max', '1');
        this.mutation_rate_input.id('mutation-rate');
        this.mutation_rate_input.addClass('form-control');

        // Parent Selection
        this.parent_selection = createDiv('');
        this.parent_selection.parent(this.left_col);

        this.parent_selection_label = createElement('h3', 'Parent Selection:');
        this.parent_selection_label.parent(this.parent_selection);

        this.parent_selection_select = createSelect();
        this.parent_selection_select.addClass('form-control');
        this.parent_selection_select.addClass('select-info');
        this.parent_selection_select.id('parent_selection-select');
        this.parent_selection_select.attribute('size', '2');
        this.parent_selection_select.parent(this.parent_selection);
        this.parent_selection_select.option(_two_of_five);
        $('#parent_selection-select').val(($('#parent_selection-select option:first').val()));

        // Selction Method
        this.selection = createDiv('');
        this.selection.parent(this.right_col);

        this.selection_label = createElement('h3', 'Selection:');
        this.selection_label.parent(this.selection);

        this.selection_select = createSelect();
        this.selection_select.addClass('form-control');
        this.selection_select.addClass('select-info');
        this.selection_select.id('selection-select');
        this.selection_select.attribute('size', '2');
        this.selection_select.parent(this.selection);
        this.selection_select.option(_best_fitness);
        $('#selection-select').val(($('#selection-select option:first').val()));

        // Population size
        this.population = createDiv('');
        this.population.parent(this.right_col);

        this.population_label = createElement('h3', 'Population Size:');
        this.population_label.parent(this.population);

        this.population_size_input = createInput('100');
        this.population_size_input.parent(this.population);
        this.population_size_input.attribute('type', 'number');
        this.population_size_input.attribute('step', '10');
        this.population_size_input.attribute('min', '0');
        this.population_size_input.attribute('max', '100000');
        this.population_size_input.addClass('form-control');
        this.population_size_input.id('population-size');

        // Number of children
        this.children = createDiv('');
        this.children.parent(this.right_col);

        this.children_label = createElement('h3', 'Number of children:');
        this.children_label.parent(this.children);

        this.children_size_input = createInput('2');
        this.children_size_input.parent(this.children);
        this.children_size_input.attribute('type', 'number');
        this.children_size_input.attribute('step', '1');
        this.children_size_input.attribute('min', '0');
        this.children_size_input.attribute('max', '10');
        this.children_size_input.addClass('form-control');
        this.children_size_input.id('number-children');

        // Initialization
        this.initialization = createDiv('');
        this.initialization.parent(this.right_col);

        this.initialization_label = createElement('h3', 'Initialization:');
        this.initialization_label.parent(this.initialization);

        this.initialization_select = createSelect();
        this.initialization_select.addClass('form-control');
        this.initialization_select.addClass('select-info');
        this.initialization_select.id('initialization-select');
        this.initialization_select.attribute('size', '2');
        this.initialization_select.parent(this.initialization);
        this.initialization_select.option('Random');
        $('#initialization-select').val(($('#initialization-select option:first').val()));

        // Termination Method
        this.termination = createDiv('');
        this.termination.parent(this.right_col);

        this.termination_label = createElement('h3', 'Termination Method:');
        this.termination_label.parent(this.termination);

        this.termination_select = createSelect();
        this.termination_select.addClass('form-control');
        this.termination_select.addClass('select-info');
        this.termination_select.id('termination-select');
        this.termination_select.attribute('size', '2');
        this.termination_select.parent(this.termination);
        this.termination_select.option(_find_solution);
        this.termination_select.option(_10000_evaluation);
        $('#termination-select').val(($('#termination-select option:first').val()));

        // Fitness Function
        this.fitnes = createDiv('');
        this.fitnes.parent(this.right_col);

        this.fitnes_label = createElement('h3', 'Fitness Function:');
        this.fitnes_label.parent(this.fitnes);

        this.fitnes_select = createSelect();
        this.fitnes_select.addClass('form-control');
        this.fitnes_select.addClass('select-info');
        this.fitnes_select.id('fitnes-select');
        this.fitnes_select.attribute('size', '2');
        this.fitnes_select.parent(this.fitnes);
        this.fitnes_select.option(_inverse_num_clashes);
        $('#fitnes-select').val(($('#fitnes-select option:first').val()));


    }

    get_config() {
        return {
            genotype_enconding: $('#enconding-select').val(),
            crossover_method: $('#crossover-select').val(),
            crossover_rate: parseFloat($('#crossover-rate').val()),
            mutation_method: $('#mutation-select').val(),
            mutation_rate: parseFloat($('#mutation-rate').val()),
            parent_selection: $('#parent_selection-select').val(),
            selection: $('#selection-select').val(),
            population_size: parseInt($('#population-size').val()),
            number_of_children: parseInt($('#number-children').val()),
            initialization: $('#initialization-select').val(),
            termination_method: $('#termination-select').val(),
            fitness: $('#fitnes-select').val()
        };
    }

    disable_changes() {
        $('#enconding-select').prop('disabled', true);
        $('#crossover-select').prop('disabled', true);
        $('#crossover-rate').prop('disabled', true);
        $('#mutation-select').prop('disabled', true);
        $('#mutation-rate').prop('disabled', true);
        $('#parent_selection-select').prop('disabled', true);
        $('#selection-select').prop('disabled', true);
        $('#population-size').prop('disabled', true);
        $('#number-children').prop('disabled', true);
        $('#initialization-select').prop('disabled', true);
        $('#termination-select').prop('disabled', true);
        $('#fitnes-select').prop('disabled', true);
        $('#board_size button').prop('disabled', true);
        $('#control-buttons button').prop('disabled', true);
    }

    enable_changes() {
        $('#enconding-select').prop('disabled', false);
        $('#crossover-select').prop('disabled', false);
        $('#crossover-rate').prop('disabled', false);
        $('#mutation-select').prop('disabled', false);
        $('#mutation-rate').prop('disabled', false);
        $('#parent_selection-select').prop('disabled', false);
        $('#selection-select').prop('disabled', false);
        $('#population-size').prop('disabled', false);
        $('#number-children').prop('disabled', false);
        $('#initialization-select').prop('disabled', false);
        $('#termination-select').prop('disabled', false);
        $('#fitnes-select').prop('disabled', false);
        $('#board_size button').prop('disabled', false);
        $('#control-buttons button').prop('disabled', false);
    }
}