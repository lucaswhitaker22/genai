const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
            apiKey: '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',
        });
    const openai = new OpenAIApi(configuration);

    async function createImage(prompt, n) {
        const response = await openai.createImage({
            prompt: prompt,
            n: n,
            size: "1024x1024",
        });
        return response.data;
    }

    

module.exports = { createImage };