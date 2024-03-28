import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  const isProd = !isDev;
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          [
            "@babel/plugin-transform-typescript",
            {
              isTsx,
            },
          ],
          [
            "@babel/plugin-transform-runtime",
          ],
          isTsx && isProd && [ // write like this to pass options into plugin
            babelRemovePropsPlugin,
            { props: ['data-testid'] },
          ],
          isDev && 'react-refresh/babel',
        ].filter(Boolean), // very important - otherwise error because of `isDev` condition
      },
    },
  };
}
