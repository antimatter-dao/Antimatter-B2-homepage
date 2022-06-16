import React from 'react';
import { CSSTransition, transit } from 'react-css-transition';

const easeOutQuart = 'cubic-bezier(0.165, 0.84, 0.44, 1)';

function FadeInUp({ distance = '700px', duration = 5000, children, active, ...props }) {
  const transitionStyles = {
    defaultStyle: {
      opacity: 0,
      transform: `translate(0, ${distance})`,
    },
    enterStyle: {
      opacity: transit(1, duration, easeOutQuart),
      transform: transit('translate(0, 0)', duration, easeOutQuart),
    },
    leaveStyle: {
      opacity: transit(0, duration, easeOutQuart),
      transform: transit(`translate(0, ${distance})`, duration, easeOutQuart),
    },
    activeStyle: {
      opacity: 1,
      transform: 'translate(0, 0)',
    },
    active: active,
    transitionAppear: true,
  };
  return (
    <CSSTransition {...transitionStyles} {...props}>
      {children}
    </CSSTransition>
  );
}

export default FadeInUp