import { NextRequest, NextResponse } from "next/server";
import prisma from '@/db'

export async function POST(req: NextRequest) {
    const body = await req.json();
    // should add zod validation here
    const user = await prisma.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    console.log(user.id);

    return NextResponse.json({
        message: "Signed Up"
    })
}