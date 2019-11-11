import Component from '../Component.js';
import Header from '../common/Header.js';
import Loading from '../common/Loading.js';
import DannyForm from './dannyForm.js';
import { getProfessions } from '../services/danny-api.js';

class DannyFormApp extends Component {

    async conRender(dom) {
        const header = new Header({ title: 'Only the Best Dannys' });
        dom.prepend(header.renderDOM());

        const dannyForm = new DannyForm({ professions: [] });
        const main = dom.querySelector('main');

        const loading = new Loading({ loading: true });
        dom.appendChild(loading.renderDOM());

        try {
            getProfessions().then(professions => {
                dannyForm.update({ professions });
            });
        }
        catch (err) {
            console.log('Critical Daniel Load Failure\n', err);
        }
        finally {
            loading.update({ loading: false });
        }

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