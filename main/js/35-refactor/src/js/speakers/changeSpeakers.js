import { imgPath, authors, speakerWrapper } from "../vars/variabels.js";
import toggleCardPrev from "./toggleCardPrev.js";

function changeSpeakers(addStudentForm) {
    const select = addStudentForm.querySelector('#speakers');

    select.addEventListener('change', renderSpeaker);

    function renderSpeaker() {
        const speaker = select.value.trim();

        if (speaker && authors[speaker]) {
            const img = speakerWrapper.querySelector('img');

            img.setAttribute('src', imgPath + authors[speaker].img);
            img.setAttribute('alt', authors[speaker].name);

            speakerWrapper.querySelector('.card-title').textContent = authors[speaker].name;
            speakerWrapper.querySelector('.card-text').textContent = authors[speaker].text;

            toggleCardPrev(true);
        } else {
            toggleCardPrev(false);
        }
    }
}

export default changeSpeakers;
