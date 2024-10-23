import React, { useEffect } from 'react'
import './MainLoader.css'

function MainLoader() {
    const blocks = [
        { class: "block-1" },
        { class: "block-2" },
        { class: "block-3" },
        { class: "block-4" },
        { class: "block-5" },
        { class: "block-6" },
        { class: "block-7" },
        { class: "block-8" },
        { class: "block-9" },
        { class: "block-10" },
        { class: "block-11" },
        { class: "block-12" },
        { class: "block-13" },
        { class: "block-14" },
        { class: "block-15" },
        { class: "block-16" },
    ]

    return (
        <div className='container'>
            <div className='container-sec'>
                <div class="loader">
                    <div class="loader-inner">
                        <div class="loader-blocks">
                            {blocks.map(item => (
                                <span className={item.class}></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLoader
