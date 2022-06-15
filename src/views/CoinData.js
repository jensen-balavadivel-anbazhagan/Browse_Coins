import { experimentalStyled as styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EuroIcon from "@mui/icons-material/Euro";
import { List, ListItem, ListItemText } from "@mui/material";
import Link from "@mui/material/Link";

const CoinData = (props) => {
  const Img = styled("img")({
    margin: "5% auto auto auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const location = useLocation();
  const coinData = location.state.coinData;

  return (
    <div>
      <Link href="/" style={{ paddingLeft: "10px", color: "white" }}>
        <a className="backward-link">Go Back</a>
      </Link>
      <Card>
        <CardContent>
          <Img src={coinData.image.large} alt={coinData.name} />

          <Typography gutterBottom variant="h5" component="div">
            {coinData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b> Symbol : </b> {coinData.symbol}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <b> Hashing algorithm: </b>
            {coinData.hashing_algorithm}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <b> Market cap in Euro: </b>
            {coinData.market_data.market_cap.eur}
          </Typography>
          <div>
            <Typography variant="body2" color="text.secondary">
              <b> Homepage:</b>
            </Typography>
            <List>
              {coinData.links.homepage.map((pageLink, index) => (
                <ListItem key={index}>
                  <Typography variant="body2" color="text.secondary">
                    <EuroIcon />
                  </Typography>
                  <ListItemText secondary={pageLink} />
                </ListItem>
              ))}
            </List>
          </div>
          <Typography variant="body2" color="text.secondary">
            <b> Genesis Date:</b> {coinData.genesis_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b> Description: </b>
            {coinData.description.en}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default CoinData;
