const easeStandard = [0.22, 1, 0.36, 1];
const easeSoft = [0.16, 1, 0.3, 1];

export const revealViewport = {
  once: true,
  amount: 0.18,
};

export function createRevealVariants({
  variant = "fadeUp",
  delay = 0,
  duration,
  distance = 24,
  reduceMotion = false,
}) {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: Math.min(duration ?? 0.24, 0.24),
          delay: Math.min(delay, 0.06),
          ease: easeSoft,
        },
      },
    };
  }

  const baseTransition = {
    duration: duration ?? (variant === "fadeIn" ? 0.44 : 0.58),
    delay,
    ease: easeStandard,
  };

  const hiddenStates = {
    fadeIn: { opacity: 0 },
    fadeLeft: { opacity: 0, x: distance },
    fadeRight: { opacity: 0, x: -distance },
    softScale: { opacity: 0, y: 16, scale: 0.985 },
    fadeUp: { opacity: 0, y: distance },
  };

  return {
    hidden: hiddenStates[variant] || hiddenStates.fadeUp,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: baseTransition,
    },
  };
}

export function createStaggerContainer({
  delayChildren = 0.04,
  staggerChildren = 0.08,
  reduceMotion = false,
} = {}) {
  return {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? {
            delayChildren: 0,
            staggerChildren: 0.02,
          }
        : {
            delayChildren,
            staggerChildren,
          },
    },
  };
}

export function createMobileMenuOverlayVariants(reduceMotion = false) {
  return {
    closed: {
      opacity: 0,
      transition: {
        duration: reduceMotion ? 0.14 : 0.2,
        ease: easeSoft,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0.16 : 0.24,
        ease: easeSoft,
      },
    },
  };
}

export function createMobileMenuPanelVariants(reduceMotion = false) {
  return {
    closed: {
      opacity: 0,
      y: reduceMotion ? 0 : -10,
      scale: reduceMotion ? 1 : 0.985,
      transition: {
        duration: reduceMotion ? 0.16 : 0.26,
        ease: easeStandard,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reduceMotion ? 0.2 : 0.34,
        ease: easeStandard,
      },
    },
  };
}

export function createMobileMenuItemVariants(reduceMotion = false) {
  return {
    closed: {
      opacity: 0,
      y: reduceMotion ? 0 : 8,
      transition: {
        duration: reduceMotion ? 0.14 : 0.18,
        ease: easeSoft,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.18 : 0.24,
        ease: easeSoft,
      },
    },
  };
}
