const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '59f1dde07824b010cf1e04f299a8730e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;