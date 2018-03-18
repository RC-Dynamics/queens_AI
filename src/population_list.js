class PopulationList{
    constructor (width, height, offset) {
        this.div = createDiv("");
        this.div.position((2 * offset), height + (2 * offset));
        this.div.addClass("form-group");

        this.label = createElement('label', 'Select one candidate solution');
        this.label.attribute('for', 'population-select');
        this.label.style('font-size', '30px');
        this.label.parent(this.div);        
        
        this.select = createSelect();
        this.select.addClass("form-control");
        this.select.id("population-select");
        this.select.attribute("size", "5");
        this.select.parent(this.div);
    }
}