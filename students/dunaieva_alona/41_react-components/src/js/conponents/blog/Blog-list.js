import React from "react"

import BlogItem from "./Blog-item.js"

export default function BlogList() {
    return (
        <div className="blog-wrapper__list blog-list">
            <BlogItem imgSrc='./images/blog-1.jpg' blogTitle=' The Problem With Pests May Be in Parisians’ Heads, Not Their Beds' 
                blogText ='Exterminators in France are also playing the role of therapist, saying
                an anxious post-pandemic public is panicking over recent bedbug outbreaks.'/>
            <BlogItem imgSrc='./images/blog-2.jpg' blogTitle='Brilliant Quinton de Kock plunges Pat Cummins’ captaincy into crisis' 
                blogText ='There is always an element of second-guessing in the way that modern coaches prepare for a big match. 
                All teams want to play their own game, of course, but they are also striving to predict what strategies the opposition coaches expect them to employ, 
                and to avoid becoming too predictable. So well do the coaching...' />
            <BlogItem imgSrc='./images/blog-3.jpg' blogTitle='Virgin wins major royalties claim against US train operator' 
                blogText ='A judge has backed Virgin Group’s claim for unpaid royalty fees from a US train operator when a 20-year branding deal was ditched after just 18 months. But in a ruling at the Royal Courts of Justice in London, the judge awarded the British company less than half the amount of damages it was seeking.
                Sir Richard...' />
            <BlogItem imgSrc='./images/blog-4.jpg' blogTitle='As World’s Eyes Shift, Ukraine and Russia Look to Sway Opinions' 
                blogText ='Kyiv says Russia is looking to leverage the Israel-Hamas war to dampen support for Ukraine, while Moscow is calling it a failure of the West.' />
            <BlogItem imgSrc='./images/blog-5.jpg' blogTitle='Sam Bankman-Fried’s Closest Friends Become His Foes in Courtroom Clash' 
                blogText ='The FTX founder’s criminal trial has made clear just how much his inner circle has turned against him.' />
        </div>
    )
}
