import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { toast } from "react-toastify";
import { storeAddress } from "../redux/AddressRedux";
import { NFTMarketplaceAddress, NFTABI } from "./constants";
// import NFTMarketplaceABI from "./abis/NFTMarketplaceABI.json";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { Buffer } from 'buffer';




// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const projectId = "2Uio7VguTWZ4W0N9cwQwRzWP67N";
const projectSecretKey = "31845da3c8eba8ca7a9ad3893ce10dfc";

const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
  "base64"
)}`;

const subdomain = "https://njan.infura-ipfs.io";
const client = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

export const connectMetamask = async (dispatch, navigate) => {

  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
        } catch (addError) {
          console.error('Error adding new chain:', addError);
          return;
        }
      } else {
        console.error('Error switching to new chain:', switchError);
        return;
      }
    }


    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected', accounts[0]);
      const address = accounts[0]
      localStorage.setItem("isConnected", "true")
      localStorage.setItem("address", address)
      dispatch(storeAddress(accounts[0]));
      toast.success("Wallet connected successfully!", {
        hideProgressBar: true,
        icon: false,
      });
      localStorage.setItem("emailLoggedIn", "false")
      navigate("/")
    } catch (connectError) {
      // Handle errors when requesting accounts
      console.error('Error connecting to wallet:', connectError);
    }
  } else {
    console.log('MetaMask is not installed!');
  }
};

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTABI,
    signerOrProvider
  );


export const connectingWithSmartContract = async () => {
  try {
    console.log("calling connecting");
    // Request account access if needed
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    // Create a Web3 provider from window.ethereum
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    // Get the signer from the provider
    const signer = provider.getSigner();
    console.log(signer);
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.error("Error connecting to the smart contract:", error);
  }
};


export const uploadToIPFS = async (file) => {
  try {
    const added = await client.add({ content: file });
    const url = `${subdomain}/ipfs/${added.path}`;
    return url;
    return {
      gatewayUrl: `${subdomain}/ipfs/${added.path}`,
      ipfsUrl: `ipfs://${added.path}`,
    };
  } catch (error) {
    console.log("Error while uploading to IPFS:", error);
    throw error;
  }
};

export const createNFT = async (name, price, image, description, royaltyPercentage) => {
  console.log("inside create nft")
  if (!name || !description || !price || !image) {
    console.log("Data is Missing");
    return; // Add this to stop the function execution
  }

  const data = JSON.stringify({ name, description, image });
  console.log(data, "data json")
  try {
    const added = await client.add(data);

    //const url = `https://infura-ipfs.io/ipfs/${added.path}`;
    const url = `ipfs://${added.path}`;
    //const url = `https://ipfs.infura.io/${added.path}`;

    console.log("this is", url);
    await createSale(url, price, royaltyPercentage);
    // router.push("/searchPage");
  } catch (error) {
    console.log("Error:", error); // Log the actual error message
  }
};


export const createSale = async (url, fromInputPrice, royalty, isReselling, id) => {
  try {
    const price = ethers.utils.parseUnits(fromInputPrice, "ether");
    // const contract = await connectingWithSmartContract();
    console.log("before contract")
    const contract = new ethers.Contract(NFTMarketplaceAddress, NFTABI, signer);
    console.log(contract)
    console.log("connectd >>>>");
    console.log("peche dalana")
    const listingPrice = await contract.getListingPrice();
    // const listingPrice = "100000000000000000000"
    //const listingPrice = await contract.getlistPrice();
    console.log("agay dalana")
    console.log(url, price, royalty)
    console.log(listingPrice, "listing price")
    const transaction = !isReselling
      ? await contract.createToken(url, price, royalty, {
        value: listingPrice.toString(),
      })
      : await contract.resellToken(id, price, {
        value: listingPrice.toString(),
      });

    await transaction.wait();

    console.log(transaction);
  } catch (error) {
    console.log("error while creating sale");
    console.log(error);
  }
};


export const fetchListedNFT = async () => {
  try {
    const contract = new ethers.Contract(NFTMarketplaceAddress, NFTABI, signer);
    console.log("before")
    const data = await contract.fetchItemsListed()
    console.log("calling contract", data)
    const items = await Promise.all(
      data.map(
        async ({ tokenId, seller, owner, price: unformattedPrice }) => {
          const tokenURI = await contract.tokenURI(tokenId);
          const tokenURIgateway = tokenURI.replace(
            "ipfs://",
            `${subdomain}/ipfs/`
          );
          const {
            data: { image, name, description },
          } = await axios.get(tokenURIgateway);

          const price = ethers.utils.formatUnits(
            unformattedPrice.toString(),
            "ether"
          );
          return {
            price,
            tokenId: tokenId.toNumber(),
            seller,
            owner,
            image: image.replace("ipfs://", `${subdomain}/ipfs/`),
            name,
            description,
            tokenURI,
          };
        }
      )
    );

    console.log("mapp data of contract", items)
    return items
  } catch (error) {
    console.log("error while fetching listed nfts");
    console.log(error);
  }
};

export const fetchMyNFT = async () => {
  try {
    const contract = new ethers.Contract(NFTMarketplaceAddress, NFTABI, signer);
    console.log("before")
    const data = await contract.fetchMyNFTs();
    console.log("calling contract", data)


    const items = await Promise.all(
      data.map(
        async ({ tokenId, seller, owner, price: unformattedPrice }) => {
          const tokenURI = await contract.tokenURI(tokenId);
          const tokenURIgateway = tokenURI.replace(
            "ipfs://",
            `${subdomain}/ipfs/`
          );
          const {
            data: { image, name, description },
          } = await axios.get(tokenURIgateway);

          const price = ethers.utils.formatUnits(
            unformattedPrice.toString(),
            "ether"
          );
          return {
            price,
            tokenId: tokenId.toNumber(),
            seller,
            owner,
            image: image.replace("ipfs://", `${subdomain}/ipfs/`),
            name,
            description,
            tokenURI,
          };
        }
      )
    );
    return items;
  } catch (error) {
    console.log("error while fetching listed nfts");
    console.log(error);
  }
};