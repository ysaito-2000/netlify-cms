/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
/** SVGs */
import ConnectionSuccessSVG from '../../assets/ConnectionSuccessSVG.svg';
import ShieldWithCheck from '../../assets/shield-with-check.svg';
import FaceID from '../../assets/faceID.svg';
import Key from '../../assets/key.svg';
import QuestionMark from '../../assets/QuestionMark.svg';
/** CSS */
import './ConnectionSuccess.css';

function ConnectionSuccess({ name, uuid }) {
  return (
    <div className="container">
      <div className="connectionSuccessPage">
        <div className="connectionSuccessPage__content">
          <div className="connectionSuccessPage__content__title">
            <h2>HID Device Connected</h2>
            <ShieldWithCheck />
          </div>
          <div className="connectionSuccessPage__content__userInfo">
            <span
              sx={{
                color: 'accent',
                fontSize: 14,
              }}
            >
              Name:
              {' '}
              {name}
            </span>
            <span
              sx={{
                color: 'accent',
                fontSize: 14,
              }}
            >
              UUDID:
              {' '}
              {uuid}
            </span>
          </div>
          <div className="connectionSuccessPage__content__form">
            <div sx={{ variant: 'forms.input' }}>
              <FaceID />
            </div>
            <div sx={{ variant: 'forms.input' }}>
              <Key />
            </div>
          </div>
        </div>
        <div className="connectionSuccessPage__svgs">
          <ConnectionSuccessSVG />
        </div>
        <div className="connectionSuccessPage__help">
          <QuestionMark />
          <Link to="/help">Need Help?</Link>
        </div>
      </div>
    </div>
  );
}

export default ConnectionSuccess;
