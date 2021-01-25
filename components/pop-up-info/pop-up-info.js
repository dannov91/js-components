import { Template } from './pop-up-info-template.js';

class PopUpInfo extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'open'});

        // Set up the element's HTML template
        shadow.innerHTML = Template;

        // Set up the element's CSS
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'components/pop-up-info/pop-up-info-style.css');
        shadow.appendChild(linkElem);
    }
}

export const PopUpInfoElement = function() {
    customElements.define('popup-info', PopUpInfo);
};