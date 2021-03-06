import Head from 'next/head'

export default function Home() {
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
Home.getInitialProps = ({ res }) => {

  if (res) {
    res.writeHead(301, {
      Location: 'https://meurancho.menudino.com/'
    });
    res.end();
  }

  return {};
};


// export const getServerSideProps = async (context) => {

//   const { res } = context;

//   res.setHeader("location", "https://meuranchobh.menudino.com/");
//   res.statusCode = 301;
//   res.end()

//   //res.writeHead(301, { location: "https://meuranchobh.menudino.com/" } );
//   //res.end();

// }
