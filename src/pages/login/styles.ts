import { styled } from "@/src/styles/stitches";

export const LoginContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: '598px 1fr',
    gap: '450px',

    margin: '20px auto 20px 20px',
    maxWidth: '1440px'
})

export const LoginBannerContainer = styled('div', {
    width: '100%',
    height: '100%',
})

export const LoginOptionsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    gap: '16px',
    padding: '0 20px',

    header: {
        marginBottom: '24px',
        marginRight: 'auto',

        display: 'flex',
        flexDirection: 'column',

        h1: {
            fontSize: '$2xl',
            fontWeight: 'bold',
            lineHeight: '$short',
        },
        p: {
            fontSize: '$md',
            color: '$gray-200'
        }
    }
})

