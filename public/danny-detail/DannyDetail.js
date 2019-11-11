import Component from '../Component.js';
import {deleteDanny } from '../services/danny-api.js';

class DannyDetail extends Component {

    onRender(dom) {
        const danny = this.props.danny;
        const deleteDannyButton = dom.querySelector('.delete-danny');

        deleteDannyButton.addEventListener('click', () => {
            let confirmChoice = confirm('Do you really want to delete this danny?');

            if (confirmChoice) {
                deleteDanny();
            }
        });
        
    }
    renderHTML() {
        const danny = this.props.danny;
        const json = JSON.stringify(danny, true, 4);
        return /*html*/`
            <div class='dannydeets'>
                <div>${json}</div>
                <button class="delete-danny">Delete this Danny</button>
            </div>
        `;
    }
}

export default DannyDetail;