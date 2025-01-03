import { styled, theme } from "@/src/styles/stitches";

export const SideBarContainer = styled('aside', {
    maxHeight: '920px',
    height: '920px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    margin: '20px auto 16px 20px',
    padding: '2.5rem 3.25rem 1.5rem',
    background: `linear-gradient(250deg, ${theme.colors["green-200"]}, ${theme.colors["purple-200"]}, ${theme.colors["gray-800"]})`,
    borderRadius: '12px'
})

export const SideBarHeader = styled('header', {
    marginBottom: '64px'
})

export const SideBarNav = styled('nav', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '1rem',
})

export const NavLink = styled('a', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',

    color: '$gray-400',
    textDecoration: 'none',

    '&::before': {
        content: '',
        width: '4px',
        height: '24px',
        borderRadius: '999px',
        marginRight: '1rem',
        backgroundColor: 'transparent'
        },

    '&[data-active="true"]': {
        color: '$gray-100',
        fontWeight: 'bold',

        '&::before': {
            background: '$gradiant-vertical',
        }
    }
})

export const SideBarFooter = styled('footer', {
    marginTop: 'auto',
    a: {    
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
    
        color: '$gray-200',
        fontWeight: 'bold',
        textDecoration: 'none',
    
        svg: {
            color: '$green-100'
        }
    }
})