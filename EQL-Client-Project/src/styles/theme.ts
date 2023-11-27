import { DefaultTheme } from 'styled-components';

const colors = {
  red: '#ea3223',
  black: '#000000',
  grey1: '#767676',
  grey2: '#999999',
  grey3: '#b1b1b1',
  grey4: '#cccccc',
  grey5: '#EBEFF5',
  grey6: '#f2f2f2',
  grey7: '#FAFAFA',
  white: '#ffffff',
  red_transparent: 'rgba(234, 50, 35, 0.80)',
  white_transparent: 'rgba(255, 255, 255, 0.40)',
};

type Font = {
  family: string;
  weight: number;
  size: number;
  lineHeight: number;
  letterSpacing?: number;
  textDecorationLine?: string;
};
const FONT = ({
  family,
  weight,
  size,
  lineHeight,
  letterSpacing,
  textDecorationLine,
}: Font): string => {
  return `
    font-family: ${family};
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight};
    letter-spacing: ${letterSpacing}px;
    text-decoration-line: ${textDecorationLine};
    `;
};

// medium =500
// bold=700
// underlineSemibold=600
// Strikethrough_Medium =500

const fonts = {
  title1: FONT({ family: 'Pretendard Variable', weight: 500, size: 5.2, lineHeight: 1.2 }),
  title2: FONT({ family: 'Pretendard Variable', weight: 500, size: 3.6, lineHeight: 1.3 }),
  title3: FONT({ family: 'Pretendard Variable', weight: 500, size: 3.2, lineHeight: 1.3 }),
  title4: FONT({ family: 'Pretendard Variable', weight: 700, size: 2.6, lineHeight: 1.3 }),

  subtitle1: FONT({ family: 'Pretendard Variable', weight: 600, size: 2.8, lineHeight: 1.3 }),
  subtitle_underlined1: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 2,
    lineHeight: 1.4,
    letterSpacing: -0.6,
    textDecorationLine: 'underline',
  }),

  body1: FONT({
    family: 'Pretendard Variable',
    weight: 500,
    size: 2.4,
    lineHeight: 1.4,
    letterSpacing: -0.26,
  }),
  body2: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 2,
    lineHeight: 1.6,
    letterSpacing: -0.6,
  }),
  body3: FONT({
    family: 'Pretendard Variable',
    weight: 500,
    size: 2,
    lineHeight: 1.6,
    letterSpacing: -0.6,
  }),
  body4: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 1.8,
    lineHeight: 1.6,
    letterSpacing: -0.18,
  }),
  body5: FONT({
    family: 'Pretendard Variable',
    weight: 500,
    size: 1.8,
    lineHeight: 1.6,
    letterSpacing: -0.18,
  }),
  body6: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 1.6,
    lineHeight: 1.6,
    letterSpacing: -0.16,
  }),
  body7: FONT({
    family: 'Pretendard Variable',
    weight: 500,
    size: 1.6,
    lineHeight: 1.5,
    letterSpacing: -0.48,
  }),
  body8: FONT({ family: 'Pretendard Variable', weight: 600, size: 1.4, lineHeight: 1.4 }),
  body_underlined8: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 1.4,
    lineHeight: 1.4,
    letterSpacing: -0.14,
    textDecorationLine: 'underline',
  }),
  body9: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.4, lineHeight: 1.4 }),
  body10: FONT({
    family: 'Pretendard Variable',
    weight: 500,
    size: 1.2,
    lineHeight: 1.6,
    letterSpacing: 0.12,
  }),

  detail1: FONT({
    family: 'Pretendard Variable',
    weight: 500,
    size: 1.0,
    lineHeight: 1.6,
    letterSpacing: 0.1,
  }),

  number_strikethrough1: FONT({
    family: 'Pretendard Variable',
    weight: 500,
    size: 1.4,
    lineHeight: 1.6,
    letterSpacing: -0.28,
    textDecorationLine: 'strikethrough',
  }),
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
