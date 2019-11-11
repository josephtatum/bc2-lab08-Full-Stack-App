import Component from '../Component.js';

class DannyItem extends Component {

    renderHTML() {
        const danny = this.props.danny;
        return /*html*/ `
            <li class="danny-item">
                <div class="info-container">
                    <h2 class="danny-name">${danny.name}</h2>
                    <p class="danny-profession">Profession: <b>${danny.profession}</b></p>
                    <p class="danny-age">Age: <b>${danny.age}</b></p>
                    <p class="danny-power">Power Level: <b>${danny.power_level}</b></p>
                    <p class="danny-dignity">Dignity: <b>${danny.has_dignity}</b></p>
                    <p class="danny-detail-view">
                        <a href="danny-detail.html?id=${danny.id}">View Details</a>
                    </p>
                </div>
            </li>
        `;
    }
}

export default DannyItem;