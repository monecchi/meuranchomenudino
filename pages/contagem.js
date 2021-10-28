import Head from 'next/head'

export default function MeuRanchoContagem() {
  return (
    <div>
      <Head>
        <title>Meu Rancho Pizzaria Delivery</title>
        <meta name="description" content="Meu Rancho Pizzaria Betim. Pedido online, desconto, fidelidade e muito mais." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Meu Rancho</h1>
    </div>
  )
}

//
// Permanent server side redirect
//
MeuRanchoContagem.getInitialProps = ({ res }) => {

  if (res) {
    res.writeHead(301, {
      Location: 'https://meuranchocontagem.menudino.com/'
    });
    res.end();
  }

  return {};
};