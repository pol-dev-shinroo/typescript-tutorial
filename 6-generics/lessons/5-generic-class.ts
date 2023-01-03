class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("1");
textStorage.addItem("2");
textStorage.removeItem("2");
const res = textStorage.getItems();
console.log(res);

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "max" });
// objStorage.addItem({ name: "paul" });
// objStorage.removeItem({ name: "paul" }); // this does not work (splice)
// const resObj = objStorage.getItems();
// console.log(resObj);
