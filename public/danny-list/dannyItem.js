import Component from '../Component.js';

class DannyItem extends Component {

    renderHTML() {
        const danny = this.props.danny;
        return /*html*/ `
            <li class="danny-item">
                <div class="info-container">
                    <h2>${danny.name}</h2>
                    <p class="danny-profession">${danny.profession}</p>
                    <p class="danny-age">${danny.age}</p>
                    <p class="danny-power">${danny.powerLevel}</p>
                    <p class="danny-dignity">This is a dignified Dan: ${danny.hasDignity}</p>
                </div>
            </li>
        `;
    }
}

export default DannyItem;