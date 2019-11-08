import Component from '../Component.js';

class DannyItem extends Component {

    renderHTML() {
        const danny = this.props.danny;
        console.log(danny)
        return /*html*/ `
            <li class="danny-item">
                <div class="info-container">
                    <h2>${danny.name}</h2>
                    <p class="danny-profession">${danny.profession}</p>
                    <p class="danny-age">${danny.age}</p>
                    <p class="danny-power">${danny.power_level}</p>
                    <p class="danny-dignity">This is a dignified Dan: ${danny.has_dignity}</p>
                </div>
            </li>
        `;
    }
}

export default DannyItem;