import * as dotenv from 'dotenv'
dotenv.config()

import { Client } from './Client';


setTimeout(() => {
    main()
}, 1000);

async function main() {
    const ctx = {
        origin: 'https://expired-rsa-dv.ssl.com/',
    }
    const client = new Client(ctx)
    for (let i = 0; i < 5; i++) {
        const res = await client.fetch('')
        console.log(res.ok? 'HTTP STATUS OK!': 'HTTP STATUS ERROR!!')
    }
}
