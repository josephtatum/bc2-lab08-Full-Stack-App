import Component from '../Component.js';

class DannyItem extends Component {

    renderHTML() {
        const danny = this.props.danny;
        console.log(danny)
        return /*html*/ `
            <li class="danny-item">
                <div class="info-container">
                    <h2>${danny.name}</h2>
                    <p class="danny-profession">Profession: ${danny.profession}</p>
                    <p class="danny-age">Age: ${danny.age}</p>
                    <p class="danny-power">Power Level: ${danny.power_level}</p>
                    <p class="danny-dignity">Dignity: ${danny.has_dignity}</p>
                </div>
            </li>
        `;
    }
}

export default DannyItem;