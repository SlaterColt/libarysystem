const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    },
    databaseurl: process.env.NEXT_PUBLIC_DATABASE_URL,
    upstash: {
      redisUrl: process.env.NEXT_PUBLIC_UPSTASH_REDIS_URL,
      redisToken: process.env.NEXT_PUBLIC_UPSTASH_REDIS_TOKEN,
      qstashUrl: process.env.QSTASH_URL,
      qstashToken: process.env.QSTASH_TOKEN,

    }
  },
};

export default config;
