import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE
const RESTAURANTS_API = `${API_BASE}/restaurants`;
const REVIEWS_API = `${RESTAURANTS_API}/reviews`;

export const findSiteRestaurant = async (yelpRestaurantId) => {
  const response = await axios.get(`${RESTAURANTS_API}/yelp/${yelpRestaurantId}`);
  const restaurant = response.data;
  return restaurant;
}

export const createSiteRestaurant = async (restaurant) => {
 const response = await axios.post(RESTAURANTS_API, restaurant);
 return response.data;
}

export const updateSiteRestaurant = async (restaurant) => {
  const response = await axios
    .put(`${RESTAURANTS_API}/${restaurant._id}`, restaurant);
  return restaurant;
}

export const findReviews = async (restaurant) => {
  const response = await axios
      .get(`${REVIEWS_API}/${restaurant._id}`);
  const reviews = response.data;
  return reviews;
}

export const updateReview = async (review) => {
  const response = await axios
    .put(`${REVIEWS_API}/${review._id}`, review);
  return review;
}

export const deleteReview = async (id) => {
  const response = await axios
    .delete(`${REVIEWS_API}/${id}`);
  return response.data;
}

export const createReview = async (review) => {
  const response = await axios
    .post(REVIEWS_API, review);
  console.log("SERVICE GOT THIS FOR CREATED REVIEW: " + JSON.stringify(response));
  return response.data;
}