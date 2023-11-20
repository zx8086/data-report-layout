// src/stores/menuListStore.js
import { writable } from 'svelte/store';

// Define the type for a menu item
interface MenuItem {
    href: string;
    division: string;
    name: string;
    img: string;
    theme: string;
}

// This creates a writable store with an initial empty array.
export const menuListStore = writable<MenuItem[]>([]);

// This function will be exported and used to set the menu list based on a given brand.
export function setMenuList(brand: string): void  {

    let menuList: MenuItem[];
    let seasonCode = 'C42';

    if (brand === 'TH') {
        menuList = [
            { href: `/${seasonCode}/01`, division: "01", name: "TH Menswear", img: "/img/division/msw.jpg", theme: "theme-th"},
            { href: `/${seasonCode}/02`, division: "02", name: "Tommy Jeans", img: "/img/division/dnm.jpg", theme: "theme-th" },
            { href: `/${seasonCode}/03`, division: "03", name: "TH Licensing", img: "/img/division/licensing.jpg", theme: "theme-th"},
            { href: `/${seasonCode}/04`, division: "04", name: "TH Kids",img: "/img/division/kids.jpg", theme: "theme-th"},
            { href: `/${seasonCode}/05`, division: "05", name: "TH Womenswear", img: "/img/division/wsw.jpg", theme: "theme-th"},
            { href: `/${seasonCode}/07`, division: "07", name: "TH Bodywear", img: "/img/division/bdw.jpg", theme: "theme-th"},
            { href: `/${seasonCode}/08`, division: "08", name: "Tommy Sport", img: "/img/division/sports.jpg", theme: "theme-th"},
            { href: `/${seasonCode}/09`, division: "09", name: "TH Footwear", img: "/img/division/ftw.jpg", theme: "theme-th"},
            { href: `/${seasonCode}/10`, division: "10", name: "TH Accessories", img: "/img/division/acc.jpg", theme: "theme-th"},
            { href: `/${seasonCode}/11`, division: "11", name: "TH Tailored", img: "/img/division/tail.jpg", theme: "theme-th"},
            { href: `/${seasonCode}/18`, division: "18", name: "TH Collections", img: "/img/division/col.jpg", theme: "theme-th"},
        ];
    } else if (brand === 'CK') {
        menuList = [
            { href: `/${seasonCode}/61`, division: "61", name: "CK Menswear", img: "/img/division/msw.jpg", theme: "theme-ck"},
            { href: `/${seasonCode}/62`, division: "62", name: "CK Jeans", img: "/img/division/dnm.jpg", theme: "theme-ck"},
            { href: `/${seasonCode}/64`, division: "64", name: "CKJ Kids", img: "/img/division/kids.jpg", theme: "theme-ck"},
            { href: `/${seasonCode}/65`, division: "65", name: "CK Womenswear", img: "/img/division/ckwsw.jpg", theme: "theme-ck"},
            { href: `/${seasonCode}/67`, division: "67", name: "CK Underwear", img: "/img/division/bdw.jpg", theme: "theme-ck"},
            { href: `/${seasonCode}/68`, division: "68", name: "CK Tailored", img: "/img/division/tail.jpg", theme: "theme-ck"},
            { href: `/${seasonCode}/69`, division: "69", name: "CK Footwear", img: "/img/division/ckftw.jpg", theme: "theme-ck"},
            { href: `/${seasonCode}/70`, division: "70", name: "CK Accessories", img: "/img/division/acc.jpg", theme: "theme-ck"},
            { href: `/${seasonCode}/77`, division: "77", name: "CK Swimwear", img: "/img/division/swm.jpg", theme: "theme-ck"},
        ];
    } else if (brand === 'NIKE') {
        menuList = [
            { href: `/${seasonCode}/97`, division: "97", name: "Nike Underwear", img: "/img/division/nike.jpg", theme: "theme-nike"},
        ];
    } else {
        menuList = [];
    }

  // This updates the menuListStore with the new value
menuListStore.set(menuList);
}