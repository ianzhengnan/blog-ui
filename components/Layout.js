import Header from './Header'
import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous" />
      <link rel="stylesheet" href="/static/css/main.css" />
    </Head>
    <Header />

    {props.children}

    <footer></footer>

  </div>
)

export default Layout
