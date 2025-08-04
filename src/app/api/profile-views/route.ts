import { NextResponse } from 'next/server';


export const dynamic = 'force-static';
export const revalidate = 60;

export async function GET() {
    try {
        const response = await fetch('https://komarev.com/ghpvc/?username=hmes98318&style=flat-square', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch profile views');
        }
        
        const svgText = await response.text();
        
        // 使用正則表達式提取計數值
        const match = svgText.match(/<text x="99" y="14">([^<]+)<\/text>/);
        const views = match && match[1] ? (match[1]).replace(/,/g, '') : '0';
        
        return NextResponse.json({ views });
    } catch (error) {
        console.error('Error fetching profile views:', error);
        return NextResponse.json({ views: '0' }, { status: 500 });
    }
}