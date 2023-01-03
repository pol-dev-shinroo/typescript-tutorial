const test = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return obj[key];
};

test({ name: "hs" }, "name");
