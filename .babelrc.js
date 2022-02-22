module.exports = {
    // 바벨 기본 설정
    presets: ['@babel/preset-env'],
    // aynsc, await 사용을 위한 플러그인
    plugins: [
        ['@babel/plugin-transform-runtime']
    ]
}