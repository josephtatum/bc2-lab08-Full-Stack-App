import Component from '../Component.js';
import Header from '../common/Header.js';
import Loading from '../common/Loading.js';
import DannyList from './dannyList.js';
import { getDannys } from '../services/danny-api.js';

class DannyApp extends Component {
    
    onRender(dom) {
        const header = new Header({ title: 'Only the Best Dannys' });
        dom.prepend(header.renderDOM());

        const dannyList = new DannyList({ dannys: [] });
        const main = dom.querySelector('main');
        main.appendChild(dannyList.renderDOM());

        const loading = new Loading({ loading: true });
        main.appendChild(loading.renderDOM());

        try {
            getDannys().then(dannys => {
                dannyList.update({ dannys });
            });
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setTimeout(() => {
                loading.update({ loading: false });
            }, 500);
        }
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