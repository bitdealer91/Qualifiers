"use client";
import { PropsWithChildren, useState } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { injected, walletConnect } from 'wagmi/connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider } from 'connectkit';
import { customChainConfig } from '@/lib/blockchainUtils';
import { Toaster as RadixToaster } from '@/components/ui/toaster';

// Add WalletConnect for mobile deep linking; keep injected for desktop/metamask
const wcProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;
// Avoid initializing WalletConnect on the server (build/SSG) where indexedDB/window are not available
const isClient = typeof window !== 'undefined';
const connectors = [
  injected({ target: 'metaMask' }),
  ...(isClient && wcProjectId
    ? [
        walletConnect({
          projectId: wcProjectId,
          showQrModal: true,
          metadata: {
            name: 'Somnia Staking Cup',
            description: 'Stake. Compete. Win.',
            url: window.location.origin,
            icons: ['/assets/somnia-logo.svg'],
          },
        }),
      ]
    : []),
];

const wagmiConfig = createConfig({
  chains: [customChainConfig],
  transports: {
    [customChainConfig.id]: http(`${process.env.NEXT_PUBLIC_NEW_CHAIN_RPC_URL}`),
  },
  connectors,
  ssr: true,
  batch: { multicall: false },
});

export default function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());
  const [mounted] = useState(true);
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          {children}
          <RadixToaster />
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
