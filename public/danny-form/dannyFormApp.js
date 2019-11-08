import Component from '../Component.js';
import Header from '../common/Header.js';
import DannyForm from './dannyForm.js';
import { getProfessions } from '../services/danny-api.js';

class DannyFormApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Only the Best Dannys' });
        dom.prepend(header.renderDOM());

        const dannyForm = new DannyForm({ professions: [] });
        const main = dom.querySelector('main');

        getProfessions().then(professions => {
            dannyForm.update({ professions });
            
        });

        main.appendChild(dannyForm.renderDOM());
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default DannyFormApp;