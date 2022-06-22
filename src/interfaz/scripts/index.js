import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import ListNfts from '../../dominio/lista-nfts.mjs';
import Nft from '../../dominio/nft.mjs';


const listNfts = new ListNfts();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});


const textFieldName = new MDCTextField(document.getElementById('name'));
const textFieldDescription = new MDCTextField(document.getElementById('description'));
const selectCategory = new MDCSelect(document.querySelector('.mdc-select'));
const textFieldPrice = new MDCTextField(document.getElementById('price'));
const textFieldDate = new MDCTextField(document.getElementById('date'));
const textFieldFile = new MDCTextField(document.getElementById('file'));


const addButton = new MDCRipple(document.getElementById('addButton'));

 addButton.listen('click', () => {
   let name = textFieldName.value;
   let description = textFieldDescription.value;
   let category = selectCategory.value;
   let price = textFieldPrice.value;
   let date = new Date(textFieldDate.value);
   let file = textFieldFile.value;
   try {
      let newNft = new Nft(name, description, category, price, date, file);
      listNfts.add(newNft);
      var image_list = document.getElementById("image-list");
       var el = document.createElement("p1");
       el.className ="card";
       el.id = "name";
       el.style.backgroundImage = "url('"+file+"')";
       el.innerHTML = name + " | ETH: " + price;
       
       image_list.append(el);
   } catch (error) {
     const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
     snackbar.labelText = error.message;
     snackbar.open();
   } finally {
     let nfts = listNfts.getNfts();
     console.log(nfts);
   }
  }
)

