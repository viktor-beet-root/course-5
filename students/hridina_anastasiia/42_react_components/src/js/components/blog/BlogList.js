import React from "react";
import BlogArticle from "./BlogArticle";

export default function BlogList() {
    return (
        <div className="article__list">
            <BlogArticle blogImg='./images/image_01.jpeg' title='Did Our Human Ancestors Come Close to Extinction?' text='Modern humans—aka Homo sapiens—emerged about 300,000 years ago after evolving from human ancestors. There’s a lot we still don’t know about who these ancestors were and where they lived. But according to an August 2023 study, our ancestors may have come close to extinction some 900,000 to 800,000 years ago.
During this period, our human ancestors lost 98.7 percent of their population, according to the study published in Science. The authors estimate that the reduced population had an average of 1,280 breeding individuals, and remained this diminished for over 100,000 years.'/>
            <BlogArticle blogImg='./images/image_02.jpeg' title='5 Women Who Ruled the Ancient World' text='Very few women ever rose to power in the kingdoms and empires of the ancient world. The handful who did, in the Near East, Asia and Europe, fought their way through significant barriers, in often violent times. 
These women first accessed their power through men—fathers, husbands, brothers and sons. But they stayed in power, sometimes for decades, through a mix of ambition, intelligence, political savvy, generosity, guile and, in some cases, a ruthless and bloody drive for power. ' />
            <BlogArticle blogImg='./images/image_03.jpeg' title='Ancient Mysterious Script Finally Decoded' text='The Kushan Empire was an ancient state that stretched from modern-day Uzbekistan into what is now northern India, and helped spread Buddhism to East Asia between the first and the third centuries. Starting in the 1950s, archeologists began identifying artifacts in the empire’s region bearing an “unknown Kushan script” that they couldn’t understand. But researchers in Germany and Tajikistan announced in July 2023 that they had finally deciphered part of the ancient writing system.
The researchers accomplished this by comparing a trilingual text that French archaeologists located in Afghanistan in the 1960s with a bilingual text that Tajik archaeologists identified in Tajikistan in 2022.' />
            <BlogArticle blogImg='./images/image_04.jpeg' title='Did Polynesian Voyagers Reach the Americas Before Columbus?' text='Polynesian voyagers sailed without a compass or any other nautical instruments. Yet by reading the stars, waves, currents, clouds, seaweed clumps and seabird flights, they managed to cross vast swaths of the Pacific Ocean and settle hundreds of islands, from Hawaii in the north to Easter Island in the southeast to New Zealand in the southwest. Evidence has mounted that they likewise reached mainland South America—and possibly North America as well—long before Christopher Columbus.
“It’s one of the most remarkable colonization events of any time in history,” says Jennifer Kahn, an archeologist at the College of William & Mary, who specializes in Polynesia. “We’re talking about incredibly skilled navigators [discovering] some of the most remote places in the world.”' />
        </div>
    )
}
