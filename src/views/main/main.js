import { AbstractView } from '../../common/abstractview.js';

export class MainView extends AbstractView {
    constructor() {
        super();
        this.setTitle('Search Book');
    }

    render() {
        const main = document.getElementById('div');
        main.innerHTML = 'Test';
        this.app.innerHTML = '';
        this.app.append(main);
    }
}