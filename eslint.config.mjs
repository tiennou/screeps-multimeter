import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: [
            'src/**/*.js',
            'plugins/**/*.js',
        ],
        plugins: { js },
        languageOptions: {
            sourceType: 'commonjs',
            globals: {
                __dirname: 'readonly',
                ...globals.nodeBuiltin,
            },
        },
        extends: ['js/recommended'],
        rules: {
            'no-unused-vars': ['warn', {
                args: 'none',
                "destructuredArrayIgnorePattern": "^_",
            }],
        },
    },
]);
