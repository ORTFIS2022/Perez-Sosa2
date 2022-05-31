export default class ListaNfts {

    constructor() {
      this.nfts = [];
    }
  
    agregar(nft) {
      let nftExiste = this.nfts.some(m => m.nombre == nft.nombre);
      if (!nftExiste) {
        this.nfts.push(nft);
      } else {
        throw new Error(`No se pudo agregar. ${nft.titulo} ya existe.`);
      }
    }
  
    getNfts() {
      return this.nfts;
    }
  }