import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            { locales: ['ru', 'en'], keyAsDefaultValue: true },
          ],
          [
            "@babel/plugin-transform-typescript",
            {
              isTsx,
            },
          ],
          [
            "@babel/plugin-transform-runtime",
          ],
          isTsx && [ // write like this to pass options into plugin
            babelRemovePropsPlugin,
            { props: ['data-testid'] },
          ],
          isDev && 'react-refresh/babel',
        ].filter(Boolean), // very important - otherwise error because of `isDev` condition
      },
    },
  };
}
