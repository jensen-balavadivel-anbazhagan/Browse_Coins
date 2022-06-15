import { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import CoinsService from "../store/CoinsService";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CoinItem from "../components/CoinItem";
import PaginationComp from "../components/PaginationComp";
import usePagination from "../store/Paginations";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#64676c",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CoinList() {
  const [coinsData, setCoinsData] = useState([]);
  const pageData = usePagination(coinsData, 10);

  //Method to get all the Coins data for market
  const getCoinsForMarket = (pageNo) => {
    CoinsService.getCoinsForMarket("EUR", "market_cap_desc", 10, pageNo).then(
      (data) => {
        if (data) {
          setCoinsData(data);
        } else {
          alert("no data");
          if (data && data.msgBody) {
            alert(data.msgBody);
          }
        }
      }
    );
  };

  //method called when the page is changed
  const handleChangePage = (event, newPage) => {
    getCoinsForMarket(newPage);
  };

  useEffect(() => {
    getCoinsForMarket(1);
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pageData.currentData().map((coinData, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                {" "}
                <CoinItem coinData={coinData} id={coinData.id} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <PaginationComp
        count={10}
        data={coinsData}
        dataPerPage={10}
        handleChangePage={handleChangePage}
      />
    </div>
  );
}
export default CoinList;
