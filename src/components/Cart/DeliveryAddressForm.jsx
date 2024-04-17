import React from 'react'
import AdressCard from '../adresscard/AdressCard'
import { Box, Button, Grid, TextField } from '@mui/material'

function DeliveryAddressForm() {
  const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget)
      console.log(data)
      const adress = {
        firstName: data.get("firstName")
      }
      console.log(adress)
  }
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={5} className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
        <div className='p-5 py-7 border-b cursor-pointer'>
          <AdressCard />
          <Button
            sx={{ mt: 2 }}
            size="large"
            type="submit"
            variant="contained"
            color="primary"
          >
            Deliverd Here
          </Button>
        </div>

      </Grid>

      <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="shipping address"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ padding: ".9rem 1.5rem" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Deliverd Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>

    </Grid>
  )
}

export default DeliveryAddressForm