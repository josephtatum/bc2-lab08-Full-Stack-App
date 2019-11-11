import Component from '../Component.js';

class DannyDetail extends Component {

    onRender(dom) {
        const deleteDanny = dom.querySelector('.delete-danny');

        deleteDanny.addEventListener('click', () => {
            
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