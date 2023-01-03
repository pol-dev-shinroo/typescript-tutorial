interface Length {
  length: number;
}

const countAndDescribe = <T extends Length>(element: T): [T, number] => {
  return [element, element.length];
};

countAndDescribe(["asdf"]);
