import { NextResponse } from "next/server"; 
import { getData } from "@/src/services/neon";

export async function GET() {
    try {
        const data = await getData();

        return NextResponse.json({ result: data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { nombre, email } = await req.json();

         if(!nombre || !email) {
            return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
        }

        


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}