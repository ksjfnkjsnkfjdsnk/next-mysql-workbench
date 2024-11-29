import { neon } from "@neondatabase/serverless"

const getData = async () => {
    const sql = neon(process.env.DATABASE_URL);
    const results = await sql`SELECT * FROM usuarios`;

    return results
}

export default getData