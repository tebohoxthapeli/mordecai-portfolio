const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        percentage: {
            "0/1": "0%",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            "full": "100%",
        },
        extend: {
            fontFamily: {
                "ibm-plex": ["'IBM Plex Mono'", "mono space"],
            },
        },
    },
    plugins: [
        plugin(({ addUtilities, theme }) => {
            addUtilities({
                ".cropped-screen": {
                    "min-height": "calc(100vh - 72px)",
                    "min-width": theme("spacing."),
                },
            });
        }),
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    "right-perc": (value) => ({
                        right: `${value}`,
                    }),
                },
                {
                    values: theme("percentage"),
                }
            );
        }),
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    "left-perc": (value) => ({
                        right: `${value}`,
                    }),
                },
                {
                    values: theme("percentage"),
                }
            );
        }),
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    "top-perc": (value) => ({
                        right: `${value}`,
                    }),
                },
                {
                    values: theme("percentage"),
                }
            );
        }),
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    "bottom-perc": (value) => ({
                        right: `${value}`,
                    }),
                },
                {
                    values: theme("percentage"),
                }
            );
        }),
    ],
};
