import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tooltip,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const images = [
  {
    thumbnail: {
      uri: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9989cd60-470b-4c37-b61c-d94a019819ce/freak-4-basketball-shoes-zmXv3D.png",
      name: "animals",
    },
  },
  {
    thumbnail: {
      uri: "https://www.mrporter.com/variants/images/10375442618850077/in/w2000_q60.jpg",
      name: "city",
    },
  },
  {
    thumbnail: {
      uri: "https://www.mrporter.com/variants/images/10375442618850077/in/w2000_q60.jpg",
      name: "city",
    },
  },
  {
    thumbnail: {
      uri: "https://www.mrporter.com/variants/images/10375442618850077/in/w2000_q60.jpg",
      name: "city",
    },
  },
  {
    thumbnail: {
      uri: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:--transparent-full-rim-round-lenskart-blu-lb-e14060-c4_g_2563_20_06_2022.jpg",
      name: "nature",
    },
  },
  {
    thumbnail: {
      uri: "https://shopcanoeclub.com/cdn/shop/products/orslow-us-army-fatigue-pants-used-wash-regular-fit-green-used-1.jpg?v=1661536166",
      name: "cats",
    },
  },
  {
    thumbnail: {
      uri: "https://shopcanoeclub.com/cdn/shop/products/orslow-us-army-fatigue-pants-used-wash-regular-fit-green-used-1.jpg?v=1661536166",
      name: "cats",
    },
  },
  {
    thumbnail: {
      uri: "https://shopcanoeclub.com/cdn/shop/products/orslow-us-army-fatigue-pants-used-wash-regular-fit-green-used-1.jpg?v=1661536166",
      name: "cats",
    },
  },
];

const ItemsSlider = ({ Title }: any) => {
  return (
    <Container>
      <Typography
        component="h4"
        variant="h4"
        align="left"
        color="text.primary"
        gutterBottom
      >
        {Title}
        <Tooltip title="These products are inspired by your previous browsing history.">
          <HelpOutlineIcon fontSize="small" color="secondary" />
        </Tooltip>
      </Typography>
      <ImageList
        sx={{
          gridAutoFlow: "column",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
          gridAutoColumns: "minmax(160px, 1fr)",
        }}
      >
        {images.map((image) => (
          <ImageListItem>
            <img src={image.thumbnail.uri} />
            <ImageListItemBar title={image.thumbnail.name} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default ItemsSlider;
