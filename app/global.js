import { createSlice } from '@reduxjs/toolkit'

export const global = createSlice({
  name: 'global',
  initialState: {
    username: '',
    email: '',
    address: null,
    device: null,
    deviceGroupName: '',
    pool: '',
    wallet: null,
    address: null,
    networks: null,
    passcode: '',
  },
  reducers: {
    setUsername: (state, action) => {
        state.username = action.payload
    },
    setEmail: (state, action) => {
        state.email = action.payload
    },
    setAddress: (state, action) => {
      state.address = action.payload
    },
    setDevice: (state, action) => {
      state.device = action.payload
    },
    setPool: (state, action) => {
      state.pool = action.payload
    },
    setDeviceGroupName: (state, action) => {
      state.deviceGroupName = action.payload
    },
    setWallet: (state, action) => {
      state.wallet = action.payload
    },
    setNetworks: (state, action) => {
      state.networks = action.payload
    },
    setPasscode: (state, action) => {
      state.passcode = action.payload
    },
  }
})

export const {
    setUsername,
    setEmail,
    setAddress,
    setDevice, 
    setPool,
    setDeviceGroupName,
    setWallet,
    setNetworks,
    setPasscode,
} = global.actions

export default global.reducer