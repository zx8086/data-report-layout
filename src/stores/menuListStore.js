// src/stores/menuListStore.js
import { writable } from 'svelte/store';

// This creates a writable store with an initial empty array.
export const menuListStore = writable([]);

// This function will be exported and used to set the menu list based on a given brand.
export function setMenuList(brand) {
    let menuList;

    if (brand === 'TH') {
        menuList = [
            { href: "/01", division: "01", name: "TH Menswear", img: "/img/division/msw.jpg", theme: "theme-th"},
            { href: "/02", division: "02", name: "Tommy Jeans", img: "/img/division/dnm.jpg", theme: "theme-th" },
            { href: "/03", division: "03", name: "TH Licensing", img: "/img/division/licensing.jpg", theme: "theme-th"},
            { href: "/04", division: "04", name: "TH Kids",img: "/img/division/kids.jpg", theme: "theme-th"},
            { href: "/05", division: "05", name: "TH Womenswear", img: "/img/division/wsw.jpg", theme: "theme-th"},
            { href: "/07", division: "07", name: "TH Bodywear", img: "/img/division/bdw.jpg", theme: "theme-th"},
            { href: "/08", division: "08", name: "Tommy Sport", img: "/img/division/sports.jpg", theme: "theme-th"},
            { href: "/09", division: "09", name: "TH Footwear", img: "/img/division/ftw.jpg", theme: "theme-th"},
            { href: "/10", division: "10", name: "TH Accessories", img: "/img/division/acc.jpg", theme: "theme-th"},
            { href: "/11", division: "11", name: "TH Tailored", img: "/img/division/tail.jpg", theme: "theme-th"},
            { href: "/18", division: "18", name: "TH Collections", img: "/img/division/col.jpg", theme: "theme-th"},
        ];
    } else if (brand === 'CK') {
        menuList = [
            { href: "/61", division: "61", name: "CK Menswear", img: "/img/division/msw.jpg", theme: "theme-ck"},
            { href: "/62", division: "62", name: "CK Jeans", img: "/img/division/dnm.jpg", theme: "theme-ck"},
            { href: "/64", division: "64", name: "CKJ Kids", img: "/img/division/kids.jpg", theme: "theme-ck"},
            { href: "/65", division: "65", name: "CK Womenswear", img: "/img/division/ckwsw.jpg", theme: "theme-ck"},
            { href: "/67", division: "67", name: "CK Underwear", img: "/img/division/bdw.jpg", theme: "theme-ck"},
            { href: "/68", division: "68", name: "CK Tailored", img: "/img/division/tail.jpg", theme: "theme-ck"},
            { href: "/69", division: "69", name: "CK Footwear", img: "/img/division/ckftw.jpg", theme: "theme-ck"},
            { href: "/70", division: "70", name: "CK Accessories", img: "/img/division/acc.jpg", theme: "theme-ck"},
            { href: "/77", division: "77", name: "CK Swimwear", img: "/img/division/swm.jpg", theme: "theme-ck"},
        ];
    } else if (brand === 'NIKE') {
        menuList = [
            { href: "/97", division: "97", name: "Nike Underwear", img: "/img/division/nike.jpg", theme: "theme-nike"},
        ];
    } else {
        menuList = [];
    }

  // This updates the menuListStore with the new value
menuListStore.set(menuList);
}