import React from 'react'
import logos from '../styles/Logos.module.css'
import flexi from '../styles/Flexible.module.css'


export default function index() {
    return (
        <div>
            <div>
                <h1>Haro this is the display of the logosheet</h1>
            </div>

            <h2>Flexible module css: display layouts</h2>

            <p>This uses the flexrow found in Flexible.module.css, the gap can be controlled from global.css</p>
            <div className={flexi.flexRowSmolGap}>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
            </div>

            <p>This uses the flexcolumn found in Flexible.module.css, the gap can be controlled from global.css</p>
            <div className={flexi.flexColumnSmolGap}>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
            </div>

            <h2>Icons</h2>
            <p>Lmao they are so pixalated</p>

            <div className={flexi.flexRowSmolGap}>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Back.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Alignment-left.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Caution.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Check.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Dropdown.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Edit.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/file folder approved-2.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Filter.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Hamburger.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Home.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/information chat right.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Link.png")`, zIndex: 1 }}></div>

            </div>

            <div className={flexi.flexRowSmolGap}>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Link.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Logout.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/maps-location.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/plus.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Profile.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Search.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Sort.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Start.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Stop.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Trash.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/comment.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Edit Page.png")`, zIndex: 1 }}></div>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Replace.png")`, zIndex: 1 }}></div>
            </div>
            <div className={flexi.flexRowSmolGap}>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Back.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Alignment-left.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Caution.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Check.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Dropdown.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Edit.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/file folder approved-2.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Filter.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Hamburger.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Home.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/information chat right.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Link.png")`, zIndex: 1 }}></div>
            </div>
            <div className={flexi.flexRowSmolGap}>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Logout.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/maps-location.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/plus.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Profile.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Search.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Sort.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Start.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Stop.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Trash.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/comment.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Edit Page.png")`, zIndex: 1 }}></div>
                <div className={logos.big} style={{ backgroundImage: `url("/icons/Replace.png")`, zIndex: 1 }}></div>
            </div>
        </div>
    )
}

