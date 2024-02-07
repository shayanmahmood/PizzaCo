
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAddress } from "../../services/apiGeocoding";
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}


export const fetchAdress = createAsyncThunk('user/fetchAddress', fetchAddress);

const initialState = {
  userName: '',
  status: 'idle',
  adress: '',
  position: {},
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload
    }
  },
  extraReducers: (builder) => builder
    .addCase(fetchAdress.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(fetchAdress.fulfilled, (state, action) => {
      state.status = 'idle'
      state.adress = action.payload.address
      state.position = action.payload.position
    })
    .addCase(fetchAdress.rejected, (state, action) => {
      state.status = 'error'
      state.error = 'There is some sort of problem in getting GeoLOcation, Please fill this Field! 🙏😌'
    })
})


export const { updateName } = userSlice.actions
export default userSlice.reducer
