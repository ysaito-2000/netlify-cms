/** @jsx jsx */
import { jsx } from 'theme-ui';
/** SVGs */
import SuccessPageSVG from '../../../static/svgs/SuccessPageSVG.svg';
import SuccessPageSVG_Icon from '../../../static/svgs/SuccessPageSVG_Icon.png';
import DiscordSVG from '../../../static/svgs/DiscordSVG.svg';
import Rocket from '../../assets/Rocket.svg';
/** CSS */
import './SuccessPage.css';

function SuccessPage({ location }) {
  const { state } = location;
  return (
    <div className="container">
      <div className="success__page">
        <div className="success__page__content">
          <div className="success__page__content__heading">
            <h2
              sx={{
                color: 'text',
                fontSize: 40,
                lineHeight: 1.4,
                letterSpacing: 1.1,
              }}
            >
              Thank you
              {' '}
              <span sx={{ textTransform: 'uppercase' }}>
                {state && state.name}
              </span>
              , you&apos;re all set!
            </h2>
          </div>
          <div className="success__page__content__check__email">
            <Rocket />
            <span
              sx={{
                color: 'accent',
                fontSize: 14,
              }}
            >
              Check your inbox for a verification email.
            </span>
          </div>
          <div className="success__page__content__description">
            <p
              sx={{
                color: 'accent',
                fontSize: 14,
                marginTop: '1rem',
              }}
            >
              You can opt out of our email promotions at any time.
            </p>
          </div>
        </div>
        <div className="success__page__svg">
          <img src={SuccessPageSVG} alt="USBNEX" className="success__svg" />
          <img
            src={SuccessPageSVG_Icon}
            alt="usbnex-icon"
            className="usbnex__icon"
          />
        </div>
      </div>
      <div className="success__page__follow__discord">
        <img src={DiscordSVG} alt="Follow Discord" />
        <p
          sx={{
            color: 'accent',
            fontSize: 14,
            marginTop: '1rem',
          }}
        >
          Join our official Discord server and let us know
          <br />
          {' '}
          how we can improve.
        </p>
      </div>
    </div>
  );
}

export default SuccessPage;
