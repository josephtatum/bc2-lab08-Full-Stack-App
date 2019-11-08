import Component from '../Component.js';
import Header from '../common/Header.js';
import DannyForm from './dannyForm.js';
import { getDannys } from '../services/danny-api.js';

class DannyApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Only the Best Dannys' });
        dom.prepend(header.renderDOM());

        const dannyForm = new DannyForm({ dannys: [] });
        const main = dom.querySelector('main');
        main.appendChild(dannyForm.renderDOM());

        getDannys().then(dannys => {
            dannyForm.update({ dannys });
        });
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default DannyApp;