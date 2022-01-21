import axios from "axios";
// const key = 563492ad6f917000010000016adc2198492d40ff89bb4f6b3c167675

export const api = axios.create({
  baseURL: "https://api.pexels.com/v1/search?query=",
  headers: {
    Authorization: '563492ad6f917000010000016adc2198492d40ff89bb4f6b3c1676751'
  },
})