import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CoinItem = (props) => {
  const navigate = useNavigate();
  const coinData = props.coinData;
  const Img = styled("img")({
    margin: "5% auto auto auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const coinClick = () => {
    navigate("/coinData", {
      state: {
        coinData: coinData.id,
      },
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
