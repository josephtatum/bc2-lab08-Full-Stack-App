import Component from '../Component.js';

class DannyDetail extends Component {
    renderHTML() {
        const danny = this.props.danny;
        const json = JSON.stringify(danny, true, 4);
        return /*html*/`
            <div class='dannydeets'>${json}</div>
        `;
    }
}

export default DannyDetail;