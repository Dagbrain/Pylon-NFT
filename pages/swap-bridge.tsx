import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import { useMemo } from 'react';

export const WidgetPage = () => 
    const widgetConfig: WidgetConfig = useMemo(() => ({
  integrator: 'Pylon NFT',
  variant: 'expandable',
  fromChain: 137,
  toChain: 43114,
  fromToken: '0x0000000000000000000000000000000000001010',
  toToken: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  fromAmount: 10,
  containerStyle: {
    border: `1px solid ${
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'rgb(66, 66, 66)'
        : 'rgb(234, 234, 234)'
    }`,
    borderRadius: '16px',
  },
  theme: {
    palette: {
      primary: { main: '#48D714' },
      secondary: { main: '#8A36DD' },
    },
    shape: {
      borderRadius: 0,
      borderRadiusSecondary: 0,
    },
    typography: {
      fontFamily: 'Comic Sans MS',
    },
  },
  appearance: 'dark',
}), []);

export const WidgetPage = () => {
  return <LiFiWidget config={widgetConfig} />;
};