import { request } from "./apiHandler"

export const base_url = "http://localhost:8000/api";

export const API = {

    // User API's

    login: (body) => request.post(base_url + "/user/sign-in", body),
    loginWithEmail: (body) => request.post(base_url + "/user/sign-in-with-email", body),
    registerWithEmail: (body) => request.post(base_url + "/user/sign-up-with-email", body),


    // Bidding

    getAllBiddings: () => request.get(base_url + "/bidding/get-all-biddings"),
    getBiddingById: (id) => request.get(base_url + `/bidding/get-bidding-by-id/${id}`),

    //Bid

    bidOnNFT: (body) => request.post(base_url + "/bidder/bid-on-nft", body),
    getAllBidders: (id) => request.get(base_url + `/bidder/get-all-bidders/${id}`),


    //KYC
    uploadKycDocs: (body) => request.post(base_url + "/kyc/upload-kyc", body)



};
