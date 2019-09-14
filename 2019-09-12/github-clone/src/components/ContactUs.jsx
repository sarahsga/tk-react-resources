import React from 'react'

export default function ContactUs() {
    return (
        <div className="last">
            <h2>
                Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things.
            </h2>
            <div className="lastForm">
                <input type="text" placeholder="Pick a username" />
                <input type="email" placeholder="Your email address" />
                <input type="password" placeholder="Creat a password" />
                <input type="submit" value="Sign up for GitHub" />
            </div>
            <p>
            By clicking “Sign up for GitHub”, you agree to our
            <a href="#"> terms of service </a>
            and<a href="#"> privacy statement </a>. We’ll occasionally send you
            account related emails.
            </p>
        </div>
    )
}
