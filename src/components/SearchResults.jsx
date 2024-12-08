import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';

// Updated image database with multiple images for each section
const imageDatabase = {
  gamearea: [
    'https://www.thespruce.com/thmb/drUZH5_Ap_jDWXnmKB-erpb4X2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Valleyview103MichelleBerwick-335c7e0308414050b58f8248bc410689.jpg',
    'https://example.com/gamearea2.jpg',
    'https://example.com/gamearea3.jpg',
  ],
  walldecor: [
    'https://assets-news.housing.com/news/wp-content/uploads/2022/01/20021933/Gallery-wall-decoration-ideas-for-your-home-that-you-can-try-05-504x400.jpg',
    'https://example.com/walldecor2.jpg',
    'https://example.com/walldecor3.jpg',
  ],
  ceilinglights: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYR7FT_FIfU4w-uJEYRSqabV_HXR8-4V-tA&s',
    'https://m.media-amazon.com/images/I/51d7At4TdTL.jpg',
    'https://delightfull.eu/blog/wp-content/uploads/Best-Ideas-to-Decorate-with-Lights-Low-Ceilings-10.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgijLlwT_-TZQKxsBOU3LpjjJph8cQlLgd2g&s',
    'https://i.pinimg.com/736x/14/12/3a/14123aa1466cf863916b792af7633993.jpg',
    'https://m.media-amazon.com/images/I/71mPNXxIkfS.jpg',
  ],
  paintings: [
    'https://img.ltwebstatic.com/images3_spmp/2024/08/14/d2/1723603702e0e8aadd77a2d9edb508d7dd4dbeec99_thumbnail_720x.webp',
    'https://paperplanedesign.in/cdn/shop/files/indian-kalamkari-wall-art-canvas-painting-for-living-room-and-hotels-wall-decoration-274997.jpg?v=1715591332&width=1080',
    'https://m.media-amazon.com/images/I/61xeTMH6vXL._AC_UF350,350_QL50_.jpg',
    'https://www.nerolac.com/sites/default/files/2024-03/Types-of-3D-Wall-Design-Options-.webp',
    'https://cdn.magicdecor.in/com/2023/02/29205416/image-1686055551-125-710x488.jpg',
    'https://images.squarespace-cdn.com/content/v1/5b75be688f51301e584e476b/1598625249953-AK2F181HBYDJ5IQF6LN3/Interior+Designer+North+Wales',
  ],
  partitions: [
    'https://in.saint-gobain-glass.com/sites/in.saint-gobain-glass.com/files/inline-images/decorative%20glass_0.jpg',
    'https://www.iiistudio.in/wp-content/uploads/2020/12/1-15.jpg',
    'https://www.decorpot.com/images/163090725615-innovative-partition-designs-between-living-and-dining-rooms.jpg',
    'https://dukaan.b-cdn.net/700x700/webp/media/a322de2d-f163-46e2-a776-3bdd60b650cf.jpeg',
    'https://i.pinimg.com/736x/32/b3/8a/32b38ab530c318fe7e63ba5fe6c49779.jpg',
    'https://i.pinimg.com/736x/e5/dc/9f/e5dc9f96edb95a91b86966120ef3c6e7.jpg',
  ],
  potplants: [
    'https://m.media-amazon.com/images/I/71SXxW3RLeL._AC_UF894,1000_QL80_.jpg',
    'https://www.ikea.com/images/2d/de/2dde4e07db2922164f982fba922aae0e.jpg?f=s',
    'https://www.decorilla.com/online-decorating/wp-content/uploads/2021/07/Interior-plant-design-snake-plants-1.jpg',
    'https://imgmedia.lbb.in/media/2020/08/5f44a035f8dd9e673c04126c_1598332981077.jpg',
    'https://www.jiomart.com/images/product/original/rvcwfuzh2r/dekorly-artificial-potted-plants-8-pack-artificial-plastic-eucalyptus-plants-small-indoor-potted-houseplants-small-faux-plants-for-home-decor-bathroom-office-farmhouse-green-product-images-orvcwfuzh2r-p599928261-2-202303281830.png?im=Resize=(420,420)',
    'https://shop.arcedior.com/cdn/shop/articles/Artificial_Japanese_Camellia_Tree_-_6_Feet.webp?v=1708515270&width=1200',
  ],
  homebar: [
    'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/10/7/0/RX_HGMAG084_Nooks-01.jpg.rend.hgtvcom.1280.1280.suffix/1602082217926.jpeg',
    'https://media.designcafe.com/wp-content/uploads/2020/03/21012203/corner-home-mini-bar-designs.jpg',
    'https://interiordesign.net/wp-content/uploads/2023/09/Interior-Design-The-Whistling-Well-Manhattan-Apartment-Design-20230403_Milena-Bica-Shabata_411-East-53rd-Street-12-Edit-1024x683.jpg',
    'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/11/28162204/80s-bar-counter-design.jpg',
    'https://images.squarespace-cdn.com/content/v1/55bebb51e4b036c52ebe8c45/1558297871138-3N196GVZ1HYRTZR9VW7D/modern+home+bar',
    'https://st.hzcdn.com/simgs/00a1d02b09259341_14-0648/home-design.jpg',
  ],
  childsbedroom: [
    'https://i.pinimg.com/564x/21/a8/5c/21a85cf6a362aeda600f07ce7e41f939.jpg',
    'https://www.decorpot.com/images/184430647top-10-kids-bedroom-interior-design-ideas-for-home-2023-2024.jpg',
    'https://media.designcafe.com/wp-content/uploads/2020/05/17174742/childrens-bedroom-with-bunk-bed-and-seating-area.jpg',
    'https://media.designcafe.com/wp-content/uploads/2020/10/20140431/kids-bedroom-design-for-small-homes.jpg',
    'https://goodhomes.wwmindia.com/content/2021/jun/childrendecor111623957768.jpg',
    'https://thumbs.dreamstime.com/b/girl-s-room-child-bedroom-kids-toys-real-estate-renovation-company-home-staging-daylight-pink-walls-colorful-little-bed-desk-271421702.jpg',
  ],
  tvsection: [
    'https://t4.ftcdn.net/jpg/07/24/38/49/360_F_724384928_57xom77fBBLBQKzp8jzhuAv8Qo12GB4i.jpg',
    'https://rojor.in/residential-interios/image/tv-unit-interior-design/tv-unit-interior-design-hd-image-rojor-interior-salem.webp',
    'https://media.licdn.com/dms/image/v2/D5612AQFCtxIgkx6Plg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1700630276115?e=2147483647&v=beta&t=ZSVSzK4ckVzP9e2QwkOj_gucK9Qtg19zZtaqkMRHels',
    'https://i.pinimg.com/originals/54/d7/b8/54d7b8358342ac89507b95ea408f3ef8.jpg',
    'https://dlifeinteriors.com/wp-content/uploads/2020/09/home-interiors-Bangalore.jpg',
    'https://i.pinimg.com/736x/13/b2/fa/13b2fa91d19a5283b067c82a3df73fb0.jpg',
  ],
  sandalsrack: [
    'https://s.alicdn.com/@sc04/kf/H41c6996487b84b248a6cbf98b003b2374.jpg_720x720q50.jpg',
    'https://shop.gkwretail.com/cdn/shop/products/ShoeRackEntryway40PairShoeStorageCabinet.jpg?v=1633155570',
    'https://images.woodenstreet.de/image/cache/data%2Fshoe-rack%2Faugur-shoe-rack-revised%2Fhoney%2Fupdated%2Fnew-logo%2F1-750x650.jpg',
    'https://www.decorpot.com/images/blogimage854131258shoe-rack-with-a-bench.jpg',
    'https://s.alicdn.com/@sc04/kf/H460c1a0f2b844709b17db126520effe8k.jpg_300x300.jpg',
    'https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2023/06/Built-in-shoe-cabinet-underneath-the-stairs_Pinterest-Curbly.jpg',
  ],
};

const SearchResults = () => {
  const location = useLocation();
  const [filteredImages, setFilteredImages] = useState([]);

  // Get query from URL
  const query = new URLSearchParams(location.search).get('query')?.toLowerCase() || '';

  useEffect(() => {
    // Filter images based on query
    const results = Object.keys(imageDatabase)
      .filter((key) => key.toLowerCase().includes(query))
      .map((key) => ({ name: key, urls: imageDatabase[key] }));

    setFilteredImages(results);
  }, [query]);

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Search Results for "{query}":
      </Typography>

      {filteredImages.length > 0 ? (
        <Grid container spacing={2}>
          {filteredImages.map((section) => (
            <React.Fragment key={section.name}>
              {section.urls.map((url, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <img
                    src={url}
                    alt={`${section.name}-${index}`}
                    style={{ width: '100%', height: '350px',  objectFit: 'cover',  borderRadius: '8px' }}
                  />
                  <Typography variant="subtitle1" align="center">
                    {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                  </Typography>
                </Grid>
              ))}
            </React.Fragment>
          ))}
        </Grid>
      ) : (
        <Typography>No results found for "{query}".</Typography>
      )}
    </Box>
  );
};

export default SearchResults;
