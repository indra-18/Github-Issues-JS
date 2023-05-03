import axios from "axios";
export async function getIssues (pageNumber) {
    try {
        return await axios.get(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
    } catch (error) {
        console.log(error.message)
    }
}
// let issueList
// getIssues(1).then(res => {
//     // issueList = res.data
//     console.log(res.data)
// })
// console.log(issueList)
