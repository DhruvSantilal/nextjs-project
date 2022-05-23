import axios from "axios";

const url = "https://api.coinstats.app/public/v1/coins?skip=0";

const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div>
      {coinData.coins.map((coin) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <h1>{coin.name}</h1>
            <img src={coin.icon} alt="" />
            <p>{coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

//render data at render time
export const getServerSideProps = async ({ params }) => {
  //   const id = params.id;
  const data = await axios.get(url);
  return {
    props: {
      coinData: data.data,
    },
    // revalidate: 10,
  };
};

// export const getStaticProps = async ({ params }) => {
//   const id = params.id;
//   const data = await axios.get(url);
//   return {
//     props: {
//       coinData: data.data,
//     },
//   };
// };

export default CoinList;
