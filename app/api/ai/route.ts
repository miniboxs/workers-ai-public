import { NextResponse, NextRequest } from 'next/server'
import { headers } from 'next/headers'

const token = process.env.CF_WORKERS_AI_TOEKN
const api = process.env.CF_WORKERS_AI_API

export async function POST(request: NextRequest) {
    try {
        const headersList = headers()
        const authorization = headersList.get('Authorization')
        const { prompt, model } = await request.json()
        if (authorization !== "bb314ed36050a277eecd251066c11c84") {
            return new Response('Authorization is required', {
                status: 401
            })
        }

        if (!token?.length || !api?.length) {
            return new Response('token或者api缺失', {
                status: 400
            })
        }

        const res = await fetch(`${api}${model}`, {
            method: "POST",
            headers: {
                "Authorization": token as string,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt
            }),

        })

        if (!res.ok) {
            throw new Error("create failed!")
        }

        const blob = await res.blob()
        console.log(blob);

        return new Response(blob, {
            status: 200,
            headers: {
                // "content-type": "image/png",
                'Access-Control-Allow-Origin': 'https://sd.aisb.top',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        })

    } catch (error) {
        return NextResponse.json({ error })
    }
}