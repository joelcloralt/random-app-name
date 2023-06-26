const adjectives = require('./utils/adjectives.json');
const nouns = require('./utils/nouns.json');

exports.handler = async () => {
  try {

    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    const suffix = Math.random().toString(36).substr(2,4);

    const appName = `${adjectives[adjectiveIndex]}-${nouns[nounIndex]}-${suffix}`;
    
    console.log("App name: ", appName);

    return {
      statusCode: 200,
      body: JSON.stringify({ appName }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
