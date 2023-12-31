export class Client {
    private $origin: string
    
    constructor(ctx: {origin: string}) {
        this.$origin = ctx.origin
    }
    
    async fetch(endpoint: string) {
        if (this.$origin.startsWith('https://')) {
            return await this.fetchHttps(this.$origin + endpoint)
        } else {
            return await this.fetchHttp(this.$origin + endpoint)
        }
    }

    private async fetchHttp(uri: string) {
        return await fetch(uri)
    }

    private async fetchHttps(uri: string) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
        const res = await fetch(uri)
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1'
        return res
    }
}
