import Component from '../Component.js';
class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'Famous Dans';
        return /*html*/`
           <header>
               <h1>${title}</h1>
               <nav>
                   <a href="./">Home</a>
                   <a href="./danny-list.html">Dannys</a>
                   <a href="./danny-form.html">Add a Danny</a>
               </nav>
           </header>
       `;
    }
}
export default Header;