import $, { data } from 'jquery';
import { Fancybox } from "@fancyapps/ui";
import 'slick-carousel';

import heroSlider from './slick-slider/heroSlider.js';
import newsSlider from './slick-slider/newsSlider.js';
import createValidation from './form-valodation/createFormValidation.js';
import changeColorNavBg from './nav-bg/changeColor.js';
import btnToTop from './scroll-to-top/scrollToTop.js';
import scrollMenuItem from './scroll-menu-item/scrollMenuItem.js';
import btnsScrollDown from './scroll-down/btnScrollDown.js';

const body = $("html, body");
export default body;

$(function() {
  Fancybox.bind();
  newsSlider();
  heroSlider();
  createValidation();
  changeColorNavBg();
  btnToTop();
  scrollMenuItem();
  btnsScrollDown();
});
