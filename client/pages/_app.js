import './index.scss'

// next가 SSR하기 위해 필요한 컴포넌트
const App = ({ Component, pageProps }) => <Component {...pageProps} />

App.getInitialProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getInitialProps?.(ctx)
    return { pageProps }
}

export default App

