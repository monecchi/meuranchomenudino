import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Delivery Meu Rancho Pizzaria</title>
        <meta name="description" content="Meu Rancho Pizzaria Betim. Seu Pedido online, cupons de desconto e muito mais." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello
    </div>
  )
}

//
// Permanent server side redirect
//
export default getServerSideProps = async (context) => {

  const { res } =  context;

  res.setHeader("location", "https://menudino.com/meurancho");
  res.statusCode = 301;
  res.end()

  //res.writeHead(301, { location: "https://menudino.com/meurancho" } );
  //res.end();

}
