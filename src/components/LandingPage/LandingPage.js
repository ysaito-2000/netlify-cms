/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import FacebookIcon from '../../assets/facebook.svg';
import TwitterIcon from '../../assets/twitter.svg';
import AndroidIcon from '../../assets/android.svg';
import NavButton from '../UI/NavButton/NavButton';
// eslint-disable-next-line no-unused-vars
import AnimatedBg from '../AnimatedBg';
import LandingShowcase from '../LandingShowcase';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      <div
        sx={{
          height: 0,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="home__page w-full relative">
            <div className="home__page__content ">
              <div className="md:max-w-xs px-8 md:flex-col lg:max-w-lg">
                <span
                  sx={{
                    color: 'text',
                    fontSize: 40,
                    fontWeight: 200,
                    lineHeight: 1.5,
                  }}
                >
                  <img
                    sx={{ objectPosition: '-2rem' }}
                    width="500px"
                    className="block w-200"
                    src="https://s3-us-west-1.amazonaws.com/hakkei.cloud/ryvallogo.png"
                    alt="Workflow"
                  />
                  <br />
                  <span className="whitespace-pre">Get setup in one click</span>
                  <p className="mt-3 text-lg text-gray-300">
                    USBNEX is loaded with free features to fully customize,
                    update, and adjust your keyboard all within your browser on
                    any device.
                  </p>
                </span>
                <NavButton
                  title=" Privacy Policy"
                  link="/signup"
                  variant="white"
                />
              </div>
              <div className="home__page__content">
                <div className="home__page__content__social">
                  <FacebookIcon />
                  <TwitterIcon />
                  <AndroidIcon />
                </div>
              </div>
            </div>
            <div className="home__page__content ">
              <figure>
                <AnimatedBg />
              </figure>
              <div className="space-y-32" />
              <div className="space-y-8" />
              <div className="divide-y-4 divide-yellow-600 divide-dashed m-auto flex justify-start" />
            </div>
          </div>
          <section className="min-w-full h-auto">
            <LandingShowcase />
          </section>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
