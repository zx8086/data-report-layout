import type { PageLoad } from './$types';

export async function load({ params }) {
    // Assuming params have the properties seasonCode and divisionCode
    return {
            seasonCode: params.seasonCode,
            divisionCode: params.divisionCode
        }
}