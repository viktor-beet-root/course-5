import $, { data } from 'jquery';
import { Fancybox } from "@fancyapps/ui";
import 'slick-carousel';

import newsSlider from './slider/newsSlider.js';
import heroSlider from './slider/heroSlider.js';
import changeColorItemBg from './changeHeaderItemColor.js';
import scrollMenuItem from './headerMenuScroll.js';


heroSlider();
newsSlider();
changeColorItemBg();
scrollMenuItem();
