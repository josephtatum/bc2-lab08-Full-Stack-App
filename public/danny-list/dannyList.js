import Component from '../Component.js';
import DannyItem from './dannyItem.js';

class DannyList extends Component {

    onRender(dom) {
        const dannys = this.props.dannys;

        dannys.forEach(danny => {
            const props = { danny: danny };
            const dannyItem = new DannyItem(props);
            const dannyItemDOM = dannyItem.renderDOM();
            dom.appendChild(dannyItemDOM);
        });
    }

    renderHTML() {
        return /*html*/ `
            <ul class="dannys"></ul>
        `;
    }
}

export default DannyList;