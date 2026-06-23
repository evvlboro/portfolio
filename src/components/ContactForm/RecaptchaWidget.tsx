"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { forwardRef } from "react";

type RecaptchaWidgetProps = {
  siteKey: string;
  onExpired: () => void;
  onErrored: () => void;
};

const RecaptchaWidget = forwardRef<ReCAPTCHA, RecaptchaWidgetProps>(function RecaptchaWidget(
  { siteKey, onExpired, onErrored },
  ref,
) {
  return (
    <ReCAPTCHA ref={ref} sitekey={siteKey} onExpired={onExpired} onErrored={onErrored} />
  );
});

export default RecaptchaWidget;
