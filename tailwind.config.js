/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      formBannerContainer: "1400px",
      contentContainer: "1300px",
      containerSmall: "1024px",
      containerxs: "768px"
    },
    extend: {
      backgroundImage: {
        heroBackground2: "url('/images/bg-hero-2.png')",
        heroBackground: "url('/images/bg-hero.png')",
        heroResponsiveBg: "url('/images/bg-responsive-header.png')",
        blueWaveBackground: "url('/images/blue-wave.svg')",
        blackWaveBackground: "url('/images/footerBg.svg')",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily:{
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
        bannerFormShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#8892b0",
        textStabilo: "#E6FF4A",
        textPlaceholder: "#B1B1B1",
        btnPrimary: "#4D57F5",
        colorPrimary: "#4D57F5",
        colorSecondary: "#FF4E4E",
        colorCertificate: "#2E90FA",
        bgWaveBlue: "#F4FBFF",
        linkHover: "#FDF300",
        hoverColor: "rgba(100,255,218,0.1)"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tw-elements-react/dist/plugin.cjs")
  ],
}
