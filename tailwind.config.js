module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ffef99',

          secondary: '#c7d2fe',

          accent: '#08507f',

          neutral: '#e7e5e4',

          'base-100': '#f5f5f4',

          info: '#a5b4fc',

          success: '#1fe076',

          warning: '#f49906',

          error: '#e34a4f',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
