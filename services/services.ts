import axios from "axios"

export const getRestaurants = async () => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', {
        headers: {
            Authorization: `Bearer uF79f0BSjm9EWOg-uIInFeEwmxkpAHmGxXHJl7RpjP6EftSPBvGGPd-qfqx-MzFral4Pd1hMQWu9b9Pbfvkf7AeYZ0dA3RMudHLG6Au3Hg4eZ953VCi5QrdJCIqSYXYx`
        },
        params: {
            location: 'New York City',
        }
    })
    .then(response => {
        console.log(response)
    
    })
}
