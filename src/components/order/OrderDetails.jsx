import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from "@mui/material/colors";
import AdressCard from "../adresscard/AdressCard";
import OrderTracker from "./OrderTracker";

const OrderDetails = () => {
 
  return (
    <>
     <div className=" px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AdressCard />
        </Grid>
      </Grid>
      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTracker
              activeStep={3}
            />
          </Grid>
         
        </Grid>
      </Box>

    

      <Grid container className="space-y-5">
        {[1,1,1,1].map((item) =>  <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUQExAVFRUXFRUVFRUVFRUVFRUVFxUWFhUVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICYtKy0vLTAvLS0tLy4tLS4vMC0tNy8tKy0uLS0tKy0rMC0tLS0tKy0tLS0tLS0tKy0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAACAQIDBAcFBQUGBQUAAAABAgADEQQhMQUSQWEGEyJRcYGRBzJyobFCUsHR8BRikrLhIyQzc4LxQ6KzwtIXJURUY//EABoBAAIDAQEAAAAAAAAAAAAAAAADAQIEBQb/xAAwEQACAgEDAQQKAQUAAAAAAAAAAQIRAwQSITFBYXGRBRMiMjNRUoGx8BQVQsHR4f/aAAwDAQACEQMRAD8A9EixYRI0SLCLAgSEWFoAJaEdCACWhaLCACQtFhABLQiwgAloRYsAGwtFiwAbaFo6FoAJaFosIAJFiwgBHFhCABFiRYEBCEIAEIsIAJCRYzFJSptVqMFRFLMx0AE8X6U9N6+LYqjNSoZgIpszjvqMNfhGQ56yUrCz03a3TTA4d+rqYgFh7wRWqbvxbgNjy15Szh+lGBdd9cbQsLXvUVSL5C4Ygi/OfPxAt+Er1O/XMS20iz6gBhPE+h3tAq4R1oV2NTDCyDK70VAAUoRmygfZPDTSx9pw9daiLURgysAyspuGUi4IPESrVE2SQhFkAJCEWACRYQgAQhCABCEWADIQhAAiwhAAhCLABIQhJA8r9se2m36WCVuzuitUH3iWIpg8husbd5U8J5uHnW+0/BH9uqYhW6ymwTMG+4VRVKj90W9SZxwl49CGDE6/KNY5Wjt6ROeUkgSu9z5Cen+xXpCSX2e+YAarRP3e0OsTwJbeH+rlPLHnUeydWO16Fr5CsW+Hqagz5XK/KQ+gH0HCEIssEIQkkBCEJBIQiwgAkWEIAMiwhAAixIskgIQhAAmP0trsmCrMrFTuhd4aqHZVZh4BiZsSvjqC1Kb0391lYNyBGvlrBkrqeO7NNRxujDKioSN2zADgGN/efPM3z7jrM3pJsVVQ1aY3Tcb1tM8r24ZkTexChHBWpv71Jahtfsbw3RTJ7xufMSPH1N+iwte4INvC0VFtM0ySkjz4oeIvzEjYAcSPG8tMLZHUSNppMhTczsPY9UC7TDswVRRqXLEAZ2ABJyH9JydRB3Tt+iyUaey6tRayisajqKQsXZiAqKL53PZsOcrOVItCO5ns+N2lSpW6yoFvoLFiR32UE25yiOk2H4lx4oTcd+V8vnOOw6WagFyDU95dDYjdAuTrqZUxOM3Vvu577KTYahyuQHhaZ3kNCwo9So1VZQykFSLgjQiPnM7DxvVBFYWpvbjfcY8T43ztkPUnpoyEtysTODi6CEISxUWEISACEIQAbCEWSAQhFgQJCLCACTM6R4nq8LVbvQqPF+z+N/KJtLb1Ggd1iWbiqAEjxuQB4azh+km3Xr3F7UwQVSwysCN4nUk3PIfONeDJ6tzrgpHNjeRQvkww9ryGnXK3HjIazkMO45eB4RN3je3ffhMdG8yNo4YElgbfQzOrYd1IBU55C2d/C06F6lBXV95agU33SWCkgcpn4jaVOsy2O6Ua4Rzdtd7UaiNg5LihU4wfNlTB7FxNYFqWGrVADYlKbMAbXsbDW0p47Z9aiwFSjVpP7y76PTawOTDeAOo1nT4LblegN2hXqU0swCg3Fibk2OW9+9a8jfaNSqQ1Wq7kaF3ZyO+xY5TpLRTa6qzmPVwvo6NbYmPr18MtcKLUd7eIsBp2ha99MwPCSYinUDhnuFqHeVd3jkb8haxz4jnM7B7oLHg3vBeyDpmRxOU6LY+AFfNMRSRlFlWs7Bv3QBa274E27pz8mjzQtuP+To49ZhlSUjdxTqMMFJHuy30L6S9fehUa9RfcY61FH1YfMZ8DOAx5xNKp1GIUowFwDmrD7ykZMv6yhQYowqIxDCxBGoYaGZ4JxY6dTR7WDFmP0d20uJpb2QqLYVF7j94funh6TXEeZWqFhCEkgWESLABIQhABYQlXaWPShTNRzlcAAasToB+uEmMXJ0iJSUVbLFWoFBZiABmSTYDxM4rbvSVqhKUiUTQtoz/+I+f0lLbe2XxDZ9lB7qD6seJ+kyjO1pdCoe1k5fy+Rx9VrXP2YdPyNN+Hof1lIKj94I+nrJy4jGqCdI56MzGU7gzPqMSu6TmMjzGn0m3U3fuiU8ZQuL2tOfn9H4ppuKpnRwekMsGlJ2jFZ0XIoTwysR4EHUSnXpUy+8qAG98ss/C9pcrYZjI0wpEz4dFsdy5NWbW71UeCPej6RkgoRwp2m1RZhckLTciWqdcysFkirGxsXJI3aW1d+gMLV3SgLNTexNSix4qb5pnmvEE6ZWhwTCxB1GR4+nKZijM+FvxP4STC1rNexseM5vpDSKUXkguV17zpej9U4y9XJ8Pp3G7gMW9GoKlNrMPQjipHET0jYW26eJXLsuB2k/7l71+nGeYDS8koYlqbB0Yqym4I4GcSMjsThZ7DFmP0d20uJp3yDrbfX6MOR/pNaNMzVDoRIQIFixIskAnB9LdodZXKA9in2R3b32j43y8p1u3caaOHeoPetZfiY2B8r38p5hVq5zq+jcNt5H4I5npHLSWNeLJGeMLSJG4xZ2Dk0OjWEH0PgZV2dh9xATckjU5mVbdpUWSVWPq4mmuTOo5Xz9I1aqvmpDDkRMDBV7l2JCsxOdgXU6/ayC5Eeklp4kLiL0wSGtcAa/eNhmOBmOOrum+lmx6SrS6mvVpch9Zj4nGKCwAZrXuVW6gjW55ToLX/ANplVurQEXFrsSN7vu2S8c2PCPzNpcOhOGm+VZGtHsi+Z4nv5yOouclp4pD2RcZ2APEW1isJaLTXAO0+SEJJVSS0qck3ZdIo2QUqd7+P0/rJKi8OPd+J7hEoNYE8d4gDvNzJW7hmTqTp+uUK4C+SfA1LraOcyop3WHP1Jz/Iyas3GeU1eD1OVx7Ow9Vpc3rsSl29pc2PtNsPWWqvD3h95Tqp/XdPW8LiFqItRTdWAYHkfxnh7VZ3/s62tvK2GY6XdPD7S/j5mUiwyI7aLEhLCR8IQkgct0/xNqNOnfNnLeSgj6sJ59UqTo+nOM38UVGlNQnn7zfM28py2IPZM9FpIbMMfPzODqp78z8vItUD2Y4GJRHZgJqMpIIiaDwES8hapui5YKB38vGQ3RKVmHtjBLTcPclWJJHG+pAPdnJE2qFUhFFwBYWyNrbxy9fKXcZiaJH9oSbWOam2d7G1rd8aWorcb1MXAK5KL3vkflOe8e2bcJJI6CyboJTi2VMbtA1kIW6gNmb+8LgD66TJxrG6kaZA8rcJfxjIXVUICsVuVsBfW30me1jcHlfziMtybt/fwH4qiuF+siFa9S4Ph4zo6LbwB7xOa3snW2oyy0IbS3qJ0exKZ6oX5x2ik9zXz5FayKUU/sXkSI4k4WQ1Z0zmmVXquhHYYXF1JBAIOpUnXxktBGObPYdwntXRugv7Dh1IBHU0zYi4zUE5ecWv0dwb+9haWepCBSfNbTk/1BKTUkdT+E3FOLPFNo5U2Km7CzLbMDczA53zHnFpYq4B756Ptr2e0nu2Hc0j9xrtTPn7y/PwnK7M9n2Mas9OpalSW9qlw9z9kIAbkeNrD0mbWyx50pxfK7O01aJTwXCS4fac9UeavRDEFcZRANr1UHkWAI8wTLtfoDjg26BTcfeFQAW5hgD8jOk6JdB2oVVr13UsuaIlyAe9mIF7dwHnOclRvlJM7gQigQlhI6MrVQis7aKCx8ALn6R8wummL6vCMoOdQhB4at8gR5xuKG+aj8ymWeyDl8jzfGVy7s51Zix8Sbn6ylXN1MlqmV6hnpzzqL9F7op5D6QvGYb/AA1+EfSOMkqOvM9sGhYsxvcnJiLCzE5CaAlWsKIPb3L30OeZ5ReRJrmvuMxtp8X9imuJVXINggsoNiWPcchp5xuMxtO9i9hnlfX/AEmaP7RSVQyjI3A3V7r3+h9JnYza1Lmf9PIHj8QmeXEeZL9+4+PL4i/37GXWoXuVFl1uunjK9AnrDfuymrRxRqFl3LLumxvnwFrW5yj1RZ1QGxa+fHIGZcsEqcTVjm3akJTw6lhT4tlzt3zqMLRCqFGgynMbEp3qhjre3O/GdcgmrQpOLlRm1rako2I0rVZYqGV6mk2mJHrnRVr4HD/5SD0FvwmoZi9C2vgKHwsPR2H4TanlsyrJJd7/ACelxO4R8ENtEtHxIsuN3YWjoSAEtCLCACTgvaBjL1VpDRFufie34AfxTvJwfSPotiXqvVUrUDEtqEcdwsciALDXhN2gcI5d03XyMmtU5Y6irOKqNnoZXxDeMecSha3Wpf7pIv8AOVMSw4W/XGdvcmrTOQoNOmjaoe4vwj6RbRtMdkeA+kWMFDxMjaJQVbG9/wCzyAGebrqfiHDhNdZSxuzOsffvawW3iCSb+sRqIylH2UOwSjGXtMqLunC34KWy3gTYkq29lkbMTbwmGlUPu9m+e7mS32QTkLd1vnOlrYa1FqROR3hcC1t4k9/C8z8JsxF4n3t7ztu28PzmeeCb2+Cs0wzQW597oNlMSeGdFWyAGZLXMj2X2qwPBVOfM2E1DglRGKL2gjBcyTobDPnM/o9nc55C3LXh6Q2NThGXeyN6cJyj3Ibs8WxLKB/xG4eM6OYNGnbGHLVv+ze/P5TdYx+lVKS72J1XLi+5EVSRPHuZG00mdHqXQI/+30vGr/1Xm/Oc9nzXwCcnqD/nJ/GdHPMan40/F/k9Fg+FHwQRIsSJGhCEIAEIsSADIhiXiMZIHznt7ZJNZlHAn6zJp7PZWsfET0fpTgurxtQWyLbw8H7QHztMHHYbO9uA+pit7XBpUU1ZrxINEE9gePJUhWqqguzADmbeUFitDwI8TJx+0qQH+IvgMz6ayHC4moT2aDHmx3B498nxHafSaFGnYRW2cn18l/ux26MV08/+UVC1e+lMDxZvLQSvgcJUQtbcG8b3sTY/CPzmowtBRJeJNptshZWk0kirTwbdb1pcaaBbX4d8tVDH3kLmXjBR6FJScupG5iNEGZi1JYg9J9nLf3Lwq1B/KfxnUXnI+zRv7o4//dv+nTnWzzWq+NLxPQ6b4UfAWJCJM44WEIQAIQhACG8QwhaBJwvtFwlmp1wNRuN4g3HyJ/hnGYw3Qn9W/V/lPXNvbNGIoPS4kXU9zDT8vMzyNkYHdYEWJDDQg3y/LlFyXNj8cvZotEwWAQnST06Np7A8fY0CMxD2UmWWIEytoYjfIUQbJirY3A07ktNE5SCglgBJYIG7Y2OgBCSQD6SsxklVpHAlCrG1THRj+EAPRfZoP7o/+e/8lOdZOQ9nT2wjf5z/AMlOdT1pnm9Un66Xieg03wo+BNCQ9byi9bymamPsliSPreUXrOUKYD7xZH1kIUyQiwtFtABrTzr2gbHCVBiVXsubPlo/A+dvUHvnotQZTO2pglrUnotowt4HUN4g2PlBxtExltZ5pTtaLWqhRcxALSsy77chPWdh5WlZWqPUqaKQO85SbDYILmcz3yzuwMKJvsQu7GsRI2aMIvJIFapGs5i7sN2BIy0SOIhuwAjLRN4Wku6ZG9DiNYEnc+znEA4eonFapYjkyrY/8rek6y8836D4vq8VuEW6xSp7iR2lPyI/1T0QGcHWw25X38nb0c92Jd3BJeLeR3jhMhqHxRGiOEAFhCEAJ7QtHWhaUJI6ukxukmJNPDOw1ICDlvZE+l5tVtJynTuqRRppb3nJv3bq5Dz3vlNOlhuyxXeI1MtuKT7jiyMoAWFozfN4pb9Zz0Z50UxpSISe8fP8owq33h6QJJNwRDaRGkfv+g/rG/s68STACQsO8RhcQCJe1rnuFyfQS9htl1X9zDseZFh85SeWEPeaQyGKc/dTZn7/AHAnwi3b7s6BOjGKI91By3/6SzhuhtdvfqU08yx9AB9Yn+Zg+ob/ABc30nLDe5D9co4E8beQneYfoNR+3iXPwKqfzb01MN0TwC602c97ux+S2HyipekcK6W/3voZH0fmfWkeZ4bE9XUSp911bxsQbec9Jw20kqKHXNWFwZq09m4VB2KNFfBFv5m1zM7HU1DdnS3DTLgMpztVqo52qVUdDTaaWFO3ZIuJHcflJFrrzlFZIsyGouiqseKg75UWPEkC0HHfCQCEANFDHWkSsBxk8q0SQ19POZ+0diri6ZplipBDKwzIbTTiLEzQxOnnLOzh2SectGTjyupWUVJU+hyC+z0faxZ8qIHz35J/6fUf/sVPIIPwM7VjKtYjj9I963P9X4ErR4fp/JyR6A0B/wDIqeiflJF6D4Ua1Kp57yj6LN+riVXRT6Sq71qnurujvMo9Zm+pllpMK/tRjVehuDXWpU/iX8pRqbBwS5AO5/ecy1tfF0qPZZzVqnRFP17pTwTlrsbDO1hoPCLeoyydOT82MWDHFWoryRe2fsyjT3CtMAlKt+PEd/hBduGjbep3XvGdvESwlTcFNrXyfLzIlHEqera2oF89DbO0W1fJdM3sDt+hU+7f0PoZqIKTaZTiMPs2nVUMuV+HceIlmnsyvT9yqRy1HpKqTL0jsv2UcN2MNEj7s5yji8Yn2Uf1Bl6ltqpo+FY/CVb6kSdyIo1dxv8Aa0o4+gWFrm+ouePgYDaVI606yH4HI9RcSQVEPuufPfHyItJsijEWSLJcbSs1xofrIll0UJFkgkayRYAPEICEAHzSmaZpQZKIcVoPGXcOLIBylLEEZXIAvmSbADjcmW6WLRvdqI3wspkAPZpE6HUkKO86/P8AKOqMf1l9JnYmgje9duRYkemUqWI8VtnDUrgE1GHdn/QTAxu1cXijuUh1acW0y8fymx+z0hqvgLAD0W8p4zGmxCgADgOPjKssjn6uASj2Qd6ofeY8L93OX8FSsgEYuHObHUn6S7h1yhBckTfAgWSKkeFjgI0WUNnDcYgjK+fI6Xm5TqsOYlBaYBJ75Zouo4mL2tDLRdWoT9nz0+slQ8/19Jzu2eldDCkB1qMxF1Cre/fZmIXyvlcTDxHT6q3+FQVO5qhLn+FbAfxGQ3RKi30PQwZlbT2/h6OT1QWH2F7bX5ge752nnOM25iK2VSsxH3R2U8N1bAjxvKJNxaU3jFi+Z1lbpr1lVUFILTJ7RY3e3flktvOdAJ5JXNmnovRfH9dh1N817J8tD6W9DGQYvJGuhtLJFkSyRYwUSCLEEIAPM0rzNM0S0hkoxOmNfdwlQ99l/iIB+V55tRUHUD0E7f2i1bYVOdUX/gecNhnuImfLNGL3S7U2pUpDsVqi8ldgPQG0hXprjU/4yv8A5lNT813T85lY6qZls0rbsZSo7LC9OcRUdaf7NTZmIUFWZRcm2hDWE7FhOI9nuzd6q+IYZUxur8bDM+S/zCdzUEdFccmWbp8EbNJaIykVpYpLlL0UsUCLaPAhaAEZEZJSI0iAFLaezqeIpmnUGWoI1VuDKe//AGnnWPwT4eoaVTxVhoy8GH5cJ6haZ23tlLiKRTIOM6bdzd3gdD/SVnG0XhPazz0PE67O0icEEqwsQSGB1BGREhd+MzVRsTLGK75tdB8cErmkTYVBYfGM1+RI8xOeqVxuyCjUIO9wBuDoQe8H0jIsVNXwe0LJFMyOju0v2igtQ+97r/EOPnkfOaqmPMpMIRoMIASy8YQkMlHFe01j1VEcN9j5gC31M4jZ57JP60hCKfUfDoUtonOUUhCV7Rj6HqnQmmBgaZA1NQnmesYX9AB5TVqQhHroZH1GLLSaQhJIHQhCACGMMIQAbCEIAefdN6QXF3AtvU1ZubXZb+ij0nP1BlEhET6mqHulCtLIP9l5whJRDO79nJ/savxr/LOwWEI1dDPLqLeLCEkg/9k="
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">title</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: S</span>
                  </p>
                  <p>Seller: Samsung</p>
                  <p>₹3232 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid> )}
         
      </Grid>

     
    </div>
    </>
   
  );
};
// sx={{width:"10px",height:"10px"}}
export default OrderDetails;
