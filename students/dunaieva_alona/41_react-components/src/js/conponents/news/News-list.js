import React from "react"
import NewsItem from "./News-item.js"

export default function NewsList() {
    return (
        <div className="news-wrapper__list news-list">
            <NewsItem titleNews='U.N. Warns of ‘Disaster’ in Gaza as Israel Strikes Back at Hamas' 
                textNews='More than 300,000 people were homeless as Israeli airstrikes pounded
                Gaza in retaliation for the Hamas attack. Secretary of State Antony
                Blinken, in Israel to meet Prime Minister Benjamin Netanyahu, said the
                attack carried “harrowing echoes” of Nazi massacres.' />
            <NewsItem titleNews='UK sends Royal Navy vessels and spy planes to support Israel' 
                textNews='Britain will send two Royal Navy ships to the eastern Mediterranean and begin surveillance 
                flights off the coast of Israel in a show of military support designed to reassure its ally before an expected ground invasion of Gaza. 
                Rishi Sunak said that the deployment of RFA Argus and RFA Lyme Bay...'/>
            <NewsItem titleNews='Police told to use ‘full force of law’ at pro-Palestine rally' 
                textNews='Rishi Sunak has urged police chiefs to bring the “full force of the law” against protesters who commit hate crimes or who express support for 
                Hamas ahead of a pro-Palestine march in London expected to attract 10,000 people at the weekend. Police are being asked to use public order powers to block protests outside Jewish monuments and...'/>
            <NewsItem titleNews='Poland’s angry young men give far-right upstarts a shot at power' 
                textNews='Flames erupted as two men strutted across the stage, backed by American rock music. 
                The overwhelmingly young male audience were in raptures as they were showered with fake banknotes. 
                “I like that they tell it like it is, rather than how it should be,” said Zygmunt Zlotopolski, 27, at a rally for...'/>
        </div>
    )
}


