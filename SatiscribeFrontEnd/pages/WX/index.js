import React from 'react'
import color from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import contentModule from '@/styles/components/contentblocks.module.css'

function colourtest() {
    return (
        <div className={color.container}>
            <h1>H1 Display Huge</h1>
            <h2>H2 Display Large</h2>
            <h3>H3 Heading</h3>
            <h4>H4 Subheading</h4>
            <h5>H5 Section Heading</h5>
            <h6>H6 Caption</h6>
            <p>p Normal Paragraph</p>
            <p className={flexi.transcribeLabelText}>Meeting<br /> Details</p>
            <div className={contentModule.transcribeArea}>
                <p style={{ color: `var(--Final_White)` }}>Filter words <b> Ummm</b> </p>
                <p style={{ color: `var(--Final_White)` }}>Unsure words <i> Potato Potatto</i></p>
                <p style={{ color: `var(--Final_White)` }}>Unrelated words <em> baby duck</em></p>
                <p style={{ color: `var(--Final_White)` }}>Added text <span> Very good</span></p>
            </div>

            <br></br>
            <p className={color.text1}>Final_Light_Purple</p>
            <p className={color.text2}>Final_Light_Purple_75</p>
            <p className={color.text3}>Final_Light_Purple_50</p>
            <p className={color.text4}>Final_Light_Purple_25</p>
            <p className={color.text5}>Final_Dark_Purple</p>
            <p className={color.text6}>Final_Dark_Purple_80</p>
            <p className={color.text7}>Final_Gray</p>
            <p className={color.text8}>Final_Gray_80</p>
            <p className={color.text9}>Final_White</p>
            <p className={color.text10}>Final_White_50</p>
            <p className={color.text11}>Final_Component_Dark_Grey</p>
            <p className={color.text12}>Final_Component_Lighter_Grey</p>
            <p className={color.text13}>Final_Red</p>
            <p className={color.text14}>Final_Yellow</p>
            <p className={color.text15}>Final_Profile_Purple</p>
            <p className={color.text16}>Final_Profile_Red</p>
            <p className={color.text17}>Final_Profile_Grey</p>
            <p className={color.text18}>Final_Profile_LightGrey</p>
            <p className={color.text19}>Final_Profile_Blue</p>
            <p className={color.text20}>Final_Profile_Orange</p>
            <p className={color.text21}>Final_Profile_Green</p>
            <p className={color.text22}>Final_Profile_Pink</p>
            <p className={color.text23}>Final_Profile_White</p>
            <p className={color.text24}>Final_Calendar_Green</p>
            <p className={color.text25}>Final_Calendar_Purple</p>
            <p className={color.text26}>Final_Calendar_Skin</p>
            <p className={color.text27}>Final_Calendar_Pink</p>
        </div>
    )
}

export default colourtest