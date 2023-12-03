import $, { data } from 'jquery';
import { Fancybox } from "@fancyapps/ui";
import 'slick-carousel';

import newsSlider from './slider/newsSlider.js';
import heroSlider from './slider/heroSlider.js';
import changeColorItemBg from './changeHeaderItemColor.js';
import scrollMenuItem from './headerMenuScroll.js';
import btnGallery from './galleryBtn.js';
import createValidation from './formValidation.js';
import scrollDown from './scrollDown.js';
import scrollTop from './scrollTop.js';
import "./burgerMenu.js";

const body = $("html, body");
export default body;

Fancybox.bind();
heroSlider();
newsSlider();
changeColorItemBg();
scrollMenuItem();
btnGallery();
createValidation();
scrollDown();
scrollTop();
