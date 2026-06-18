import { pool } from "./database.js";
import "./dotenv.js"
import poniesData from "../data/ponies.js";

const createTableQuery = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS ponies;

    CREATE TABLE IF NOT EXISTS ponies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    species VARCHAR(255) NOT NULL,
    eyeColor VARCHAR(255) NOT NULL,
    maneColor VARCHAR(255) NOT NULL,
    coatColor VARCHAR(255) NOT NULL,
    cutieMark VARCHAR(255) NOT NULL,
    specialTrait VARCHAR(255) NOT NULL,
    image VARCHAR(65535) NOT NULL
    )
`

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 ponies table created successfully')
    }
    catch (err) {
        console.log('⚠️ error creating ponies table', err)
    }
}

const seedPoniesTable = async () => {
    await createTableQuery()

    poniesData.forEach((pony) => {
        const insertQuery = {
            text: `INSERT INTO ponies (name, species, eyeColor, maneColor, coatcolor, cutieMark, specialTrait, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
        }

        const values = [
            pony.name,
            pony.species,
            pony.eyeColor,
            pony.maneColor,
            pony.coatColor,
            pony.cutieMark,
            pony.specialTrait,
            pony.image
        ]

        pool.query(insertQuery, values, (err, res) => {
        if (err) {
            console.error('⚠️ error insering gift', err)
            return
        }
        console.log(`✅ ${pony.name} added successfully`)
    })
    })
    
}

seedPoniesTable()