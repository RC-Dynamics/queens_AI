class PopulationList{
    constructor (width, height, offset) {
        this.div = createDiv('');
        this.div.position((2 * offset), height + (2 * offset));
        this.div.addClass('form-group');

        this.label = createElement('label', 'Select one candidate solution');
        this.label.attribute('for', 'population-select');
        this.label.addClass('header-label');
        this.label.parent(this.div);
        
        this.select = createSelect();
        this.select.addClass('form-control');
        this.select.addClass('population-info');
        this.select.id('population-select');
        this.select.attribute('size', '5');
        this.select.parent(this.div);
    }

    insert_population(population_temp, isRunning){
        this.isRunning = isRunning;
        if (!this.isRunning){
            $('#population-select').empty();
            for(var i = 0; i < population_temp.length; i++){
                this.select.option(`${i+1}: Fitness: ${population_temp[i].fitness.toFixed(3)}  - Positions: [${getPosVector(population[i].positions)}]`);
            }
            $('#population-select').val(($('#population-select option:first').val()));
        }
    }

    get_selected(){
        var text = $('#population-select').val();
        text = text.split('[')[1].split(']')[0];

        var positions = text.split(',');
        positions = positions.map(function(elem) {
            return parseInt(elem);
        });

        return positions;
    }

    disable_changes(){
        $('#population-select').prop('disabled', true);
    }

    enable_changes() {
        $('#population-select').prop('disabled', false);
    }
}