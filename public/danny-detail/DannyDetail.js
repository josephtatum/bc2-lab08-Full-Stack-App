import Component from '../Component.js';

class DannyDetail extends Component {
    renderHTML() {
        const danny = this.props.danny;
        const json = JSON.stringify(danny, true, 4);
        return /*html*/`
            <pre>${json}</pre>
        `;
    }
}

export default DannyDetail;