import { css } from 'styled-components';
import theme from './theme';

const { colors } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
  `,
  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.red};
      outline: 0;
    }
  `,
};

export default mixins;
