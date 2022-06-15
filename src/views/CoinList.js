import { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import CoinsService from "../store/CoinsService";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CoinItem from "../components/CoinItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#64676c",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CoinList() {
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState([1]);
  const [itemPerPage, setItemPerPage] = useState([10]);

  //Method to get all the Coins data for market
  const getCoinsForMarket = () => {
    CoinsService.getCoinsForMarket(
      "EUR",
      "market_cap_desc",
      itemPerPage,
      page
    ).then((data) => {
      if (data) {
        setCoinsData(data);
      } else {
        alert("no data");
        if (data && data.msgBody) {
          alert(data.msgBody);
        }
      }
    });
  };

  useEffect(() => {
    getCoinsForMarket();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {coinsData.map((coinData, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              {" "}
              <CoinItem coinData={coinData} id={index} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default CoinList;
