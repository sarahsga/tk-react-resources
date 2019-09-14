import React from 'react';
import SignUpForm from './SignUpForm';

function SignUpSection() {
  return (
    <div className="main">
      <section className="webStart">
        <div className="built">
          <h1>Built for developers</h1>
          <p>
            GitHub is a development platform inspired by the way you work.
              From <a href="#">open source</a> to <a href="#">business</a>, you
            can host and review code, manage projects, and build software
            alongside 40 million developers.
            </p>
        </div>
        <SignUpForm />
        <input
          type="submit"
          value="Sign up for Github"
          className="formSubmit"
        />
      </section>
    </div>
  );
}

export default SignUpSection;