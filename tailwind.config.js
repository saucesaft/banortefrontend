const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    require('daisyui')
  ],

  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        'red': {
          500: '#EB0029',
        },
      }
    }
  }
};

module.exports = config;