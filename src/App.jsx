// Components :
import ProductTable from "./components/ProductTable";

// CSS :
import "./App.css";
import { useState } from "react";
import Weather from "./components/Weather";

const nameArr = [
  { name: "osama" },
  { name: "zahid" },
  { name: "tayyab" },
  { name: "junaid" },
];

const nestedObj = {
  name1: "osama",
  name2: "junaid",
  name3: {
    key1: "key1",
    key2: "key2",
  },
};
function App() {
  // const [itemList, setItemList] = useState(nameArr)
  const [objList, setObjList] = useState(nestedObj);

  // const addItemFun = () => {
  //   const newNname = "osama";
  //   setItemList([
  //     ...itemList,
  //     { name: newNname }
  //   ])
  // }
  // const handleNestedObj = () => {
  //   const newObj = { ...objList }
  //   const nestedObj = { ...newObj.name3 };
  //   const newVal = "Ali"
  //   nestedObj.key1 = newVal;
  //   newObj.name3 = nestedObj
  //   setObjList(newObj)
  // }

  // const handleSumFun = (...numbers) => {
  //   let sum = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     sum += numbers[i]
  //   }
  //   return sum
  // }

  // let sumFun = handleSumFun(1, 2)
  // let sumFun = handleSumFun(1, 2, 3)
  // console.log("============>", sumFun)

  return <>osama branch</>;
}

export default App;
