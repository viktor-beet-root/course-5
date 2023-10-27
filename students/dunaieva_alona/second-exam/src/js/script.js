import $, { data } from 'jquery';
import 'slick-carousel';
import { Fancybox } from "@fancyapps/ui";
import createValidation from './form-valodation/createFormValidation.js';
import changeColorNavBg from './nav-bg/changeColor.js';
import btnToTop from './scroll-to-top/scrollToTop.js';
import heroSlider from './slick-slider/heroSlider.js';
import newsSlider from './slick-slider/newsSlider.js';
//import scrollMenuItem from './scroll-menu-item/scrollMenuItem.js';

$(function() {
  newsSlider();
  heroSlider();
  Fancybox.bind();
  createValidation();
  changeColorNavBg();
  btnToTop();

});

const project = $('#project');
const body = $("html, body");

$('.menu__link').on('click', function(e) {
  console.log(e);
  e.preventDefault();

  body.stop().animate({scrollTop: project.offset().top}, 500);
});



