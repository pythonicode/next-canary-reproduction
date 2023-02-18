import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    return NextResponse.json({
        status: 'online',
        version: '0.0.1 beta'
    })
}
