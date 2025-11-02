import axios from "axios"
import * as cheerio from "cheerio"

const createMessage = async () => {
    /**
     * 1. 입력된 메시지에서 http로 시작하는 문장이 있는지 찾기
     * 2. axios.get으로 요청해서 html 코드 받아오기 => 스크래핑
     * 3. 스크래핑 결과에서 OG 코드를 골라내서 변수에 담기 => cheerio 도움 받기
     */
    const url = 'https://www.naver.com'
    const result =await axios.get(url)
    console.log(result.data)

    const scrapingResult = cheerio.load(result.data)
    scrapingResult("meta").each((index, el) => {
        if (scrapingResult(el).attr("property") && scrapingResult(el).attr("property").includes("og:")) {
            const key = scrapingResult(el).attr("property")
            const value = scrapingResult(el).attr("content")
            
            console.log(key, value);
        }
    })
}

createMessage()