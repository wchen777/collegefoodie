import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PvVqmaOXhuj77p32_vuu8L3GjAwE1W-oZ6mSp1sQT6-wD3zcCdyG-etIrSAVPcLUuP-QNSY8KDpMbMard11-YRQopqQSuTIIMyeliebLbI7xXI7w0nF9dJYBVZ3WXnYx'
    }
});

