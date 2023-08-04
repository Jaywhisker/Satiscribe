import React, { useEffect, useState } from 'react';
import contentblock from '@/styles/components/contentblocks.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'

function EmailDropdown({ clickable, onClick, dataset, resetDropDown, emailIconMap }) {
  const backgroundColors = [`var(--Final_Component_Dark_Grey)`, `var(--Final_Component_Lighter_Grey)`];
  const [dropDown, setDropDown] = useState(false)
  const [emailList, setEmailList] = useState()
  const [effectRan, setEffectRan] = useState(false)

  const toggleDropDown = () => {
    setDropDown((prevDropDown) => !prevDropDown);
  };

  useEffect(() => {
    const fetchEmailList = async () => {
      if (clickable) {
        setEmailList(Object.keys(dataset))
      }
      setEffectRan(true)
    };
    fetchEmailList();
  }, [dataset]);

  useEffect(() => {
    const resetDropDown = () => {
      setDropDown(false)
    };
    resetDropDown();
  }, [resetDropDown]);

  const handleOptionClick = (email) => {
    onClick(email);
    setDropDown(false); // Close the dropdown after selecting an option
  };

  return (
    <>
      {effectRan &&
        <div>
          {clickable ?
            (<div onClick={toggleDropDown} >
              <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                <div className={flexi.flexRowSmolGap}>
                  <p style={{ color: `rgba(255, 255, 255, 0.4)` }}>{Object.keys(dataset).filter(email => dataset[email]).length ? "" : "Add members"}</p>
                  {Object.keys(dataset)
                    .filter(email => dataset[email])
                    .map(email => (
                      <img
                        key={email}
                        src={emailIconMap[email] || "/profiles/Profile Pict (Cream).png"} // use the mapped icon if available, otherwise fall back to a default
                        alt={email}
                        className={logos.small}
                        style={{ zIndex: 1 }}
                      />
                    ))}
                </div>
                <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Dropdown.png")`, zIndex: 1 }}></div>
              </div>
              <div className={contentblock.line}></div>
            </div>
            ) : (
              <div >
                <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                  <div className={flexi.flexRowSmolGap}>
                    <p style={{ color: `var(--Final_White)` }}> Assign Task To</p>
                  </div>
                  <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Dropdown.png")`, zIndex: 1 }}></div>
                </div>
                <div className={contentblock.line}></div>
              </div>
            )}

          {dropDown && (<div style={{ border: '4px solid', borderTop: 'none', borderColor: `var(--Final_Black)` }}>
            {emailList.map((email, index) => (
              <div
                key={email}
                className={`${flexi.spacing} ${dataset[email] ? 'flexi.inLine' : ''}`}
                style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}
                onClick={() => handleOptionClick(email)}>

                <div className={`${flexi.flexRowSmolGap} ${contentblock.clickable}`}>
                  <div className={logos.small} style={{ backgroundImage: `url(${dataset[email] ? '/icons/CheckboxTicked.png' : '/icons/Checkbox.png'})`, zIndex: 1 }}></div>
                  <img
                    src={emailIconMap[email] || "/profiles/Profile Pict (Cream).png"} // use the mapped icon if available, otherwise fall back to a default
                    alt={email}
                    className={logos.small}
                    style={{ zIndex: 1 }}
                  />
                  <p style={{ color: `var(--Final_White)` }}>{email}</p>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      }
    </>
  )
}

export default EmailDropdown
