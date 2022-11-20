module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}", ],
    theme: {
        fontFamily: {
            display: ['Poen Sans', 'sans-serif'],
            body: ['Poen Sans', 'sans-serif'],
        },
        extend: {
            14: '12px',
        },
        backgroundColor: {
            'main-bg': '#FAFBFB',
            'main-dark-bg': '#20232A',
            'bg-green-600': '#20232A',
            'light-gray': '#F7F7F7',
            'half-transparent': 'rgba(0,0,0,0.5)',
        },
        borderWidth: {
            1: '1px',
        },
        borderColor: {
            color: 'rgba(0,0,0,0.1)'
        },
       
    },
    plugins: [],
}