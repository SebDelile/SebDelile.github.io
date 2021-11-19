const transitionDuration = '250ms';

export const biggerOnHover = `
transition: all ${transitionDuration};

&:hover,
&:focus {
  transform: scale(1.05);
}`;

export const dropshadowOnHover = `
transition: all ${transitionDuration};

&:hover,
&:focus {
  box-shadow: var(--boxshadow-slight);
}`;
