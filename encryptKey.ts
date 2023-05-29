import {ethers} from 'ethers'
import * as fs from 'fs-extra'
import * as dotenv from 'dotenv'
dotenv.config()

async function main(){
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY as any)
    const encryptedJsonKey = await wallet.encrypt(process.env.PK_PASSWORD as any, process.env.PRIVATE_KEY)
    console.log(encryptedJsonKey)
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey)
}

main().then(() => process.exit(0)).catch((error)=>{
    console.error(error);
    process.exit(1)
})