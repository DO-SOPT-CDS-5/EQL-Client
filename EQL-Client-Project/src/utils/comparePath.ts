type ComparePathType = {
  pathname: string;
  itemName: string;
};

function comparePath({ pathname, itemName }: ComparePathType) {
  const lowerCaseItemName = itemName.toLowerCase(); // itemName 문자열을 소문자로 변환

  return pathname.includes(lowerCaseItemName);
}

export default comparePath;
