import { useState, useEffect, useStyles } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EuroIcon from "@mui/icons-material/Euro";
import { List, ListItem, ListItemText } from "@mui/material";
import CoinsService from "../store/CoinsService";
import { makeStyles } from "@mui/styles";

const CoinData = (props) => {
  const Img = styled("img")({
    margin: "5% auto auto auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const useStyles = makeStyles({
    list: {
      paddingLeft: "50%",
    },
  });

  const location = useLocation();
  const coinData = location.state.coinData;
  const [coinDetail, setCoinDetail] = useState();
  const classes = useStyles();

  useEffect(() => {
    getCoinDetailsById();
  }, []);

  //Method to get the details of the coin by ID
  const getCoinDetailsById = () => {
    CoinsService.getCoinDetailsById(coinData).then((data) => {
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
    <div>
      <a href="/" className="backward-link">
        Go Back
      </a>
      <Card>
        {coinDetail ? (
          <CardContent>
            <Img src={coinDetail.image.large} alt={coinDetail.name} />

            <Typography gutterBottom variant="h5" component="div">
              {coinDetail.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b> Symbol : </b> {coinDetail.symbol}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <b> Hashing algorithm: </b>
              {coinDetail.hashing_algorithm}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <b> Market cap in Euro: </b>
              {coinDetail.market_data.market_cap.eur}
            </Typography>
            <div>
              <Typography variant="body2" color="text.secondary">
                <b> Homepage:</b>

                <List>
                  {coinDetail.links.homepage
                    .filter((page) => page)
                    .map((pageLink, index) => (
                      <ListItem key={index} className={classes.list}>
                        <Typography variant="body2" color="text.secondary">
                          <EuroIcon />
                        </Typography>
                        <ListItemText secondary={pageLink} />
                      </ListItem>
                    ))}
                </List>
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              <b> Genesis Date:</b> {coinDetail.genesis_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b> Description: </b>
              {coinDetail.description.en}
            </Typography>
          </CardContent>
        ) : (
          <CardContent>
            <Typography variant="h4" component="div" color="text.error">
              Processing...
            </Typography>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
export default CoinData;
