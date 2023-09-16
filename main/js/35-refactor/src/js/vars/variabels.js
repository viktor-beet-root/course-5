const imgPath = './images/';
const addStudentClassName = 'add-student';
const removeCourseClassName = 'remove-course';
export const removeStudentClassName = 'remove-student';
export const addStudentForm = document.querySelector('.add-student-form');
export const courseListElement = document.querySelector('.course-list tbody');
export const speakerWrapper = addStudentForm.querySelector('#card_prev');
export let courseList = [];
export let courseId = 0;
export const authors = {
    dizel: {
        name: 'Win Dizel',
        text: 'Mark Sinclair (born July 18, 1967), known professionally as Vin Diesel, is an American actor and film producer. One of the world\'s highest-grossing actors, he is best known for playing Dominic Toretto in the Fast Furious franchise.',
        img: 'dizel.jpg'
    },
    statham: {
        name: 'Jason Statham',
        text: 'Jason Statham (born 26 July 1967) is an English actor. He is known for portraying characters in various action-thriller films who are typically tough, hardboiled, gritty, or violent.',
        img: 'statham.jpg'
    },
    shakespeare: {
        name: 'William Shakespeare',
        text: 'William Shakespeare (bapt. 26 April 1564 – 23 April 1616) was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world\'s pre-eminent dramatist. He is often called England\'s national poet and the "Bard of Avon" (or simply "the Bard").',
        img: 'shakespeare.jpg'
    },
};

const setCourseId = () => {
    return ++courseId;
};

const setCourseList = (newList) => courseList = [...newList];

export {
    imgPath,
    addStudentClassName,
    removeCourseClassName,
    setCourseId,
    setCourseList
};
