import { NextResponse } from "next/server";

const API_KEY = process.env.YELP_API_KEY;
const BUSINESS_ID = process.env.YELP_BUSINESS_ID;

export async function GET() {
  if (!API_KEY || !BUSINESS_ID) {
    return NextResponse.json(
      { error: "YELP_API_KEY and YELP_BUSINESS_ID must be set in .env.local" },
      { status: 500 }
    );
  }

  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: "application/json",
  };

  try {
    const [bizRes, reviewsRes] = await Promise.all([
      fetch(`https://api.yelp.com/v3/businesses/${BUSINESS_ID}`, { headers }),
      fetch(`https://api.yelp.com/v3/businesses/${BUSINESS_ID}/reviews?sort_by=yelp_sort`, { headers }),
    ]);

    if (!bizRes.ok || !reviewsRes.ok) {
      return NextResponse.json({ error: "Yelp API returned an error" }, { status: 502 });
    }

    const [biz, reviewsData] = await Promise.all([bizRes.json(), reviewsRes.json()]);

    return NextResponse.json({
      business: {
        name: biz.name,
        rating: biz.rating,
        review_count: biz.review_count,
        url: biz.url,
      },
      reviews: reviewsData.reviews ?? [],
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch from Yelp" }, { status: 500 });
  }
}
