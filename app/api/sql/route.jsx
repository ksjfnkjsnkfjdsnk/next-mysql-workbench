import{ NextResponse } from "next/server";
import mysqlPool from "@/src/services/mysql";

export async function GET(){
    try {
        const result = await mysqlPool.query("SELECT * FROM usuarios");

        return NextResponse.json({ result: result[0] }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}