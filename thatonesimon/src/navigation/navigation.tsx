export interface NavItem {
    path: string;
    label: string;
}

export const navItems: NavItem[] = [
    {
        path: '/',
        label: "Home",
    },
    {
        path: '/experience',
        label: "Experience",
    },
    {
        path: '/about',
        label: 'About',
    },
    {
        path: '/contact',
        label: 'Contact',
    }
];