import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CoinsService from "../store/CoinsService";

const CoinItem = (props) => {
  const navigate = useNavigate();
  const coinData = props.coinData;
  const [coinDetail, setCoinDetail] = useState();
  const Img = styled("img")({
    margin: "5% auto auto auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const coinClick = () => {
    navigate("/coinData", {
      state: {
        coinData: coinDetail,
      },
    });
  };

  useEffect(() => {
    getCoinDetailsById();
  }, []);

  //Method to get the details of the coin by ID
  const getCoinDetailsById = () => {
    CoinsService.getCoinDetailsById(coinData.id).then((data) => {
      if (data) {
        setCoinDetail(data);
      } else {
        alert("no data");
        if (data && data.msgBody) {
          alert(data.msgBody);
        }
      }
    });
  };

  return (
    <Card onClick={coinClick}>
      <CardActionArea>
        <Img src={coinData.image} alt={coinData.name} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {coinData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b> Symbol :</b> {coinData.symbol}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <b> Current Price: </b>
            {coinData.current_price}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <b> High 24 hour Price: </b>
            {coinData.high_24h}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b> Low 24 hour Price: </b>
            {coinData.low_24h}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CoinItem;
