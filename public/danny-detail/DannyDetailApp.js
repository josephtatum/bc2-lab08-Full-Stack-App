import Component from '../Component.js';
import Header from '../common/Header.js';
import Loading from '../common/Loading.js';
import DannyDetail from './DannyDetail.js';
import { getDanny } from '../services/danny-api.js';

class DannyDetailApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const loading = new Loading({ loading: true });
        main.appendChild(loading.renderDOM());

        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');

        if (!id) {
            window.location = 'danny-list.html';
            return;
        }

        try {
            const danny = await getDanny(id);
            const dannyDetail = new DannyDetail({ danny });
            main.appendChild(dannyDetail.renderDOM());
        }
        catch (err) {
            console.log(err);
        }
        finally {
            loading.update({ loading: false });
        }
    }

    renderHTML() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default DannyDetailApp;