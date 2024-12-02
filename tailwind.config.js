/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primaryLine": "var(--mainprimary)",
        "secLine": "var(--mainsec)",
        "topbarLine": "var(--topbar)",
        "txt-primary": "#0000ff",
        "bg-primary": "#87CEEB",
        "darkBg": "#363636",
        "lightBg": "#ffffff",
        "bg-brown": "#6C6C6C",
        "med-gray": "#D0D0D0",
        "bg-brown2": "#404040",
        "txt-neavy": "#001F3F",
        "onHoverButton": "#0036B1",
        "ltOrange": "#ffaf1a",
        "heading":"var(--mainHeading)",
        "darkcardBg":"gary-900"
        // "topbarLine":"#6102af",
      },
      fontFamily: {
        sans: ['Libre Baskerville', 'sans-serif'],
        poppins: 'Poppins',
        barlow: 'Barlow',
        arimo: 'Arimo',
        oxygen:'Oxygen',
      },
      
      width: {
        'fill-available': '-webkit-fill-available',
      },


      backgroundImage: {
        'login': "url('/login_background.jpg')",
        'sideimage': "url('/bg_side.png')",
        'regsideimage': "url('/bg_reg_side.png')",
        "primaryLine": "var(--mainprimary)",
        "oppprimaryLine": "var(--oppmainprimary)",
        "businesssideimage": "url('/Business Registration.png')",
        "setuppassword": "url('/SET UP PASSWORD.png')",
        "logo": "url('/skillkronos_log.png')",
        "newLogin":"url('/bg_1.png')",
        'custom-gradient': 'linear-gradient(#eee, #58db14)', // Add your gradient here
        // "topbarLine":"var(--topbar)",
      },
      backgroundSize: {
        sideimage: "100%"
      },
      
      textColor: {
        "darkBg": "#ffffff",

      },
      backgroundColor: {
        'pbutton': "#00339A",
        'neavycolor': "#00839A"
      },
      borderColor: {
        'pbutton': "var(--mainsec)",
        "primaryLine": "var(--mainprimary)",
      },
      stroke: {
        'scolor': "var(--mainsec)",
        "pcolor": "var(--mainprimary)",
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

