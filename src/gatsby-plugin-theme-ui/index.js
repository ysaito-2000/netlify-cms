export default {
  styles: {
    root: {
      background: 'linear-gradient(180deg, #4f3a84 65%,#120444 100% )',
      mixBlendMode: 'normal',
      fontFamily: 'Montserrat, sans-serif',
    },
  },
  colors: {
    text: '#FFFFFF',
    primary: '#6C5DD3',
    secondary: '#ff6347',
    accent: '#B7CCFF',
  },
  forms: {
    label: {
      fontSize: 12,
      color: '#B2B3BD',
      paddingLeft: '14px',
    },
    input: {
      borderColor: '#6C5DD3',
      borderRadius: '8px',
      height: '56px',
      width: '359px',
      color: '#fff',
      fontSize: 16,
      fontWeight: 600,
      paddingLeft: '14px',
      marginBottom: '0.7rem',
      '&:focus': {
        borderColor: '#6C5DD3',
        outline: 'none',
      },
    },
    select: {
      borderColor: '#6C5DD3',
      '&:focus': {
        borderColor: '#6C5DD3',
        outline: 'none',
      },
    },
    checkbox: {
      color: '#B2B3BD',
      borderRadius: '4px',
      width: '16px',
      height: '16px',
      border: 'none',
      outline: 'none',
    },
  },
  links: {
    primary: {
      backgroundColor: 'primary',
      color: 'white',
      borderRadius: '20px',
      cursor: 'pointer',
      '&:focus': {
        borderColor: '#6C5DD3',
        outline: 'none',
      },
      '&:disabled': {
        backgroundColor: '#a69de3',
        cursor: 'not-allowed',
      },
    },
    white: {
      backgroundColor: 'white',
      color: 'black',
      borderRadius: '50px',
    },
  },
  fontWeights: {
    normal: 500,
    heading: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72],
};
