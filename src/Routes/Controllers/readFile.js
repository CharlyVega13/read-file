const fs=require("fs").promises
const readFile=async()=>{
    try {
        const path ="2024-08-04-StagingTest-VirtualLatinos-WorkReport.pdf"
        const report = await fs.readFile(path);
        console.log(report);
        return report
    } catch (error) {
        console.log(error);
        return error.message
    }
}
module.exports=readFile