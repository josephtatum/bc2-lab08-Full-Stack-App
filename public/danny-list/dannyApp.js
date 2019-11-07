import Component from '../Component.js';
import Header from '../common/Header.js';
import DannyList from '../dannyList.js';
import { getDannys } from '../services/danny-api.js';

class DannyApp extends Component {
    
    onRender(dom) {
        const header = new Header({ title: 'Only the Best Dannys' });
        dom.prepend(header.renderDOM());

        const dannyList = new DannyList({ dannys: [] });
        const main = dom.querySelector('main');
        main.appendChild(dannyList.renderDOM());

        getDannys().then(dannys => {
            dannyList.update({ dannys });
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