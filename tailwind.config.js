module.exports = {
    content: ["./src/style.css", "./dist/style.css", "./src/index.html"],
    theme: {
        extend: {},
        colors: {
            black: {
                600: "#2e2e2e",
                400: "#454545",
            },

            orange: {
                500: "#ff723b",
            },

            white: "#fff",
        },

        fontFamily: {
            main: ["Space Grotesk"],
        },
    },
    plugins: [],
};
