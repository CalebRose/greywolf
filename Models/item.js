class Item {
  constructor(data) {
    //
    this.Id = data.Id || Math.floor(Math.random() * 999999);
    this.Name = data.Name || '';
    this.ItemType = data.ItemType || '';
    this.Description = data.Description || '';
    this.Modifier = data.Modifier || '';
    this.ModifierValue = data.ModifierValue || 0;
    this.SellValue = data.SellValue || 0;
    this.IsUsable = data.IsUsable || false;
  }
}

class Book extends Item {
  constructor(data) {
    this.ReadCount = data.ReadCount || 0;
    this.CurrentReadCount = data.CurrentReadCount || 0;
  }
}

module.exports = {
  Item: Item,
  Book: Book,
};
