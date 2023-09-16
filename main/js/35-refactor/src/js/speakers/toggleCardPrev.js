import { speakerWrapper } from "../vars/variabels.js";

function toggleCardPrev(trigger) {
    if (trigger) speakerWrapper.style.display = '';
    else speakerWrapper.style.display = 'none';
}

export default toggleCardPrev;
