

const devPresets = ['@vue/babel-preset-app'];
const buildPresets = [
    [
        '@babel/preset-env',
    
        // Config for @babel/preset-env
        {
            "loose": true,
            "modules": false
            // Example: Always transpile optional chaining/nullish coalescing
            // include: [
            //   /(optional-chaining|nullish-coalescing)/
            // ],
        },
    ],
];
module.exports = {
    plugins: ["@vue/babel-plugin-jsx"],
    presets: (process.env.NODE_ENV === 'development' ? devPresets : buildPresets),
};
