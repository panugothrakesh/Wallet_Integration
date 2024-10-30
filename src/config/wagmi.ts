import { http, createConfig } from '@wagmi/core'
import { sepolia } from '@wagmi/core/chains'
import { injected, metaMask} from '@wagmi/connectors'

export const config = createConfig({
    chains: [sepolia],
    connectors: [metaMask(),],
    transports: {
        [sepolia.id] : http(),
    },
    ssr: true,
})