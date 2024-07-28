"use strict";
import {Header} from "./blocks/headers/header-1/header.js";
import {BlogRender} from "./blocks/blog-section/render/blog-render.js";
import {BannerRender} from "./blocks/banner/render/bannerRender.js";
import {sliderFlex} from "./blocks/slider/slider-2/slider-flex.js";

const rootHTML = document.getElementById("root");
const headerTemplate = Header({});
const bannerTemplate = BannerRender(2);
const blogTemplate = BlogRender(2)
const blogTemplate2 = BlogRender(1)

rootHTML.innerHTML = headerTemplate + bannerTemplate + blogTemplate;
sliderFlex();