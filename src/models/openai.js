const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
            apiKey: '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',
        });
    const openai = new OpenAIApi(configuration);

    async function createImage(prompt, n) {
        const response = await openai.createImage({
            prompt: prompt,
            n: n,
            size: 1024,
        });
        console.log(response.data)
        return JSON.parse(response.data);
    }

    getImageFromURL("https://media.geeksforgeeks.org/wp-content/uploads/20220123201842/emailname.jpg")

    function getImageFromURL(url) {
        //get image from http url
        fetch(url).then((res) => {
            console.log(res)
            return res.arrayBuffer();
        });
    }

    

module.exports = { createImage, getImageFromURL };