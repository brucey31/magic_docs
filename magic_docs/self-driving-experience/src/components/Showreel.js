import PhotoAlbum from "react-photo-album";
import '../style/App.css';

const photos = [
  {
    src: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190422083359-01-tesla-autopilot-grey.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190422083359-01-tesla-autopilot-grey.jpg", width: 400, height: 300 },
    ],
  },
  {
    src: "https://i.vimeocdn.com/video/603457588-1523fad6daeb092404ae3e28f2c2bdeb7c0af087a40ef40e9464bb0cd04f13ad-d_640?f=webp",
    width: 1600,
    height: 900,
    srcSet: [
      { src: "https://i.vimeocdn.com/video/603457588-1523fad6daeb092404ae3e28f2c2bdeb7c0af087a40ef40e9464bb0cd04f13ad-d_640?f=webp", width: 800, height: 450 }
    ],
  },
  {
    src: "https://i.ytimg.com/vi/tP7VdxVY6UQ/maxresdefault.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "https://i.ytimg.com/vi/tP7VdxVY6UQ/maxresdefault.jpg", width: 800, height: 450 },
    ],
  },
  {
    src: "https://image.cnbcfm.com/api/v1/image/104670924-GettyImages-492682160-autonomous-car.jpg?v=1692983423&w=929&h=523&vtcrop=y",
    width: 1600,
    height: 900,
    srcSet: [
      { src: "https://image.cnbcfm.com/api/v1/image/104670924-GettyImages-492682160-autonomous-car.jpg?v=1692983423&w=929&h=523&vtcrop=y", width: 800, height: 450 },
    ],
  },
  {
    src: "https://s.yimg.com/ny/api/res/1.2/imA4hIJIcdOEicvFshx5Mw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MTE-/https://o.aolcdn.com/hss/storage/midas/7d95cf66029ceb45ac014e7dbcfaf1b5/203315021/tesla-autopilot.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "https://s.yimg.com/ny/api/res/1.2/imA4hIJIcdOEicvFshx5Mw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MTE-/https://o.aolcdn.com/hss/storage/midas/7d95cf66029ceb45ac014e7dbcfaf1b5/203315021/tesla-autopilot.jpg", width: 800, height: 450 },
    ],
  },
  {
    src: "https://www.tesla.com/sites/default/files/images/features/autopilot/autopilot-facebook.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "https://www.tesla.com/sites/default/files/images/features/autopilot/autopilot-facebook.jpg", width: 800, height: 450 },
    ],
  },
  {
    src: "https://i.ytimg.com/vi/S3NtFCFlxdE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPaSn0g-9rW1hsLGtzAl9Er8vsag",
    width: 1600,
    height: 900,
    srcSet: [
      { src: "https://i.ytimg.com/vi/S3NtFCFlxdE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPaSn0g-9rW1hsLGtzAl9Er8vsag", width: 800, height: 450 },
    ],
  },
];

export default function Showreel() {
  return(
    <div className="showreel">
      <PhotoAlbum layout="masonry" photos={photos} />
    </div>
  ) 
}