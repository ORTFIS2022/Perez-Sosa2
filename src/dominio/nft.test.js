import Nft from './nft.mjs';

test('creation of a nft', () => {
  let nft = new Nft("Bored Ape", "This is an nft", "Music",110, "2023-10-10", "https://img.seadn.io/files/7eadc1724a084a0c71c90874477f9176.png?auto=format&fit=max&w=640 ");
  expect(nft.name).toBe("Bored Ape");
  expect(nft.description).toBe("This is an nft");
  expect(nft.category).toBe("Music");
  expect(nft.price).toBe(110);
  expect(nft.date).toBe("2023-10-10");
  expect(nft.file).toBe(" https://img.seadn.io/files/7eadc1724a084a0c71c90874477f9176.png?auto=format&fit=max&w=640");
  
});