import { styled } from "@/src/styles/stitches";
import { Drawer } from "@mui/material";

export const ExploreContainer = styled('div', {
    width: '100%',
    padding: '72px 96px 48px 0',
})

export const ExploreHeader = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
    
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.75rem',

        h1: {
            color: '$gray-100',
            fontSize: '$2xl',
            fontWeight: 'bold',
            lineHeight: '$short'
        },

        svg: {
            color: '$green-100'
        }
    },

    div: {
        maxWidth: '433px',
        width: '100%'
    }
})

export const ExploreFilters = styled('div', {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '48px'
})

export const ExploreContent = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1.25rem',
})

export const DrawerComponent = styled(Drawer, {
    width: '100%',
    marginLeft: 'auto',
    
    '& .MuiDrawer-paper': {
        background: '$gray-800',
        color: '#E6E8F2',
        width: '100%',
        maxWidth: '650px',
    },
})

export const DrawerContent = styled('div', {
    height: '100%',
    padding: '24px 48px 0',
})

export const DrawerContentHeader = styled('div', {
    marginBottom: '40px',
})

export const DrawerContentCloseButton = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '16px',

    button: {
        all: 'unset',
        lineHeight: 0,
        cursor: 'pointer',
        
    }
})

export const DrawerContentReviews = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        h2: {
            fontSize: '$sm',
            fontWeight: 'normal',
            color: '$gray-200',
        },

        button: {
            background: 'transparent',
            border: 'none',
            padding: '0',

            fontSize: '$md',
            fontWeight: 'bold',
            color: '$purple-100',
            cursor: 'pointer',

            transition: 'color 0.2s',
            
            '&:disabled': {
                display: 'none',
            },
            
            '&:hover': {
                color: '$purple-200',
            }
        }
    }
})