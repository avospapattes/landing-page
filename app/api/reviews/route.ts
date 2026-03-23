import { NextResponse } from 'next/server';

export async function GET() {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API;
    const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;

    try {
        const response = await fetch(url, { next: { revalidate: 86400 } });
        const data = await response.json();
        console.log('Google Places API response:', data);

        if (data.status !== 'OK') {
            return NextResponse.json({ error: data.status }, { status: 500 });
        }
        return NextResponse.json(data.result.reviews);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
}