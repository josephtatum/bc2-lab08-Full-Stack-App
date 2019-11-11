import Component from '../Component.js';

class Loading extends Component {

    renderHTML() {
        const loading = this.props.loading;

        if (!loading) {
            return /*html*/ `<div class="loading"></div>`;
        }

        return /*html*/ `
            <div class="loading-container">
                <img src="../assets/danny-loading.png" alt="Loading Spinnger" class="danny-loading">
            </div>
        `;
    }
}

export default Loading;