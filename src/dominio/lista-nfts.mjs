export default class ListNfts {

    constructor() {
      this.nfts = [];
    }
  
    add(nft) {
      let nftExists = this.nfts.some(m => m.name == nft.name);
      if (!nftExists) {
        this.nfts.push(nft);
      } else {
        throw new Error(`Could not add, ${nft.name} already exists.`);
      }

    }
  
    getNfts() {
      return this.nfts;
    }
  }