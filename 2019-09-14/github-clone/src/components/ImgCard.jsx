import React from 'react'

export default function ImgCard(props) {
    return (
        <figure>
            <img src={props.imgURL} />
            <figcaption>
                <p>{props.heading}</p>
                <span>{props.children}</span>
                <a href="{props.anchorURL}">Read more</a>
            </figcaption>
        </figure>
    )
}
