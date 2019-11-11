import Component from '../Component.js';

class Loading extends Component {

    returnHTML() {
        const loading = this.props.loading;

        if (!loading) {
            return /*html*/ `
            <div class="loading">
            </div>
        `;
        }

        return /*html*/ `
            <div class="loading">
                <img src="../assets/danny-loading.png" alt="Loading Spinnger" class="danny-loading">
            </div>
        `;
    }
}

export default Loading;